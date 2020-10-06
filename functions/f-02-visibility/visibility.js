// ## 1. Potenzen-Reihe
// * Schreibe eine Funktion die zwei Werte bekommen kann.
// * Stell sicher, dass die Werte Zahlen sind.
// * Ein Wert soll die Basis sein
// * Ein Wert soll ein maximaler Exponent sein (im Beispiel oben die 3). Das ist auch die Anzahl der Potenzen die ausgegeben werden.

// Wenn Funktion(3 , 5) aufgerufen wird, dann soll die Ausgabe `3 9 27 81 243` sein.
// Wenn die Funktion(2, 8) aufgerufen wird, dann soll die Ausgabe `2 4 8 16 32 64 128 256` sein.

let basis = 3;
var zsum = basis;
let exponent = 5;
let folgenkette = "";

function hoch(basis, exponent) {
    console.log(basis);
    for (let index = 1; index < exponent; index++) {
        for(let again = 1; again < exponent-1; again++) {
            zsum = zsum * basis
            console.log(zsum);  // Seit ECMA-Script 2016 gibt es in JavaScript einen eigenen Operator (**) für das Potenzieren.
            
            sum = basis ** exponent;

            folgenkette = folgenkette + zsum + " ";    
        }
    }
}

let result = hoch(basis,exponent);   
console.log("Ergebnis von", basis, "hoch", exponent, " = ", sum); // 243
console.log(basis + " " + folgenkette);  // 3 9 27 81 243 729 2187 6561 19683 59049 177147 531441 1594323 

// Musterlösung

console.log("----------------------------------------------------");

// function potenzReihe(basis, exponent) {
//     if (typeof basis == "number" && typeof exponent == "number")
//     {
//         let ausgabe = "";
//         for (aktuellerExponent = 1; aktuellerExponent <= exponent; aktuellerExponent++) {
//             //console.log(Math.pow(basis,aktuellerExponent));
//             ausgabe = ausgabe + Math.pow(basis,aktuellerExponent) + " ";
//         }
//         console.log(ausgabe);
//     } else {
//         console.log("Die Argumente müssen zahlen sein.");
//     }
// }

// potenzReihe(3,"f"); // Die Argumente müssen zahlen sein.
// potenzReihe(2,8); //2 4 8 16 32 64 128 256 

console.log("----------------------------------------------------");

// ## 2. Früchte

// * Schreibe eine Funktion `druckeLieblingsFrucht`. 
// * Definiere eine Variable **außerhalb** der Funktion und weise ihr als Zeichenkette deine Lieblingsfrucht als Wert zu.
// * Innerhalb des Körpers der Funktion: Weise den Wert der Variable von außerhalb des Körpers, einer neuen Variable innerhalb der Funktion zu.
// * Gib den Wert deiner inneren Variable auf der Konsole aus mit "Meine Lieblingsfrucht ist: _frucht_ ".

let fruit = "Mango";

function druckeLieblingsFrucht(fruit) {
    let zfruit = fruit;
    return zfruit;
}

console.log("Meine Lieblingsfrucht ist:", druckeLieblingsFrucht(fruit));

// Musterlösung
let lieblingsFrucht = "Mango";
function druckeLieblingsFrucht2() {
    let innereFruchtVariable = lieblingsFrucht;
    console.log("Meine Lieblingsfrucht ist "+ innereFruchtVariable);
}
druckeLieblingsFrucht2();

// ## 3. Potenz ( Zahl mal sich selbst )

// * Erstelle eine Funktion mit dem Namen `Potenz`.
// * Die Funktion soll zwei Werte (Zahlen) nehmen können.
// * Der zweite Wert soll angeben, wie oft der erste Wert mit sich selbst mal genommen wird.

// * Speichere die Ausgabe deiner Funktion in einer Variable namens `Ergebnis`

// * Versuche den Wert deiner Variable `Ergebnis`von außerhalb der Funktion zu benutzen. Ist das überhaupt möglich? Warum/Warum nicht? Schreibe deine Antwort als Kommentar in die JavaScript-Datei.

let wert1 = 2;
let wert2 = 3;
// let Ergebnis2 = wert1;

function Potenz(a, b) {
    for(let start = 0; start < b; start++) {       
        return a ** b;
        // return = wert1 * wert1 geht nicht. Es müsste Ergenis = Ergebnis * wert1 heißen, aber da ich Ergebnis nicht in der Schleife definieren kann, weils sich sonst jedesmal selbst zurücksetzt, geht es nur, wenn die Variable seitens der Aufgabe ausserhalb deklariert werden darf. Außer es werden keine Zwischenschritte benötigt, dann geht es mittels **, das Ergebnis auszugeben.
    }
}

console.log(Potenz(wert1,wert2));