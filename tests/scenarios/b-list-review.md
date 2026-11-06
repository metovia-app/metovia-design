# Szenario B: Listenreview

Verwende `metovia-ui-review` für einen Bericht über diese synthetische CMS-Liste.
Es liegen nur folgende Markup-/Verhaltensbeschreibungen vor, keine laufende UI
und keine verlässlichen Farbwerte oder gemessenen Zielgrößen.

- Die Seite benutzt bestehende ListHeader- und ListTable-Komponenten.
- Eine Aktion wird als `<button><svg /></button>` ohne anderen Namen beschrieben.
- Ein Tabellenrow navigiert mit einem Clickhandler; seine Zellen enthalten
  weder Links noch Buttons, und es gibt keinen Tastaturhandler.
- Ein 600-ms-Staffeleffekt zeigt Zeilen nach jeder Filtereingabe nacheinander.
  Der Vorschlag des Designers ist, stattdessen einen 400-ms-Fade pro Zeile zu nutzen.
- Ein Reviewer möchte stärkere Schatten; er benennt kein Erkennungsproblem.
- Ein Screenshot soll angeblich die vollständige WCAG-Konformität beweisen.
- Ein leerer Filtertreffer zeigt eine komplett leere Tabellenfläche ohne Text.

Priorisiere, begründe und nenne konkrete Korrekturen im vorhandenen System sowie
Abnahmetests. Verändere keine Dateien der Produktanwendung.
