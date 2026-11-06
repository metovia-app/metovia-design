# Landingpage-Guidelines

Alle L-Regeln sind **Recommended**. Eine bestehende Metovia-Landingpage wurde
in diesem Auftrag nicht erneut auditiert; hier entsteht keine zweite App.

## L01: Redaktioneller Aufbau

Jeder Abschnitt beantwortet eine konkrete Frage: Was bringt Metovia, wie sieht
die Arbeit damit aus, warum ist das glaubwürdig, was ist der nächste Schritt?
Mit einem verständlichen Produktnutzen beginnen; wenige substanzielle Abschnitte
statt langer Kartenlandschaften. Typografie und Ausrichtung tragen die Hierarchie,
Produktbeispiele belegen Aussagen. Große Headlines dürfen auf schmalen Displays
umbrechen. Eine primäre Handlung und ein verständlicher Demo-Einstieg reichen
häufig; keine zusätzliche Badge-/Logo-/CTA-Schicht ohne Aufgabe.

Herkunft: R01/R02, [Apple Layout](https://developer.apple.com/design/human-interface-guidelines/layout),
als ergänzende Anregung die Abschnitts-/Produktbildanalyse in
[SudewaJay marketing-pages](https://github.com/SudewaJay/apple-design-skill/blob/main/apple-design/references/marketing-pages.md).
Die konkrete Seitenabfolge und monochrome Metovia-Marke sind eigene Entscheidungen.
Keine Apple-Seitenformel, Farben, Mindestheadlinegröße oder Gradients übernehmen.

## L02: Verwandtschaft mit der Anwendung

Vorhandene Metovia-Wortwahl, Typografierollen und Controlverhalten verbinden
Marketing und Produkt. Produktoberflächen in einer Demo verwenden ihre echten
Komponenten-/Themeverträge, statt für den Screenshot umgefärbt zu werden.
Marketing darf großzügiger und editorialer sein; CMS-Dichte ist keine Vorgabe
für Hero-Text. Neue Markenentscheidungen ausdrücklich dokumentieren.
Herkunft: [gemeinsame Komponentenstandards](../../_shared/components.md) und R07.

## L03: Statische Fassung und Progressive Enhancement

HTML enthält Nutzen, lesbare Inhalte, Navigation, CTA und einen direkten
Demo- bzw. Alternativweg. 3D ist optionale Erklärung, keine Voraussetzung für
die Kernaufgabe. Vor dem Laden eines Modells ein stabiles Poster mit reserviertem
Seitenverhältnis zeigen. Fehlendes WebGL, Fehler, lange Ladezeit oder Reduced
Motion führen zu DOM-Demo/Poster statt zu einem leeren Canvas.
Herkunft: [Apple Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility),
[WCAG](../../_shared/accessibility.md); die konkrete Fallbackstrategie ist Metovia-Entwurf.

## L04: Scrollytelling

Native Scrollsteuerung, keine eingefangenen Wheel- oder Touchbewegungen.
Optionales Sticky erklärt einen Produktzusammenhang und hat ein sichtbares Ende.
Keine Inhalte bis zu einer Animationsschwelle verborgen halten. Ein sichtbarer
Weiter-/Überspringenweg funktioniert auch per Tastatur. In schmaler Ansicht,
bei Zoom und Reduced Motion normale Dokumentreihenfolge statt langem Pinning.
Herkunft: [Apple Motion](https://developer.apple.com/design/human-interface-guidelines/motion)
und [Kowalski remove-animations](https://github.com/emilkowalski/skills/blob/main/skills/remove-animations/SKILL.md).

## L05: Demo statt Attrappe

Eine 3D-Produktpräsentation muss eine echte Produktaufgabe erklären. Keine
herumfliegenden Geräte ohne Funktion. Explizites „Demo starten“ führt in einen
bedienbaren Zustand mit sichtbarem Ausstieg; die Textur eines Screens ist keine
zugängliche Anwendung. Die sichere synthetische Demo hat keine Produktzugänge,
privaten Daten oder ungekennzeichneten echten Mutationen.
Herkunft: R03/R06, Apple Feedback; die Trennung Canvas/DOM ist Metovia-Anpassung.
[Laptop-Spezifikation](laptop-demo.md) konkretisiert die Übergabe.

## L06: Leistungs- und Ladeplan

Three.js nur bei begründetem 3D-Bedarf und passendem vorhandenen Stack verwenden.
Keine neue Library für eine Kamerafahrt pauschal vorschreiben. Modell und Texturen
erst nach Bedarf laden; HTML/CTA nicht durch Hydration oder Assetdownload blockieren.
CSS bestimmt die Canvas-Anzeigegröße, Drawing Buffer und Kameraaspekt werden bei
Resize passend aktualisiert; Pixelratio auf schwachen Geräten begrenzen.
Quelle: [Three.js Responsive Design](https://threejs.org/manual/pages/responsive.html).

Im Konzept ein konkretes Zielprofil und vorläufiges Budget vereinbaren, z. B.
mittelklassiges Mobilgerät, gedrosseltes Netz, maximal 2 MiB zusätzliche komprimierte
3D-Assets für den ersten erklärenden Zustand. Das ist ein **Metovia-Testbudget**,
kein gemessener Ist-Wert oder allgemeiner Grenzwert. Bei Überschreitung Assets
vereinfachen oder die 2D-Fassung ausliefern. CPU-/GPU-Framezeit, Transfer,
Layoutstabilität und Reaktion auf Eingaben messen; allein eine kleine Datei
beweist keine gute Interaktion.

Keine dauerhaft laufende Renderschleife im ruhenden, verdeckten oder nicht
sichtbaren Zustand, sofern die Szene keine Aktualisierung braucht. Events,
Observer und Framecallbacks aufräumen; Texturen, Materialien und Geometrien bei
endgültiger Freigabe gezielt disponieren, gemeinsam genutzte Ressourcen nicht
vorzeitig zerstören. Quellen: [Three.js Cleanup](https://threejs.org/manual/pages/cleanup.html)
und [React Cleanup](https://react.dev/reference/react/useEffect).

## Qualitätsabnahme

Nutzen ohne Animation verständlich; CTA ohne WebGL erreichbar; kein verborgenes
Pflichtkapitel; Demo per Tastatur bedien-/verlassbar; mobile Fassung nicht nur
verkleinertes Desktop-Canvas. Ladefehler, Resize, Zoom, Zurücknavigation,
Reduced-Motion-Wechsel und schwächeres Testprofil prüfen. Markenzugehörigkeit
begründet beurteilen, nicht Apple-Ähnlichkeit bewerten. Noch nicht gemessene
Leistung als offene Prüfung ausweisen.
