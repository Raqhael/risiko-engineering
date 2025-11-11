# 3. Kampfphase

| Geschäftsprozess, Funktion   | Kampfphase durchführen |
| ---------------------------- | ---------------------- |
| Ziel, Ergebnisse             | Der aktive Spieler versucht, mit seinen Truppen aus seinen bestehenden Ländern benachbarte Spieler anzugreifen, um deren Länder zu erobern. |
| Akteure                      | Aktiver Spieler, Passiver Spieler |
| Vorbedingungen               | Die Truppen des aktiven Spielers wurden mobilisiert. Im Angriffsquellland des aktiven Spielers befindet sich mehr als eine Truppe. |
| Auslösendes Ereignis         | Abschluss der Truppenmobilisierungsphase. |
| Nachbedingung bei Erfolg     | Der aktive Spieler hat mindestens ein Land erobert |
| Nachbedingung bei Fehlschlag | Der aktive Spieler hat *kein* Land erobert, aber mindestens 1 Truppe verloren |
| Eingehende Daten             | Würfelwurf von aktivem und verteidigendem Spieler |
| Ausgehende Daten             | Truppenverluste der kämpfenden Spieler (mind. 1 Truppe pro erfolgreicher Eroberung wird verloren) |
| Ablauf                       | 1. Der aktive Spieler proklamiert das Zielland und das Angriffsquellland, aus welchem er angreift. <br> 2. Der aktive Spieler würfelt mit den Angriffswürfeln (wobei die genaue Anzahl dieser Würfel [n ∈ {1,2,3}] Teil eines separaten Anwendungsfalls ist) <br> 3. Der passive Spieler würfelt mit den Verteidigungswürfeln (wobei die genaue Anzahl dieser Würfel [n ∈ {1,2}] Teil eines separaten Anwendungsfalls ist) <br> 4. Die Ergebnisse der Würfe werden abgeglichen und der jeweils schlechtere Spieler verliert 1 Truppe pro Niederlage <br> 5. Schritte 2-4 werden wiederholt, bis alle Truppen im Zielland vernichtet wurden (der aktive Spieler erobert das Land), der aktive Spieler nicht mehr über genügend Truppen im Angriffsquellland verfügt oder keine weiteren Angriffe durchführen möchte (es folgt ein Wechsel von Angriffsquell-/-zielland oder die nächste Zugphase) |
| Erweiterungen                | 1. Berechnung der maximal erlaubten Würfel pro Spieler <br> 2. Auswahl der zu werfenden Würfel durch die Spieler |
| Alternativen                 | Durch die vorgeschaltete Truppenmobilisierungsphase ist sichergestellt, dass der Spieler technisch betrachtet **immer** daran angeschlossen die Kampfphase durchführen kann. Dennoch ist es ihm möglich, (aus taktischen Gründen) auf eine Durchführung des Anwendungsfalls `Kampfphase` zu verzichten und direkt zur Folgephase `Zug abschließen` überzugehen |
