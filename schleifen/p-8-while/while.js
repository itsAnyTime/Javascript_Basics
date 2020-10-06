// 1. Lauf entlang
// while Schleife -> die so lange ausgeführt wird, bis i kleiner als 16 ist

// Liste zahlen von 1-15 auf 
let i = 0;
while (i < 16) {
    console.log(i++);
}

// 2. while Schleife -> summiere die Zahlen 1-20 und gebe summe aus
let j = 1;
let summe = 0;
while (j <= 20) {
    summe += j;
    console.log(summe);
    j = j +1;
} console.log("Summe ist:", summe);


// ## 3. Tue ... während ... (Fuss-gesteuerte Schleife) 
// Nutze eine `do`, `while` Schleife um auszugeben "Die zahl ist [i]" so lange i kleiner als 20 ist.

// 3. Aufgabe wörtlich genommen: 
let k = 10;
do {
    console.log("Zahl", k ,"ist kleiner als 20.");
} while (k > 20);

///// gemeint ist: liste die Zahlen 1-20 auf, da sie Zahlen unter 20 sind /////////

l = 0;
do {
    l = l + 1;
    // console.log(`Die Zahl ist ${l} `);
    console.log("Die Zahl ist", l);
} while (l < 20);


//////////////////////////////////////////
// Output: 
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 1
// 3
// 6
// 10
// 15
// 21
// 28
// 36
// 45
// 55
// 66
// 78
// 91
// 105
// 120
// 136
// 153
// 171
// 190
// 210
// Summe ist: 210
// Zahl 10 ist kleiner als 20.
// Die Zahl ist 1
// Die Zahl ist 2
// Die Zahl ist 3
// Die Zahl ist 4
// Die Zahl ist 5
// Die Zahl ist 6
// Die Zahl ist 7
// Die Zahl ist 8
// Die Zahl ist 9
// Die Zahl ist 10
// Die Zahl ist 11
// Die Zahl ist 12
// Die Zahl ist 13
// Die Zahl ist 14
// Die Zahl ist 15
// Die Zahl ist 16
// Die Zahl ist 17
// Die Zahl ist 18
// Die Zahl ist 19
// Die Zahl ist 20