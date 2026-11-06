# Proposed und Future

Alle Einträge sind Planungsentscheidungen vom 06.11.2026. Es gibt in diesem
Auftrag keine Produktimplementierung dieser Vorschläge. Belege und Befund-IDs
stehen im [Audit](design-audit.md); der belegte Bestand steht unter
[Current](current-standards.md).

## Proposed: priorisierte Verbesserungen

| ID | Priorität | Vorschlag / Bezug | Voraussetzung für spätere Übernahme als Current |
| --- | --- | --- | --- |
| P01 | Mittel | Größenkontexte explizit beschreiben; Dichte-/Größenvarianten im vorhandenen Button evaluieren (I01) | Kaskade in Sidebar, Header, Formular und Properties in beiden Themes vermessen; API ohne unbeabsichtigte Größenänderungen |
| P02 | Mittel | Newsletter-Erstellen an `CreateButton`/Artikelverwaltung angleichen (I02) | Gleiche Aufgabe/Hierarchie bestätigen; normal/hover/focus/busy und schmale Ansicht prüfen |
| P03 | Mittel | Bestehende Dropdownoberflächen konsistent gestalten (I03) | Escape, Fokus zurück, Tab, Randposition, Scrollclipping und Portale prüfen; native Disclosure-Semantik nicht versehentlich in unvollständige Menüsemantik umwandeln |
| P04 | Mittel | Shared-Destructive-Tokenvertrag klären (I04) | Tatsächliche Verbraucher außerhalb des CMS ermitteln; keine globale Umfärbung ohne Scopevergleich |
| P05 | Mittel | Typografierollen aus bestehender Dichte ableiten; Lesbarkeit prüfen (I05) | Light/Dark, Zoom und kleine Displays vergleichen; neue Mindestgrößen erst nach belegter Entscheidung |
| P06 | Hoch | Hinweise und Feldfehler programmatisch verknüpfen (I06) | Vorhandenes FormField kompatibel erweitern; generierte IDs, mehrere Felder und Screenreaderzuordnung prüfen |
| P07 | Niedrig | Scrollregionslabel deutsch formulieren (I07) | Verständlicher zugänglicher Name bei kompakter und scrollbarerer Tabelle |
| P08 | Mittel | Infoboxfarben semantisch erfassen (I08) | Warnung/Tipp/Info im CMS und Magazin vergleichen; Kontrast messen, bisherige Bedeutung erhalten |

„Hoch“ priorisiert die künftige Umsetzung innerhalb eines passenden Auftrags;
es behauptet keinen bereits abgeschlossenen Accessibility-Audit.

## Future: noch nicht verbindliche Produktentscheidungen

| ID | Planung | Offen / notwendiger Nachweis |
| --- | --- | --- |
| F01 | Mandantenfähiges Branding | Technische Tokenauflösung, erlaubte Anpassungen und Kontrastgrenzen anhand der realen Mandantenimplementierung festlegen |
| F02 | Metovia-Landingpage | Tatsächlichen Produktstand auditieren; Marketingtypografie/Farben nicht ungeprüft aus CMS oder Magazin ableiten |
| F03 | Quellenzuordnung nach einer Repositorymigration | Autorisierte interne Quellenzuordnung separat aktualisieren; keine Migration im Designauftrag |
| F04 | Eigenständige öffentliche Magazinwebsite | Komponenten-/Tokenverantwortung und Versionierung erst anhand des späteren Projekts festlegen |
| F05 | Gemeinsame ausführbare Token-/Komponentendistribution | Erst bei konkretem Wiederverwendungsbedarf planen; aktuell bleiben Styles und Komponenten im Monorepo |

## Von Proposed zu Current

Für eine übernommene Änderung Problem, betroffenen Scope, Begründung,
Komponente und tatsächliche Verifikation öffentlich festhalten. Genaue
Implementierungspfade und Revisionen bei Bedarf getrennt intern dokumentieren.
Den alten Audit als historischen Nachweis erhalten; einen neuen Auditstand und
eine neue Paketversion erstellen. Ein Dokumentationsmerge allein beweist keine
Produktimplementierung. Ungeprüfte Vorschläge werden nicht durch Ablauf der Zeit
verbindlich.
