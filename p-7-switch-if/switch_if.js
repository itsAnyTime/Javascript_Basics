// #### 1. Farbanalyse
// Defiert eine Konstante für einen Farbwert (als Zeichenkette `rot` u.s.w.)
// Erstellt eine Switch Anweisung, die verschiedene Kommentare für verschiedene Farbmöglichkeiten ausgibt (z.B. rot, blau, grün, gelb)
// z.B. "Rot ist die Farbe des Blutes", "Grün ist die Farbe des Waldes", etc.


const color = "hmpf";
switch (color) {
    case "gelb": 
        console.log("Gelb ist schön");
        break;
    case "blue": 
        console.log("Blue ist schön");
        break;
    case "green": 
        console.log("Grün ist schön");   
        break; 
    default: 
        console.log("Nix ist schön");
        break;
}

// #### 2. Notenvergabe
// Definiert eine Konstante für eine Schulnote (z.B. als Zahl von 1 bis 5)
// Gibt verschiedene Kommentare aus, je nach Note (z.B. für 1 : "Super! Weiter so")

const note = 2;

switch (note) {
    case 1: 
        console.log("Note 1: Du bist gut, so wie du bist!");
        break;
    case 2: 
        console.log("Note 2: Du bist gut, so wie du bist!!");
        break;
    case 3: 
        console.log("Note 3: Du bist gut, so wie du bist!!!");   
        break; 
    case 4: 
        console.log("Note 4: Du bist gut, so wie du bist!!!!");   
        break; 
    case 5: 
        console.log("Note 5: Du bist gut, so wie du bist!!!!!");   
        break; 
    case 6: 
        console.log("Note 6: Du bist gut, so wie du bist!!!!!!");   
        break; 
    default: 
        console.log("Nicht teilgenommen");
        break;
}



// #### 3. Früchte
// Definiert eine Konstante für eine Frucht (als Zeichenkette `Banane` )
// Erstellt eine Switch Anweisung, die verschiedene Kommentare für verschiedene Werte von Frucht ausgibt (Bananen, Orangen, Erdbeeren, Äpfel, etc.)

const fruit = "orange";

switch (fruit) {
    case "banane": 
        console.log("Bananen sind ok");
        break;
    case "orange": 
        console.log("Orangen können lecker sein");
        break;
    case "erdbeere": 
        console.log("Erdbeeren sind köstlich, wenn sie reif und guter Qualität sind");   
        break; 
    case "apfel": 
        console.log("Äpfel schmecken super, wenn sie von Kanzi sind");   
        break; 
    case "kirschen": 
        console.log("Kirschen sind auch gut");   
        break;                 
    default: 
        console.log("Habe keinen Hunger");
        break;
}

// #### 4. Anteilige Vervollständigung.
// Definiert eine Konstante oder Variable für Werte von 0 bis 100 etwa als `prozentFertig`.
// Gibt verschiedene Kommentare aus, je nach Wert.

const prozentFertig = 111;

if(prozentFertig < 30) {
    console.log("Noch ein langer Weg");
} else if (prozentFertig >= 30 && prozentFertig <= 50) {
    console.log("Wir kommen langsam näher");
} else if (prozentFertig >= 51 && prozentFertig <= 80) {
    console.log("Du kannst es");
} else if (prozentFertig >= 81 && prozentFertig <= 99) {
    console.log("Nur noch ein Stück");
// Lösung sagt zwar prozentFertig > 99, aber gibt dann imo keinen Fall, wo else Eintritt, da eh eine Zahl verlangt wird. Bei 100% sollte eh Ende sein, also geht der Vergleich mit 100. 
} else if (prozentFertig == 100 ) {  
    console.log("Gut gemacht! Du bist da!");
} else {
     console.log("Über 100%. Überfertig!");   
 }

// #### 5. Unterschiede
// Switch case bei "begrenzten Alternativen", bei "Vergleichen" und "Wahrheitswerte auswerten", sonst if else.