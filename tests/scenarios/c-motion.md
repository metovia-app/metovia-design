# Szenario C: Dropdown und Dialog

Verwende `metovia-motion` für konkrete Empfehlungen und eine kleine illustrative
CSS-/Ablaufskizze. Keine Produktdateien ändern.

Die synthetische Oberfläche hat vorhandene zugängliche Dialog-/Dropdownprimitiven,
einen Presence-Mechanismus und die dokumentierten Metovia-Motiontokens. Die
Dropdownposition wird mit `transform` vom Primitive berechnet. Beim Austritt
kann es durch Kollisionsvermeidung nach oben oder unten ausgerichtet sein.

Der aktuelle Versuch setzt `transition: all 500ms ease-in`, öffnet den Dialog
aus `scale(0)` und fokussiert ein Feld nach einem starren 500-ms-Timer. Nach
Schließen sind unsichtbare Felder noch per Tab erreichbar. Erneutes Öffnen
während Exit spielt die alte Completion weiter ab. Eine Reduced-Motion-Regel
setzt die Dauer auf null, während der Unmount auf `transitionend` wartet.

Die Erstellaktion ist im Bestand bereits als kompakter Ghostbutton mit Plus
definiert. Eine neue Library und Press-Skalierung werden vorgeschlagen, um
„überall dieselbe Bewegung“ zu erhalten.
