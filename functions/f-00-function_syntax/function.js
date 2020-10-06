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

// 1. Erstelle eine Funktion, mit dem du jemanden begrüßen kannst. Die Funktion sollte einen Parameter als Input nehmen, und eine Begrüßung auf der Konsole ausgeben. 

function hallo(x) {
    console.log("Hallo", x);
}

hallo("Any"); // Hallo Any


// 2. Erstelle eine Funktion, die dein Alter und dein Geburtsjahr auf der Konsole ausgibt.

function personal(age, born) {
    console.log("Age:", age, "Born:", born);
}

personal(231, 2392); // Age: 231 Born: 2392


// 3. Erstelle eine Funktion, die dein Wohnort und deine Postleitzahl auf der Konsole ausgibst. 

function place(place, plz) {
    console.log("Ort:", place, "PLZ:", plz);
}

place("Valhalla", 4396286);
