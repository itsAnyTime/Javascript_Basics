// fizz 3
// buzz 5
// fizzbuzz 3 und 5

let zahl = 0;

while (zahl < 50) {
  zahl += 1;
  if ((zahl % 3 === 0) && (zahl % 5 === 0)) {
    console.log("Fizz");
  } else if (zahl % 5 === 0) {
console.log("Buzz");
     } else if ((zahl % 3 === 0)) {
         console.log("Fizzbuzzzzzz");
     } else {
    console.log(zahl);
  }
}
