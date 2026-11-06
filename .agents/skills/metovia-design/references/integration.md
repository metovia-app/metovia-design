# Integration und Quellenzuordnung

Diese Anleitung bereitet spätere Integrationsarbeit vor. Das öffentliche Paket
enthält keine privaten Quelladressen, Revisionsnachweise oder Zugriffsdaten.

## Paket und Versionierung

Die Paketversion ist **0.2.0**. Die Installation besteht aus den vier Ordnern
`metovia-design`, `metovia-ui-review`, `metovia-motion`, `metovia-landing` und
`_shared` unter demselben `.agents/skills/`-Verzeichnis. Jeder Skill ist unabhängig
aufrufbar; seine statischen Referenzen dürfen in benachbarten Paketordnern liegen.
Der gesamte Referenzverbund ist die portable Installationsgrenze.

Für eine reproduzierbare Installation einen geprüften Stand des öffentlichen
Designrepositorys festhalten, alle fünf genannten Ordner samt ihren Dateien in
das Zielprojekt kopieren und dort versionieren. Eine vorhandene Installation erst vergleichen und bewusst
aktualisieren; andere Skills und AGENTS-Dateien nicht überschreiben.
Die Installationsversion bezeichnet das Designpaket, nicht eine bestimmte
Revision der bestehenden Metovia-Webanwendung.

Codex lädt repositorybezogene Skills unter `.agents/skills` und unterstützt
Symlinks; siehe die [offizielle Skill-Dokumentation](https://learn.chatgpt.com/docs/build-skills).
Eine vollständig kopierte Installation ist unabhängig vom ursprünglichen
Designcheckout. Ein einzelner kopierter Skill-Ordner ohne seine Nachbarreferenzen
ist unvollständig; automatische Installer für Einzelskills dürfen deshalb nicht
ungeprüft verwendet werden.

## AGENTS-Ergänzung im Zielprojekt

Im Integrationsauftrag vorhandene Root- und bereichsspezifische AGENTS-Dateien
lesen und folgenden Abschnitt sinngemäß ergänzen:

```markdown
## Metovia Design

Für UI-Gestaltung metovia-design, für Audits metovia-ui-review, für Animationen
metovia-motion und für Produktpräsentationen metovia-landing verwenden. Die
SKILL.md-Dateien liegen unter `.agents/skills/` in gleichnamigen Ordnern.
Bestehende Komponenten und Tokens des betroffenen Produktbereichs haben Vorrang.
Dokumentierten Designstand mit der aktuellen Implementierung abgleichen;
Current, Recommended und Future getrennt halten. Interne Herkunftsnachweise nicht
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
nennen; neue Komponenten oder Tokens bleiben unbelegt bzw. `Recommended`.

## Installationsprüfung

Im Designrepository prüft `node scripts/test-validation.mjs` auch eine echte
Kopie des Vier-Skill-Verbands in einem isolierten lokalen Testverzeichnis.
`node scripts/validate.mjs --skills-root tmp/installed-skills` kann einen anderen
kopierten Verband innerhalb dieses Arbeitsbereichs prüfen. Fehlende Shared-
Referenzen, falsche Skillnamen und zu breite Ignore-Regeln müssen fehlschlagen.

Das Quellenregister der historischen Baseline behält seine Referenzversion 0.1.1;
die Paketversion 0.2.0 in `skills.json` versioniert die vier Skills und ihre
neuen Empfehlungen. Die Tokenwerte der Baseline werden dadurch nicht verändert.
Die Quelldateien externer Recherchen gehören nicht zur Installation.
