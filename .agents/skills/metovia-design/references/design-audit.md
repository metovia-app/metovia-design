# Design-Audit der bestehenden Metovia-Anwendung

## Referenz und Methode

Untersucht am **06.11.2026**: bestehende Metovia-Webanwendung.
Die Bestandsaufnahme erfolgte statisch und ausschließlich lesend. Die öffentlichen
Referenzen beschreiben Designbereiche und Komponenten; private Quelladressen,
Revisionsnachweise und Arbeitsbranch-Historien werden nicht mitgeliefert.

Das [Themenregister](sources.md) und [reference-index.json](reference-index.json)
ordnen die Befunde fachlich zu. Ohne autorisierten Quellzugriff lassen sich die
historischen Implementierungsbelege öffentlich nicht unabhängig verifizieren.
Es handelt sich nicht um eine vollständige Prüfung jeder Fachseite oder sämtlicher
CSS-Kaskaden. Spätere Mandanten- und Landingpageänderungen sind nicht erneut geprüft.

## Technische Grundlage — Current

Das Produkt ist ein pnpm-/Turborepo-Monorepo mit zwei Next.js-App-Router-Apps:
einer CMS-Oberfläche und einem öffentlichen Magazin.
Next.js 16.4.0, React 19.3.0 und Tailwind 4.3.3 stehen in den gelesenen Manifests.
Tailwind wird über `@tailwindcss/postcss`, CSS-Imports, `@source` und
`@theme inline` konfiguriert. Im untersuchten Commit gibt es keine
`tailwind.config.*`; insbesondere keine v3-Konfiguration erfinden.
Belege: [S02](sources.md#s02), [S38](sources.md#s38),
[S39](sources.md#s39), [S40](sources.md#s40), [S44](sources.md#s44).

Das gemeinsame UI-Paket enthält einen kleinen vorhandenen Komponentensatz. `components.json`
verwendet shadcn `new-york`, `neutral`, CSS-Variablen und Lucide. Button nutzt
Radix Slot, CVA und `cn`; CMS-Dialoge nutzen Radix Dialog. Tiptap ist der vorhandene
Artikeleditor, Monaco der dynamisch geladene Newsletter-Codeeditor. Diese Angaben
beschreiben vorhandene Technik, keine Empfehlung für neue Abhängigkeiten.
Belege: [S01](sources.md#s01), [S02](sources.md#s02),
[S03](sources.md#s03), [S15](sources.md#s15), [S33](sources.md#s33),
[S37](sources.md#s37).

## Übernommene Standards — Current

Die vollständigen übernommenen Regeln C01–C14 stehen in
[Current-Standards](current-standards.md). Die folgende Zuordnung zeigt die
Abdeckung des Auftrags und den konkreten Ursprung.

| Bereich | Vorhandener Standard und Quelle | Verbindlicher Umfang |
| --- | --- | --- |
| UI-Bibliothek | Gemeinsames UI-Paket, Button/Card/Avatar und Inhaltsrenderer; CMS ergänzt Fachkomponenten, [S01](sources.md#s01), [S18](sources.md#s18) | Wiederverwenden; kein paralleles Komponentenpaket |
| Tokens/globale Styles | Shared-Palette plus ausdrücklich CMS-spezifische Overrides; Importreihenfolge, [S04–S07](sources.md#s04) | Tokens im jeweiligen Scope erhalten |
| Typografie | CMS Geist lokal/13 px, Magazin Arial mit Serifentiteln, [S06](sources.md#s06), [S07](sources.md#s07), [S10](sources.md#s10), [S12](sources.md#s12) | Unterschiede sind beabsichtigt, kein globaler Einheitsfont |
| Theme | CMS-Systemtheme und Toggle; Shared enthält Darkwerte, Web ohne Provider, [S08–S11](sources.md#s08) | CMS Light/Dark erhalten; Web-Toggle nicht als vorhanden ausgeben |
| Geometrie | CMS 4–24-px-Spaces, Radien 4–6 px, Sidebar 250/56 px, Content max. 1440 px, [S06](sources.md#s06) | Bestehende Größen und dokumentierte Ausnahmen |
| Buttons | Vier Varianten; CMS-Primary-Hover/Active/Focus/Busy; CreateButton, [S13](sources.md#s13), [S15–S17](sources.md#s15) | Bestehende API und Interaktionen |
| Navigation | Desktoprail, mobile Radix-Navigation, Skiplink, Command Palette, [S19–S22](sources.md#s19) | Bestehende Konfiguration, Labels und Fokusführung |
| Listen/Tabellen | Artikelverwaltung als Referenz, Filter, Tabs, horizontale Scrollregion, Titel-Link, [S23–S26](sources.md#s23) | Auf CMS-Listen anwenden |
| Formulare/Dialoge | Native Controls, FormField/FormMessage, FormDialog, ConfirmDeleteDialog, [S27–S30](sources.md#s27) | Semantik, Busy-/Dirty- und Fokusverhalten erhalten |
| Dropdowns | ActionsMenu als `details`, Konto-Disclosure und weitere Popovermuster in Shell; native Selects, [S19](sources.md#s19), [S45](sources.md#s45), [S13](sources.md#s13) | Bestehenden kontextgerechten Wrapper nutzen; uneinheitliche Ausführung dokumentiert |
| Icons/Status | Lucide, ein Icon pro Aktion nach bestehender Designkonvention; Status mit Icon und Text, [S18](sources.md#s18), [S31–S32](sources.md#s31) | Vorhandene Icons/Labels, keine zweite Bibliothek |
| Artikel-Layout | Shared Prosa, Magazinrenderer und spezifisches CMS-Workspace-Scrolling, [S07](sources.md#s07), [S12](sources.md#s12), [S41](sources.md#s41) | Inhaltsdarstellung und responsive Spezialfälle erhalten |
| Motion | 180/160/240 ms, Theme 300 ms, Command Palette 120 ms, Reduced Motion, [S13](sources.md#s13), [S21](sources.md#s21) | Vorhandene Zustände/Präferenzbehandlung |

## Templates — Current mit begrenzter Einsicht

Seitenvorlagen sind überwiegend komponierte React-Layouts: Root-/Portallayout,
Shell, Artikelübersicht und Magazin-Ausgaben-/Artikelrenderer. Es gibt keinen
Beleg für eine separate allgemeine Metovia-Templatebibliothek.
Belege: [S10](sources.md#s10), [S11](sources.md#s11), [S12](sources.md#s12),
[S19](sources.md#s19), [S23](sources.md#s23), [S46](sources.md#s46).

Newsletter-Vorlagen werden als eigene HTML-Daten verwaltet. Die UI bietet
Erstellen, Laden, Duplizieren, Bearbeiten und Löschen. Vorschau: 360/640 px
im Sandbox-Iframe, externe Bilder erst nach Auswahl, 250-ms-Verzögerung.
Die tatsächlich gespeicherten Vorlageninhalte wurden nicht aus einer Datenbank
gelesen; deren Farben, Typografie und Mandantenunterschiede sind unbekannt.
Die Einladungs- und Passwortwiederherstellungs-Vorlagen sind schlichtes
deutsches Auth-Mail-HTML mit Bestätigungslinks, ohne gemeinsame CMS-Tokens.
Belege: [S33–S36](sources.md#s33).

## Gefundene Inkonsistenzen und Risiken

Die Befunde sind `Current`; die zugehörigen Lösungen bleiben `Proposed`.
Bewusste Unterschiede zwischen Magazin und CMS sind ausdrücklich kein Fehler.

| ID | Belegter Ist-Befund | Auswirkung / Grenze | Empfehlung |
| --- | --- | --- | --- |
| I01 | Shared-Button 40 px, CMS allgemein 36 px, Header/Erstellaktion 28 px; Properties setzen 32 px und eigene Utilitygrößen. [S15](sources.md#s15), [S06](sources.md#s06), [S30](sources.md#s30) | Komponente allein beschreibt effektive Größe nicht; kaskadenabhängige Konflikte möglich. Keine Browsermessung erfolgt. | P01: Kontexte dokumentieren und später explizite Dichtevarianten prüfen |
| I02 | Newsletter-Vorlagen verwenden für „Vorlage erstellen“ den normalen Primary-Button statt der kompakten Listen-Erstellaktion. [S33](sources.md#s33) gegenüber [S16](sources.md#s16) | Gleichartige Erstellaktionen haben unterschiedliche Gewichtung und Höhe. | P02: Mit Artikelverwaltungsreferenz abgleichen |
| I03 | `ActionsMenu` verwendet eigene `details`-/Portal-Logik und `shadow-lg`, ohne `cms-popover`; Shell verwendet diese Motionklasse für ihre Oberflächen. [S45](sources.md#s45), [S19](sources.md#s19), [S13](sources.md#s13) | Unterschiedliche Animationen, Schatten und Schließ-/Fokusmechanismen; nicht jedes Dropdown ist ein Radix-Menü. | P03: Bestehende Wrapper angleichen, Tastatur-/Clippingtests zuerst |
| I04 | Semantische Destructive-Farbzuordnung `--color-destructive` steht im CMS-Theme, nicht im Shared-Theme, obwohl Shared-Button `text-destructive` nutzt. [S06](sources.md#s06), [S07](sources.md#s07), [S15](sources.md#s15) | Shared-API ist hierfür vom importierenden Scope abhängig. Ein tatsächlich fehlerhaftes Web-Rendering wurde nicht nachgewiesen. | P04: Verbraucherkontexte prüfen, danach Tokenvertrag vervollständigen |
| I05 | CMS-Body 13 px, `text-sm` 13 px, Controls 12 px, Tabellenheader 10 px; zahlreiche lokale Textgrößen. [S06](sources.md#s06) | Dichte ist implementiert, aber Lesbarkeit und Vergrößerung nicht visuell überprüft. | P05: Typografierollen und Zoom-/Kontrastprüfung |
| I06 | `FormField` zeigt Hinweise ohne `aria-describedby`-Zuordnung. [S27](sources.md#s27) | Sichtbarer Hinweis ist nicht automatisch programmatisch am Feld; tatsächliches Verhalten hängt auch vom Aufrufer ab. | P06: Bestehende API gezielt um IDs/Verknüpfungen erweitern |
| I07 | `ListTable` hängt an deutsche Labels englisch „horizontal scrollbar“ an. [S25](sources.md#s25) | Sprachbruch im zugänglichen Namen. | P07: Deutsche Benennung im vorhandenen Wrapper |
| I08 | Shared-Infoboxen verwenden feste Warn-/Tippfarben `#d97706` und `#16a34a` außerhalb der CMS-Statusvariablen. [S07](sources.md#s07) | Weitere Farbfamilie ohne dokumentierten semantischen Themevertrag; Kontrast nicht vermessen. | P08: Verbrauch und Light/Dark prüfen, dann semantische Zuordnung vorschlagen |

## Verbindlich, vorläufig und noch unbekannt

Verbindlich übernommen sind die Wiederverwendung, die bereichsspezifischen
Tokens und vorhandenen APIs/Interaktionsmuster C01–C14. Inkonsistenzen werden
damit nicht zu universellen Regeln. Eine begründete Änderung bleibt möglich,
wird aber separat als Designentscheidung mit Beleg dokumentiert.

Vorläufig bleiben Aussagen zu neueren Produktständen, zum Mandantenbranding,
zu einer Metovia-Landingpage und zu zukünftigen Organisationspfaden. Eine spätere
Prüfung muss deren tatsächliche Dateien/Commits heranziehen. Aus der gewählten
Baseline folgt kein bereits implementiertes SaaS-Branding.

Nicht durchgeführt: Browser- oder Screenshotvergleich, Mobile-/Zoommessungen,
Kontrastmessung, Screenreaderprüfung, vollständiger CSS-Build, CI-/Deploymentprüfung,
Abgleich aller Fachdialoge sowie Einsicht in gespeicherte Newsletter-Vorlagen.
Diese Grenzen verhindern pauschale Accessibility-, Pixelgenauigkeits- oder
Stabilitätszusagen. Es bestand Quellzugriff; die dokumentierten Werte sind keine
erfundenen Ersatzrichtlinien.

Die priorisierten [Verbesserungen und Zukunftsentscheidungen](decisions.md)
sowie die [spätere Integration und Migration](integration.md)
sind vorbereitet. Im bestehenden Produkt wurde keine davon umgesetzt.
