import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, relative, sep, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync, spawnSync } from 'node:child_process';

// Read-only validation. No package dependencies, network requests or Git writes.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const skillRoot = resolve(root, '.agents/skills/metovia-design');
const args = process.argv.slice(2);
if (args.length) {
  console.error('Usage: node scripts/validate.mjs');
  process.exit(1);
}
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const read = (path) => readFileSync(path, 'utf8').replace(/\r\n/g, '\n');
const inside = (parent, target) => {
  const rel = relative(parent, target);
  return rel === '' || (!rel.startsWith(`..${sep}`) && rel !== '..' && !isAbsolute(rel));
};
const walk = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = resolve(directory, entry.name);
  return entry.isDirectory() ? walk(path) : [path];
});
const slug = (text) => text.toLowerCase().replace(/[`*_]/g, '')
  .replace(/[^\p{L}\p{N}\s-]/gu, '').replace(/\s/g, '-');

try {
  const skill = read(resolve(skillRoot, 'SKILL.md'));
  const front = skill.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  check(front, 'SKILL.md: missing YAML frontmatter');
  if (front) {
    // This package deliberately uses two plain, single-line YAML scalars.
    const rows = front[1].split(/\r?\n/);
    check(rows.length === 2, 'SKILL.md: expected name and description only');
    const name = rows.find((row) => row.startsWith('name: '))?.slice(6);
    const description = rows.find((row) => row.startsWith('description: '))?.slice(13);
    check(name === 'metovia-design' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name) && name.length <= 64,
      'SKILL.md: invalid skill name');
    check(description && description.length <= 1024 && !/[<>\r\n]|:\s|\s#/.test(description),
      'SKILL.md: invalid single-line description');
    check(!skill.includes('[TODO:'), 'SKILL.md: unfinished scaffold');
  }

  const markdown = [resolve(root, 'README.md'), resolve(root, 'AGENTS.md'),
    ...walk(resolve(root, 'docs')), ...walk(skillRoot)].filter((path) => path.endsWith('.md'));
  let links = 0;
  for (const path of markdown) {
    const content = read(path);
    check(!content.includes('\uFFFD'), `${relative(root, path)}: invalid UTF-8 text`);
    const prose = content.replace(/^```[^\n]*\n[\s\S]*?^```\s*$/gm, '');
    for (const match of prose.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
      const href = match[1];
      if (/^https?:\/\//.test(href)) continue;
      const [file, anchor] = href.split('#');
      const target = resolve(dirname(path), decodeURIComponent(file));
      links++;
      check(inside(root, target), `${relative(root, path)}: link outside repository: ${href}`);
      if (inside(skillRoot, path)) {
        check(inside(skillRoot, target), `${relative(root, path)}: nonportable skill link: ${href}`);
      }
      check(existsSync(target), `${relative(root, path)}: missing link target: ${href}`);
      if (anchor && existsSync(target)) {
        const headings = [...read(target).matchAll(/^#{1,6}\s+(.+)$/gm)].map((hit) => slug(hit[1]));
        check(headings.includes(anchor), `${relative(root, path)}: missing anchor: ${href}`);
      }
    }
  }

  const index = JSON.parse(read(resolve(skillRoot, 'references/reference-index.json')));
  check(index.schemaVersion === 2 && index.bundleVersion === '0.1.1', 'Unexpected reference schema/version');
  check(typeof index.sourceLabel === 'string' && index.sourceLabel.length > 0, 'Missing neutral source label');
  const catalog = read(resolve(skillRoot, 'references/sources.md'));
  const ids = new Set();
  for (const source of index.references) {
    check(/^S\d{2}$/.test(source.id) && !ids.has(source.id), 'Duplicate/invalid reference ID');
    ids.add(source.id);
    check(catalog.includes('## ' + source.id + '\n') && catalog.includes(source.topic),
      source.id + ': missing topic entry');
    if (source.identifier) {
      check(!/[\\/]/.test(source.identifier), source.id + ': expected an identifier, not a product path');
      check(catalog.includes('`' + source.identifier + '`'), source.id + ': missing technical identifier');
    }
    check(Object.keys(source).every((key) => ['id', 'topic', 'identifier'].includes(key)),
      source.id + ': unexpected metadata field');
  }
  check(catalog.match(/^## S\d{2}$/gm)?.length === ids.size, 'Catalog/index count mismatch');

  // Include tracked and not-yet-tracked publishable files, including dotfiles.
  // Report locations/categories only, never a matching credential.
  const publishable = [...new Set(execFileSync('git',
    ['ls-files', '-z', '--cached', '--others', '--exclude-standard'],
    { cwd: root, encoding: 'utf8', windowsHide: true }).split('\0').filter(Boolean))];
  const rules = [
    ['source revision', /\b(?:[a-f0-9]{40}|[a-f0-9]{64})\b/i],
    ['source metadata field', /\brepository(?:Id|AtAudit)\b/],
    ['source GitHub revision URL', /github\.com\/[^/\s]+\/[^/\s]+\/(?:blob|commit|pull)\//i],
    ['internal product directory', /\b(?:apps|packages)\/[A-Za-z0-9_.-]+\//],
    ['internal branch history', /\b(?:origin|feature|development)\/[A-Za-z0-9_.-]+/],
    ['merge or PR history', /\b(?:Merge\s+pull\s+request|PR\s*#\d+)/i],
    ['absolute user path', /\b[A-Z]:[\\/](?:Users|home)[\\/]|(?:^|\s|['"])\/(?:home|Users)\/[^/\s]+/i],
    ['GitHub credential', /\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,})\b/],
    ['cloud access key', /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/],
    ['private key', /-----BEGIN (?:[A-Z0-9 ]+ )?PRIVATE KEY-----/],
    ['JWT credential', /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/],
    ['service credential', /\b(?:sk|rk)_(?:live|test)_[A-Za-z0-9]{16,}\b/],
    ['credential in URL', /https?:\/\/[^\s/@]+:[^\s/@]+@/],
    ['credential assignment', /\b(?:password|api[_-]?key|client[_-]?secret|access[_-]?token)\s*[:=]\s*['"][A-Za-z0-9_\/+.-]{16,}['"]/i],
  ];
  for (const path of publishable) {
    const file = resolve(root, path);
    check(inside(root, file), 'Publishable path outside repository');
    if (!existsSync(file)) continue; // A tracked deletion is absent from the proposed tree.
    const content = read(file);
    for (const [category, pattern] of rules) {
      content.split(/\r?\n/).forEach((line, index) => {
        check(!pattern.test(line), path + ':' + (index + 1) + ': ' + category);
      });
    }
  }
  const ignoreStatus = (path) => {
    const result = spawnSync('git', ['check-ignore', '--no-index', '-q', '--', path],
      { cwd: root, windowsHide: true });
    check(result.status === 0 || result.status === 1, 'git check-ignore failed');
    return result.status;
  };
  const protectedPaths = [...publishable, 'package.json', 'pnpm-lock.yaml', 'package-lock.json',
    '.env.example', '.github/workflows/check.yml', '.codex/config.toml',
    '.agents/skills/example/SKILL.md', 'guidelines/colors.md', 'assets/logo.svg'];
  for (const path of protectedPaths) {
    check(ignoreStatus(path) === 1, 'Important project file ignored: ' + path);
  }
  for (const path of ['node_modules/example/index.js', '.venv/example', '.cache/example',
    'tmp/research.md', 'temp/notes.md', 'logs/dev.log', '.env', '.env.local',
    '.secrets/example', 'example.key', 'example.pem', 'example.p12', 'example.pfx',
    '.private-research/notes.md', '.metovia-source.local.json',
    '.vscode/settings.local.json', '.idea/workspace.xml']) {
    check(ignoreStatus(path) === 0, 'Expected local file is not ignored: ' + path);
  }
  if (failures.length) throw new Error(failures.join('\n'));
  console.log('OK: skill metadata, ' + markdown.length + ' Markdown files, ' + links + ' local links, ' + ids.size + ' topic references.');
  console.log('OK: ' + publishable.length + ' publishable files scanned; ignore rules preserve project files.');
  console.log('No runtime, visual, accessibility or deployment checks performed.');
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
