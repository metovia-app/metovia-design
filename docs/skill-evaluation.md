# Szenariotests der vier Skills

Stand: **06.11.2026**, Paket 0.2.0. Getestet wurden die tatsächlichen Skill-
Anweisungen samt ihren erreichbaren Referenzen, nicht lediglich deren Beschreibungen.
Die Szenarien sind synthetisch und enthalten keinen privaten Produktcode.

## Verfahren

Für jedes Szenario wurde eine separate Agentensitzung mit leerer Vorgeschichte
gestartet. Sie erhielt nur Arbeitsverzeichnis, konkreten SKILL.md-Pfad, den
Szenarioauftrag und die Grenze „keine Produktzugriffe/-änderungen“. Die Sitzung
las Skill und benötigte Referenzen selbst. Erwartete Antworten und vermutete
Schwachstellen wurden ihr nicht mitgegeben. Die tatsächliche Antwort sowie die
Liste gelesener Dateien wurden lokal gespeichert und anschließend anhand der
unten genannten Kriterien manuell geprüft. Lokale Rohprotokolle bleiben im
ignorierten Recherchebereich, da sie Werkzeug- und Arbeitsumgebungsdetails
enthalten können. Hier stehen die fachlichen Ergebnisse und die reproduzierbaren
Eingaben. Es handelt sich nicht um statistische Evals oder deterministische
Sprachmodelltests.

## A: SaaS-Einstellungen

Eingabe: [a-settings.md](../tests/scenarios/a-settings.md), Skill `metovia-design`.
Geprüft: Bestand erhalten, Hierarchie, Responsive, Zustände, Accessibility,
Markenkonflikt und klare Nachweisgrenzen.

Tatsächliches Ergebnis: drei sachliche Einstellungsabschnitte statt einzelner
animierter Cards; gemeinsame Feldkanten und Modultokens; zusätzliche Speicheraktion
am Formularende im selben Zustandsvertrag; IDs für Hinweise/Fehler; klare
Dirty-/Saving-/Saved-/Error-Zustände und kein Wechsel zu SF Pro. Die Antwort
unterschied den Dialog-Dirty-Schutz ausdrücklich vom noch zu prüfenden Schutz
beim Verlassen einer Seite. Schmale Ansicht und überdeckte Fokusfelder wurden
konkret adressiert. Keine CMS-Tokenwerte für das neue Modul erfunden.

Ergebnis: die genannten Prüfkriterien erfüllt. Schwäche: die damalige Formulierung
verlangte eine Zielcheckoutprüfung auch bei einem reinen Szenario. Ergänzt wurde,
dass ohne autorisierten Checkout ausschließlich gegebene Fakten verwendet und
Grenzen genannt werden. Die Antwort hatte dies bereits korrekt eingeschränkt.

## B: UI-Audit

Eingabe: [b-list-review.md](../tests/scenarios/b-list-review.md), Skill `metovia-ui-review`.
Geprüft: konkrete Befunde, Prioritätsbegründung, elf Dimensionen, Trennung von
Fehler/Verbesserung/Präferenz/offener Prüfung und Wiederverwendung.

Tatsächliches Ergebnis: zwei P1-Befunde für nicht tastaturbedienbare Zeilennavigation
und fehlenden Buttonnamen. Korrekturen: echter Titel-Link in vorhandener Tabelle
und Benennung derselben Buttonkomponente. Zwei P2-Verbesserungen betreffen den
unerklärten Nulltreffer und wiederholte Zeilenauftritte. Der vorgeschlagene
400-ms-Fade wurde nicht als automatischer Fortschritt akzeptiert. Stärkere
Schatten blieben Präferenz. Screenshotbasierte WCAG-Vollfreigabe wurde verworfen;
unbekannte Kontraste und Hitboxen wurden nicht als Verstoß erfunden.

Ergebnis: Prüfkriterien erfüllt. Die Gesamtdauer des Staffels und sein Einfluss
auf echte Eingaben bleiben ungeprüft; die Antwort nannte diese Grenze.

## C: Dropdown und Dialog

Eingabe: [c-motion.md](../tests/scenarios/c-motion.md), Skill `metovia-motion`.
Geprüft: bestehende Tokens/Primitiven, Timing/Easing, Positionsvertrag,
Unterbrechung/Exit, Fokus, Reduced Motion und Bibliotheksentscheidung.

Tatsächliches Ergebnis: vorhandene Primitiven und 160-ms-Oberflächentoken blieben
Grundlage. Eine eigene opacity-basierte Skizze wurde gewählt, um Kollisionsseite
und positionsgebendes `transform` nicht zu beschädigen. `transition: all`,
500-ms-Fokus-Timer, `scale(0)`, unsichtbare Tabstopps und veraltete Completion-
Callbacks wurden konkret adressiert. Reduced Motion darf ohne Animationsereignis
abschließen. Keine zusätzliche Bibliothek oder pauschale Press-Skalierung.

Ergebnis: fachliche Kriterien erfüllt; keine echte Dialog-/Transitionlaufzeit
getestet. Erkannte Textschwäche: eine Beispielsatzfolge konnte den Eindruck
erwecken, dass die beschriebenen Wechseltests bereits als UI-Abläufe ausgeführt
wären. Sie wurde ausdrücklich in zukünftige Abnahmeschritte und den tatsächlich
durchgeführten instruktionalen Szenariotest getrennt.

## D: Interaktive Laptop-Demo

Eingabe: [d-laptop.md](../tests/scenarios/d-laptop.md), Skill `metovia-landing`.
Geprüft: kurze Story, räumliche Kontinuität, Kamerageometrie, Zustände,
Canvas-/DOM-Übergabe, Eingabebesitz, Rückweg, Fallbacks und Leistungsplan.

Tatsächlicher erster Lauf: kurzer produktbezogener Seitenaufbau, kollisionsfreie
frontal ausgerichtete Kamerapose aus Screengeometrie/FOV, explizite Zustände von
Poster bis Interactive, Abbruch/Überspringen, nur eine interaktive Schicht und
echte DOM-Demo. Globaler Wheel-Lock und CTA-Verstecken bis Assetende wurden
verworfen. Mobile-/Reduced-Motion-Fassung, WebGL-Ausfall, bedarfsgesteuertes Rendern
und Ressourcenfreigabe wurden konkret geplant. Budgetzahlen wurden als Vorschläge
und ausstehende Tests, nicht als Messungen ausgegeben.

Erkannte Schwächen: Die alte Integrationsanleitung versprach einen allein
kopierbaren Einzelordner, während die neuen Referenzen einen Verbund benötigen.
Das wurde auf die gemeinsame Installation aller vier Skills und `_shared`
korrigiert. Außerdem wurden mehrere konzeptionelle Risiken pauschal P0 genannt.
Der Skill fordert nun eine auswirkungsbezogene Priorität und trennt fehlende
Konzeptangaben ausdrücklich von kritischen Produktfehlern. Ein zusätzlicher
unabhängiger Wiederholungslauf kam wegen einer technischen Sitzungsgrenze nicht
zustande. Die geschärfte Fassung wurde deshalb manuell mit denselben tatsächlichen
Skill-Anweisungen nachgeprüft: [vollständige Nachprüfung](../tests/results/d-final-review.md).
Sie unterscheidet P1-Aufgabenbarrieren von P2-Konzept-/Komfortrisiken und leitet
kein P0 allein aus fehlenden Angaben ab. Das ist kein unabhängiger zweiter Eval.

## Technische Prüfungen

Die erweiterte Validierung erkennt genau vier Skill-Einstiege, eindeutige
Metadaten, Referenzen/Anker im installierbaren Verbund, 47 historische Themen und
acht externe Quellen-/Lizenzdatensätze. Sie prüft alle veröffentlichbaren Dateien
und schützt wichtige Projektdateien vor zu breiten Ignore-Regeln.

`node scripts/test-validation.mjs` prüft zusätzlich echte Kopien: vollständige
Installation funktioniert; fehlende Shared-Referenz, falscher Skillname und
versehentlich ignorierte Skills müssen scheitern. Öffentliche Quelllinks,
einschließlich öffentlicher Revisionen, und JSON-URLs sind erlaubt; unbekannte
Quelladressen, nackte Revisionswerte und synthetische Zugangsdaten werden erkannt,
ohne Geheimwerte im Fehlertext auszugeben. Beide Prüfkommandos liefen erfolgreich.
Die Kopie mit allen vier Skills funktionierte; die drei absichtlich beschädigten
Varianten wurden jeweils abgewiesen. Die Unitfälle zu öffentlichen Links,
JSON-URLs, unbekannten Quellen und redigierten Zugangsdatenmeldungen bestanden.

Abschlussstand: vier erkannte Skills, 31 Markdown-Dateien, 212 interne Links,
47 unveränderte historische Themen und acht Quellen-/Lizenzdatensätze. Alle
38 veröffentlichbaren Dateien wurden geprüft. Ein gesonderter Vergleich mit
dem öffentlichen Standardbranch bestätigte, dass die 14 Current-Regeln samt
Tokenwerten und alle acht ursprünglichen Auditbefunde erhalten sind.

## Grenzen

Keine reale Produkt-, Browser-, Screenreader-, WebGL-, Performance- oder
Deploymentverifikation. Keine neue WCAG-Konformität behauptet. Die bestehende
Produktbaseline wurde nicht neu auditiert; externe Referenzen sind Qualitätsmaßstab,
keine Implementierungsbelege. Lizenzprüfung betrifft die gelesenen öffentlichen
Dateien, keine pauschale Freigabe aller zukünftigen Fremdinhalte.
