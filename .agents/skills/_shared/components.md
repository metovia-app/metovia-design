# Komponentenstandards für alle Module

**Current** ist nur die [dokumentierte Bestandsaufnahme](../metovia-design/references/current-standards.md)
für CMS und Magazin. Ihre 14 Regeln, 47 Themenreferenzen und acht Auditbefunde
bleiben erhalten. Für ein anderes Modul zuerst dessen echte Komponenten prüfen.

**Recommended**, aus R01–R06 der [gemeinsamen Prinzipien](principles.md):

| Muster | Wiederverwendung und Qualitätsprüfung |
| --- | --- |
| Seitenrahmen | Vorhandene Shell, Navigation und Inhaltsbreite nutzen; verständlicher Seitentitel und primäre Aktion; Modulwechsel erhält Orientierung |
| Einstellungen | Semantische Abschnitte, Feldlabels und zusammengehörige Aktionen; Dirty-, Saving-, Saved-, Error-Zustände; zerstörerische Aktionen getrennt und nachvollziehbar |
| Listen/Tabellen | Bestehende Listenreferenz nutzen; echte Links, Headerbeziehungen, Filter-/Sortierzustand, Pagination und Leer-/Fehlerfälle; schmale Ansicht mit gezieltem Scrollbereich |
| Formulare | Bestehende FormField-/FormMessage-API prüfen; Hinweise/Fehler über IDs zuordnen; Eingaben bei Fehlern erhalten; kein zweites Formsystem |
| Buttons | Vorhandene Varianten und Höhen erhalten; eindeutiger Name; Disabled und Busy semantisch korrekt, besonders bei als Link gerenderten Aktionen |
| Dialoge/Dropdowns | Bestehende Primitiven, Fokusführung, Dirty-Schutz und Portale verwenden; keine Neuentwicklung nur für eine andere Einblendung |
| Status | Text und nötiges Icon; lesbare Farben; Status unabhängig von Motion erfassbar |

Maße und Dichte erst ändern, wenn eine konkrete Aufgabe, Lesbarkeit oder
Accessibility-Anforderung dies begründet. Das 28-px-CMS-Control ist nicht allein
wegen Apples 44-pt-Empfehlung fehlerhaft; tatsächliche Hitbox und WCAG-Ausnahme
prüfen. Neue Komponenten entstehen nur für eine belegte Lücke, als Erweiterung
des bestehenden Systems. Diese Referenz enthält bewusst keine React-Bibliothek.

Beispiel: Eine neue Finanz-Einstellungsseite übernimmt vorhandene Felder und
Buttons ihres Moduls. Die CMS-Bodygröße wird nicht ungeprüft kopiert. Fehlende
Fehlermeldungszuordnung ist eine gezielte Verbesserung der vorhandenen Feld-API.
Technische Abnahme: [Accessibility](accessibility.md), insbesondere Labels, Fokus,
Kontrast, Zielgrößen und Reflow. Externe Herkunft der empfohlenen Prinzipien:
[Apple Layout](https://developer.apple.com/design/human-interface-guidelines/layout),
[Apple Feedback](https://developer.apple.com/design/human-interface-guidelines/feedback)
und W3C-Kriterien in der verlinkten Accessibility-Referenz.
