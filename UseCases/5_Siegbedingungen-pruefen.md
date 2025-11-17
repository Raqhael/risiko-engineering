## Siegbedingungen prüfen

| Geschäftsprozess, Funktion   | Siegbedingungen prüfen |
| ---------------------------- | ------------------------------------------------------------------------------------------ |
| Ziel, Ergebnisse             | Es soll festgestellt werden, ob ein Spieler die Aufgabe seiner geheime Missionskarte vollständig erfüllt hat und damit das Spiel gewinnt. Auch soll auf das Erreichen der Weltherrschaft geprüft werden. |
| Akteure                      | Aktiver Spieler, Passiver Spieler.|
| Vorbedingungen               |  Ein aktiver Spieler führt einen Zug aus, der zur Erfüllung seiner eigenen Mission, der Mission eines anderen Spielers oder zur vollständigen Kontrolle aller Länder, der Weltherrschaft, führt. |
| Auslösendes Ereignis         | Abschluss einer Kampfphase, Eliminierung eines Spielers, jede Länderübernahme oder das reguläre Ende eines Spielerzugs. |
| Nachbedingung bei Erfolg     | Die Siegbedingung   eines Spielers ist erfüllt. Das Spiel wird mit diesem Spieler als Sieger beendet. |
| Nachbedingung bei Fehlschlag | Keine Siegbedingung  ist  erfüllt. Das Spiel wird im normalen Ablauf fortgesetzt. |
| Eingehende Daten             | 1. Missionskarten der Spieler. <br> 2. Aktuelle Spielkarte inklusive aller platzierter Truppen. <br> 3. Status der noch aktiven Spieler. |
| Ausgehende Daten             | Rückmeldung ob eine Siegbedingung erfüllt wurde. Bei erfüllter Siegbedingung zusätzlich die Information, welcher Spieler das Spiel gewonnen hat. |
| Ablauf                       | <span v-mark.box.red="1"> 1. Das Spielsystem liest die Missionskarte der Spieler aus. <br> 2. Das Spielsystem ermittelt den aktuellen Zustand der Weltkarte (Gebietsbesitz, verbliebene Spieler, Armeenanzahl).<br>3. Das Spielsystem vergleicht die Missionsziele mit dem aktuellen Spielzustand.<br>4. Wenn alle Missionsbedingungen erfüllt sind, markiert das System den jeweiligen Spieler als Sieger. <br>5. Ist mindestens eine Bedingung nicht erfüllt, wird der Anwendungsfall ohne Sieg beendet.</span> |
| Erweiterungen                | Falls mehrere Spieler durch dieselbe Aktion eine Mission erfüllen könnten (z. B. durch Eliminierung eines Zielspielers), hat der Spieler Vorrang, der diese Spielsituation aktiv verursacht hat. |
| Alternativen                 | Keine Alternative, da die Prüfung nicht optional ist.|