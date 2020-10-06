// Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold? 
let dollars = 6450;
let ticketprice = 15;

let sold = dollars / ticketprice;
console.log(sold + " Tickets"); // 430 Tickets


// Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
// 52 weeks per year
// income = 500 per week; 
income = 500;
weeks = 52;

console.log(weeks * income + " dollars"); // 26000 dollars


// **Percentage**

// Q3. Calculate the percentage of 17/30. Expected output: number%
// 30 = 100
// 17 = 56,67
percent = 100 / 30 * 17;
console.log(percent.toFixed(2) + "%"); // 56.67%

// or
percent2 = (17 / 30) * 100;
console.log(percent2.toFixed(2) + "%"); // 56.67%


// **Geometry Formulas** 

// Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.
side = 4.75;
console.log("Umfang: " + (perimeter = 4 * side) + " cm");  // Umfang: 19 cm
console.log("Umfang: " + (perimeter = side + side + side + side) + " cm");  // Umfang: 19 cm


// Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
side1 = 5;
side2 = 6;
side3 = 7;

perimeter = side1 + side2 + side3; 
console.log("Umfang triangle: " + perimeter + " cm"); // Umfang triangle: 18 cm


// Q6. Calculate the area of a square. Each side is 5cm.
console.log("area of square: " + (5 * 5) + "cm²");  // area of square: 25cm²


// Q7. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
a = 5;
h = 6;

console.log("area of triangle: " + (0.5 * a * h) ); // area of triangle: 15

// or
s = 5+6+7;
p = s/2;
erg = (Math.sqrt(p * (p-5) * (p-6) * (p-7)));

console.log("area of triangle: " + erg.toFixed(2) + " cm²"); // area of triangle: 14.70 cm²


// Q8. Calculate the volume of a cube. Length of each side is 9cm.
a= 9;
console.log("volume of cube: " + (a * a * a)); // volume of cube: 729

// or
console.log("volume of cube: " + (Math.pow(9,3))); // volume of cube: 729


// **Consumer Formula**

// Q9. Calculate the three bills including tips:
// €22.35 + 10% tip
// €26.67 + 15% tip
// €35.92 + 20% tip

bill1 = 22.35 * 1.1;
console.log(bill1.toFixed(2) + " dollars"); // 24.59 dollars

bill2 = 26.67 * 1.15;
console.log(bill2.toFixed(2) + " dollars"); // 30.67 dollars

bill3 = 35.92 * 1.2;
console.log(bill3.toFixed(2) + " dollars"); // 43.10 dollars


// **Average** 

// Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
// What is Noemy's average hours worked per day?

const sum = (8 + 6+ 5+ 9+ 8+ 2+ 1+ 8.5+ 7+ 4);
// console.log("summe durchschnitt:", sum);
let anzSum = 10;
avg_hours = sum / anzSum; 
console.log("summe durchschnitt:", avg_hours); // summe durchschnitt: 5.85


// Array Lösung
var sumArr = [8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4];
// console.log(sumArr.length);

let sum2 = 0; 

for (let i = 0; i < sumArr.length; i++) {
    sum2 = sum2 + sumArr[i];
}

// console.log("summe durchschnitt:", sum2);
let anzSum2 = sumArr.length;
avg_hours2 = sum2 / anzSum2; 
console.log("summe durchschnitt:", avg_hours2); // summe durchschnitt: 5.85

// Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.

// avg_hours2 = sum2 / anzSum2; 
// 85 = 75 + 70 + 85 + 90 + 100 + ? / 6; 
// 85 = 420 + ? / 6      // ? = 90 gesuchter Wert

let zsum = 75 + 70 + 85 + 90 + 100;
// console.log("zsum:", zsum);
let avg_now = 85;
let anz_tests = 6;
let newSum = avg_now * anz_tests;
// console.log("New Sum:", newSum);
console.log("Score in the sixth test:", newSum - zsum); // Score in the sixth test: 90

// Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 
// Expected output: James needs a minimum of --% to get an 80% average.

let minScore = (0.8 * 9 * 100) - (0.78 * 8 * 100);
console.log(minScore); //96
console.log(`James needs a minimum of ${minScore}%`); //  James needs a minimum of 96%
