// 0. Declare two variables "snackServings" and "guests" and assign them number values.
let snackServings = 3;
let guests = 4;

// 1. Add snackServings and guests, and print the result to the console.
console.log(snackServings + guests);

// 2. Subtract guests from snackServings, and print the result to the console. Then, subtract snackServings from guests and print the result to the console.
console.log(snackServings - guests);
console.log(guests - snackServings);

// 3. Multiply snackServings and guests.
console.log(snackServings * guests);

// 4. Divide snackServings by guests.
console.log(snackServings / guests);

// 5. Declare another variable "drinks" with the value "10". Multiply snackServings and guests. Then, divide the result by drinks. Store the result in a new variable named "resultOne".
let drinks = 10;
resultOne = snackServings * guests;
resultOne = resultOne / drinks;
console.log(resultOne);

// or
let drink = 10;
resultOne = (snackServings * guests) / drinks;
console.log(resultOne);

// 6. Declare two variables "monkeys" with the value of 15 and "bananas" with the value of 9. Print the remainder (Rest) when monkeys is divided by bananas.
let monkeys = 15;
let bananas = 9;
console.log("6.", monkeys % bananas);

// 7. Declare another variable "monkeyfights" with the value of 20. Add monkeys and bananas, then multiply the result by monkeyfights. Store the result in variable "resultTwo". Print "resultTwo" to the console.
let monkeyfights = 20;
let resultTwo = monkeys + bananas;
resultTwo = resultTwo * monkeyfights;
console.log(resultTwo);

// or
let resultTwoPointOne = (monkeys+bananas) *monkeyfights;
console.log(resultTwoPointOne);

// 8. Increment monkeys. Print the result to the console.
console.log(monkeys);
console.log(++monkeys);

// 9.  Decrement bananas. Print the result to the console.result
console.log(bananas);
console.log(--bananas);

// 10. Subtract bananas from monkeys and store this in a new variable "happiness". Add happiness and monkeyfights.
let happiness = monkeys - bananas;

// happiness += monkeyfights;
// console.log(happiness);

// same like:
// happiness = happiness + monkeyfights;
// console.log(happiness);

console.log(happiness + monkeyfights);


// 11. Print the remainder (Rest) when resultOne is divided by resultTwo to the console.
console.log(resultOne % resultTwo);