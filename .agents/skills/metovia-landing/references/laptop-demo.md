# Laptop-Demo: Kamera und Übergabe

**Recommended / Metovia-Konzept**, kein vorhandener Produktcode. Ausgangspunkt:
Laptop in schräger Draufsicht; nach bewusster Aktivierung fährt die Kamera vor
den Bildschirm und übergibt an eine bedienbare Demo. Die räumliche Kontinuität
folgt R03/R05 und [Apple Motion](https://developer.apple.com/design/human-interface-guidelines/motion).
Zustandsmodell, Kameramethode und Eingabevertrag unten sind eigene Ableitungen.

## Zustände

| Zustand | Darstellung | Eingabe und Fokus | Übergang / Fehler |
| --- | --- | --- | --- |
| Poster | Statischer Produktkontext, primärer CTA sichtbar | HTML-Link/Button; kein Canvas-Fokus nötig | Direkt zur 2D-Demo oder optionale 3D-Ressourcen laden |
| Preview | Ruhender Laptop schräg von oben | „Demo starten“ / „Direkt zur Demo“; kein Orbitzwang | Aktivierung startet Vorbereitung, nicht Scroll |
| Preparing | Modell und DOM-Demo werden bereitgestellt | Klarer Status; Abbrechen bleibt verfügbar | Fehler/Timeout: direkte DOM-Fassung, kein schwarzer Screen |
| Moving | Zielgerichtete Fahrt vor das Display | Kamera hat Steuerung, Orbit/Drag aus; sichtbares Überspringen/Abbrechen; Seite scrollt weiter normal | Schnelles erneutes Starten erzeugt keine zweite Fahrt |
| Handoff | Letzter 3D-Frame und erste DOM-Ansicht passen zusammen | Nur eine interaktive Schicht; Fokus an benannten Demoeinstieg, wenn Einstieg gewünscht | Daten und Layout vor Übergabe bereit; alte Textur nicht anklickbar |
| Interactive | Echte DOM-Demo | Tastatur, Pointer, Touch; klarer Ausstieg; Canvas dekorativ/inaktiv | „Zur Präsentation“ stellt Kontext, Scrollposition und Fokus wieder her |
| Fallback | Poster/DOM ohne räumliche Fahrt | Gleiche Kernaufgabe, klare alternative Bedienung | WebGL-Ausfall, Reduced Motion, kleine Viewports oder Ressourcenlimit |

Der Zustand kann während Vorbereitung, Fahrt und Demo abgebrochen werden.
Keine Steuerung darf allein an `animationend`, einen geschätzten Timer oder
erfolgreiches WebGL gebunden sein. Bei Unmount alle laufenden Aktionen abbrechen.
Bezug: [Motion M04](../../metovia-motion/references/motion-guidelines.md) und
[React](https://react.dev/reference/react/useEffect).

## Kamera geometrisch planen

1. Screenfläche und deren Welttransformation im Modell bestimmen. Die Mitte,
   Breite/Höhe und zur Kamera zeigende Normale sind explizite Daten, keine
   Schätzung aus dem Laptopgehäuse. Startpose, Bildausschnitt und Horizont sichern.
2. Endpose frontal zur Screenebene ausrichten, Zielpunkt auf Screenmitte halten.
   Bei senkrechtem Blick und festem vertikalem Sichtwinkel kann der Abstand aus
   Screenhöhe und FOV abgeleitet werden: `d = h / (2 * tan(fovY / 2))`.
   Zusätzlich horizontales Fitting über Canvasaspekt und Screenbreite prüfen;
   den größeren nötigen Abstand plus einen bewussten Rand verwenden.
3. Eine einfache kollisionsfreie Bahn planen, die weder Display noch Gehäuse
   schneidet. Position und Orientierung gemeinsam führen; Quaternioninterpolation
   statt unkontrollierter Eulerrotation, stabiler Up-Bezug, kein unnötiger Roll.
   Keine gleichzeitige große FOV- und Distanzänderung ohne erklärenden Zweck.
4. Kurz, ruhig, ohne Überschwingen vor der Oberfläche ankommen. Anfangstiming
   600–900 ms nur als Versuch aus M02; veränderliche Geometrie und Komfort prüfen.
   Bei Reduced Motion die Fahrt überspringen und direkt zur DOM-Fassung gehen.

Diese Geometriemethode ist kein Kowalski-Rezept und kein von Apple vorgeschriebener
Kamerapfad. Framegefühl, Screenabdeckung und Near-/Far-Clipping bleiben zu testen.

## Canvas zu DOM ohne Sprung

Die am Ende projizierten Screenecken mit dem vorgesehenen DOM-Rechteck vergleichen.
Canvasanzeigegröße, Drawing Buffer, FOV und Pixelratio sauber trennen. Bei Resize
während der Fahrt Ziel neu bestimmen oder kontrolliert abbrechen und zur stabilen
2D-Fassung wechseln. Eine bloße CSS-Größenänderung korrigiert keine Kameraprojektion.
Quelle: [Three.js Responsive Design](https://threejs.org/manual/pages/responsive.html).

Die Demodaten und der erste Frame sollen der vorher gezeigten Screenansicht
entsprechen; kein Themen-, Scroll- oder Selektionssprung. Eine kurze Überblendung
kann helfen, ist aber nicht Pflicht. Text und Controls nicht als schräg verzerrte
Canvastextur bedienbar machen. Echter DOM erlaubt semantische Elemente und
Textauswahl; siehe [Three.js HTML-Ausrichtung](https://threejs.org/manual/pages/align-html-elements-to-3d.html).
Die konkrete zugängliche Demoübergabe ist Metovia-Entwurf, nicht Funktion dieser
Three.js-Anleitung.

Während Handoff nur eine Schicht aktiv halten. Sichtbares DOM verdeckt alte
Canvas-Hitflächen; Kamera-/Orbitcontroller bekommen in der Demo keine Wheel- oder
Pointerereignisse. Eine Bildschirmkoordinate aus Raycasting ist kein Ersatz für
HTML-Fokus oder Tastaturbedienung. Kein `tabindex`-Fang im dekorativen Canvas.

## Rückweg, Fallback und Test

Zurück bietet zuerst einen sofort nutzbaren Präsentationszustand; Rückwärtsfahrt
ist optional und nie Pflicht. Ursprünglicher Startbutton bzw. ein sinnvoller
Nachfolger erhält Fokus, ohne durch Scrollrestauration doppelt zu springen.
Bei kleinen Displays lieber direkter Demo-Einstieg als winzig bedienbarer Laptop.
WebGL-Kontextverlust, Ladeabbruch und Energie-/Ressourcenknappheit führen zu
derselben produktbezogenen 2D-Alternative. Vor der Assetübertragung einen
sichtbaren Einstieg zeigen; keine dauerhafte Renderarbeit in Ruhe.

Abnahmeskript: per Enter starten; vor Abschluss Escape/Abbrechen; während Fahrt
Resize; danach zehnmal Wechsel Demo/Präsentation; Touchscroll über dem Produkt;
Tab/Shift+Tab in und aus der Demo; Reduced Motion schon beim Laden und mitten
in der Fahrt; WebGL aus; langsamer Assetdownload; Kontextverlust und Unmount.
Screenecken vor/nach Handoff, Fokusziel, aktive Listener und Ressourcenfreigabe
prüfen. Diese Konzepttests ersetzen keine echte WebGL-/Geräteaufnahme.
