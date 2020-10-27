// A: Funktion mit zwei Zahlen, gibt deren Summe zurück:

a = -3;
b = -6;

// Schreibweise 1:
// function add(a,b) {
//     return a + b;
// }

// Schreibweise 2 (Pfeil):
// const add = (a,b) => { return a + b; }
// shorter:
const add = (a,b) => a + b;  // keine geschweiften Klammer und kein return

// Ausgabe mit Zeilenumbruch
console.log(`1. Addiere:
` + add(a,b)); // -9
console.log(add(7,3)); // 10
console.log(add(-5,5)); // 0

console.log("-------B--------");  

// B: Nachfolger 

// Funktion, die für eine Zahl den Nachfolger zurück gibt (Zahl+1):

// Schreibweise 1: 
// function nachfolger(a) {
//     return a+1;
// }

// Schreibweise 2 (Pfeil): 
// const nachfolger = (a) => { return a+1; };
// shorter:
const nachfolger = (a) => a+1;


console.log("Nachfolger:\n" + nachfolger(8)); // 9
console.log(nachfolger(-15)); // -14
console.log(nachfolger(0)); // 1

console.log("-------C--------");  

// C: Triangle Fläche / Dreieck

// Funktion: Gibt Fläche vom rechtwinkligen Dreieck (90*) zurück: 

// function triangle(a,h) {
//     return 0.5 * a * h;
// }

// const triangle = (a,h) => {
//     return 0.5 * a * h;
// };
// shorter:
const triangle = (a,h) => 0.5 * a * h;

console.log(`Triangle Fläche:
` + triangle(10,10));  // 50
console.log(triangle(7,4));  // 14
console.log(triangle(3,2)); // 3

console.log("-------D-------");  

// D: Divisionsrest

// Funktion, die für zwei Zahlen den Divisionsrest zurück gibt:
// Zahl 1 geteilt durch Zahl2

const divRest = (dividend, divisor) => {
    return dividend % divisor;
};

console.log(divRest(1,3)); // 1
console.log(divRest(3,4)); // 3
console.log(divRest(5,2)); // 1
console.log(divRest(8,2)); // 0

console.log("-------E--------");  

// E: Funktion: Gib Summe der Beine aller Tiere.

// const anzTier = (a,b,c) => {
//     return ((a*2) +(b*4) + (c*4));
// };

function anzTier(a,b,c) {
    // Value * Anzahl Beine von Huhn, Kuh, Schwein
    return ((a*2) +(b*4) + (c*4));
}

//     (anzTier(huhn, kuh, schwein));
console.log(anzTier(4, 3, 5)); // 40 
console.log(anzTier(1, 2, 3)); // 22
console.log(anzTier(4, 1, 8)); // 44

console.log("-------F--------");  
// F: Stunden und Minuten in Sekunden:

const sek = (a,b) => {
    a = a * 60; // stunden zu minuten
    return ((a+b)*60);  // min + minAusSpalte2 * 60 = sekunden
};

console.log(sek(3,0)); // 10800
console.log(sek(2,3)); // 7380

console.log("-------G-------");  


// G: Vielfaches von 5?

// const divFive = (a) => {
//     if (a % 5 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

// or shorter
function divFive(a) { return a % 5 == 0}

console.log(divFive(10)); // true
console.log(divFive(-45)); // true
console.log(divFive(57)); // false 

console.log("-------H-------");  

// H: Vielfaches von 100?

// function vielfaches(a) {
//      if(a % 100 == 0 ) {
//          return "true";
//      } else {
//          return "false";
//      }
// }

// or shorter
function vielfaches(a) {return a % 100 == 0; }

console.log(vielfaches(1)); // false
console.log(vielfaches(1000)); // true
console.log(vielfaches(100)); // true
console.log(vielfaches(-300)); // true

console.log("-------I-------");  

// I: Gerade oder Ungerade / Even or odd

// function eve(a) {
//     if(a % 2 == 0) {
//         return "gerade";
//     } else {
//         return "ungerade";
//     }
// }

// or
// function eve(a) { return a%2 == 0 ? "gerade" : "ungerade"; }

// or
// const eve = (a) => { return a%2 == 0 ? "gerade" : "ungerade"; };
// shorter:
const eve = (a) => a%2 == 0 ? "gerade" : "ungerade"; 


console.log(eve(31)); // ungerade
console.log(eve(136)); // gerade
console.log(eve(39)); // ungerade

console.log("-------J-------");  

// J: Funktion mit 3 Parameter (Stücke, Personen, Zuteilung - ganze Zahlen), ob Kuchen reicht:

function cake(anzCake, anzPers,pieces) {
    // wenn (pers * pieces ) größer als anzGes, dann reicht kuchen nicht aus
    if((anzPers * pieces) < anzCake) {
        return "Kuchen reicht: true";
    } else {
        return "Kuchen reicht nicht aus: false";
    }
}

// console.log(cake(anzCake, anzPers, pieces));
console.log(cake(11, 5, 2)); // Kuchen reicht: true
console.log(cake(11, 5, 3)); // Kuchen reicht nicht aus: false
console.log(cake(8, 3, 2)); // Kuchen reicht: true
console.log(cake(8, 3, 3)); // Kuchen reicht nicht aus: false
console.log(cake(24, 12, 2)); // Kuchen reicht nicht aus: false

/////////////////// EDABIT /////////////////////////////////////
// -5 Convert Minutes into Seconds
const convert = (minutes) => minutes * 60

// or mine first
function convert2(min) {
	return min * 60;
}

// -4 Convert Hours into Seconds
function howManySeconds(hours) {
	return (hours*60)*60;
}

// or 
function howManySeconds(hours) {
	return hours * 3600;
}


// -3 Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
// wins get 3 points
// draws get 1 point
// losses get 0 points

function footballPoints(wins, draws, losses) {
	return (wins*3) + draws;
}

// -2 Return Something to Me!
function giveMeSomething(a) {
	return "something" + " " + a;
}

// -1 Convert Age to Days
function calcAge(age) {
	return age * 365;
}