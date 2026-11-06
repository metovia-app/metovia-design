# Beispiel: SaaS-Einstellungen

Synthetisches Beispiel ohne Produktzugriff. Auftrag: Organisationseinstellungen
übersichtlicher machen. Vorhanden sind Shell, FormField, FormMessage, Button und
ein FormDialog mit Dirty-Schutz. Felder stehen gleichgewichtet in einer langen
Spalte; Speichern liegt abseits, Hinweise sind nicht mit Inputs verknüpft.

Anwendung des Skills:

- Current: vorhandene Komponenten, Theme-/Spacingtokens und Dialogvertrag erhalten.
- Recommended R01/R02: sinnvolle Abschnitte wie Organisation, Benachrichtigungen
  und Zugriffe; gemeinsame Label-/Feldkanten, klarer Titel und Save-Aktion am
  bearbeiteten Bereich. Keine neue Card pro Feld.
- Recommended R04/R06: Zustände unverändert/dirty/saving/saved/error unterscheiden;
  Labels und Hinweis-/Fehler-IDs über die vorhandene Feld-API verknüpfen.
- Recommended: bei schmalem Viewport vertikal stapeln, Texte wachsen lassen,
  Fehlertext nicht abschneiden. Sticky-Save darf fokussierte Controls nicht verdecken.
- Future: zusätzliche Mandanten-Brandingoptionen nur bei Produktanforderung;
  keine neue Palette aus dem Designauftrag ableiten.

Abnahme: Speicherung erfolgreich und fehlerhaft, Dirty-Abbruch, Tastaturfolge,
Fokusrückgabe, 200-Prozent-Text, 320-CSS-px-Reflow, Light/Dark und Reduced Motion.
Das sind Vorschläge aus [R01–R06](../../_shared/principles.md) und
[Accessibility](../../_shared/accessibility.md), keine bereits ausgeführten Produkttests.
