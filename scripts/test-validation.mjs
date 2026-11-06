import { strict as assert } from 'node:assert';
import { mkdtempSync, mkdirSync, cpSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync, spawnSync } from 'node:child_process';
import { scanPublicText } from './lib/publication.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const publicRepo = 'emilkowalski/skills';
const github = 'https://' + 'github.com/';
const revision = 'a'.repeat(40);
const credential = 'gh' + 'p_' + '0'.repeat(36);
const scan = (text) => scanPublicText(text, [publicRepo]);
assert.equal(scan(github + publicRepo + '/blob/' + revision + '/SKILL.md').length, 0);
assert.equal(scan(JSON.stringify({ url: github + publicRepo })).length, 0);
assert.equal(scan('Home/End; color #303136; public branches may have names.').length, 0);
assert(scan(revision).some((result) => result.category === 'unclassified revision'));
assert(scan(github + 'unreviewed/example/blob/' + revision + '/notes.md').some((result) => result.category === 'unreviewed GitHub source URL'));
const credentialResults = scan(github + publicRepo + '/blob/main/' + credential);
assert(credentialResults.some((result) => result.category === 'GitHub credential'));
assert(!JSON.stringify(credentialResults).includes(credential));
console.log('OK: public citations and JSON URLs accepted; unknown sources/revisions/credentials rejected without value disclosure.');

// Isolated copies remain under ignored tmp/ for inspecting a failed run.
const tempParent = resolve(root, 'tmp');
mkdirSync(tempParent, { recursive: true });
const fixture = mkdtempSync(resolve(tempParent, 'skill-validation-'));
const paths = execFileSync('git', ['ls-files', '-z', '--cached', '--others', '--exclude-standard'],
  { cwd: root, encoding: 'utf8', windowsHide: true }).split('\0').filter(Boolean);
for (const path of paths) {
  mkdirSync(dirname(resolve(fixture, path)), { recursive: true });
  cpSync(resolve(root, path), resolve(fixture, path));
}
execFileSync('git', ['init', '--quiet'], { cwd: fixture, windowsHide: true });
const run = (extra = []) => spawnSync(process.execPath, ['scripts/validate.mjs', ...extra],
  { cwd: fixture, encoding: 'utf8', windowsHide: true });
let result = run();
assert.equal(result.status, 0, result.stderr);
const installed = resolve(fixture, 'tmp/installed-skills');
cpSync(resolve(fixture, '.agents/skills'), installed, { recursive: true });
result = run(['--skills-root', 'tmp/installed-skills']);
assert.equal(result.status, 0, result.stderr);
const dependency = resolve(installed, '_shared/principles.md');
const savedDependency = readFileSync(dependency, 'utf8');
rmSync(dependency);
result = run(['--skills-root', 'tmp/installed-skills']);
assert.notEqual(result.status, 0, 'Broken shared dependency must fail');
assert(result.stderr.includes('missing target'));
writeFileSync(dependency, savedDependency);

const entry = resolve(fixture, '.agents/skills/metovia-landing/SKILL.md');
const savedEntry = readFileSync(entry, 'utf8');
writeFileSync(entry, savedEntry.replace('name: metovia-landing', 'name: invalid-skill'));
result = run();
assert.notEqual(result.status, 0, 'Invalid skill metadata must fail');
assert(result.stderr.includes('metadata name'));
writeFileSync(entry, savedEntry);

const ignore = resolve(fixture, '.gitignore');
const savedIgnore = readFileSync(ignore, 'utf8');
writeFileSync(ignore, savedIgnore + '\n/.agents/\n');
result = run();
assert.notEqual(result.status, 0, 'Ignoring skills must fail');
assert(result.stderr.includes('Important project file ignored'));
writeFileSync(ignore, savedIgnore);
console.log('OK: copied four-skill bundle works; missing dependency, invalid entrypoint and overbroad ignore rejected.');
