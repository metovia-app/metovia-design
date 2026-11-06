# Prüfung der öffentlichen Dokumentation

Stand: **06.11.2026**. Geprüft wurden ausschließlich Dateien und Git-Metadaten
des Designrepositorys sowie dessen erreichbare öffentliche GitHub-Metadaten.
Andere Repositorys wurden für diese Bereinigung weder gelesen noch verändert.

## Umfang und Veröffentlichungsstand

Der lokale Ausgangsstand enthielt noch keinen Benutzercommit und keine getrackten
Dateien. Deshalb wurden zusätzlich sämtliche elf vorhandenen, zur Veröffentlichung
vorgesehenen Dateien geprüft. Die initiale lokale Dokumentation enthielt unnötige
private Quellenmetadaten; sie wurde vor einer Veröffentlichung bereinigt.

Die im Auftrag genannte öffentliche Repositoryadresse war über GitHub nicht
erreichbar (404). Das lokal konfigurierte öffentliche Designrepository wurde
separat geprüft: GitHub meldete ein leeres Git-Repository und keine Pull Requests.
Damit wurde dort keine bereits veröffentlichte Commit- oder PR-Historie mit den
entfernten Informationen gefunden. Das ist keine Aussage über möglicherweise
andere, nicht erreichbare Repositorys, gelöschte Inhalte oder fremde Kopien.
Die Git-Historie wurde nicht umgeschrieben.

## Bereinigte Dateien

Alle hier genannten Skill-Referenzen liegen unter
`.agents/skills/metovia-design/references/`.

| Datei | Bereinigung |
| --- | --- |
| `README.md` | Neutrale Produktbezeichnung, keine private Quellrevision, kein lokaler Entwicklungs-/Migrationsstatus |
| `AGENTS.md` | Öffentliche Nachweise von internen Rechercheunterlagen getrennt; Validierung benötigt kein privates Quellrepository |
| `SKILL.md` im Skill-Ordner | Themen-/Komponentensuche statt eingebetteter privater Quellenauflösung |
| `design-audit.md` | Repositoryidentität, Revisionen, Branch-/Merge-Historie, interne Verzeichnisse und Quellzeilen entfernt; alle acht Befunde erhalten |
| `current-standards.md` | Interne Paket-/Routenverweise neutral formuliert; alle 14 Regeln, Tokenwerte und Interaktionsstandards erhalten |
| `decisions.md` | Konkrete Zieladressen und Sessionbezüge entfernt; Verbesserungsvorschläge und Zukunftsentscheidungen erhalten |
| `integration.md` in den Skill-Referenzen | Portables öffentliches Paket; genaue Herkunftsnachweise separat intern führen |
| `sources.md` | Private Quelllinks und Produktpfade durch 47 neutrale Themenreferenzen mit nötigen technischen Bezeichnern ersetzt |
| Bisherige Quellen-Lockdatei | Entfernt; der neue `reference-index.json` enthält Themen-IDs, Paketversion und Auditdatum ohne private Revisionsbindung |
| `scripts/validate.mjs` | Skill-/Link-/Themenprüfung sowie Prüfung veröffentlichbarer Dateien und Ignore-Regeln, ohne Zugriff auf das Produkt |

Die Paketversion ist **0.1.1**. Das öffentliche Themenregister ermöglicht die
fachliche Zuordnung und die Suche in einem autorisierten Zielcheckout; es
verspricht keine unabhängige Verifikation privater Quellrevisionen.

## Ignore-Regeln

Die neue `.gitignore` schließt Dependencies und Caches, temporäre Dateien, Logs,
lokale Umgebungsdateien, private Schlüssel und Zertifikatscontainer, lokale
Rechercheunterlagen sowie ausgewählte maschinenspezifische IDE-Dateien aus.
Die exakten Regeln stehen in der [`.gitignore`](../.gitignore).

Skills, `.agents/`, `.codex/config.toml`, AGENTS-Dateien, Guidelines, Assets,
Workflows, Paketmanifeste und Lockdateien werden nicht pauschal ignoriert.
`.env.example` bleibt ausdrücklich versionierbar. Ganze IDE-Verzeichnisse werden
nicht ausgeschlossen, damit gemeinsame Projekteinstellungen möglich bleiben.
`git check-ignore --no-index` prüft vorhandene Projektdateien und repräsentative
wichtige Pfade sowie die erwarteten lokalen Ausschlüsse.

## Verifikation und verbleibende Grenzen

`node scripts/validate.mjs` prüft Skill-Metadaten, interne Links/Anker,
Portabilität des Skill-Ordners, Themenindex, veröffentlichbare Dateien und
Ignore-Regeln. Die Inhaltsprüfung umfasst vollständige Revisionskennungen,
typische interne Quellmetadaten/-pfade und bekannte Zugangsdatenformate; sie gibt
bei Treffern nur Dateiname, Zeile und Kategorie aus. Es wurden keine möglichen
Zugangsdaten gefunden. Design-Tokenwerte, Größen und alle Befund-IDs wurden mit
dem lokalen Ausgangsstand verglichen und beibehalten.

Die Prüfung ist muster- und kontextbasiert. Sie garantiert nicht, dass jede
denkbare Zugangsdatenform oder interne Information erkannt wird. Browser-,
Kontrast- und Deploymentprüfungen waren nicht Teil der Bereinigung.

Eine `.gitignore` entfernt keine bereits veröffentlichten Inhalte aus Historie,
PR-Diffs, Caches oder Kopien. Sollte später eine tatsächliche Offenlegung von
Zugangsdaten nachgewiesen werden, müssen diese unabhängig von einer
Dokumentationsbereinigung widerrufen bzw. erneuert werden. Eine Historienänderung
benötigt einen eigenen Auftrag.

Für einen Pull Request muss im öffentlichen Repository zunächst ein Basisbranch
mit mindestens einem Commit existieren. Die bereinigten Projektdateien werden
auf einem separaten Feature-Branch zur Prüfung vorbereitet; ein eigenständiger
Merge ist nicht vorgesehen.
