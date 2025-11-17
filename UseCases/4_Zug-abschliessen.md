## Zug abschließen

| Geschäftsprozess, Funktion   | Zug abschließen |
| ---------------------------- | ------------------------------------------------------------------------------------------ |
| Ziel, Ergebnisse             | Der aktive Spieler schließt seinen Zug ab und kann optional Truppen manövriert. Falls in diesem Zug mindestens ein Gebiet erobert wurde, fordert er eine Spielkarte an. Daraufhin wird der nächste Spieler aktiv.|
| Akteure                      | Akvier Spieler |
| Vorbedingungen               | Abschluss der Truppenmobilisierung und Kampfphase. |
| Auslösendes Ereignis         | Die Kampfphase des aktiven Spielers wird beendet. |
| Nachbedingung bei Erfolg     | - |
| Nachbedingung bei Fehlschlag | - |
| Eingehende Daten             | 1. Information, ob in diesem Zug mindestens ein Gebiet erobert wurde <br>2. Status des Kartenstapels (verfügbare Spielkarten) <br>3. Spielerreihenfolge und aktueller aktiver Spieler |
| Ausgehende Daten             | 1. Aktualisierter Truppenbestand pro Land nach dem Truppen-Manöver <br>2. Ggf. aktualisierter Kartenbestand des aktiven Spielers und des Kartenstapels <br>3. Neuer aktiver Spieler für den nächsten Zug |
| Ablauf                       | 2. [alt: Truppen manövrieren] Der aktive Spieler kann ein oder mehrere Truppen-Manöver ausführen (Truppen von einem eigenen Gebiet auf ein benachbartes eigenes Gebiet verschieben). Das System prüft jede Verschiebung auf Gültigkeit und aktualisiert die Truppenstände.3. Der aktive Spieler kann das Truppen-Manövrieren jederzeit beenden.4. [alt: Gebiet erobert] Falls der aktive Spieler in diesem Zug mindestens ein Gebiet erobert hat, kann er über die Aktion „Spielkarte anfordern“ eine Gebietskarte beim Spielsystem anfordern.5. Das Spielsystem prüft, ob der Spieler zum Kartenerhalt berechtigt ist (mindestens ein Gebiet erobert, noch keine Karte in diesem Zug erhalten) und ob Karten im Stapel verfügbar sind.6. Ist die Prüfung erfolgreich, führt das Spielsystem „Karte ausgeben“ aus, zieht eine Spielkarte aus dem Stapel, aktualisiert den Stapel (ggf. intern mehrfach, z. B. bei Mischen/Neuaufbau) und übergibt die Spielkarte an den aktiven Spieler.7. Das System setzt zugbezogene Statusinformationen (z. B. „Gebiet erobert“, Angriffszähler) zurück.8. Das Spielsystem aktiviert den nächsten Spieler in der Reihenfolge als neuen aktiven Spieler und beendet damit den Zug des bisherigen aktiven Spielers.|
| Erweiterungen                | Spielkarte anfordern. Truppen manövrieren|
| Alternativen                 | 1. Der aktive Spieler kann auf das Truppen manövrieren verzichten. <br>2. Insofern der aktive Spieler kein Gebiet erobert hat, kann er keine Spielkarte anfordern.  |
