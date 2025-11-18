# Data Dictionary

<div style="max-height:80%; overflow-y:scroll;">
<table>
  <thead style="position:sticky; top:0;background: white">
    <tr>
      <th><b>Name</b></th>
      <th><b>Beschreibung</b></th>
      <th><b>Eigenschaften</b></th>
      <th><b>Verwendung</b></th>
      <th><b>Instanzen</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dice</td>
      <td>Der Würfel (Dice) erzeugt Zufallswerte zwischen 1..6 und dient dazu, Angriffs- und Verteidigungswürfe durchzuführen. Ein Player kann mehrere Würfel gleichzeitig einsetzen (Angreifer 1..3, Verteidiger 1..2).</td>
      <td>Wurfwert (1..6)<br>Angabe, ob der Würfel ein Verteidigungs- oder Angriffswürfel ist</td>
      <td>Zum Durchführen der Würfelwürfe</td>
      <td>Angreiferwürfel (1–3 Stück)<br>Verteidigerwürfel (1–2 Stück)</td>
    </tr>
    <tr>
      <td>Player</td>
      <td>Der Spieler (Player)  stellt einen teilnehmenden Spieler im Risiko-Spiel dar. Ein Spiele besitzt eine bestimmte Armee-Farbe, kontrolliert seine eingenommenen Länder auf der Karte, verwaltet Truppen, GameCards und ggf. Missionskarten. Er führt die Spielphasen durch (Truppenmobilisierung, Kampfphase und das Abschließen des Zuges). Hierbei interagiert mit anderen Spielern auf Basis der Spielregeln.</td>
      <td>Name<br>Farbe<br>kontrollierte Länder<br>verfügbare Truppen<br>Besitz von Gebietskarten</td>
      <td>Zum Durchführen aller Usecases</td>
      <td>2..n</td>
    </tr>
    <tr>
      <td>Enumeration - Party</td>
      <td>-</td>
      <td>-</td>
      <td>Zur ordentlichen Zuordnung des Spielerstatus & der Würfel</td>
      <td>Attacker (aktiv), Defender (passiv)</td>
    </tr>
    <tr>
      <td>MissionCard</td>
      <td>Die Missionskarte (MissionCard) repräsentiert eine Zielkarte im Risiko-Spiel. Sie definiert eine spezielle Siegbedingung, die ein Spieler erfüllen muss, um das Spiel vorzeitig zu gewinnen (z. B. Eliminierung eines bestimmten Spielers, Kontrolle bestimmter Kontinente oder Besitz einer Mindestanzahl an Ländern).</td>
      <td>Eindeutige Karten ID<br>Text der Mission<br>Art der Mission (Eliminierung, Kontinente, Länderanzahl)</td>
      <td>Wird verwendet, um das Spiel zu Gewinnen</td>
      <td>14</td>
    </tr>
    <tr>
      <td>GameCard</td>
      <td>Die GameCard ist eine Gebietskarte, die einem spezifischen Land auf der Spielkarte zugeordnet ist. Jede GameCard besitzt zusätzlich einen Truppentyp (Infanterie, Kavallerie oder Artillerie). Beim Sammeln von drei Karten (mit passenden Kombinationen) kann ein Spieler diese einlösen, um zusätzliche Truppen zu erhalten. GameCards dienen damit der strategischen Verstärkung im Spiel.</td>
      <td>Eindeutige Karten ID<br>Zugehöriges Land<br>Infanterie, Kavallerie, Artillerie</td>
      <td>Wird zum einlösen für Truppenkontingent benutzt</td>
      <td>42 + 2 Joker</td>
    </tr>
    <tr>
      <td>Interface - Card</td>
      <td>Das Card-Interface definiert die gemeinsamen Eigenschaften und Methoden, die alle Kartenarten im Spiel teilen. Sowohl GameCard als auch MissionCard implementieren dieses Interface. Es stellt sicher, dass alle Karten eindeutig identifizierbar sind und eine allgemeine Beschreibung besitzen.</td>
      <td>Text der Siegbedingung<br>Kategorie (z. B. Eliminierung, Kontinente, Länderanzahl)</td>
      <td>Beinhaltet Attribute die Gamecard und MissionCard gemeinsam haben</td>
      <td>GameCard, MissionCard (beide instanziieren dieses Interface)</td>
    </tr>
    <tr>
      <td>Enumeration-Troop</td>
      <td>--------------</td>
      <td>zugehöriges Land<br>Infanterie/Kavallerie/Artillerie</td>
      <td>Beinhaltet die Arten von Truppenkarten</td>
      <td>Joker, Canon, Cavalry, Soldier</td>
    </tr>
    <tr>
      <td>GameMap</td>
      <td>Die GameMap repräsentiert das gesamte Spielfeld von Risiko. Sie enthält alle Kontinente (Continents) und deren zugehörige Länder (Countries) sowie die Informationen über angrenzende Gebiete. Die GameMap bildet die Basis für die Bewegungs- und Angriffsmöglichkeiten und verwaltet die territoriale Struktur des Spiels.</td>
      <td>Kontinente<br>Länder</td>
      <td>Wird für die durchführung von angriffen und Verteidigen als auch zur Überprüfung der Gewinnbedingung benötigt</td>
      <td>1 (Weltkarte, bestehehnd aus den Kontinenten + Ländern)</td>
    </tr>
    <tr>
      <td>Country</td>
      <td>Ein Land (Country) ist ein einzelnes Gebiet auf der Spielkarte. Es gehört genau zu einem Kontinent, besitzt Nachbarländer(für Angriffe bzw. die Verteidigung, und kann Truppen sowie einen kontrollierenden Spieler haben. Länder fungieren als zentrale Einheiten des Spiels für Bewegung, Kampf und Gebietskontrolle.</td>
      <td>Name<br>Kontinent<br>Besitzer<br>Truppen<br>Nachbar</td>
      <td>Ist die zentrale Einheit bei Angriffen und Verteidigungen. Wird von einem Spieler und einer gewissen Anzahl seiner Truppen besetzt</td>
      <td>42</td>
    </tr>
    <tr>
      <td>Continent</td>
      <td>Ein Kontinent (Continent) fasst mehrere benachbarte Länder zu einer logischen Region auf der Weltkarte zusammen. Jeder Kontinent besitzt einen festen Bonus an zusätzlichen Truppen, der einem Spieler gewährt wird, der alle Länder dieses Kontinents kontrolliert.</td>
      <td>Name<br>Länder<br>Bonustruppen</td>
      <td>Zum Erreichen bestimmter Missionen als auch zum Erhalt von Bonustruppen verwendet.</td>
      <td>6</td>
    </tr>
  </tbody>
</table>
</div>
