# Motion-Guidelines

## M00: Current und neue Empfehlungen

Current für die dokumentierte CMS-Baseline: Interaktion **180 ms**, Oberfläche
**160 ms**, Sidebar **240 ms**, Theme **300 ms**, Command Palette **120 ms**;
Interaktionseasing `cubic-bezier(0.2, 0, 0, 1)`.
[Bestandsregeln C07/C14](../../metovia-design/references/current-standards.md)
bleiben unverändert. Für andere Module deren vorhandene Werte lesen.
Die folgenden M-Regeln sind **Recommended**, keine stillen Tokenänderungen.

## M01: Zweck, Häufigkeit und Eingabe

Vor jeder Animation festhalten: erklärt sie einen Zusammenhang, bestätigt sie
eine Aktion, zeigt sie einen Zustand oder überbrückt sie einen irritierenden
Wechsel? Danach Häufigkeit und Eingabe prüfen. Häufige Listen-, Such- und
Tastaturnavigation sofort bedienen; kein wiederholtes Staggern von Datenzeilen.
Seltene Produktdemonstrationen dürfen mehr zeitliche Erklärung bekommen.
Quelle: [Apple Motion](https://developer.apple.com/design/human-interface-guidelines/motion),
[Kowalski animate](https://github.com/emilkowalski/skills/blob/main/skills/animate/SKILL.md)
und [remove-animations](https://github.com/emilkowalski/skills/blob/main/skills/remove-animations/SKILL.md).

Metovia entscheidet kontextbezogen: vorhandene 120-ms-Palette nicht automatisch
löschen, nur weil sie per Tastatur öffnet. Erst tatsächliche Verzögerung und
Nutzung nachweisen. Sofortiges Zustandsfeedback bleibt auch ohne Bewegung erhalten.

## M02: Timing und Easing

Zuerst existierende Tokens nutzen. Für eine echte Lücke gelten diese
**Metovia-Entwurfsbereiche**, abgeleitet aus der Häufigkeits-/Timinganalyse von
Kowalski und Apples Forderung nach kurzem präzisem Feedback:

| Situation | Ausgangspunkt für einen Versuch | Qualitätstest |
| --- | --- | --- |
| Hover/Press | vorhandene 180 ms; bei häufiger Bedienung 100–180 ms prüfen | visuelle Reaktion sofort, keine Aktion auf Release verzögern |
| Dropdown/Popover | vorhandene 160 ms; Versuch 120–180 ms | alle Einträge zusammen, lesbarer Anker, kein Wartefenster |
| Dialog | vorhandene Primitiven; Versuch 160–240 ms, Exit gegebenenfalls kürzer | Fokus/Bedienung unabhängig von Animation; kein Größenaufblasen |
| Tabs/Modulnavigation | Inhalt sofort; allenfalls kurze Indikatorbewegung | keine Datentextanimation oder kumulative Verzögerung |
| Produktkamera | gesondertes Zeitbudget, Versuch 600–900 ms nur nach Aktion | Abbrechen/Überspringen und statischer Weg; nicht für normale Appnavigation |

Eintritt soll zügig reagieren und sanft ankommen; die vorhandene Metovia-Kurve
zuerst erproben. Für tatsächlich räumliche Fahrten eine symmetrische Beschleunigung
und Abbremsung erwägen, Hoverfarben können `ease` nutzen. Kein neues Kurvenpaket
wegen einer Stilpräferenz. Springs nur für nachvollziehbare dynamische oder
gestenbasierte Bewegung; keine obligatorischen Bounces im B2B-Arbeitsbereich.
Quellen: Kowalski `animate` und
[STANDARDS](https://github.com/emilkowalski/skills/blob/main/skills/review-animations/STANDARDS.md).

## M03: Komponentenverhalten

| Muster | Recommended-Verhalten |
| --- | --- |
| Hover/Press | Hoverbewegung nur bei `(hover: hover) and (pointer: fine)`; vorhandene Active-/Focus-/Disabled-/Busy-Zustände erhalten. Farbfeedback genügt häufig |
| Popover/Dropdown | Kleine Bewegung vom tatsächlich berechneten Anker; Kollisionsseite und Transformursprung beachten. Kein `scale(0)`; kein Stagger pro Menüeintrag |
| Dialog | Zentrierung unverändert; kurze Fade-/kleine Distanz nur bei Zweck; Hintergrund wird durch Primitive modal, nicht nur optisch dunkel |
| Tabs | Aktive Semantik, Fokus und Inhalte sofort; beweglicher Indikator nur ergänzend; keine duplizierten für Screenreader sichtbaren Tablisten |
| Seitenwechsel | URL, Lade-/Fehlerzustand, Scrollrestauration und Fokus planen. Kein pauschaler Vollseitenzoom zwischen Arbeitsmodulen |
| Loading | Reale Arbeit anzeigen, kein künstlicher Mindesttimer. Platzhalter reserviert Geometrie; Busy bleibt semantisch erkennbar, Shimmer nicht nötig |
| Erfolg/Fehler | Inhalt bleibt lesbar; keine Schüttelanimation als einzige Fehlerrückmeldung und kein erzwungenes Konfetti |
| Scroll | Native Scrollsteuerung; Information nie erst nach Reveal verfügbar. Parallax/Sticky nur mit produktbezogener Erklärung und sicherem Ausstieg |
| 3D/Kamera | Expliziter Einstieg, stabiler Bezugspunkt, keine automatischen Rotationen. Übergabe an DOM und Reduced-Motion-Weg separat spezifizieren |

Herkunft: M01-Quellen und
[Kowalski choreograph](https://github.com/emilkowalski/skills/blob/main/skills/choreograph/SKILL.md).
Konkrete Komponenten-/Interaktionsentscheidungen sind Metovia-Anpassungen.

## M04: Lebenszyklus und Unterbrechung

Zustandsmodell mindestens `closed → entering → open → exiting → closed`, mit
Umkehr von `exiting` zu `entering`, Abbruch und Unmount. Wenn ein vorhandener
Presence-Mechanismus das bereits löst, ihn verwenden. Eine Exitanimation darf
unsichtbare fokussierbare Elemente nicht weiter bedienbar lassen. Fokusmanagement
und Datenbestätigung gehören zum Komponentenvertrag, nicht zum Animationscallback.

Bei schnellem Umschalten von der aktuellen Darstellung weiterfahren; keine
angesammelten Queues oder veralteten Completion-Callbacks. Bei Reduced Motion
auch ohne `transitionend` korrekt schließen. Entfernt man Animationen, versteckte
Startwerte und wartende Timer prüfen. Quellen: Kowalski `remove-animations`,
`animate` und [React Effect-Cleanup](https://react.dev/reference/react/useEffect).

## M05: Reduced Motion

`prefers-reduced-motion` initial und bei Änderungen berücksichtigen. Keine
großräumigen Slides, Skalierung, Parallax oder Kamera bei `reduce`; direkt den
benutzbaren Endzustand oder eine kurze, nicht räumliche Überblendung anbieten,
soweit diese hilfreich und verträglich ist. Null Bewegung ist ausdrücklich gültig.
Der vorhandene CMS-Modus ohne Transition bleibt zulässig. Keine wesentliche
Information verlieren; Status und Fokus bleiben sofort erfassbar.
Quellen: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion),
Apple Motion und [gemeinsame Accessibility-Prüfungen](../../_shared/accessibility.md).

## M06: React und Performance

CSS-Transitions für einfache Zustandswechsel. Für programmatische Kontrolle
WAAPI oder die vorhandene Bibliothek prüfen; deren Cancel-/Unmountverhalten
kennen. React steuert Zustände, nicht jeden Animationsframe über `setState`.
Effects müssen Listener, Observer, Animationen und Framecallbacks aufräumen;
zusätzlichen Setup-/Cleanupdurchlauf im Entwicklungsmodus vertragen.
Quellen: [React](https://react.dev/reference/react/useEffect),
[WAAPI](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
und [Kowalski Performance](https://github.com/emilkowalski/skills/blob/main/skills/animation-performance/SKILL.md).

Transform/Opacity bevorzugen; das ist keine universelle GPU-Garantie. Größenänderung
für ein echtes Accordion nicht durch verzerrte Skalierung von Text ersetzen.
Teure Layout-/Blur-/Shadowarbeit messen, Browser und Layer beachten. `will-change`
nur gezielt und begrenzt. Bei 60 Hz stehen etwa 16,7 ms, bei 120 Hz etwa 8,3 ms
pro Frame zur Verfügung; Rendering und Eingabe teilen sich diese Zeit. Auf einem
schwächeren Gerät bzw. Profil Aufnahme machen, Mainthreadarbeit und Eingabeverzug
untersuchen; „auf meinem Rechner glatt“ ist kein Abnahmetest.

## Prüfung

Normal öffnen/schließen, während Exit erneut öffnen, zehn schnelle Wechsel,
Escape, Tab/Shift+Tab, Touch, Reduced-Motion-Wechsel während Bewegung und Unmount
testen. Eigenschaften, tatsächliche Dauer, Fokusziel und verbleibende Listener
prüfen. Visuelles Gefühl im Inspector verlangsamt beurteilen; eine Codeprüfung
allein bestätigt weder Glätte noch Verträglichkeit.
