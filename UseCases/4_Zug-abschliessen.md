## Zug abschließen

| Geschäftsprozess, Funktion   | Zug abschließen |
| ---------------------------- | ------------------------------------------------------------------------------------------ |
| Ziel, Ergebnisse             | Der aktive Spieler schließt seinen Zug ab und der nächste Spieler und setzt den nächsten Spieler auf aktiv.|
| Akteure                      | Aktiver Spieler, Passiver Spieler. |
| Vorbedingungen               | Abschluss der Truppenmobilisierung und Kampfphase. |
| Auslösendes Ereignis         | Die Kampfphase des aktiven Spielers wird beendet. |
| Nachbedingung bei Erfolg     | Der aktuelle Spieler deaktiviert und der nächste Spieler aktiviert. |
| Nachbedingung bei Fehlschlag | Der aktuelle Spieler bleibt so lange am Zug bis er erfolgreich abgeschlossen wird. |
| Eingehende Daten             | 1. Information, ob in diesem Zug mindestens ein Gebiet erobert wurde. <br>2. Spielerreihenfolge und aktueller aktiver Spieler. |
| Ausgehende Daten             | 1. Aktualisierter Truppenbestand pro Land. <br>2. Neuer aktiver Spieler für den nächsten Zug. |
| Ablauf                       | 1. Der aktive Spieler kann eine oder mehrere Truppen in andere, von ihm besetzte, benachbarte Gebiete verschieben. <br>2. Der aktive Spieler kann das <span v-mark.highlight.red="1">Truppenmanöver</span> jederzeit beenden. <br>3. Falls der aktive Spieler in diesem Zug mindestens ein Gebiet erobert hat, kann er über die Aktion <span v-mark.highlight.red="2">„Spielkarte anfordern“</span> eine Gebietskarte beim Spielsystem anfordern, welche ihm bei erfolgreicher Prüfung ausgegeben wird. <br> 4. Der nächste Spieler der Reihenfolge wird aktiviert, der bisherige deaktiviert.|
| Erweiterungen                | 1. Spielkarte anfordern. <br>2. Truppen manövrieren.|
| Alternativen                 | 1. Insofern der aktive Spieler kein Gebiet erobert hat, kann er keine Spielkarte anfordern.<br>2. Der aktive Spieler kann auf das Truppenmanövrieren verzichten.  |
