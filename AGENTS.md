# Arbeit in metovia-design

Dieses Repository enthält öffentliche Designrichtlinien und vier Skills unter
`.agents/skills/`. Die vier Skill-Ordner und `_shared` bilden einen gemeinsam
installierten Referenzverbund. Jeder Skill ist unabhängig aufrufbar; die Links
bleiben innerhalb dieses Verbunds. Paketversion und erwartete Skills: `skills.json`.

- Bestehende Produktkomponenten und Tokens haben Vorrang. `Current`, `Recommended`
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
- Externe Ideen am Einsatzort belegen; Quellen und Lizenzprüfung in `_shared`
  dokumentieren. Keine fremden Dateien oder Code ohne konkrete Lizenzprüfung kopieren.
- Vor Abschluss `node scripts/validate.mjs`, bei geänderter Prüfungslogik auch
  `node scripts/test-validation.mjs`, und `git diff --check` ausführen.
  Keine Produktbuilds oder Zugriffe auf private Quellrepositorys für diese Prüfung.
- Veröffentlichungsprüfungen nur mit Kategorien und Dateinamen dokumentieren,
  ohne entfernte sensible Werte im Bericht oder PR-Text erneut offenzulegen.
