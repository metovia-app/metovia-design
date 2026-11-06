# UI-Reviewrubrik

Eigene Metovia-Methode, **Recommended**. Herleitung: R01–R08 der
[Prinzipien](../../_shared/principles.md),
[Apple Layout](https://developer.apple.com/design/human-interface-guidelines/layout),
[Kowalski Review](https://github.com/emilkowalski/skills/blob/main/skills/review-animations/SKILL.md)
und [dickwu Kontext-/Befundmethode](https://github.com/dickwu/apple-design-skill/blob/main/SKILL.md).
Kein externer numerischer Gesamtscore wird übernommen.

## Elf Prüfdimensionen

| Dimension | Beobachtung / konkreter Test |
| --- | --- |
| Visuelle Hierarchie | Hauptaufgabe, Titel, primäre Aktion und wichtige Daten beim ersten Blick erkennbar? |
| Konsistenz | Gleiche Aufgabe nutzt denselben Komponenten-/Zustandsvertrag innerhalb eines Scopes? Bewusste Magazin-/Marketingunterschiede erhalten? |
| Abstände/Alignment | Zusammengehörige Inhalte gruppiert, gemeinsame Kanten, vorhandene Tokens; langes Label und leere Bereiche geprüft? |
| Typografie | Rollen unterscheidbar, lesbare Gewichte, Umbruch bei Vergrößerung, Zahlen/Daten scanbar? |
| Interaktionszustände | Normal, Hover, Fokus, Active, Disabled, Busy, Erfolg, Fehler und leer soweit relevant? |
| Verständlichkeit | Aktion sagt Ergebnis, Fehler nennt nächsten Schritt, deaktivierte Funktion nachvollziehbar? |
| Accessibility | W3C-Kriterium und Nachweis; Tastatur, Name/Role/Value, Fokus, Kontrast, Zielgrößen und Status? |
| Responsive | Schmal, breit, langer Inhalt, Zoom und lokalisierter Text; keine verlorene Funktion? |
| Motion | Zweck/Häufigkeit, keine Wartepflicht, Unterbrechung, Reduced Motion; echte Messung oder nur Risiko? |
| Wiederverwendung | Bestehende Shell/Fields/Lists/Dialogs geprüft? Konkrete Lücke statt zweiter Bibliothek? |
| Umsetzbarkeit | Kleinste passende Korrektur, Zustands-/Datenvertrag, Aufwand und Abnahmetest benannt? |

Nicht geprüfte Dimensionen mit Grund nennen. Keine Fehlerzahl als Maß für die
Qualität des Reviews maximieren. Der Nachweis zählt, nicht die Strenge des Tons.

## Priorität und Evidenz

| Priorität | Folge |
| --- | --- |
| P0 | Zentrale Aufgabe unmöglich, gravierender Datenverlust oder kritischer Ausschluss ohne nutzbaren Weg |
| P1 | Wesentliche Bedien-/Accessibilitybarriere, häufige Fehlhandlung oder fehlende Wiederherstellung |
| P2 | Belegte Reibung oder Inkonsistenz mit begrenzter Folge |
| P3 | Optionale Präzisierung; Präferenzen separat ausweisen |

Priorität mit Häufigkeit, betroffenen Personen und Alternativweg begründen.
Nicht jeder AA-Verstoß ist automatisch P0; der Verstoß bleibt unabhängig von
der Priorität zu beheben. Screenshot, Codebeschreibung und Messung unterscheiden.
Risiken ohne Nachweis als „zu prüfen“ kennzeichnen, nicht als vorhandene Defekte.

## Befundformat

| ID / Priorität / Typ | Beobachtung und Evidenz | Nutzerfolge / Kriterium | Bestehender Ansatz und Korrektur | Abnahme |
| --- | --- | --- | --- | --- |
| U01 / P1 / Fehler | Konkret gemessener oder beschriebener Zustand | Aufgabe, betroffene Nutzer, Quelle bzw. Regel-ID | Vorhandene Komponente und kleinste Änderung | Reproduzierbarer Test |

Öffentliche Berichte verwenden neutrale Komponentenbezeichner, keine privaten
Quelladressen oder Revisionsdaten. Bei intern autorisiertem Codezugriff genaue
Belege getrennt führen. Vorher-/Nachherbeschreibung dient dem Verständnis,
nicht dem Kopieren eines externen Berichttemplates.

Abschluss: funktionierende Aspekte, priorisierte nächste Schritte, offene
Prüfungen. Kein Konformitäts- oder Performanceversprechen aus bloßem Augenschein.
