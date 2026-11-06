---
name: metovia-motion
description: Animationen und Microinteractions in Metovia entwerfen, verbessern oder prüfen. Für Timing, Easing, Hover, Dialoge, Dropdowns, Navigation und Kameraübergänge; nicht zum pauschalen Hinzufügen von Effekten oder Ersetzen bestehender Komponenten.
---

# Metovia Motion

Lies [Prinzipien](../_shared/principles.md),
[Accessibility](../_shared/accessibility.md) und
[Motion-Guidelines](references/motion-guidelines.md). Für eine Umsetzung lies
die [Beispiele](references/examples.md) und den vorhandenen Komponenten-/Motioncode
im ausdrücklich autorisierten Zielprojekt. Dieser Skill allein autorisiert keine
Produktänderung. [Installation](../metovia-design/references/integration.md).

Wende M01 **vor** Timing oder Werkzeug an: Wozu bewegt sich etwas, wie häufig,
durch welche Eingabe, und was passiert ohne Bewegung? Ein Ergebnis ohne neue
Animation ist gültig. R05 stammt aus Apple Motion und Kowalskis Animate-/Remove-
Workflows; bestehende Metovia-Werte haben Vorrang vor externen Rezepten.

Definiere Zustände einschließlich Eintritt, Austritt, erneutem Öffnen während
Exit, Abbruch, Unmount und Reduced Motion. Bewahre Fokus, Dirty-/Busy-Schutz und
Semantik der vorhandenen Primitiven. Interaktion beginnt nicht erst nach einem
Timer; eine Ausblendung allein entfernt kein Element aus der Fokusreihenfolge.

Wähle die einfachste vorhandene Lösung: CSS, vorhandener Presence-Mechanismus,
WAAPI oder eine bereits eingesetzte Motionbibliothek. Neue Bibliotheken nur
bei belegtem fehlendem Verhalten und nach Prüfung der real installierten API.
Beschleunigung nie aus einem Bibliotheksnamen oder einer Eigenschaft garantieren.

Gib pro Änderung Zweck/Häufigkeit, Status Current oder Recommended, Eigenschaften,
Dauer/Kurve, Ursprung, Exit-/Abbruchverhalten und Reduced-Motion-Variante an.
Nenne die betroffene vorhandene Komponente und einen konkreten Test für schnelles
Umschalten, Tastatur, Touch und schwächere Geräte. Bei 3D zusätzlich Kamerapfad,
stabile Referenz, Abbruch und statischen Alternativweg prüfen.

Keine Press-Skalierung oder neue Kurve allein wegen eines Fremdrezepts erzwingen.
Störende Scroll-/Kameraeffekte entfernen, wenn sie keinen Produktinhalt erklären.
Ungetestetes „fühlt sich natürlich an“ nicht als Nachweis ausgeben.
