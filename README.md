# Metovia Design

Design-Audit, Bestandsstandards und ein portables Codex-Skill-Paket für Metovia.
Die bestehende Metovia-Webanwendung bleibt die primäre Designquelle.
Dieses Repository dokumentiert und systematisiert sie; es enthält keine zweite
Komponentenbibliothek und keine ersetzenden Produktstyles.

Dokumentierter Designstand: 06.11.2026. Die Bestandsaufnahme ist statisch;
Browserdarstellung, CI und Deployment wurden nicht verifiziert. Neuere
Produktänderungen müssen vor einer Übernahme erneut geprüft werden.

| Einstieg | Inhalt |
| --- | --- |
| [Design-Audit](.agents/skills/metovia-design/references/design-audit.md) | Technische Grundlage, Komponenten, Templates, Befunde und Grenzen |
| [Current-Standards](.agents/skills/metovia-design/references/current-standards.md) | Übernommene Regeln mit Geltungsbereichen und Tokenwerten |
| [Proposed und Future](.agents/skills/metovia-design/references/decisions.md) | Priorisierte Verbesserungen und noch offene Entscheidungen |
| [Quellenregister](.agents/skills/metovia-design/references/sources.md) | Neutrale Themen- und Komponentenreferenzen |
| [Skill](.agents/skills/metovia-design/SKILL.md) | UI-Arbeit und erneute Audits auf Grundlage der bestehenden Implementierung |
| [Integration und Migration](docs/integration.md) | Versionierte Installation, AGENTS-Ergänzung und spätere Umstellung |

`Current` bezeichnet belegte Implementierung, keine pauschale Qualitätsfreigabe.
`Proposed` bezeichnet noch nicht umgesetzte Empfehlungen. `Future` bezeichnet
langfristige Planung. Die verbindliche Wiederverwendung gilt für den jeweils
dokumentierten Produktbereich, nicht für jede Oberfläche gleichermaßen.

Öffentliche Referenzen enthalten nur designrelevante Themen und technische
Bezeichner. Interne Quelladressen, Revisionsnachweise und Rechercheunterlagen
gehören nicht in dieses Paket. Hinweise zur Veröffentlichung und die Ergebnisse
der Bereinigung stehen im [Prüfbericht](docs/publication-review.md).

Prüfen, ohne Pakete zu installieren:

```powershell
node scripts/validate.mjs
```

Die Prüfung kontrolliert Skill-Metadaten, Referenzen, Links, Ignore-Regeln und
Hinweise auf sensible Inhalte in allen zur Veröffentlichung vorgesehenen Dateien.
