# Externe Referenzen: Analyse und Herkunft

Inhaltlich geprüft am **06.11.2026**. Es wurden öffentliche Dateien gelesen,
keine fremden Skripte ausgeführt und keine fremden Skill-Dateien installiert.
Die Auswahl beschreibt gelesene relevante Abschnitte, keinen vollständigen Audit
jedes externen Repositorys. Öffentliche Seiten können sich später ändern.
Maschinenlesbares Quellenverzeichnis: [external-sources.json](external-sources.json).

## Apple HIG

Die [HIG-Startseite](https://developer.apple.com/design/human-interface-guidelines/)
lieferte im Textbrowser zunächst nur einen JavaScript-Hinweis. Apples angebotene
Markdownfassung ließ sich per HTTP laden. Gelesen wurden Design principles,
Layout, Typography, Accessibility, Motion und Feedback sowie die Themenübersicht
Navigation and search. Letztere ist ein Index, keine eigenständige Navigationsnorm.

Konkrete Ergebnisse: Layout beschreibt Lesen nach Wichtigkeit, Ausrichtung,
Gruppierung und Offenlegung zusätzlicher Optionen; Typography unterscheidet
Lesbarkeit und Hierarchie und behandelt vergrößerte Texte; Motion fordert Zweck,
kurzes Feedback und Abbruchmöglichkeiten. Feedback unterscheidet beiläufigen
Status von einer Unterbrechung. Diese Aussagen werden als R01–R06 in
[Prinzipien](principles.md), in der Reviewrubrik und im Motion-Entscheidungsbaum
angewendet, nicht nur als Inspirationslinks angehängt.

Metovia übernimmt keine Liquid-Glass-Materialien, Apple-Punktgrößen, nativen
Menübalken oder SF-Schriftdateien. Browserzoom, semantisches HTML und WCAG
ersetzen native Plattformmechanismen. Apple-Inhalte bleiben Apple-Inhalte;
keine HIG-Seiten, Grafiken oder langen Zitate werden hier weiterverteilt.

## Emil Kowalski

[Repository](https://github.com/emilkowalski/skills), Lizenzdatei **MIT**,
Copyright 2026 Emil Kowalski, gelesen. Das Repository umfasst sowohl Bau- als
auch Review-, Reduktions-, Choreografie- und Performanceskills. Untersucht wurden
insbesondere `emil-design-eng/SKILL.md` (Entscheidungs- und Komponentenabschnitte),
`animate/SKILL.md`, `review-animations/SKILL.md`, dessen `STANDARDS.md`,
`remove-animations/SKILL.md`, die Diagnose-/React-Abschnitte von
`animation-performance/SKILL.md`, `improve-animations/AUDIT.md` und die
Einstiegs-/Entscheidungsabschnitte von `choreograph/SKILL.md`.

Die Struktur trennt kurze Aufgabenrouten von genauen Referenzen und Recipes.
Der Animationsbau prüft zunächst, ob Bewegung nötig ist, dann Zweck, Werkzeug,
Eigenschaften, Kurve, Dauer, Unterbrechung und Exit. Reviews verlangen konkrete
Vorher-/Nachher-Korrekturen und Folgen; die Reduktionsroute untersucht auch
unsichtbar bleibende Startzustände und Lebenszyklusabhängigkeiten. Choreografie
unterscheidet gleichzeitige, überlappende und geordnete Abläufe. Performance wird
als Diagnose von Framearbeit statt als nachträgliches `will-change` behandelt.

Übertragung: Motion-Gate M01, Lebenszyklus M04, Review-Befundformat und
Performanceprüfungen. Keine fremden Dateien, Recipes oder Bibliotheksimplementierungen
kopiert. Eigene Beispiele verwenden bestehende Metovia-Werte. Bei einer späteren
Übernahme erheblicher MIT-Text-/Codeanteile wären Copyright- und Lizenzhinweis
mitzuliefern; diese Lieferung enthält eigenständige Regeln und Beispiele.

Bewusst **nicht pauschal übernommen**: jedes Tastaturereignis ohne Animation,
jedes `ease-in` als Fehler, ausschließlich Transform/Opacity als Garantie für GPU,
ein obligatorischer Press-Scale und ein generelles Verbot reiner Fades. Auch
die externen Dialogbereiche und die Unter-300-ms-Regel sind keine widerspruchsfreie
universelle Spezifikation. Metovia bewertet Zweck und Messung, erlaubt einen
sofortigen Fokuswechsel und bewahrt bestehende Motion. Bibliotheksversionen und
Beschleunigung bei Implementierung separat anhand offizieller Dokumentation prüfen.

## dickwu/apple-design-skill

[Repository](https://github.com/dickwu/apple-design-skill), gelesen: `SKILL.md`,
relevante Abschnitte in `references/cross-platform.md` und
`references/code-audit.md`, Dateiinventar und Lizenzsuche. Im untersuchten
Repositorybaum wurde **keine LICENSE-/COPYING-/NOTICE-Datei gefunden**. Daher
werden keine Texte, exportierten HIG-Seiten oder Skripte daraus übernommen.

Stärke: Kontext und Aussagegrenzen des Artefakts vor dem Urteil, gezieltes Laden
der Guidelines, Übertragung auf Frameworks und Befunde mit Beobachtung, Ursache
und Korrektur. Das stützt R08 und den Evidenzgrad der Reviewrubrik.
Grenzen: viele native Konventionen, ein sehr breiter Trigger und nicht unmittelbar
auf WCAG-CSS-Werte übertragbare Größen-/Kontrastangaben. Metovia übernimmt weder
alle Accessibility-Befunde automatisch als kritisch noch native Grenzwerte als
Webnorm. Zahlen werden gegen W3C geprüft; Apple-Pay-/Foldable-Audits liegen
außerhalb des vorliegenden SaaS-Skillumfangs.

## SudewaJay/apple-design-skill

[Repository](https://github.com/SudewaJay/apple-design-skill), gelesen: README,
`apple-design/SKILL.md`, Layout-/Marketingabschnitte in
`references/marketing-pages.md` und Lizenzdatei. **MIT**, Copyright 2026 Sudewa;
der Repositoryhinweis grenzt eigenen Text von Apples Material ab.

Stärke: Routing zu thematischen Referenzen, eine Aussage pro Abschnitt,
Zusammenhang von Produktbild, Typografie und Story. Metovia nutzt dies als
Anregung für L01 und die Trennung Marketingrahmen/echte Produktoberfläche.
Nicht übernommen: Apple-Ähnlichkeit als Abnahmekriterium, Glass-Pflicht,
zentrierte Universalformel, Gradients, Bento-Raster, feste Apple-Farbwerte oder
Schriftersatz. Diese Empfehlungen widersprechen der eigenständigen monochromen
Metovia-Marke. Keine Dateien oder Code-Rezepte kopiert.

## W3C und technische Primärquellen

Die [WCAG-Übersicht](https://www.w3.org/WAI/standards-guidelines/wcag/),
[WCAG 2.2](https://www.w3.org/TR/WCAG22/), verlinkte Understanding-Seiten und
APG zu Dialog/Menu Button liefern Kriterien und Patternsemantik. Sie werden
eigenständig zusammengefasst; keine W3C-Dokumente gebündelt. Apple-/Communitywerte
ersetzen diese Webkriterien nicht. Kriterien und Testgrenzen stehen in
[Accessibility](accessibility.md).

Offizielle React-, Three.js- und MDN-Dokumentation wurde für Effect-Cleanup,
Canvasgrößen/Projektion, Ressourcenfreigabe, Reduced Motion und WAAPI gelesen.
Die ursprünglichen Three.js-Links unter `manual/en/` ergaben 404; die nach
offizieller Suche gefundenen `manual/pages/`-Seiten waren erreichbar. Konkrete
Techniklinks stehen in den Motion-/Landingreferenzen. Kamerabudgets, Demo-Handoff
und Leistungsabnahme dort sind **Metovia-Entwurfsempfehlungen**, keine von Apple
oder Kowalski vorgeschriebenen Zahlen.

## Übernahmeregel

Jede abgeleitete Regel nennt ihre Quelle am Einsatzort oder verweist über eine
Regel-ID auf deren belegte Herleitung. Originaltext, Grafiken, Markenassets,
Code und Fontdateien werden nicht automatisch durch eine Ideennennung lizenziert.
Bei späteren Kopien erst den konkreten Inhalt und dessen Lizenz prüfen.
