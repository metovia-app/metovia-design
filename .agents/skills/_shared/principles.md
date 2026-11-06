# Gemeinsame Metovia-Prinzipien

Gültig für sämtliche Metovia-Module, öffentliche Produktdarstellung und neue
Oberflächen. Die historische CMS-/Magazin-Baseline ist kein Nachweis für andere
Module. Ihre Tokens nicht ungeprüft global ausrollen.

## Status und Konflikte

- **Current:** tatsächlich belegte Implementierung im jeweiligen Produktbereich.
- **Recommended:** empfohlene Weiterentwicklung; noch kein Implementierungsnachweis.
- **Future:** langfristige, noch offene Entscheidung.

Das frühere Wort `Proposed` bedeutet in älteren Unterlagen `Recommended`.
Die Umbenennung ändert weder Tokenwerte noch den Implementierungsstatus.
Neue und überarbeitete Oberflächen haben WCAG 2.2 AA als Abnahmeziel des Auftrags.
Die historische Baseline ist dadurch nicht automatisch konform.

Bei Konflikten zuerst Nutzeraufgabe und Barrierefreiheit klären, dann vorhandene
Komponenten und Semantik prüfen. Eine notwendige Verbesserung des Bestands als
gezielte Änderung begründen; keinen zweiten Token- oder Komponentensatz anlegen.
Native Apple-Maße, Materialien, Menübalken und Schriftdateien sind keine Webvorgaben.

## Recommended-Regeln

**R01 — Aufgabe und Hierarchie.** Benenne die Hauptaufgabe der Ansicht, ordne die
primäre Aktion sichtbar zu und gruppiere verwandte Inhalte über Ausrichtung,
Abstände und Überschriften. Nicht jedes Gruppierungsproblem braucht eine Card.
Herkunft: [Apple Layout](https://developer.apple.com/design/human-interface-guidelines/layout)
und [Design principles](https://developer.apple.com/design/human-interface-guidelines/design-principles);
Metovia-Anpassung: kompakte, scanbare B2B-Arbeitsflächen statt Apple-Chrome.

**R02 — Typografische Rollen.** Titel, Abschnitt, Feldlabel, Hilfetext und Daten
erkennbar unterscheiden; vorhandene Schrift-/Spacingtokens verwenden. Lange
Labels und vergrößerte Texte müssen Platz bekommen. Apple-Punktgrößen nicht in
CSS-Pixel übersetzen. Herkunft: [Apple Typography](https://developer.apple.com/design/human-interface-guidelines/typography).
Metovia-Anpassung: Geist und die dokumentierte Magazin-Typografie erhalten;
neue Module erst anhand ihres tatsächlichen Scopes zuordnen.

**R03 — Orientierung und Kontinuität.** Aktuellen Ort, Rückweg und Status erhalten,
auch beim Wechsel von Modul oder Bildschirmbreite. Offenlegung zusätzlicher
Optionen darf Hauptaufgaben nicht verstecken. Herkunft: Apple Layout und
Design principles, oben; Webumsetzung mit vorhandenen Navigationen und Links.

**R04 — Feedback am Auslöser.** Pending-, Fehler-, Erfolgs- und Leerzustände
verständliche Texte geben. Fehler nennen Problem und nächsten Schritt; Erfolg
braucht nicht immer einen Dialog. Herkunft:
[Apple Feedback](https://developer.apple.com/design/human-interface-guidelines/feedback).
Metovia-Anpassung: vorhandene FormMessage-/Statusmuster weiterverwenden.

**R05 — Bewegung verdient ihren Platz.** Vor Kurve oder Bibliothek Zweck,
Nutzungshäufigkeit und Eingabeart prüfen. Häufige Navigation nicht durch
Auftritte verzögern; Abbruch, Umkehr und Wiederholung müssen funktionieren.
Herkunft: [Apple Motion](https://developer.apple.com/design/human-interface-guidelines/motion),
[Kowalski animate](https://github.com/emilkowalski/skills/blob/main/skills/animate/SKILL.md)
und [remove-animations](https://github.com/emilkowalski/skills/blob/main/skills/remove-animations/SKILL.md).
Metovia-Anpassung: kein pauschales Verbot von Tastaturfeedback; Fokus und
Zustandsänderung sofort, vorhandene Motion nicht stillschweigend entfernen.

**R06 — Websemantik vor Inszenierung.** Native Links, Buttons und Felder sowie
bewährte Dialog-/Menüprimitiven beibehalten. Motion darf Fokus, Eingabe oder
Bedienbarkeit nicht verzögern. Herkunft: [W3C APG](https://www.w3.org/WAI/ARIA/apg/patterns/)
und [Apple Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility).
Konkrete Prüfungen stehen in [Accessibility](accessibility.md).

**R07 — Eigenständige Marke.** Minimalistisch, professionell, funktional und
überwiegend monochrom gestalten. Präzise Typografie und Produktinhalt tragen
die Identität. Dies ist eine **Metovia-Vorgabe des Auftrags**, keine Apple-Regel:
kein Liquid-Glass-Look, keine obligatorischen Gradients, Bento-Landschaften oder
Apple-Schriftdateien. Magazinfarben bleiben bereichsspezifischer Bestand.

**R08 — Belege statt Geschmacksurteil.** Ein Review benennt Beobachtung,
Auswirkung, Kriterium, Nachweisgrenze und überprüfbare Korrektur. Herkunft:
[Kowalski review-animations](https://github.com/emilkowalski/skills/blob/main/skills/review-animations/SKILL.md)
und [dickwu Reviewworkflow](https://github.com/dickwu/apple-design-skill/blob/main/SKILL.md).
Metovia-Anpassung: subjektive Präferenzen als solche markieren; keine pauschale
Ablehnung wegen einer erlaubten CSS-Kurve oder einer sachlich nötigen Ausnahme.

## Veröffentlichung und Nutzung

Diese Regeln sind eigene, auf die Webplattform übertragene Formulierungen.
Lizenzprüfung und verworfene Fremdempfehlungen: [Quellenanalyse](external-sources.md).
Private Implementierungsbelege gehören in getrennte autorisierte Unterlagen.
Ein Review oder Skill-Aufruf autorisiert keine Produkt-, Hosting- oder Repoänderung.
