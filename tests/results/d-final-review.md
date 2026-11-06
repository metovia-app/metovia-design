# Szenario D: manuelle Nachprüfung mit metovia-landing

Synthetische Eingabe: [d-laptop.md](../scenarios/d-laptop.md).
Verwendet: [SKILL.md](../../.agents/skills/metovia-landing/SKILL.md), dessen
Landing-/Laptopreferenzen und die dort verlinkten gemeinsamen Prinzipien sowie
Accessibility-Anforderungen. Nachprüfung durch den Hauptagenten nach Präzisierung
der Prioritätsregel, kein zusätzlicher unabhängiger Agentenlauf und kein UI-Test.

## Ergebnis und Priorität

Das Konzept wird als optionale räumliche Produktvorstellung mit anschließend
bedienbarer DOM-Demo weiterentwickelt. Der Scrollfluss bleibt nativ. Current
bezeichnet hier nur beschriebene Szenariofakten; alle Änderungen sind Recommended.
Kontraste, tatsächliche Eingabelatenz und Kameragefühl sind nicht gemessen.

| Priorität | Beschriebenes Risiko und Folge | Konkreter nächster Schritt |
| --- | --- | --- |
| P1 | Canvastextur ohne Tastaturfassung kann die zentrale Demoaufgabe nicht zugänglich abbilden | Semantische DOM-Demo mit sichtbarem Einstieg und Ausstieg als Grundlage |
| P1 | CTA bleibt bis Assetende versteckt; Abbruch-/Fehlerweg fehlt | HTML-CTA und direkter 2D-Einstieg vor jedem 3D-Download verfügbar machen |
| P1 | Kein Rückweg und kein Reduced-Motion-Konzept | Rückkehrzustand, Fokusrestauration und direkte Fassung ohne Kamerafahrt spezifizieren |
| P2 | Wheel-Sperre erzwingt Wartezeit und entzieht Seitenkontrolle | Keine globale Wheel-/Touch-Sperre; Kamera überspringbar und abbrechbar |
| P2 | 18-MB-Asset und dauerhafte Hintergrundschleife bergen Lade-/Energierisiken | Nach Bedarf laden, vereinbartes Budget prüfen und im Stillstand/bei Unsichtbarkeit pausieren |
| P2 | Ausschnitt passt bei 390 px nicht; eine lange Gehäusefahrt riskiert Clipping und Desorientierung | Screenfitting aus Geometrie/Aspekt; mobile DOM-Fassung und kurze kollisionsfreie Außenbahn |

Die Prioritäten beziehen sich auf Nutzerfolgen im beschriebenen Konzept.
P0 wird nicht allein aus fehlenden Konzeptdetails abgeleitet. Wheel-Verhalten
oder ein Downloadvolumen allein beweisen weder einen bestimmten WCAG-Verstoß
noch eine gemessene Performanceverschlechterung.

## Realisierbarer Ablauf

Kurze Seitenstory: konkreter Arbeitsnutzen, eine produktbezogene Aufgabe in der
Demo, nötiger Vertrauens-/Leistungsnachweis und klare nächste Handlung. Keine
generische Kartenlandschaft. Marketingrahmen überwiegend monochrom, die Demo
mit ihren tatsächlichen Metovia-Komponenten und semantischen Tokens.

Die sichtbaren Zustände sind Poster, Preview, Preparing, Moving, Handoff,
Interactive und Fallback. „Demo starten“ bereitet die DOM-Daten und optional 3D
vor; eine wiederholte Aktivierung erzeugt keine zweite Fahrt. Abbrechen oder
Überspringen funktioniert ohne Animationscallback. Nur nach ausdrücklichem
Einstieg Fokus in die bereitstehende Demo bewegen; bei zwischenzeitlicher
Navigation keinen verspäteten Fokusraub auslösen.

Screenmitte, Breite/Höhe und Weltnormale bestimmen die Endpose. Bei frontalem
Blick aus Höhe und vertikalem FOV einen Abstand ableiten, horizontales Fitting
gegen Canvasaspekt prüfen und einen begründeten Rand einplanen. Position und
Quaternionorientierung auf einer kollisionsfreien Bahn zusammenführen, ohne
unnötigen Roll oder starke FOV-Änderung. Die Fahrt ist ein entbehrlicher
Erklärversuch, kein Pflichtweg in die Anwendung.

Am Handoff projizierte Screenecken mit dem DOM-Rechteck vergleichen, Darstellung
und Datenzustand abgleichen und genau eine Eingabeebene aktivieren. Die Textur
bleibt kein zweiter Clicklayer. Orbit-/Dragcontroller empfangen in Interactive
keine Eingaben; echte Links, Buttons und Felder übernehmen. Zur Präsentation
zurückkehren, Kontext/Scrollposition und logischen Fokus erhalten.

Bei Resize die Projektion aktualisieren oder kontrolliert auf 2D wechseln.
Bei Reduced Motion initial oder während der Fahrt direkt den beabsichtigten
bedienbaren DOM-Zustand anbieten. WebGL-Ausfall, Kontextverlust, Abbruch und
langsames Laden dürfen CTA oder bereits funktionierende DOM-Demo nicht entfernen.

Ein Geräte-/Netzprofil und ein vorläufiges Assetbudget vereinbaren. Der in den
Guidelines genannte 2-MiB-Entwurf ist kein Ist-Messwert. Transfer, CPU/GPU-Arbeit,
Layoutstabilität und Reaktion auf Eingaben im Zielprofil aufnehmen. Ressourcen,
Observer, Listener und Framecallbacks nach definiertem Besitz aufräumen.

## Noch auszuführende Laufzeitabnahme

Enter/Tab/Shift+Tab und sichtbarer Ausstieg; Abbruch während Vorbereitung/Fahrt;
schnelle wiederholte Wechsel; Resize/390 px; 200-Prozent-Text/320-CSS-px-Reflow;
Reduced-Motion-Wechsel; WebGL aus und Kontextverlust; langsamer/abgebrochener
Download; genau eine aktive Eingabeebene; Screenecken vor/nach Übergabe;
Ressourcenfreigabe nach Unmount. Diese Laufzeitprüfungen wurden nicht durchgeführt.
