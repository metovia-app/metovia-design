// Publication checks are deliberately contextual: public source citations are useful.
export function scanPublicText(content, publicRepositories) {
  const findings = [];
  const allowed = new Set(publicRepositories.map((value) => value.toLowerCase()));
  const rules = [
    ['unclassified revision', /\b(?:[a-f0-9]{40}|[a-f0-9]{64})\b/i],
    ['private metadata field', /["']repository(?:Id|AtAudit)["']\s*:/],
    ['absolute user path', /\b[A-Z]:[\\/](?:Users|home)[\\/]|(?:^|\s|['"])\/(?:home|Users)\/[^/\s]+/i],
    ['GitHub credential', /\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,})\b/],
    ['cloud access key', /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/],
    ['private key', /-----BEGIN (?:[A-Z0-9 ]+ )?PRIVATE KEY-----/],
    ['JWT credential', /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/],
    ['service credential', /\b(?:sk|rk)_(?:live|test)_[A-Za-z0-9]{16,}\b/],
    ['credential in URL', /https?:\/\/[^\s/@]+:[^\s/@]+@/],
    ['credential assignment', /\b(?:password|api[_-]?key|client[_-]?secret|access[_-]?token)\s*[:=]\s*['"][A-Za-z0-9_\/+.-]{16,}['"]/i],
  ];
  content.split(/\r?\n/).forEach((line, index) => {
    // Check secrets before masking allowed public revision links.
    for (const [category, pattern] of rules.slice(1)) {
      if (pattern.test(line)) findings.push({ line: index + 1, category });
    }
    const withoutPublicLinks = line.replace(/https?:\/\/(?:github\.com|raw\.githubusercontent\.com)\/([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)(?:\/[^\s)>"']*)?/gi,
      (url, owner, repo) => {
        const key = (owner + '/' + repo).replace(/\.git$/, '').toLowerCase();
        if (allowed.has(key)) return '';
        findings.push({ line: index + 1, category: 'unreviewed GitHub source URL' });
        return url;
      });
    if (rules[0][1].test(withoutPublicLinks)) findings.push({ line: index + 1, category: rules[0][0] });
  });
  return findings;
}
