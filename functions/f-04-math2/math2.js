// A: Funktion: Ganze Zahlen addieren und Gesamtsumme zurückgeben

function ganze(a) {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    sum += i;
  }
  return sum;
}
console.log("Aufgabe 1:", ganze(4));  // 10
console.log("Aufgabe 1:", ganze(13));  // 91
console.log("Aufgabe 1:", ganze(600));  // 180300

// ohne Schleifen:

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
  }  else if (isNaN(b)) {
    for (let i = 0; i < 3; i++) {
        sum2 = a * a * a;
      } 
      return sum2;
  } else {
  // 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
  for (let i = 0; i < 3; i++) {
    //sum2 = a * a * a + b * b * b + c * c * c;
    sum2 = (Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3) )
  } }
  return sum2;
}

console.log("Aufg. 2:", sumOfCubes(1, 5, 9)); // 855
console.log("Aufg. 2:", sumOfCubes(2)); // 8
console.log("Aufg. 2:", sumOfCubes()); // 0

// C. Check String: Fuction with 2 parameters (string and word)
// Wenn Wert der zweiten Zeichenkette mit Wert der ersten Zeichenkette beginnt, dann soll die Funktion true zurück geben.
// Accept lower and uppercase strings.

function beginntMit(a, b) {
  var tolerant_string_a = a.toLowerCase();
  var tolerant_string_b = b.toLowerCase();
  if ( tolerant_string_b.indexOf(tolerant_string_a, 0) === 0) {
    return true
  } else return false
}

console.log("Aufg. C:", beginntMit("Bu", "buch")); // true
console.log("Aufg. C:", beginntMit("Tri", "Triceratops")); // true
console.log("Aufg. C:", beginntMit("Ende", "noch nicht am Ende")); // false

// D: Function - less than or equal to zero. Negative values and 0 return true, otherwise false:



// Beispiele:
// * istKleinerGleich0(3) => false
// * istKleinerGleich0(0) => true
// * istKleinerGleich0(-4) => true
// * istKleinerGleich0(10) => false

// **Zusatzfrage für erfahrene Teilnehmer:**
// Was passiert bei Unendlich und minus Unendlich?

// ### 5. Vorkommen zählen.
// Schreibe eine Funktion die eine Zeichenkette und **ein einzelnes Zeichen** (so könnt ihr mit kette[index] prüfen und müsst keine String-Methoden benutzen) bekommen kann.
// Die Funktion soll ausgeben, wie oft das Zeichen in der Zeichenkette vorkommt.

// Beispiel:
// * wievieleZeichen("in dieser Zeichenkette","i") => 3

// **Zusatz für erfahrene Teilnehmer:**
// Lass die Funktion das zeichen finden, egal ob es groß oder klein geschrieben wird.

// **Wer es noch kniffliger haben will:**
// Löse Übung 5 für mehr als ein einzelnes Zeichen.
// So, dass auch Silben, wie "en" oder so gesucht werden kann.

// Beispiel:
// * wieOftDrin("Im Deutschen kommen Wörter, die auf en enden nicht selten vor.", "en") => 6

// Tipp: Dazu braucht ihr String-Methoden, wie search() oder indexOf() und ihr müsst die Zeichenkette, die ihr durchsucht immer weiter abschneiden, mit substr() oder substring() für jedes Mal, wenn ihr den gesuchten Teil findet.

// Beispiel:
// `Im Deutschen kommen Wörter, die auf en enden nicht selten vor.`
// indexOf("en") am Ende von Deutsch*en* => 10. istDrin => 1 mal
// Eine Zeichenkette mit dem Rest erstellen (z.B. mit substring()), dann ab der gefndenen Position 10 + Länge des "en" (2) weiter suchen in:
// Rest ` kommen Wörter, die auf en enden nicht selten vor.`
// indexOf("en") am Ende von komm*en* => 5. istDrin => 2 mal
// wieder den Rest ab der Fundstelle + Länge des gesuchten Teils abschneiden.
// Rest:  `Wörter, die auf en enden nicht selten vor.`

// und so weiter...

// ### 6. X hoch X
// Erstelle eine Funktion die einen Wert (z.B. x) nimmt, der beim potenzieren sowohl für Basis und Exponent benutzt wird.
// Die Rückgabe ist also x ^ x (x hoch x).

// Beispiele:
// * xHochX(5) => 3125
// * xHochX(10) => 10000000000
// * xHochX(3) => 27

// **Nebenbedingung:** Du brauchst nur von positiven ganzen Zahlen auszugehen. Argumente kleiner als Null kannst du aber gern probieren.

// ### 7. Hundejahre
// Tiere werden oft nicht exakt so alt wie Menschen (etwa 78 bis 83 Jahre).
// [Lebenserwartung in Deutschland](https://de.wikipedia.org/wiki/Lebenserwartung#:~:text=In%20Deutschland%20im%20Zeitraum%202016,für%20Frauen%2083%2C3%20Jahre.)

// Oft rechnet man Alter von z.B. Hunden in ein Verhältnis zum Alter von Menschen um.
// Ein Hund mit 2 Jahren ist ein jugendlicher Hund
// Ein Mensch mit 2 Jahren ein Kleinkind.
// Nimm an dass ein Menschenjahr etwa 7 Hundejahren entspricht.

// Schreibe eine Funktion, die Menschenjahre nimmt und Hundejahre ausgibt.

// Beispiel:
//  hundeJahre(4) => "Das Alter von deinem Hundi entspricht einem 28 Jahre alten Menschen!"

// ### 8. Lebenslanger Snack-Vorrat
// Schreibe eine Funktion, die dir ausrechnet, wie viel von deinem liebsten Snack du brauchst, damit der Vorrat für ein Leben reicht.

// Die Funktion soll zwei Werte nehmen, dein Alter und wie viel vom Snack du pro Tag isst.

// **Hinweise:**
// Nutze das Durchschnittsalter in Deutschland, egal wo Du geboren wurdest. (Männer 78,5 Jahre, Frauen, 83,3 Jahre )
// Sei nicht zu genau, du kannst mit ganzen Zahlen für das maximale Alter rechnen und ignorieren, dass es Schaltjahre gibt (29. Februar alle 4 Jahre => 366 Tage im Jahr)

// Beispiel:
//  * André sei 38 Jahre alt
//  * er isst pro Tag 1 Kinderriegel.
//  * noch 40 Jahre bis zum statistischen maximal-Alter von 78
//  * ohne an Schaltjahre zu denken hat ein Jahr 365 Tage

// lebenslangerVorrat(38,1) => "Du braucht etwa 14600 Kinderriegel, damit sie bis zum Lebensende reichen."

// **Bonus** Wenn du von einem Snack weniger als einen pro Tag isst, brauchs du Zahlen mit Kommastellen. (z.B. ein Kinderriegel pro Woche ist 1 / 7 Kinderriegel pro Tag )
// Passe deine Funktion so an, dass solche Angaben möglich sind, und Runde den gebrauchten Vorrat auf. (Du kannst keine halben Kinderriegel kaufen )

// ### 9. Finde Walter
// Schreibe eine Funktion, die eine Zeichenkette nimmt und true zurück gibt, wenn darin Walter gefunden werden kann. false wenn nicht.

// Beispiele:
//  * istWalterHier("Ist Walli hier?") => false
//  * istWalterHier("Ich habe Walter gefunden!") => true
//  * istWalterHier("Ist Walther hier?") => false
//  * istWalterHier("Walter ist hier!") => true

//  ### 10. Kuchen
//  (entfernt, die ist doppelt in einer anderen Übung mit drin)

//  ### 11. X und O
//  Schreibe eine Funktion, die eine Zeichenkette nimmt.
//  Prüfe, ob die Zeichenkette die gleiche Anzahl von `x` und `o` enthält

// Hinweise:
//     * Gib true oder false zurück
//     * die Zeichenkette kann alles enthalten
//     * wenn weder x noch o drin sind, ist die anzahl auch gleich (true)

// Beispiele:
//     * gleichVielXUndO("ooxx") ➞ true
//     * gleichVielXUndO("xooxx") ➞ false
//     * gleichVielXUndO("ooxXm") ➞ true (Schreibweise egal)
//     * gleichVielXUndO("zpzpzpp") ➞ true (true: weder x noch o)
//     * gleichVielXUndO("zzoo") ➞ false

// ### 12. Primzahl?
// Eine Primzahl hat nur die 1 und sich selbst als Teiler.
// Durch andere zahlen kann sie nicht ohne Rest dividiert werden.
// Die ersten Primzahlen sind: 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29

// Schreibe eine Funktion, die eine Zahl nimmt und true zurück gibt, wenn es eine Primzahl ist.

// Examples:
// * istPrimzahl(7) ➞ true (nur durch 1 und 7 teilbar)
// * istPrimzahl(9) ➞ false (durch 1, 3 und 9 teilbar)
// * istPrimzahl(10) ➞ false (durch 1, 2, 5 und 10 teilbar)

// **Hinweis** Halte es einfach. Prüfe einfach für alle Zahlen, die kleiner als die Hälfte der Zahl sind, ob es einen Divisionsrest mit der Eingabe gibt.
// ```
//   für alle Zahlen i, die kleiner sind als die halbe Zahl im Parameter:
//     (Eingabe % i != 0 )
// ```

// ### 13. Zeichenkette auf gültige E-Mail prüfen.
// (Bonus, siehe English Readme)
