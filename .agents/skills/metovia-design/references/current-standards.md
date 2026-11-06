# Current: übernommene Designstandards

Stand: 06.11.2026, Baseline und Belege im [Quellenregister](sources.md).
Alle folgenden Regeln sind aus der implementierten Baseline übernommen.
Sie gelten für konsistente Weiterarbeit im genannten Bereich. Ihre Dokumentation
besagt nicht, dass sämtliche Zustände visuell oder auf Barrierefreiheit geprüft sind.

## Grundlage und Geltungsbereiche

**C01 — Bestehende Komponenten wiederverwenden.** Das gemeinsame UI-Paket liefert Button,
Card, Avatar und öffentliche Inhaltsrenderer; CMS-Komponenten ergänzen sie.
Keinen zweiten Button-, Tabellen- oder Dialogsatz einführen. Das Paket ist
shadcn-artig konfiguriert, aber kein vollständiger generierter shadcn-Katalog.
Belege: [S01](sources.md#s01), [S02](sources.md#s02), [S03](sources.md#s03).

**C02 — CMS und Magazin getrennt anwenden.** Editorial importiert nach den
Shared-Styles `cms-tokens.css`, `cms-motion.css` und Artikelstyles. Web importiert
nur Shared-Styles und eigene Prosa-Regeln. Die neutrale CMS-Palette ersetzt
die grüne Magazinpalette ausdrücklich nicht. Belege: [S04](sources.md#s04),
[S05](sources.md#s05), [S06](sources.md#s06), [S07](sources.md#s07).

## Farben und Themes

**C03 — Semantische Variablen aus dem jeweiligen Scope verwenden.**
Die folgende Tabelle ist ein dokumentarischer Auszug, keine importierbare CSS-Datei.
Die Originaldateien bleiben die vollständige Quelle.

| Variable | CMS Light | CMS Dark | Shared/Magazin Light | Shared/Magazin Dark |
| --- | --- | --- | --- | --- |
| `--background` | `#fafafa` | `#18191b` | `#fafaf9` | `#171b19` |
| `--foreground` | `#303136` | `#e1e2e5` | `#202320` | `#edf0eb` |
| `--card` | `#ffffff` | `#202125` | `#ffffff` | `#1e2420` |
| `--primary` | `#303136` | `#e1e2e5` | `#285c48` | `#a7cfb8` |
| `--primary-foreground` | `#fafafa` | `#18191b` | `#ffffff` | `#14251b` |
| `--muted` | `#edeef0` | `#292b30` | `#efefeb` | `#2a312c` |
| `--muted-foreground` | `#696b73` | `#a0a2aa` | `#62675f` | `#b1b9b1` |
| `--border` | `#ebebed` | `#303136` | `#dedfd9` | `#384039` |

CMS zusätzlich: `--sidebar` `#f8f8f9` / `#1c1d20`, `--hover` `#f1f1f3` /
`#25262a`, `--field` `#ffffff` / `#202125`, `--field-border` `#8b8d95` /
`#6e7079`, `--focus-ring` `#64666e` / `#a0a2aa`.
`--danger-text` ist `#b42318` / `#fda29b`; destruktive Buttons verwenden
zusätzlich `--danger-muted`, `--danger-emphasis` und `--danger-surface`.
Belege: [S06](sources.md#s06), [S07](sources.md#s07).

**C04 — Theme-Verhalten erhalten.** Das CMS verwendet `next-themes` mit
Klassenattribut, Systemvorgabe und Light/Dark-Umschaltung. Der Themewechsel
animiert Farben mit 300 ms `ease-in-out`, sofern reduzierte Bewegung nicht aktiv
ist. Der Toggle entfernt sein Übergangsattribut nach 400 ms. Shared-Styles
enthalten `.dark`-Werte; im Web-Root ist kein entsprechender ThemeProvider oder
Toggle eingebunden. Das ist kein belegter öffentlicher Themewechsel.
Belege: [S08](sources.md#s08), [S09](sources.md#s09), [S10](sources.md#s10),
[S11](sources.md#s11).

## Typografie, Abstände und Flächen

**C05 — Bereichsspezifische Typografie erhalten.** CMS: lokal geladenes variables
Geist Latin, Gewicht 100–900, `display: swap`, Body 13 px. Die CMS-Tailwindwerte
für `text-xs/sm/base/lg/xl/2xl/3xl/4xl` sind
`0.6875/0.8125/0.875/1/1.0625/1.1875/1.3125/1.5 rem`.
Formcontrols und Buttons haben zusätzlich 12-px-Regeln; Tabellen 12 px, deren
Header 10 px. CMS-Artikelprosa setzt ausdrücklich 1 rem.
Shared-Body verwendet Arial, Helvetica, sans-serif; Magazin-Titel `font-serif`
und responsive große Schrift. Nicht pauschal Geist auf öffentliche Inhalte anwenden.
Belege: [S06](sources.md#s06), [S07](sources.md#s07), [S10](sources.md#s10),
[S12](sources.md#s12), [S04](sources.md#s04), [S05](sources.md#s05).

**C06 — Bestehende Maße nutzen.** CMS-Spaces `--space-1/2/3/4/6`:
4/8/12/16/24 px. Kein vollständiges neues Spacingraster daraus ableiten.
Content maximal 1440 px, Padding 24 px und bis 767 px 16 px.
Sidebar 250 px, eingeklappt 56 px, Header 49 px. CMS-Radien
`sm/md/lg/xl`: 4/5/6/6 px; Navigation explizit 5 px. Borders meistens 1 px.
Cards sind umrandete Flächen; `.cms-main .shadow-sm` und Dialogschatten werden
entfernt, während Primary-Hover einen kleinen Schatten erhalten kann.
Belege: [S06](sources.md#s06), [S13](sources.md#s13), [S14](sources.md#s14).

## Buttons und Icons

**C07 — Die vorhandene Button-API verwenden.** `variant`:
`default`, `outline`, `ghost`, `destructive`; `size`: `default`, `icon`;
`asChild` und `intent="create"` sind vorhanden. Neue Standardgrößen oder
Varianten sind nicht belegt. Basisgröße Shared: 40 px; CMS gewöhnlich 36 px,
Header und `.cms-new` 28 px. Sidebar-Rail-Regeln enthalten auch 34-px-Maße;
für sie den tatsächlichen Selektorkontext prüfen.

| CMS-Primary-Zustand | Light | Dark |
| --- | --- | --- |
| normal | `#45474f`, Text `#ffffff` | `#393b42`, Text `#f1f1f3` |
| Hover | `#393b42` | `#45474f` |
| Active | `#303136` | `#4e5059` |

Hoverfähige Geräte: normaler Primary hebt sich um 1 px, ausgenommen Icongröße;
Active setzt Verschiebung und Schatten zurück. Primary-Fokus verwendet 2-px-Outline
mit 2-px-Abstand. Disabled/`aria-disabled`/`aria-busy` verhindern die CSS-Interaktion;
Primary erhält 0,5 Opazität. Bei Links mit `asChild` ersetzt das keine semantische
oder programmatische Deaktivierung. Destructive bleibt ruhig mit gedämpftem
Rot und roter Hoverfläche, ohne Anheben. Belege: [S15](sources.md#s15),
[S06](sources.md#s06), [S13](sources.md#s13).

**C08 — Kompakte Erstellaktion und Lucide übernehmen.** Für CMS-Listen
`CreateButton` bzw. die bestehende `ListHeader`-Erstellaktion verwenden:
`ghost`, `cms-new`, `intent="create"`, ein Plus-Icon. Dieses dreht sich bei
geeigneter Hover-/Motion-Präferenz um 90°. Lucide ist die bestehende Iconbibliothek;
Die bestehende Designkonvention verlangt höchstens ein Icon je Aktion. Navigation gewöhnlich 16 px,
Strichstärke 1,75; `.cms-new` 13 px. Icon-only-Aktionen haben einen zugänglichen
Namen, dekorative Icons `aria-hidden`. Belege: [S16](sources.md#s16),
[S17](sources.md#s17), [S18](sources.md#s18), [S06](sources.md#s06).

## Layouts, Navigation und Inhaltsmuster

**C09 — CMS-Shell erhalten.** Desktopnavigation ab `md`, mobile Radix-Seitenleiste
darunter, einklappbare Rail, Skiplink, Header und Inhaltsbereich wiederverwenden.
Navigation und Command Palette benutzen bestehende Konfiguration/Registry und
gefilterte Zugriffskontexte. `aria-current`, benannte Navigationen, Untermenüstatus,
Fokusrückgabe und `Ctrl/Cmd+K` erhalten. Historische Artikelrouten vor einer Übernahme mit der aktuellen
organisationsbezogenen Navigation abgleichen.
Belege: [S19](sources.md#s19), [S20](sources.md#s20), [S21](sources.md#s21),
[S22](sources.md#s22).

**C10 — Artikelverwaltung als Listenreferenz.** `ListHeader`, `PageActions`,
`ListViews`, `cms-filters`, `ListTable`, `ListRow`, `EmptyState` und bestehende
Pagination kombinieren. Filtergrid: eine Spalte, ab 640 px zwei, ab 1280 px vier.
Standardtabelle min. 760 px und horizontal scrollbar; `compact` erlaubt Umbruch.
Tabellenheader mit `scope="col"`, Scrollregion fokussierbar. Für Tastaturzugriff
den echten Titel-Link in Zeilen erhalten; `ListRow` allein macht keine
tastaturbedienbare Zeilennavigation. Lokale Panels aktivieren `ListViews` über
`panelId`, inklusive Pfeil/Home/End-Navigation. Belege: [S23](sources.md#s23),
[S24](sources.md#s24), [S25](sources.md#s25), [S26](sources.md#s26),
[S27](sources.md#s27), [S47](sources.md#s47), [S06](sources.md#s06).

**C11 — Formulare und Dialoge wiederverwenden.** `FormField` bindet Label über
Umschließung; Hinweise sind vorhanden, aber nicht automatisch per
`aria-describedby` verknüpft. `FormMessage` verwendet `alert` bei Fehlern und
`status` bei Erfolg. Controls gewöhnlich 36 px, Artikelproperties 32 px.
`FormDialog`/`DialogSurface` und `ConfirmDeleteDialog` behalten Radix-Modalität,
Titel/Beschreibung, Fokusrückgabe, Busy-Schutz und explizites Verwerfen geänderter
Formulare. Dialogfläche: max. 36 rem, optional breit 64 rem, max. 90 dvh,
scrollbarer Inhalt. Belege: [S27](sources.md#s27), [S28](sources.md#s28),
[S29](sources.md#s29), [S30](sources.md#s30), [S06](sources.md#s06).

**C12 — Status mit Text und Icon.** Artikelstatus nutzt semantische
`--status-*`-Farben und unterschiedliche Lucide-Symbole. Statuslabels erhalten;
Farbe nicht als einzige Information einsetzen. Belege: [S31](sources.md#s31),
[S32](sources.md#s32).

**C13 — Vorhandene Inhaltsrenderer und Vorlagen nutzen.** `MagazineIssue`,
`MagazineArticle` und `article-prose` für öffentliche Inhalte wiederverwenden.
Gemeinsame Bild-/Tabellenregeln und das responsive Float-Verhalten ab 640 px
erhalten. Newsletter-Vorlagen sind verwaltete HTML-Daten mit bestehender
sandboxed Vorschau, keine CMS-CSS-Vorlage. Die vorhandenen Auth-Mail-Dateien
bleiben eigenständige, schlichte HTML-Vorlagen. Nicht aus diesen Dateien ein
bereits realisiertes Metovia-Marketingdesign ableiten. Belege: [S07](sources.md#s07),
[S12](sources.md#s12), [S33](sources.md#s33), [S34](sources.md#s34),
[S35](sources.md#s35), [S36](sources.md#s36).

**C14 — Motion-Präferenzen erhalten.** CMS-Interaktionen 180 ms,
Oberflächen 160 ms, Sidebar 240 ms, Easing `cubic-bezier(0.2, 0, 0, 1)`.
Popover-Ein-/Ausblenden über Opazität und 5-px-Verschiebung; native Selects
werden nur bei Unterstützung erweitert. Reduced Motion schaltet die
definierten Übergänge/Animationen aus. Command Palette besitzt zusätzlich eine
120-ms-Einblendung unter `motion-safe`. Kein neuer Animationstack nötig.
Belege: [S13](sources.md#s13), [S21](sources.md#s21), [S04](sources.md#s04).
