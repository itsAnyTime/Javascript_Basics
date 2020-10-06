// * Weise der Variable `x` verschiedene Werte zu, der abhängig vom Wert einer Variable (Determinator) ist.


let determinator =4;
let x = determinator;

// * Abhängig von (Determinator), weise `x` zu: 
//     - "kleiner als 0", wenn Determinator kleiner als 0 ist
//     - "größer oder gleich 0 ", wenn Determinator größer oder gleich 0 ist.

// ternär example:
// let uhrzeit = 9;
// let getränk = (uhrzeit < 9) ? "Kaffee" : "Tee";
// // wenn vor 9 uhr, gibts Kaffee, sonst Tee
// console.log(getränk);

// lösung ohne ternär v1:
if(determinator < 0) {
    x = determinator;
    console.log("Determinator ist kleiner als 0");
}


if (condition) {
    
}

if(determinator >= 0) {
    x = determinator;
    console.log("Determinator ist größer oder gleich 0");
}

// lösung ohne ternär v2:
if(determinator < 0) {
    x = determinator;
    console.log("Determinator ist kleiner als 0");
} else {
    x = determinator;
    console.log("Determinator ist größer oder gleich 0");
}

// lösung mit ternär
x = (determinator < 0) ? "kleiner als 0" : "größer oder gleich 0";
console.log("Ternärlösung von x:", x);


// * Abhängig vom Wert von Determinator, weise einer anderen Variable (`Updater`) verschiedene Werte zu.
//  - Wenn Determinator größer oder gleich 0 ist, soll der Wert von `Updater` "Größer oder gleich 0" sein, erstelle eine weitere Variable `Nachricht` und gib ihr den Wert "Positive ganze Zahl" und gib sie aus.
//  - Wenn Determinator kleiner als 0 ist, soll der Wert von `Updater` "kleiner als 0" sein.

let updater = "";
// let nachricht = "Positive ganze Zahl, oder 0";

// ohne ternär
if(determinator >= 0) {
    var nachricht = "Positive ganze Zahl, oder 0"; // var = global, let = !global

    updater = "Größer oder gleich 0";
    console.log(nachricht);
    console.log("Determinator beträgt:", determinator);
} else {
    updater = "kleiner als 0";
    console.log("Determinator ist auch hier kleiner als 0");
}

// mit ternär
updater = (determinator >= 0) ? "Größer oder gleich 0" : "kleiner als 0";
if(updater < 0) {
    nachricht = "kleiner als 0";
    console.log("Nachricht in Schleife:", nachricht);
}
console.log("ternärlösung von updater:", updater);



//  * **Frage**: Was wird passieren, wenn du `Nachricht` außerhalb des Wenn (if) Blocks ausgibt. Kommentiere die Antwort in Deiner JS-Datei.
console.log("Außerhalb der if-Schleife:", nachricht);
    /* Wenn ich die Variable außerhalb der Schleife mit let deklariere, kann drauf zugegriffen werden, und es wird der initialisierte Wert "Positive ganze Zahl" ausgegeben. 
    Wenn ich nachricht innerhalb der Schleife mit let deklariere, kann von außen nicht zugegriffen werden, die führt zum error: nachricht ist not defined. Abhilfe schafft var, da diese Variablen mit var global sind. */


// * Wann würdest du eher den Ternären ? Operator verwenden und wann die Wenn (if) Verzweigung? Gib ein Beispiel.
    /* Aus Gründen der lesbarkeit kann der ternäre Operator klarer sein, in anderen Situationen erreicht man das Gegenteil. */
// if bei mereren Anweisungen pro Test 
// if(kundeIstVeganer) {
//     Hauptbeilage = "Tofu";
//     Sahne = "Sojamilch";
//     ...
// }

// if(esRegnet) {
//     nimmSchirm();
//     Jacke = "Regenjacke";
//     Hose = "Lange Hose";
// } else {
//     Jacke = "StrickHoodie";
//     Hose = "Shorts";
// }
// Ternär kann nicht mehrere Anweisungen ausführen
// Ternär ist kürzer und liest sich ggf. einfacher
//  let preis = (istSchüler && istRentner) ? 5 : 10;



        // Zitat: https://www2.icp.uni-stuttgart.de/~hilfer/lehre/100-online/skriptum/html_book00/node34.html
        // Ternär = Operator benötigt drei Argumente. Dieser kann dazu dienen, innerhalb von Ausdrücken Teilausdrücke bedingt auszuwerten.

        // inline int abs(int number) {
        //   // compute absolute value 
        //   return number > 0 ? number : -number;
        // }

        // Ist der vor dem Fragezeichen stehende Ausdruck true, so wird der Teilausdruck vor dem Doppelpunkt, sonst derjenige nach dem Doppelpunkt ausgewertet. Der resultierende Typ der beiden alternativen Ausdrücke muß gleich sein. Aufgrund der geringen Priorität dieses Operators und zur Verdeutlichung der Zusammengehörigkeit der Teilausdrücke sollte man sich angewöhnen, großzügig Klammern zu setzen.

        //   int i1   =       3 > 4 ? 0 : 1;    //  i1   is 1
        //   int i2   = 3 * ( 3 > 4 ? 0 : 1 );  //  i1_3 is 3
        //   int i3   = 3 *   3 > 4 ? 0 : 1;    //  i2_3 is 0, since * binds
        //                                      //    stronger than >

        // Dieser Operator kann immer durch eine if-Anweisung vermieden werden, kann aber in vereinzelten Situationen klarer sein. Da er anderenfalls eine der zahlreichen Möglichkeiten in C/C++ ist, seine Programme für andere erfolgreich unlesbar zu gestalten, sollte man ihn sparsam einsetzen. 