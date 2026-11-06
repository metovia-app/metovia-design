# Integration und Quellenzuordnung

Diese Anleitung bereitet spätere Integrationsarbeit vor. Das öffentliche Paket
enthält keine privaten Quelladressen, Revisionsnachweise oder Zugriffsdaten.

## Paket und Versionierung

Die bereinigte Paketversion ist **0.1.1**. Das vollständige Paket ist
`.agents/skills/metovia-design/`, einschließlich aller `references/`.
Alle Laufzeitreferenzen bleiben innerhalb dieses Ordners.

Für eine reproduzierbare Installation einen geprüften Stand des öffentlichen
Designrepositorys festhalten, den ganzen Skill-Ordner in das Zielprojekt kopieren
und dort versionieren. Eine vorhandene Installation erst vergleichen und bewusst
aktualisieren; andere Skills und AGENTS-Dateien nicht überschreiben.
Die Installationsversion bezeichnet das Designpaket, nicht eine bestimmte
Revision der bestehenden Metovia-Webanwendung.

Codex lädt repositorybezogene Skills unter `.agents/skills` und unterstützt
Symlinks; siehe die [offizielle Skill-Dokumentation](https://learn.chatgpt.com/docs/build-skills).
Eine kopierte Installation ist unabhängig von lokalen Nachbarverzeichnissen.

## AGENTS-Ergänzung im Zielprojekt

Im Integrationsauftrag vorhandene Root- und bereichsspezifische AGENTS-Dateien
lesen und folgenden Abschnitt sinngemäß ergänzen:

```markdown
## Metovia Design

Bei UI-Änderungen `.agents/skills/metovia-design/SKILL.md` verwenden.
Bestehende Komponenten und Tokens des betroffenen Produktbereichs haben Vorrang.
Dokumentierten Designstand mit der aktuellen Implementierung abgleichen;
Current, Proposed und Future getrennt halten. Interne Herkunftsnachweise nicht
in das öffentliche Skill-Paket übernehmen.
```

Näherliegende Anweisungen und `AGENTS.override.md` berücksichtigen; siehe die
[offizielle AGENTS-Dokumentation](https://learn.chatgpt.com/docs/agent-configuration/agents-md).
Nach der Installation aus Root und relevanten Unterverzeichnissen prüfen, dass
der Skill auffindbar ist und vorhandene Komponenten korrekt wiederverwendet.

## Öffentliche Referenzen und interne Nachweise

[reference-index.json](reference-index.json) ordnet stabile Themen-IDs ihren
Designbereichen und technischen Bezeichnern zu. [sources.md](sources.md) erklärt
dieselben Referenzen für Leser. Es handelt sich um einen öffentlichen Themenindex,
nicht um einen maschinell gesperrten Quellstand. Private Git-Objekte lassen sich
damit bewusst nicht öffentlich überprüfen.

Bei autorisiertem Produktzugriff den aktuellen Zielcheckout aus dem Auftrag
bestimmen und dort nach den Komponenten bzw. Styles des Registers suchen.
Keine Repositoryadresse oder Verzeichnisstruktur aus historischen Beispielen
ableiten. Wenn genaue Revisions-, Pfad- oder Zeilenbelege erforderlich sind,
gehören sie in getrennte autorisierte interne Auditunterlagen. Lokale Recherche
kann unter `.private-research/` liegen; dieser Ordner ist im Designrepository
ignoriert und gehört nicht in Installationspakete oder Veröffentlichungen.

## Spätere Repositorymigration — Future

Bei einem ausdrücklich beauftragten Rename, Transfer oder Pfadwechsel die interne
Quellenzuordnung und Zugriffsrechte separat überprüfen. Öffentliche Themen-IDs,
relative Skill-Links und Komponentenstandards bleiben davon unabhängig.
Ändert sich die Implementierung fachlich, Audit und Themenindex in einer neuen
Designpaketversion aktualisieren. Bereits installierte Versionen bleiben erhalten.

Produktpakete nicht als Nebenwirkung umbenennen. Hosting-Verknüpfungen,
Branchbindungen, Domains und Deployments benötigen einen eigenen Betriebsauftrag.
Diese Anleitung führt keine Migration oder Hostingänderung aus.

## Ohne Quellzugriff

Den dokumentierten Designstand als historische Bestandsaufnahme verwenden,
nicht als unabhängig verifizierten aktuellen Produktstand. Fehlende Nachweise
nennen; neue Komponenten oder Tokens bleiben unbelegt bzw. `Proposed`.
