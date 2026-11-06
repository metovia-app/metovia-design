---
name: metovia-design
description: Bestehende Metovia-UI weiterentwickeln oder auf Designkonsistenz prüfen. Nutze belegte CMS- und Magazinstandards, vorhandene Komponenten und einen versionierten Design-Audit; nicht für unabhängige Websites oder Hosting-Migrationen.
---

# Metovia Design

Die vorhandene Produktimplementierung ist die primäre Designquelle. Dieses Paket
ist ihre dokumentierte Referenz, kein Ersatz für den Code des bearbeiteten Stands.

## Bei UI-Arbeit

Lies [Current-Standards](references/current-standards.md) und die für die Aufgabe
relevanten Komponenten im Zielcheckout. Lies dessen `AGENTS.md` und prüfe den aktuellen Implementierungsstand.
Unterscheide CMS und öffentliches Magazin. Verwende vorhandene Komponenten und
Tokens des jeweiligen Bereichs; Artikelverwaltung ist die Referenz für CMS-Listen.

Das [Themenregister](references/sources.md) und
[reference-index.json](references/reference-index.json) ordnen die öffentlichen
Befunde nach Komponenten und Designbereichen. Sie enthalten keine private
Quelladresse oder Revisionsbindung. Bestimme den Zielcheckout aus dem autorisierten
Arbeitskontext; suche dort nach den technischen Bezeichnern des Registers.

Weicht der Zielcheckout von der Baseline ab, lies die relevanten Änderungen,
insbesondere Mandantenpfade und Landingpage. Übernimm keine alten URLs blind.
Belegte Abweichungen im Ergebnis nennen und bei Bedarf als neuen Audit erfassen.
Bei Konflikten zwischen Dokumentation und Implementierung den Unterschied
erklären, bevor eine bestehende Designentscheidung ersetzt wird.

[Proposed und Future](references/decisions.md) sind keine implementierten Regeln.
Empfehlungen nur im beauftragten Umfang umsetzen und ihre Promotion zu `Current`
erst mit Implementierungsbeleg und passender Verifikation dokumentieren.

Prüfe betroffene Zustände: normal, Hover, Fokus, gedrückt, deaktiviert, ausstehend,
Fehler und leer; außerdem Light/Dark, schmale Ansicht und reduzierte Bewegung,
soweit für den Bereich vorhanden. Dialoge behalten Fokusführung und Schutz
ungespeicherter Eingaben. Icons und Farben ersetzen keine verständlichen Labels.

## Bei einem Audit

Lies [Audit und Grenzen](references/design-audit.md) und das
[Quellenregister](references/sources.md). Wähle einen nachvollziehbaren festen
Commit, möglichst den stabilen Branch nach den Regeln des Quellprojekts. Prüfe die autorisierte Implementierung, ohne fremde Arbeitsbäume auszuchecken.

Ordne jeden öffentlichen Befund einem Designthema oder einer Komponente zu.
Genaue Revisions-/Pfadnachweise bei Bedarf getrennt in autorisierten internen
Auditunterlagen führen; nicht in dieses öffentliche Paket kopieren. Erfasse
Geltungsbereich, Konsequenz und Empfehlung getrennt. Eine vorhandene CSS-Regel
beweist weder ihre Darstellung im Browser noch Barrierefreiheit oder einen
erfolgreichen Produktivbetrieb. Fehlenden Zugriff und ungetestete Zustände nennen;
keine Tokens, Vorlageninhalte oder Interaktionen erfinden.

## Auftragsgrenze

Das Lesen dieses Skills autorisiert keine Änderungen am Quellprodukt. Im
Design-Repository werden nur Dokumentation und Skill-Ressourcen gepflegt.
Produktänderungen brauchen einen entsprechenden Auftrag im Zielrepository.
Repositorymigration, Eigentümerwechsel sowie Vercel-, Domain- und
Deploymentänderungen gehören nicht zu diesem Workflow.

Für eine ausdrücklich beauftragte Installation oder Quellenumstellung lies die
[Integrationsanleitung](references/integration.md). Die Anleitung führt selbst
keine Migration aus.
