// 1. **Addition.**
// Write a program to add up the numbers 1 to 20.

// umschreiben:
// let j = 1;
// let summe = 0;
// while (j <= 20) {
//     summe += j;
//     console.log(summe);
//     j = j +1;
// } console.log("Summe ist:", summe);

const numbers = 1;
let summe = 0;
for (let i = 1; i <= 20; i++) {
  summe = summe + i;
  console.log(summe);
}

// 2. **There are i bottles of beer on the wall.**
// Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.

console.log("task 2 ---------------------");

// how i understood the task:
for (let j = 1; j <= 5; j++) {
  console.log("There is", j, "bottle of beer on the wall");
}
console.log("task 2.2 ---------------------");

// what they meant: flaschen von 99 runterzählen bis zur 5.
for (let index = 99; index >= 94; index--) {
    console.log("There is", index, "bottle of beer on the wall");    
}

// 3. **The odd/even reporter.**
// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

console.log("task 3 ---------------------");


for (let k = 0; k <= 20; k++) {
  if (k % 2 == 0) {
    //console.log(k, " is even");
    // nicer output: 
    console.log(k + " is even");
  } else {
    console.log(k + " is odd");
  }
}

// or
console.log("task 3.2 ---------------------");

// not very nice output
// for (let zahl = 0; zahl <= 20; zahl++) {
//     console.log(zahl, " ist ", (zahl % 2 == 0) ? "gerade" : "ungerade");
// }

// nicer output
for(let ka = 0; ka <= 20; ka++) {
    console.log(`${ka} ist`, (ka % 2 == 0) ? "gerade" : "ungerade");
}


// 4. **Multiplication Tables.**
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

console.log("task 4 ---------------------");

for(let m =0; m <= 10; m++) {
    let result = m * 9;
    // console.log(m, "x 9 =",result);
    // nicer output:
    console.log(m + " x 9 = " + result);
}

// with Bonus:
console.log("task 4.3 bonus ---------------------");

let multiplier = 0;

for (let l = 1; l <= 10; l++) {
  multiplier += 1;
  console.log("");
  for (let mb = 1; mb <= 10; mb++) {
    let result = mb * multiplier;
   // console.log(mb, "x", multiplier, "=", result);
   // output: 0 'x' 1 '=' 0
   // nicer output:
   console.log(mb + " x " + multiplier + " = " + result);
  }
}

// or
// for (let linkerFaktor = 1; linkerFaktor <= 10; linkerFaktor++) {
//     for (let rechterFaktor = 1; rechterFaktor <= 10; rechterFaktor++) {
//         let Produkt = linkerFaktor * rechterFaktor;
//         console.log(linkerFaktor + " * " + rechterFaktor + " = " + Produkt);
//     }
// }


// 5. **Fizz Buzz**
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// fizz = 3
// buzz = 5
// fizzbuzz = 3 and 5

console.log("task 5 ---------------------");


for (let n = 0; n < 100; n++) {
  if (n % 5 == 0 && n % 3 == 0) {
    console.log("Fizzbuzzz");
  } else if (n % 3 == 0) {
    console.log("Fizz");
  } else if (n % 5 == 0) {
    console.log("Buzzz");
  } else {
    console.log(n);
  }
}

// 6. **Sum of Multiples**
// Write a program to add the multiples of 3 and 5 under 1000.
// (3 + 5 + 6 + 9 + 10 + 12 + 15 .... 1000)

// also alle fizz und buzz und fizzbuzz Zahlen

//funzt nich
// let multiplierA = 3;
// let multiplierB = 5;

// console.log(multiplierA);
// console.log(multiplierB);

// for (let o = 0; multiplierA < 1000; o++) {

//     if(o % multiplierA == 1) {
//         console.log(multiplierA += multiplierA);
//     }

//     if (o % multiplierB == 1) {
//         console.log(multiplierB += multiplierB);
//     }
//     else {
//         // console.log("");
//     }
// }

console.log("task 6 ---------------------");

// no correct result

// let multiplierA = 3;
// let multiplierB = 5;
// let show1 = 0;
// let show2 = 0;
// let sum1 = 0;
// let sum2 = 0;

// for (let o = 0; show1 < 999; o++) {
//     show1 = show1 + multiplierA
//     console.log(show1);
//     sum1 = sum1 + show1;
//     for (let o = 0; show2 < 999; o++) {
//         show2 = show2 + multiplierB
//         console.log(show2);
//         sum2 = sum2 + show2;
//   }
// } console.log(sum1+sum2);

//233168 sollte das Ergebnis sein, habe mit dem code aber 267333: er nimmt die gemeinsamen Vielfachen glaube ich doppelt

// better
let summeVielfache = 0;

for (let Vielfaches = 1; Vielfaches < 1000; Vielfaches++ ) {
    if (( Vielfaches % 3 == 0 ) || ( Vielfaches % 5 == 0 )) {
        summeVielfache = summeVielfache + Vielfaches;
        console.log(Vielfaches);
    }
}
console.log("Summe aller Vielfachen von 3 oder 5 ist: "+summeVielfache);

// **Bonus**

// 7. Write programs that produce the following outputs:
// 7a:
// >100 200 300 400 500 600 700 800 900 1000

for (let hunderter = 0; hunderter < 1000; hunderter) {
    console.log(hunderter += 100);    
}

// or
// for (let hunderter = 100; hunderter <= 1000; hunderter+=100) {
//     console.log(hunderter);
// }

// 7b:
// >0 2 4 6 8 10

for (let zweier = 2; zweier < 11; zweier+=2) {
    console.log(zweier);
}

// or
for (let gerade = 0; gerade <= 10; gerade++){
    if (gerade % 2 == 0) console.log(gerade);
}

// 7c:
// >3 6 9 12 15
for (let dreier = 3; dreier < 16; dreier+=3) {
    console.log(dreier);
}

// 7d:
// >9 8 7 6 5 4 3 2 1 0
for (let back = 9; back >= 0; back--) {
    console.log(back);
}

// 7e:
// >1 1 1 2 2 2 3 3 3 4 4 4
for (let triple = 1; triple < 5; triple++) {
    console.log(triple, triple, triple);    
}

// or
for (let triple2 = 1; triple2 < 5; triple2++) {
    for(let again = 1; again < 4; again++) {
        console.log(triple2);    
    }
}

// 7f:
// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
let folgenkette = "";
for (let folge2 = 0; folge2 < 4; folge2++) {
    for(let again2 = 0; again2 < 5; again2++) {
        folgenkette = folgenkette + again2 + " ";    
    }
} console.log(folgenkette);

// 8. **isPalindrome.**
// Write a program to check whether a word is a palindrome or not.
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

let word = "madam";

for (let test = 1; test <= word.length; test++) {
  if (word.charAt(test - 1) == word.charAt(word.length - test)) {
    wahr = true;
    // console.log(word.length,"letter confirmed");
  } else {
    wahr = false;
    console.log("Not a Palindrome");
    break;
  }
}
if (wahr == true) {
  console.log("It is a Palindrome");
}

// **Bonus:** Ignoriere ggf., dass der erste Buchstabe in Deutschen Substantiven groß geschrieben ist. (Otto soll also auch als Palindrom zählen)

let bigWord = "Madam";

for (let test = 1; test <= bigWord.length; test++) {
  let testBig = bigWord.toUpperCase();

  if (bigWord.charAt(testBig - 1) == bigWord.charAt(bigWord.length - testBig)) {
    wahr = true;
  } else {
    wahr = false;
    console.log("Not a Palindrome");
    break;
  }
}
if (wahr == true) {
  console.log("It is a Palindrome");
}


// Hadis Lösung, von mir erweitert:
hadisTestWort = "anna"

for (let hadi = 1; hadi <= (hadisTestWort.length / 2); hadi++) {
    let testWortGroß   = hadisTestWort.toUpperCase();
    let linkesZeichen  = testWortGroß[hadi-1];
    let rechtesZeichen = testWortGroß[testWortGroß.length-hadi]
    console.log(linkesZeichen + " gegen " + rechtesZeichen);
    if (linkesZeichen != rechtesZeichen) {
        istEinPalindrom = false;
        console.log("Kein Palindrom");
        break;
    } 
    
} if(istEinPalindrom = true) {
    console.log("Es ist ein Palindrom");
}

// André Lösung
let testWort = "Rentner"
let istPalindrom = true;

for (let index = 1; index <= (testWort.length / 2); index++) {
    let testWortGroß   = testWort.toUpperCase();
    let linkesZeichen  = testWortGroß[index-1];
    let rechtesZeichen = testWortGroß[testWortGroß.length-index]
    console.log(linkesZeichen + " gegen "  +  rechtesZeichen);
    if (linkesZeichen != rechtesZeichen) {
        istEinPalindrom = false;
        break;
    }
} if (istPalindrom) {
    console.log(testWort + " ist ein Palindrom");
} else {
    console.log(testWort + " ist kein Palindrom");
}

// marcus Lösung ohne Schleifen:
// string wird umgedreht
let str = 'Mauam' 
let lowRegStr = str.toLowerCase();
  let reverseStr = lowRegStr.split("").join("");
  if (reverseStr === lowRegStr) {
    console.log("Das Word ist ein Palindrom");
  } else {
    console.log("Das Word ist kein Palindrom");
  }

// sakir mit Array, modifiziert by me (akzeptiert nun Großbuchstaben):
let sakirStr = "Madam";
let newString = "";

for (var i = sakirStr.length - 1; i >= 0; i--) {
    var upp = sakirStr.toLowerCase();
    newString += upp[i];
}
upp === newString
? console.log(sakirStr + " ist ein Palindrom")
: console.log(sakirStr + " ist kein Palindrom ");


// Elham's Lösung, von mir ergänzt
let x="Otto";
let y='';
for(i=x.length-1; i >=0; i--) {
    var xGroß = x.toUpperCase();
    y=y+xGroß[i];
    console.log(y);
}
if(y === xGroß){
    console.log("N8:",x ,"ist ein Palindrom");
} else {
    console.log("N8:",x, "ist kein Palindrom");
}


// Lösung von Christoph B.
pali = "Osdttto";

if (pali.substr(0, pali.length/2).toLowerCase() ==
pali.split("").reverse().join("").substr(0, pali.length/2).toLowerCase()){
    console.log(pali+" ist ein Palindrom!");
} else console.log(pali+" ist kein Palimdrom!!");