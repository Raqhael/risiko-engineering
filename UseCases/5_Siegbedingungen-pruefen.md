# 5. Siegbedingungen prüfen

| Geschäftsprozess, Funktion   | Siegbedingungen prüfen |
| ---------------------------- | ------------------------------------------------------------------------------------------ |
| Ziel, Ergebnisse             | Es soll festgestellt werden, ob ein Spieler die Aufgabe seiner geheime Missionskarte vollständig erfüllt hat und damit das Spiel gewinnt. Zuzüglich soll geprüft werden, ob ein Spieler die Weltherrschaft errungen, und somit jedes Land erobert hat.. |
| Akteure                      | Aktiver Spieler, Passiver Spieler, Spielsystem |
| Vorbedingungen               |  Ein aktiver Spieler führt einen Zug aus, der zur Erfüllung seiner eigenen Mission, der Mission eines passiven Spielers oder zur vollständigen Kontrolle vollständigen Kontrolle aller Länder, der Weltherrschaft, führt. |
| Auslösendes Ereignis         | Abschluss einer Kampfphase, Eliminierung eines Spielers, jedes weitere eingenommene Land oder reguläres Ende eines Spielerzugs. |
| Nachbedingung bei Erfolg     | Die Siegbedingung der Missionskarte eines Spielers ist erfüllt. Das Spiel wird beendet und jener mit erfüllter Missionskarte wird zum Sieger erklärt. |
| Nachbedingung bei Fehlschlag | Die Siegbedingung der Missionskarte ist nicht erfüllt. Das Spiel wird im normalen Ablauf fortgesetzt. |
| Eingehende Daten             | 1. Missionskarten der Spieler <br> 2. Aktueller Besitzstand der Länder und Kontinente <br> 3. Status der noch aktiven Spieler. |
| Ausgehende Daten             | Rückmeldung darüber, ob das individuelle Missionsziel erfüllt wurde. Bei erfüllter Mission zusätzlich die Information, welcher Spieler das Spiel gewonnen hat |
| Ablauf                       | 1. Das Spielsystem liest die Missionskarte der Spieler aus. <br> 2. Das Spielsystem ermittelt den aktuellen Zustand der Weltkarte (Gebietsbesitz, Kontinente, verbliebene Spieler, Armeenanzahl).<br>3. Das Spielsystem vergleicht die Missionsziele mit dem aktuellen Spielzustand.<br>4. Wenn alle Missionsbedingungen erfüllt sind, markiert das System die Mission als erfolgreich abgeschlossen.<br>5. Ist mindestens eine Bedingung nicht erfüllt, wird der Use Case ohne Sieg beendet. |
| Erweiterungen                | Falls mehrere Spieler durch dieselbe Aktion eine Mission erfüllen könnten (z. B. durch Eliminierung eines Zielspielers), hat der Spieler Vorrang, der diese Spielsituation aktiv verursacht hat. |
| Alternativen                 | Der Spieler muss seine Mission nicht aktiv prüfen lassen, da die Prüfung durch das Spielsystem erfolgt. Es existiert keine Alternative für diesen Use Case.|