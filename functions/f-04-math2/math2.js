// A: Funktion: Ganze Zahlen addieren und Gesamtsumme zurückgeben
function ganze(a) {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    sum += i;
  }
  return sum;
}
console.log("Aufgabe 1:", ganze(4)); // 10
console.log("Aufgabe 1:", ganze(13)); // 91
console.log("Aufgabe 1:", ganze(600)); // 180300

// ohne Schleife:
let i = 1;
let sum = 0;
function ganze2(a) {
  sum += i;
  i++;
  if (i <= a) {
    ganze2(a);
  }
  return sum;
}

console.log("Aufgabe 1 ohne Schleife:", ganze2(4));
console.log("Aufgabe 1 ganze ohne Schleife:", ganze2(13));
console.log("Aufgabe 1 ganze ohne Schleife:", ganze2(600));

// B. Cubed. Function with three number parameters, returns sum of its cubes.
let sum2 = 0;
function sumOfCubes(a, b, c) {
  if (isNaN(a)) {
    return 0;
  } else if (isNaN(b)) {
    for (let i = 0; i < 3; i++) {
      sum2 = a * a * a;
    }
    return sum2;
  } else {
    // 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
    for (let i = 0; i < 3; i++) {
      //sum2 = a * a * a + b * b * b + c * c * c;
      sum2 = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
    }
  }
  return sum2;
}

console.log("Aufg. 2:", sumOfCubes(1, 5, 9)); // 855
console.log("Aufg. 2:", sumOfCubes(2)); // 8
console.log("Aufg. 2:", sumOfCubes()); // 0

// C. Check String: Fuction with two parameters (string and word)
// Wenn Wert der zweiten Zeichenkette mit Wert der ersten Zeichenkette beginnt, dann soll die Funktion true zurück geben.
// Accept lower and uppercase strings.

function beginntMit(a, b) {
  var tolerant_string_a = a.toLowerCase();
  var tolerant_string_b = b.toLowerCase();
  if (tolerant_string_b.indexOf(tolerant_string_a, 0) === 0) {
    return true;
  } else return false;
}

console.log("Aufg. C:", beginntMit("Bu", "buch")); // true
console.log("Aufg. C:", beginntMit("Tri", "Triceratops")); // true
console.log("Aufg. C:", beginntMit("Ende", "noch nicht am Ende")); // false

// D: Function - less than or equal to zero. Negative values and 0 return true, otherwise false:
function istKleinerGleich0(zahl) {
  // if(zahl <= 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  // or with ternär:
  return zahl <= 0 ? true : false;
}

console.log(istKleinerGleich0(3)); // false
console.log(istKleinerGleich0(0)); // true
console.log(istKleinerGleich0(-4)); // true
console.log(istKleinerGleich0(10)); // false

// Bei plus-unendlichen Zahlen müsste false rauskommen. Bei Minus-unendlich müsste true rauskommen.

// ### 5. Vorkommen zählen.
// Ausgabe: Anzahl der i´s

function wievieleZeichen(str) {
  let total = 0;
  str = str.toLowerCase().split(""); // toleriert klein und große i´s
  console.log(str);
  for (let index = 0; index < str.length; index++) {
    if (str[index].includes("i")) {
      // KEINE Tüttelchen falls es über Parameter kommt :)
      total++;
    }
  }
  return total;
}
console.log(wievieleZeichen("in dieIser ZeichenIkette", "i")); //5

// 5.2 Mehr als ein einzelnes Zeichen
// (Ermöglicht suche auch für Silben, wie z. B. "en")

function wieOftDrin(str, en) {
  let total = 0;
  str = str.toLowerCase(); 
  for (let i = 0; ; ) {
    // if str end not reached
    if (str.substr(i).indexOf(en) !== -1) {
      i += str.substr(i).indexOf(en) + 1;
      total++;
    } else break; 
  }
    return total;
}
console.log(
  wieOftDrin(
    "Im Deutschen kommen Wörter, die auf en enden nicht selten vor.", "en"
  )
); // 6

// NR:
// `Im Deutschen kommen Wörter, die auf en enden nicht selten vor.`
// -> indexOf("en") am Ende von Deutsch*en* an pos. 10. Zeichenkette mit Rest erstellen (z.B. mit substring()), dann ab der gefundenen Position 10 + Länge des "en" (2) weiter suchen in:
// Rest ` kommen Wörter, die auf en enden nicht selten vor.`
// indexOf("en") am Ende von komm*en* => 5. istDrin => 2 mal
// wieder den Rest ab der Fundstelle + Länge des gesuchten Teils abschneiden.
// Rest:  `Wörter, die auf en enden nicht selten vor.` usw.

// ### 6. X hoch x

function xHochX(x) {
  return x ** x; // Zahl hoch Zahl
}

console.log(xHochX(5)); // 3125
// console.log(xHochX(10)); // 10000000000
// console.log(xHochX(3)); // 27

// ### 7. Hundejahre
// Menschenjahr = etwa 7 Hundejahre
// Funktion, die Menschenjahre in Hundejahre umrechnet.

function dogYears(age) {
  return console.log(age * 7, "Years");
}

 dogYears(4) // 28 Jahre

// ### 8. Lebenslanger Snack-Vorrat
// Funktion zeigt, wie viel von deinem liebsten Snack du brauchst, damit der Vorrat für ein Leben reicht.

function sweet(age, amount) {
  let avgF = 83; // female average
  let avgM = 78;
  let toLife = avgF - age;
  let erg = toLife * 365 * amount;
  return console.log(parseInt(erg));
}
// **Bonus** mit Kommastellen.
sweet(38,1.3) // "noch 32850 Schokostückchen, damit sie bis zum Lebensende reichen."


// ### 9. Finde Walter
// Schreibe eine Funktion, die eine Zeichenkette nimmt und true zurück gibt, wenn darin Walter gefunden werden kann. false wenn nicht.

// const found = array1.find(element => element > 10);


function istWaltraudDa(test) {

  return test;
}

//istWaltraudDa("Ist Walli hier?") // false
//istWaltraudDa("Ich habe Waltraud gefunden!") // true
//istWaltraudDa("Ist Walthraudi hier?") // false
//istWaltraudDa("Waltraud ist hier!") // true

//  ### 10. Kuchen
//  (entfernt, die ist doppelt in einer anderen Übung mit drin)

//  ### 11. X und O
//  Schreibe eine Funktion, die eine Zeichenkette nimmt.
//  Prüfe, ob die Zeichenkette die gleiche Anzahl von `x` und `o` enthält

// Hinweise:
//     * Gib true oder false zurück
//     * die Zeichenkette kann alles enthalten
//     * wenn weder x noch o drin sind, ist die anzahl auch gleich (true)

//gleichVielXUndO("ooxx") // true
// gleichVielXUndO("xooxx") // false
// gleichVielXUndO("ooxXm") // true (Schreibweise egal)
// gleichVielXUndO("zpzpzpp") // true (true: weder x noch o)
// gleichVielXUndO("zzoo") // false

// ### 12. Primzahl?
// Eine Primzahl hat nur die 1 und sich selbst als Teiler.
// Durch andere zahlen kann sie nicht ohne Rest dividiert werden.
// Die ersten Primzahlen sind: 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29

// Schreibe eine Funktion, die eine Zahl nimmt und true zurück gibt, wenn es eine Primzahl ist.

// Examples:
// istPrimzahl(7) // true (nur durch 1 und 7 teilbar)
// istPrimzahl(9) // false (durch 1, 3 und 9 teilbar)
// istPrimzahl(10) // false (durch 1, 2, 5 und 10 teilbar)

// **HinwPrüfe einfach für alle Zahlen, die kleiner als die Hälfte der Zahl sind, ob es einen Divisionsrest mit der Eingabe gibt.
// ```
//   für alle Zahlen i, die kleiner sind als die halbe Zahl im Parameter:
//     (Eingabe % i != 0 )
// ```

// ### 13. Zeichenkette auf gültige E-Mail prüfen.
// (Bonus, siehe English Readme)
