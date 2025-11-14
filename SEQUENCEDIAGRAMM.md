# Risiko - Sequenzdiagramm

## Spielzug

```mermaid
sequenceDiagram
        actor A as Aktiver Spieler
        participant R as Risiko
        actor P as Passiver Spieler

        alt Karten einlösen
        A-)R: Spielkarten einlösen
        activate R
        R->>R: Einlösung überprüfen
        R-->>A: Anzahl mobilisierbarer Truppen
        deactivate R
        end
        A->>R: Anfrage mobilisierbarer Truppen
        activate R
        R-->>A: Anzahl mobilisierbarer Truppen
        deactivate R
        A->>R: Platzierung der Truppen

        %%Kampfphase
        loop Angreifen
        activate R
        A->>R: Angriff auf Gebiet von P initiieren

        R->>R: Würfeln
        deactivate R
        activate R
        R->>P: Angriffswürfelwurf mitteilen

        activate R
        R->>R: Würfeln
        P->>R: Verteidigungswürfel wählen
        deactivate R
        R-->>A: Kampfresultat
        R-->>P: Kampfresultat
        deactivate R
        end


        %% Aufräumphase
        A->>R: Truppenbewegungen
        A->>R: Siegbedingungen überprüfen
        R-->A: Siegprüfungsergebnis übermitteln
        A->>R: Spielkarte anfragen
        R-->>A: Spielkarte ausgeben
```
