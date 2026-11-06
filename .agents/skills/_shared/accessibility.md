# Accessibility: Abnahmeziel WCAG 2.2 AA

**Recommended / Auftragsziel für neue und überarbeitete UI.** Kein pauschaler
Konformitätsnachweis für bestehende Metovia-Oberflächen. Grundlage ist die
[normative WCAG 2.2](https://www.w3.org/TR/WCAG22/); Understanding-Seiten und
APG sind erklärende Hilfen. Die folgende Auswahl ersetzt nicht alle A-/AA-Kriterien.

| Prüfung | Konkrete Abnahme | Grundlage |
| --- | --- | --- |
| Struktur | Überschriften, Labels, Tabellenbeziehungen und Landmarken programmatisch erkennbar | 1.3.1; native HTML-Semantik |
| Farbe | Status zusätzlich als Text/Icon; nicht nur Rot/Grün | 1.4.1 |
| Textkontrast | Mindestens 4,5:1; große Schrift 3:1. Groß bedeutet mindestens 18 pt bzw. 14 pt fett, im CSS-Kontext üblicherweise 24 px bzw. etwa 18,67 px fett | [Understanding 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) |
| Controls | Relevante Control-/Zustandskonturen mindestens 3:1 gegen angrenzende Farben, soweit Kriterium anwendbar; nicht jede dekorative Border muss 3:1 erfüllen | [Understanding 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) |
| Text/Zoom | 200 Prozent Textvergrößerung; bei 320 CSS px Reflow ohne zweidimensionales Seitenscrollen. Sachlich zweidimensionale Datentabellen dürfen einen eigenen Scrollbereich benötigen | 1.4.4, [Understanding 1.4.10](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) |
| Tastatur | Alle Funktionen ohne Maus; logische Reihenfolge, sichtbarer Fokus, kein unbeabsichtigter Fokusfang | 2.1.1, 2.1.2, 2.4.3, 2.4.7 |
| Verdeckter Fokus | Fokussiertes Element nicht vollständig durch autorseitige Stickyflächen verdeckt. Vollständige Sichtbarkeit ist Metovia-Empfehlung über das AA-Minimum hinaus | [Understanding 2.4.11](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) |
| Zielgrößen | Mindestens 24 × 24 CSS px oder anwendbare Ausnahme, etwa die präzise Abstandsregel. 44 × 44 ist ein sinnvoller komfortabler Touchentwurf, keine pauschale AA-Pflicht | [Understanding 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) |
| Drag/Gesten | Dragging mit einfachem Pointer-Alternativweg; komplexe Gesten mit einfacher Bedienung; entsprechende Ausnahmen prüfen | 2.5.1, 2.5.7 |
| Formulare | Fehler identifizieren, Label/Hinweis verknüpfen, Korrektur ermöglichen; wiederholte Eingaben und Authentifizierungsbarrieren prüfen | 3.3.1, 3.3.2, 3.3.7, 3.3.8 |
| Status | Pending/Erfolg ohne unnötigen Fokuswechsel programmatisch mitteilen; Live-Regions nicht pro Animationsframe aktualisieren | 4.1.2, 4.1.3 |
| Bewegung | Automatisch laufende Bewegung über fünf Sekunden bei gleichzeitigem Inhalt pausier-/stopp-/verbergbar, sofern nicht wesentlich; Blitzgrenzen beachten | 2.2.2, 2.3.1 |

Reduced Motion zusätzlich als **Metovia-Standard für Weiterentwicklung** behandeln:
großflächige Translation, Zoom, Parallax und Kamerafahrten bei entsprechender
Präferenz ersetzen oder entfernen. 2.3.3 zu interaktionsausgelöster Bewegung ist
AAA, kein AA-Kriterium; die weitergehende Metovia-Vorgabe trotzdem prüfen.
Herkunft: [Apple Motion](https://developer.apple.com/design/human-interface-guidelines/motion)
und [MDN Reduced Motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion).

## Dialog, Dropdown und Fokus

Vorhandene zugängliche Primitiven verwenden. Ein modal dargestellter Dialog
begrenzt Tab-Navigation, macht Hintergrundinhalt inert, erhält einen Namen und
setzt sinnvollen Anfangsfokus; beim Schließen Fokus an einen noch vorhandenen,
logischen Ort zurückgeben. Escape und sichtbaren Schließ-/Abbruchweg prüfen.
Ein Schutz ungespeicherter Daten darf bewusst eine Bestätigung auslösen.
Herkunft: [APG Modal Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

Ein Aktionsmenü ist kein beliebiges Disclosure. Bei Menüsemantik auch zugehörige
Pfeiltasten, Fokus und Escape implementieren; bei einem einfachen Disclosure
nicht nur dekorativ `role="menu"` ergänzen. Native Selects beibehalten, solange
sie die Aufgabe erfüllen. Herkunft:
[APG Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/).

## Nachweis

Gemessene Werte, verwendetes Werkzeug und Zustand nennen. Screenshots erlauben
keinen Nachweis für Tastatursteuerung, DOM-Semantik oder tatsächliche Hitboxen.
Manuell Tastatur, 200-Prozent-Text, 320-CSS-px-Reflow, Dark/Light und Reduced Motion
prüfen; Screenreader und automatisierte Prüfungen ergänzen sich. Bei unbekannten
Farben oder Abmessungen eine Prüfung verlangen, keinen Verstoß erfinden.
