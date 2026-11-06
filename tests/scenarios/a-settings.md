# Szenario A: Einstellungen

Verwende `metovia-design`, um diese synthetische Einstellungsseite zu überarbeiten.
Liefere einen konkreten Entwurf mit Umsetzungs- und Abnahmehinweisen, keinen Code
für eine Produktanwendung. Vorhandene Tokens und Komponenten sind verbindlicher
Bestand; es gibt keinen Zugriff auf ein reales Produktrepository.

Kontext: Ein neues Metovia-Modul verwaltet Organisationseinstellungen. Die Seite
enthält Organisationsname, Zeitzone, Benachrichtigungsoptionen und Zugriffsregeln
in einer langen gleichgewichteten Spalte. „Speichern“ steht nur ganz oben.
Ein Hilfeabsatz ist sichtbar neben jedem Feld, besitzt aber keine ID-Verknüpfung.
Fehler erscheinen als „Fehler“ am Seitenende. Bei 200-Prozent-Text überlagert die
fixierte Save-Leiste das letzte fokussierte Feld. Bei 360 px Breite drückt ein
langer Organisationsname die Schalter aus dem Viewport.

Das Modul stellt Shell, FormField, FormMessage, Button und FormDialog bereit.
Die tatsächlichen Modultokens sind semantisch benannt; das CMS ist nur historisch
dokumentiert. FormDialog besitzt Busy- und Dirty-Schutz. Der Stakeholder schlägt
vor, auf SF Pro zu wechseln und jede Feldgruppe als eigene animierte Card zu bauen.
