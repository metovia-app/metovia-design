# Arbeit in metovia-design

Dieses Repository enthält öffentliche Designrichtlinien und das Skill-Paket unter
`.agents/skills/metovia-design`. Die gemeinsam ausgelieferten Referenzen bleiben
innerhalb dieses Ordners, damit eine versionierte Kopie eigenständig funktioniert.

- Bestehende Produktkomponenten und Tokens haben Vorrang. `Current`, `Proposed`
  und `Future` getrennt halten; CMS und öffentliches Magazin unterscheiden.
- Öffentliche Audits enthalten fachliche Befunde und neutrale Themenreferenzen.
  Keine privaten Repositoryadressen, Quellrevisionen, Repository-IDs,
  Branch-/Merge-Historien, internen Produktverzeichnisse oder Zugangsdaten einchecken.
- Falls genaue Herkunftsnachweise benötigt werden, ausschließlich in autorisierten,
  nicht veröffentlichten Auditunterlagen pflegen. `.private-research/` ist lokal
  ignoriert; Ignorieren macht bereits getrackte Daten nicht privat.
- Produktcode nur im ausdrücklich beauftragten Zielprojekt ändern. Arbeiten hier
  autorisieren keine Änderungen an anderen Repositorys, Organisationen oder Hosting.
- Bei aktualisierten Standards Audit, Themenregister und `reference-index.json`
  konsistent halten. Historische Befunde nicht als aktuell verifiziert ausgeben.
- Vor Abschluss `node scripts/validate.mjs` und `git diff --check` ausführen.
  Keine Produktbuilds oder Zugriffe auf private Quellrepositorys für diese Prüfung.
- Veröffentlichungsprüfungen nur mit Kategorien und Dateinamen dokumentieren,
  ohne entfernte sensible Werte im Bericht oder PR-Text erneut offenzulegen.
