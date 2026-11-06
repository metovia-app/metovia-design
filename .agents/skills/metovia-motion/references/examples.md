# Motion-Beispiele

Eigene illustrative Beispiele, **Recommended**, kein kopierter Produktcode und
keine zusätzliche Komponentenbibliothek. Die echten Primitiven bleiben zuständig
für Presence, Fokus, Tastatur, Dirty-/Busy-Schutz und Beschriftung.

## Dropdown und Dialog

Ein vorhandenes Popover könnte bestehende Tokens so verwenden. Positionsregeln
des Primitives bleiben unberührt; `translate` ersetzt nicht dessen `transform`.

```css
.example-popover {
  opacity: 1;
  translate: 0 0;
  transition-property: opacity, translate;
  transition-duration: var(--surface-duration, 160ms);
  transition-timing-function: var(--interaction-easing, cubic-bezier(0.2, 0, 0, 1));
}
.example-popover[data-state='closed'] {
  opacity: 0;
  translate: 0 -5px;
  pointer-events: none;
}
@starting-style {
  .example-popover {
    opacity: 0;
    translate: 0 -5px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .example-popover {
    transition: none;
  }
  .example-popover[data-state='closed'] {
    translate: none;
  }
}
```

Die Richtung ist nur für einen Anker oberhalb passend. Bei Kollisionswechsel
`data-side` auswerten; alternativ keine Translation verwenden. Nicht jedes
Primitive hält `data-state='closed'` bis zum Ende einer CSS-Transition im DOM:
seinen vorhandenen Exit-/Presencevertrag prüfen. Opazität und `pointer-events`
allein machen Inhalt nicht untabbable. Beim Schließen den Komponentenvertrag
für Fokus/Unmount nutzen; keinen zusätzlichen pauschalen Timer einbauen.
`@starting-style` liefert bei unterstützten Browsern den Eintrittsstart. Alternativ
die Enter-API des Primitives nutzen. Ohne beides erzeugt bloßes Mounten im offenen
Zustand keine Eintrittstransition; der sichtbare direkte Zustand bleibt der Fallback.

Ein Dialog braucht keinen Popoverursprung: seine Zentrierung erhalten und eine
kurze Überblendung prüfen. Anfangsfokus und Abbruch sind sofort verfügbar. Ein
Dirty-Dialog kann gemäß bestehendem Vertrag erst „Verwerfen?“ fragen. Die Exit-
Lebensdauer darf nicht zu unsichtbarem aktiven Hintergrund oder Doppel-Fokus führen.
Herleitung: [M02–M05](motion-guidelines.md), R05 und die dort genannten Quellen.

## React-Ablaufskizze

```text
onOpenChange(next): Zustand über das bestehende Primitive ändern
onPreferenceChange(reduce): aktuelle räumliche Bewegung abbrechen;
                            konsistenten sichtbaren Zustand herstellen
onUnmount: eigene WAAPI-Animationen abbrechen, Listener/Observer entfernen
onCancelledCompletion: veraltete Aktion nicht nachträglich ausführen
```

Bei einer WAAPI-Lösung kann `finished` bei Cancel ablehnen; diesen Pfad bewusst
behandeln. Keine `setState`-Schleife pro Frame. Die Skizze ist kein Ersatz für
die tatsächlich installierte Primitive-/Bibliotheks-API.
Quelle: [WAAPI](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
und [React](https://react.dev/reference/react/useEffect).

## Beispielentscheidung

Auftrag: „Dropdown und Dialog hochwertiger machen.“

Erst prüfen, ob der Dropdown eine häufige Aktionsfläche ist. Sein bestehendes
160-ms-Token kann bleiben; alle Einträge erscheinen zusammen. Beim Dialog den
vorhandenen Wrapper erhalten und gegebenenfalls einen kurzen Fade empfehlen.
Kein neues Motionpaket, kein 500-ms-Scale aus Null. Zehn schnelle Wechsel und
Reduced Motion müssen den korrekten Endzustand samt Fokus erreichen. Diese
Tests sind Abnahmeschritte für eine spätere Implementierung. Der dokumentierte
Skill-Szenariolauf bewertet die Empfehlungen, nicht das Laufzeitverhalten.
