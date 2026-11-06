---
name: metovia-ui-review
description: Metovia-Oberflächen systematisch auditieren und konkrete UI-Probleme priorisieren. Für Screenshots, Prototypen oder Code-Reviews mit begründeten Befunden; nicht zum ungefragten Redesign oder für Hosting-Audits.
---

# Metovia UI Review

Bewerte die vorliegende Oberfläche, ohne Änderungen an der Produktanwendung
auszuführen. Der Skill funktioniert eigenständig mit dem installierten
Referenzverbund; andere Skills müssen nicht aufgerufen werden.

Lies [Prinzipien](../_shared/principles.md),
[Accessibility](../_shared/accessibility.md),
[Komponentenstandards](../_shared/components.md) und die
[Reviewrubrik](references/review-rubric.md). Lade nur die für den Befund nötigen
Detailquellen. Installation des Referenzverbunds: [Integration](../metovia-design/references/integration.md).

Bestimme Aufgabe, Modul, Benutzergruppe, vorliegenden Zustand und Artefakttyp.
Kennzeichne bei jedem Befund, ob er gemessen, im Code beobachtet, sichtbar oder
nur zu prüfen ist. Screenshots belegen keine Tastatursteuerung oder DOM-Semantik.
Fehlendes Material ist eine Grenze, kein automatisch vorhandener Fehler.

Prüfe die elf Dimensionen der Rubrik. Nutze R01/R02 für Hierarchie und Scanbarkeit,
R04 für Zustandsfeedback und R05 für Motionzweck und Häufigkeit. Das sind konkret
übertragene Apple-/Kowalski-Prinzipien; keine Pflicht zur Apple-Optik.
Vergleiche Komponenten mit dem tatsächlichen Modulbestand. Die historische
CMS-/Magazin-Baseline ist für andere Module nur eine Referenz.

Gib priorisierte Befunde mit Beobachtung, Nutzerfolge, Kriterium/Quelle,
Evidenzgrad, kleiner umsetzbarer Korrektur und Abnahmetest aus. Trenne:

- **Fehler:** belegte Funktions-/Accessibilityverletzung oder gebrochener Vertrag.
- **Verbesserung:** aufgabenspezifische Qualitätslücke mit nachvollziehbarer Folge.
- **Präferenz:** Gestaltungsalternative ohne belegten Nachteil; nicht blockierend.
- **Offene Prüfung:** fehlender Nachweis, keine erfundene Verletzung.

Priorisiere nach Nutzerfolge und Häufigkeit, nicht nach Vorliebe. Keine
unbegründete Gesamtnote oder pauschale Freigabe. Bei Motion erst Weglassen,
Reduzieren oder Korrigieren abwägen; nicht automatisch eine Bibliothek empfehlen.
Current bleibt belegt, Vorschläge sind Recommended, langfristige Lücken Future.

Beispiel und erwartete Nachweisgrenzen:
[Listenreview](references/list-example.md). Abschluss enthält auch das, was
funktioniert, die wichtigste nächste Änderung und nicht geprüfte Zustände.
