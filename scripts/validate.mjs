import { readFileSync, readdirSync, existsSync, statSync, realpathSync } from 'node:fs';
import { resolve, dirname, relative, sep, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync, spawnSync } from 'node:child_process';
import { scanPublicText } from './lib/publication.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
if (args.length && (args.length !== 2 || args[0] !== '--skills-root' || !args[1])) {
  console.error('Usage: node scripts/validate.mjs [--skills-root <installed-bundle>]');
  process.exit(1);
}
const bundle = args.length ? resolve(root, args[1]) : resolve(root, '.agents/skills');
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const read = (path) => readFileSync(path, 'utf8').replace(/\r\n/g, '\n');
const inside = (parent, target) => {
  const rel = relative(parent, target);
  return rel === '' || (!rel.startsWith('..' + sep) && rel !== '..' && !isAbsolute(rel));
};
const walk = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = resolve(directory, entry.name);
  if (entry.isSymbolicLink()) throw new Error('Unexpected symlink in bundle: ' + entry.name);
  return entry.isDirectory() ? walk(path) : [path];
});
const slug = (text) => text.toLowerCase().replace(/[`*_]/g, '')
  .replace(/[^\p{L}\p{N}\s-]/gu, '').replace(/\s/g, '-');
const withoutFences = (text) => text.replace(/^```[^\n]*\n[\s\S]*?^```[ \t]*$/gm, '');

try {
  check(inside(root, bundle), 'Installed bundle must stay inside this workspace');
  check(existsSync(bundle), 'Missing skill bundle');
  if (failures.length) throw new Error(failures.join('\n'));
  check(inside(realpathSync(root), realpathSync(bundle)), 'Bundle resolves outside workspace');
  const manifest = JSON.parse(read(resolve(root, 'skills.json')));
  const expected = ['metovia-design', 'metovia-ui-review', 'metovia-motion', 'metovia-landing'];
  check(manifest.version === '0.2.0' && JSON.stringify(manifest.skills) === JSON.stringify(expected),
    'Unexpected skill manifest');
  const discovered = readdirSync(bundle).filter((name) => existsSync(resolve(bundle, name, 'SKILL.md'))).sort();
  check(JSON.stringify(discovered) === JSON.stringify([...expected].sort()), 'Expected exactly four skills');
  const descriptions = new Set();
  for (const name of expected) {
    const path = resolve(bundle, name, 'SKILL.md');
    check(existsSync(path), 'Missing SKILL.md: ' + name);
    if (!existsSync(path)) continue;
    const content = read(path);
    const front = content.match(/^---\n([\s\S]*?)\n---\n/);
    check(front, name + ': missing YAML frontmatter');
    if (front) {
      const rows = front[1].split('\n');
      const declared = rows.find((row) => row.startsWith('name: '))?.slice(6);
      const description = rows.find((row) => row.startsWith('description: '))?.slice(13);
      check(rows.length === 2 && declared === name && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(declared) && declared.length <= 64,
        name + ': invalid metadata name');
      check(description && description.length <= 1024 && !/[<>\r\n]|:\s|\s#/.test(description),
        name + ': invalid single-line description');
      check(!descriptions.has(description), name + ': duplicate trigger');
      descriptions.add(description);
    }
    check(!content.includes('[TODO:'), name + ': unfinished scaffold');
    check(existsSync(resolve(bundle, name, 'references')), name + ': missing references');
  }

  const publishable = [...new Set(execFileSync('git',
    ['ls-files', '-z', '--cached', '--others', '--exclude-standard'],
    { cwd: root, encoding: 'utf8', windowsHide: true }).split('\0').filter(Boolean))];
  const projectMarkdown = publishable.filter((path) => path.endsWith('.md') &&
    !path.startsWith('.agents/skills/') && existsSync(resolve(root, path))).map((path) => resolve(root, path));
  const markdown = [...projectMarkdown, ...walk(bundle).filter((path) => path.endsWith('.md'))];
  let links = 0;
  for (const path of markdown) {
    const content = read(path);
    check(!content.includes('\uFFFD'), relative(root, path) + ': invalid UTF-8');
    for (const match of withoutFences(content).matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
      const href = match[1];
      if (/^(?:https?:|mailto:)/.test(href)) continue;
      const [file, anchor] = href.split('#');
      const target = resolve(dirname(path), decodeURIComponent(file));
      links++;
      const boundary = inside(bundle, path) ? bundle : root;
      check(inside(boundary, target), relative(root, path) + ': reference escapes install boundary');
      check(existsSync(target), relative(root, path) + ': missing target: ' + href);
      if (existsSync(target)) {
        check(inside(realpathSync(boundary), realpathSync(target)), 'Reference resolves outside install boundary');
        if (anchor && statSync(target).isFile()) {
          const headings = [...read(target).matchAll(/^#{1,6}\s+(.+)$/gm)].map((hit) => slug(hit[1]));
          check(headings.includes(decodeURIComponent(anchor)), relative(root, path) + ': missing anchor: ' + href);
        }
      }
    }
  }

  const index = JSON.parse(read(resolve(bundle, 'metovia-design/references/reference-index.json')));
  check(index.schemaVersion === 2 && index.bundleVersion === '0.1.1', 'Unexpected historical reference version');
  const catalog = read(resolve(bundle, 'metovia-design/references/sources.md'));
  const ids = new Set();
  for (const source of index.references) {
    check(/^S\d{2}$/.test(source.id) && !ids.has(source.id), 'Duplicate/invalid historical reference ID');
    ids.add(source.id);
    check(catalog.includes('## ' + source.id + '\n') && catalog.includes(source.topic), source.id + ': missing topic');
    if (source.identifier) check(!/[\\/]/.test(source.identifier) && catalog.includes(source.identifier), source.id + ': invalid identifier');
    check(Object.keys(source).every((key) => ['id', 'topic', 'identifier'].includes(key)), source.id + ': unexpected metadata');
  }
  check(ids.size === 47 && catalog.match(/^## S\d{2}$/gm)?.length === ids.size, 'Historical reference count mismatch');

  const sources = JSON.parse(read(resolve(bundle, '_shared/external-sources.json')));
  const requiredSources = ['apple-hig', 'kowalski', 'apple-review', 'apple-marketing', 'wcag', 'react', 'three', 'mdn'];
  check(requiredSources.every((id) => sources.sources.some((source) =>
    source.id === id && source.url.startsWith('https://') && source.license?.length > 0)), 'Missing source/license record');
  const publicRepositories = ['metovia-app/metovia-design', ...sources.sources
    .filter((source) => new URL(source.url).hostname === 'github.com')
    .map((source) => new URL(source.url).pathname.slice(1))];
  for (const path of publishable) {
    const file = resolve(root, path);
    check(inside(root, file), 'Publishable file outside repository');
    if (!existsSync(file) || !statSync(file).isFile()) continue;
    const data = readFileSync(file);
    if (data.includes(0)) continue; // Binary assets require separate content review.
    for (const finding of scanPublicText(data.toString('utf8'), publicRepositories)) {
      failures.push(path + ':' + finding.line + ': ' + finding.category);
    }
  }

  const ignoreStatus = (path) => {
    const result = spawnSync('git', ['check-ignore', '--no-index', '-q', '--', path], { cwd: root, windowsHide: true });
    check(result.status === 0 || result.status === 1, 'git check-ignore failed');
    return result.status;
  };
  for (const path of [...publishable, 'package.json', 'pnpm-lock.yaml', 'package-lock.json', '.env.example',
    '.github/workflows/check.yml', '.codex/config.toml', '.agents/skills/example/SKILL.md', 'guidelines/colors.md', 'assets/logo.svg']) {
    check(ignoreStatus(path) === 1, 'Important project file ignored: ' + path);
  }
  for (const path of ['node_modules/example/index.js', '.venv/example', '.cache/example', 'tmp/research.md',
    'temp/notes.md', 'logs/dev.log', '.env', '.env.local', '.secrets/example', 'example.key', 'example.pem',
    'example.p12', 'example.pfx', '.private-research/notes.md', '.metovia-source.local.json',
    '.vscode/settings.local.json', '.idea/workspace.xml']) {
    check(ignoreStatus(path) === 0, 'Expected local file not ignored: ' + path);
  }
  if (failures.length) throw new Error(failures.join('\n'));
  console.log('OK: four skills, ' + markdown.length + ' Markdown files, ' + links + ' local links, 47 historical topics.');
  console.log('OK: ' + sources.sources.length + ' source/license records; ' + publishable.length + ' publishable files; ignore rules checked.');
  console.log('No product runtime, visual, accessibility or deployment conformance claimed.');
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
