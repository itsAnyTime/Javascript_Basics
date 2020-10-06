function ohne() {
    console.log("Ohne parameter");
}

ohne(); // Ohne parameter


function ola(name) {
    return "Hola Espania";  
}

// let test = ola("nubsi");
console.log(ola("nubsi")); // Hola Espania


function multiply(a, b) {
    b = typeof b !== 'undefined' ?  b : 1;
    console.log(a * b);
}
  
multiply(5, 5); // 25

//////////////////////////////////////////////////////////////////////////

// 1. Funktion (mit einem Parameter), die jemanden begrüßt. 

function hallo(x) {
    console.log("Hallo", x);
}

hallo("Any"); // Hallo Any


// 2. Funktion, die Alter und Geburtsjahr auf der Konsole ausgibt.

function personal(age, born) {
    console.log("Age:", age, "Born:", born);
}

personal(231, 2392); // Age: 231 Born: 2392


// 3. Funktion, die ein Wohnort und eine Postleitzahl auf der Konsole ausgibt. 

function place(place, plz) {
    console.log("Ort:", place, "PLZ:", plz);
}

place("Valhalla", 4396286);
