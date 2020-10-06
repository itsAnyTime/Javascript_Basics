// 0. Declares two variables "snackServings" and "guests" and assign them number values.
let snackServings = 3;
let guests = 4;

// 1. Adds snackServings and guests, and prints the result to the console.
console.log(snackServings + guests);

// 2. Subtracts guests from snackServings, prints the result to the console. Then, subtracts snackServings from guests and prints the result to the console.
console.log(snackServings - guests);
console.log(guests - snackServings);

// 3. Multiplies snackServings and guests.
console.log(snackServings * guests);

// 4. Divides snackServings by guests.
console.log(snackServings / guests);

// 5. Declares another variable "drinks" with the value "10". Multiplies snackServings and guests. Then, divides the result by drinks.  
let drinks = 10;
resultOne = snackServings * guests;
resultOne = resultOne / drinks;
console.log(resultOne);

// or
let drink = 10;
resultOne = (snackServings * guests) / drinks;
console.log(resultOne);

// 6. Declares two variables "monkeys" with the value of 15 and "bananas" with the value of 9. Prints the remainder (Rest) when monkeys is divided by bananas.
let monkeys = 15;
let bananas = 9;
console.log("6.", monkeys % bananas);

// 7. Declares another variable "monkeyfights" with the value of 20. Adds monkeys with bananas, then multiplies the result by monkeyfights. Stores the result in variable "resultTwo". Prints "resultTwo" to the console.
let monkeyfights = 20;
let resultTwo = monkeys + bananas;
resultTwo = resultTwo * monkeyfights;
console.log(resultTwo);

// or
let resultTwoPointOne = (monkeys+bananas) *monkeyfights;
console.log(resultTwoPointOne);

// 8. Increments monkeys. Prints the result to the console.
console.log(monkeys);
console.log(++monkeys);

// 9.  Decrements bananas. Prints the result to the console.result
console.log(bananas);
console.log(--bananas);

// 10. Subtracts bananas from monkeys and stores this in a new variable "happiness". Adds happiness and monkeyfights.
let happiness = monkeys - bananas;

// happiness += monkeyfights;
// console.log(happiness);

// same like:
// happiness = happiness + monkeyfights;
// console.log(happiness);

console.log(happiness + monkeyfights);


// 11. Prints the remainder (Rest) when resultOne is divided by resultTwo.
console.log(resultOne % resultTwo);