// #### 1. Multiply - Function Declaration
// * Create a function that multiples a number by another number.

function multiply(a,b) {
    return a * b;
}
console.log(multiply(3,4));

function multiplyAgain(a,b) {
    console.log(a * b);
}
multiplyAgain(3,4);


// #### 2. Multiply - Function Declarations as Values
// * Rework the syntax of the above function so that the function declaration is stored as a value.

const multiKonstante = function(a,b) {
    console.log(a*b);
};
multiKonstante(3,8);

const multiKonstante2 = function(a,b) {
    return a * b;
};
console.log(multiKonstante2(2,2));


// #### 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that is uses the arrow function shorthand.
// * Erstelle eine Funktion `multiPfeil`, die zwei Zahlen nimmt und das Produkt der beiden ausgibt.
// * Verwende hier die Pfeil-Schreibweise (`const funktion = ( ... ) => { ... };` ) ohne das Schlüsselwort `function`.

// syntax variante
const multiPfeil3 = (parameter1, parameter2) => { 
    console.log(parameter1*parameter2);
};

let c = 1;
let d = 2;
let e = 3;
let f = 4;

const multiPfeil = (c,d) => { 
    console.log(c*d); 
 };

multiPfeil(c,d);

const multiPfeil2 = (e,f) => { 
    console.log(e*f); 
};

multiPfeil2(e,f);
  

// #### 4. Declarations
// * Create functions (using all three declarations) to check the remainder of division given two numbers. 

// * Erstelle drei Funktionen `restNormal`, `restKonstante` und `restPfeil`.
// * Je die erste auf die "normale" Art, für die zweite die Konstante und die dritte die Pfeilschreibweise.
// * Die Ausgabe der Funktionen soll der Divisionsrestes für zwei Zahlen sein. (A "modulo" B)


function restNormal(dividend, divisor) {
    console.log(dividend % divisor);
}
restNormal(2,6);



const restKonstante = function(dividend, divisor) {
    console.log(dividend % divisor);
}
restKonstante(32,33);



const restPfeil = ( dividend, divisor ) => { console.log(dividend % divisor); };

restPfeil(15,3);