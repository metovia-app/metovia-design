# Metovia Design

Design-Audit, Bestandsstandards und vier eigenständig aufrufbare Codex-Skills für
die gesamte Metovia-Plattform. Paketversion **0.2.0**.
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
| [Recommended und Future](.agents/skills/metovia-design/references/decisions.md) | Priorisierte Verbesserungen und noch offene Entscheidungen |
| [Quellenregister](.agents/skills/metovia-design/references/sources.md) | Neutrale Themen- und Komponentenreferenzen |
| [Skill](.agents/skills/metovia-design/SKILL.md) | UI-Arbeit und erneute Audits auf Grundlage der bestehenden Implementierung |
| [Integration und Migration](docs/integration.md) | Versionierte Installation, AGENTS-Ergänzung und spätere Umstellung |

`Current` bezeichnet belegte Implementierung, keine pauschale Qualitätsfreigabe.
`Recommended` bezeichnet noch nicht umgesetzte Empfehlungen. `Future` bezeichnet
langfristige Planung. Die verbindliche Wiederverwendung gilt für den jeweils
dokumentierten Produktbereich, nicht für jede Oberfläche gleichermaßen.

Öffentliche Referenzen enthalten nur designrelevante Themen und technische
Bezeichner. Interne Quelladressen, Revisionsnachweise und Rechercheunterlagen
gehören nicht in dieses Paket. Hinweise zur Veröffentlichung und die Ergebnisse
der Bereinigung stehen im [Prüfbericht](docs/publication-review.md).

Prüfen, ohne Pakete zu installieren:

```powershell
node scripts/validate.mjs
node scripts/test-validation.mjs
```

Die Prüfung kontrolliert Skill-Metadaten, Referenzen, Links, Ignore-Regeln und
Hinweise auf sensible Inhalte in allen zur Veröffentlichung vorgesehenen Dateien.

## Vier Skills

| Skill | Aufgabe |
| --- | --- |
| [metovia-design](.agents/skills/metovia-design/SKILL.md) | Plattformweite UI, Layout, Typografie, Tokens, Komponenten und Accessibility |
| [metovia-ui-review](.agents/skills/metovia-ui-review/SKILL.md) | Nachvollziehbare Reviews in elf Dimensionen, Evidenz und Prioritäten |
| [metovia-motion](.agents/skills/metovia-motion/SKILL.md) | Funktionale Animation, Zustände, Timing, Easing, Lebenszyklus und Performance |
| [metovia-landing](.agents/skills/metovia-landing/SKILL.md) | Editorial SaaS-Landingpages, Produktdemos, Scrollytelling und 3D-Handoff |

Jeder Skill ist separat aufrufbar. Zur Installation **alle vier Ordner und
`_shared` gemeinsam** kopieren; keine externe Skillinstallation oder zusätzliche
Animationbibliothek erforderlich. Details und Abhängigkeitsprüfung stehen in der
[Integrationsanleitung](.agents/skills/metovia-design/references/integration.md).

## Guidelines und Nachweise

| Thema | Dokumentation |
| --- | --- |
| Apple-inspirierte Prinzipien | [R01–R08 und Webanpassung](.agents/skills/_shared/principles.md) |
| Kowalski und weitere Design-Skills | [Tatsächlich gelesene Inhalte, Qualitätsbewertung und Lizenzen](.agents/skills/_shared/external-sources.md) |
| Metovia-Entscheidungen | [Plattformweite Anwendung](.agents/skills/metovia-design/references/platform-guidelines.md) und die oben verlinkten Bestands-/Zukunftsregeln |
| Motion | [M00–M06](.agents/skills/metovia-motion/references/motion-guidelines.md) und [Beispiele](.agents/skills/metovia-motion/references/examples.md) |
| UI-Review | [Rubrik und Prioritäten](.agents/skills/metovia-ui-review/references/review-rubric.md) |
| Landingpage | [L01–L06](.agents/skills/metovia-landing/references/landing-guidelines.md) und [Laptop-Demo](.agents/skills/metovia-landing/references/laptop-demo.md) |
| Accessibility | [WCAG-2.2-AA-Ziel, Kriterien und Nachweisgrenzen](.agents/skills/_shared/accessibility.md) |
| Komponenten | [Wiederverwendung und Konflikte](.agents/skills/_shared/components.md) |
| Tests | [Szenarien und tatsächliche Ergebnisse](docs/skill-evaluation.md) |

Die neue Quellenanalyse und die Szenariotests sind keine erneute Verifikation
der privaten Produktimplementierung. Keine Produkt-, Hosting- oder
Deploymentänderungen sind Teil dieses Designpakets.
