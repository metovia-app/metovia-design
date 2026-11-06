# Plattformweite Gestaltung

**Recommended.** Für sämtliche Metovia-Module: gemeinsame
[Prinzipien R01–R08](../../_shared/principles.md),
[Komponentenstandards](../../_shared/components.md) und
[Accessibility](../../_shared/accessibility.md) anwenden. Die historische
[Current-Baseline](current-standards.md) bleibt ein bereichsspezifischer Nachweis.

## Arbeitsfolge

1. Nutzeraufgabe, Modul, Inhalt und häufigste Eingabe bestimmen. Bestehende
   Shell, Tokens und Komponenten des tatsächlichen Zielbereichs lesen.
2. Hierarchie über Titel, Gruppen, Reihenfolge und eine eindeutige Hauptaktion
   verbessern (R01/R02). Nicht jede Einstellungsgruppe in eine neue Card packen.
3. Fehler, Pending, Empty und Erfolg neben dem Auslöser planen (R04).
   Änderungen bestehender Komponenten gezielt begründen; keinen Parallelbau starten.
4. Responsive Umordnung nach verfügbarem Platz und langen Texten, nicht nur nach
   Gerätenamen prüfen (Apple Layout, Quelle in R01). Dichte und Bedienbarkeit
   anhand tatsächlicher Hitboxen abwägen, native Punktgrößen nicht kopieren.
5. Tastatur, sichtbaren/unverdeckten Fokus, Kontrast, Zoom/Reflow und Reduced Motion
   mit dem WCAG-2.2-AA-Ziel vergleichen. Keine Konformität aus einem Screenshot folgern.
6. Motion nur bei Zweck und angemessener Häufigkeit (R05); bestehende Interaktions-
   und Oberflächenwerte zuerst nutzen. Kein neuer Bibliothekszwang.

## Konfliktbeispiel

Der vorhandene CMS-Header hat kompakte Buttons. Apples native Touchgrößen sind
kein Anlass, alle Headerbuttons auf 44 px zu setzen. Die tatsächliche Hitbox und
die WCAG-Abstands-/Ausnahmeregel prüfen. Bei belegter Touchbarriere eine passende
größere Bedienfläche im vorhandenen Control entwickeln, ohne neue Buttonbibliothek.

Ein neues Modul hat eine andere Aufgabe als das Magazin. Es übernimmt Labels,
Fehler-/Fokusverträge und semantische Tokens, nicht automatisch Serifentitel oder
die CMS-Schriftgröße. Neue Regeln bleiben Recommended bis zur verifizierten
Implementierung. Quellen und Grenzen: [externe Analyse](../../_shared/external-sources.md).
