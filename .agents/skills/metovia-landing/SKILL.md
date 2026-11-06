---
name: metovia-landing
description: Hochwertige Metovia-SaaS-Landingpages und Produktdemos konzipieren oder bewerten. Für Editorial Layout, Scrollytelling, Three.js, Laptop-Demos und Kamera-Handoffs; nicht für gewöhnliche App-Formulare oder dekorative 3D-Szenen ohne Produktbezug.
---

# Metovia Landing

Lies [Prinzipien](../_shared/principles.md),
[Accessibility](../_shared/accessibility.md) und
[Landing-Guidelines](references/landing-guidelines.md). Für Laptop-/Kamerademo
zusätzlich [Laptop-Demo](references/laptop-demo.md). Diese Dateien bilden mit
den [Installationshinweisen](../metovia-design/references/integration.md) einen
eigenständig aufrufbaren Referenzverbund; kein anderer Skill-Aufruf ist nötig.

Bestimme Zielgruppe, konkreten Produktnutzen und gewünschte nächste Handlung.
Entwirf eine kurze Story aus nachvollziehbaren Produktaufgaben statt einer
langen Featurekartenliste. R01/R02 übertragen Apples Hierarchie auf eine
eigenständige Metovia-Marke: überwiegend monochrom, klare Ausrichtung,
präzise Typografie und echte Produktdarstellung. Kein Apple-Look und keine
fremden Schrift-, Farb- oder Glass-Rezepte.

Prüfe vorhandene Marketing-/Produktkomponenten zuerst. Die dokumentierte
CMS-Baseline ist keine bereits implementierte Landingpage. Neue Brand- oder
3D-Entscheidungen als Recommended oder Future kennzeichnen. Fremdideen am
Einsatzort belegen; keine nicht lizenzierten Assets oder Skill-Dateien kopieren.

Entwirf die statische zugängliche Fassung zuerst. Navigation, Nutzen, CTA und
Demo-Einstieg müssen auch ohne WebGL, bei reduzierter Bewegung und bei langsamer
Verbindung benutzbar bleiben. Scroll darf keine Pflicht-Kamerafahrt starten oder die Seite
festhalten. Für eine interaktive Demo Einstieg, Rückweg, Fokus und Eingabebesitz
explizit festlegen; echte Bedienung findet in zugänglichem DOM statt.

Für Three.js verlange Perspektive, Kameraziel, Screenfläche und Übergabezustand,
Canvas-/DOM-Ausrichtung bei Resize, Ressourcen- und Renderstrategie sowie
Fallbacks. Beurteile Performance mit einem vereinbarten Geräte-/Netzprofil,
nicht nach einer pauschalen FPS- oder Bundlebehauptung.

Liefere Seitenabfolge mit Zweck je Abschnitt, Demo-Zustandsmodell,
Responsive-/Reduced-Motion-Alternative, Wiederverwendung, Leistungsbudget und
Abnahmetests. Eine schöne Kamerafahrt ohne bedienbaren Endzustand besteht nicht.
Praktisches Laptop-Szenario und Unterbrechungstests stehen in der Detailreferenz.
Bei Konzeptreviews die beschriebenen Risiken von tatsächlich gemessenen
Produktfehlern trennen. Priorität aus belegter Nutzerfolge und Alternativwegen
ableiten; ein kurzer störender Effekt oder eine fehlende Konzeptangabe ist nicht
automatisch eine kritische P0-Barriere. Ungeprüfte Eingabe-/Leistungseigenschaften
als Abnahmepunkt nennen und erfundene Messwerte vermeiden.
