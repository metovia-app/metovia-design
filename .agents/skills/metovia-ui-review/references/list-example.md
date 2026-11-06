# Beispiel: Listenansicht

Synthetisches Beispiel, kein Befund über die echte Metovia-Anwendung.
Gegeben: eine Artikelübersicht mit vorhandenen ListHeader-/ListTable-Bausteinen,
einem unbenannten Iconbutton und einem als klickbar beschriebenen Tabellenrow
ohne Link oder Tastaturhandler. Farbdaten und Laufzeit fehlen.

| Priorität / Typ | Beobachtung | Korrektur im Bestand | Abnahme |
| --- | --- | --- | --- |
| P1 / Fehler | Iconbutton hat laut vorliegendem Markup keinen zugänglichen Namen | Benennung in derselben Buttonkomponente ergänzen, dekoratives Icon ausblenden | Name/Role im Accessibilitybaum prüfen |
| P1 / Fehler | Zeilennavigation ist nur über Klick erreichbar | Echten Titel-Link in der vorhandenen Tabellenzelle nutzen, Row-Klick nur ergänzend | Titel per Tab/Enter öffnen |
| Offen | Kontrast und Responsive fehlen als Messung | Farben und Hitboxen erheben, Zoom/Reflow testen | Light/Dark und 320-CSS-px-Prüfung |

Ein Wunsch nach stärkerem Schatten wäre eine Präferenz, solange kein belegtes
Unterscheidungsproblem vorliegt. Die existierenden Listenbausteine bleiben
positiver Bestand. Kriterien: [Accessibility](../../_shared/accessibility.md),
R01/R06/R08 und die [Reviewrubrik](review-rubric.md).
