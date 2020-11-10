// # Map, Filter, Reduce
console.log("-----1--------sum of objects in array------with reduce---------");

// #### 1. Get total orders
// * Return the total amount of orders.

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

// why
function orderAmount(arr) {
  var val = arr.reduce(function (previousValue, currentValue) {
    return { amount: previousValue.amount + currentValue.amount };
  });
  console.log("Orders", val);
}
orderAmount(orders);

// resource example:
var array = [
  {
    adults: 2,
    children: 3,
  },
  {
    adults: 2,
    children: 1,
  },
];

var val = array.reduce(function (previousValue, currentValue) {
  return {
    adults: previousValue.adults + currentValue.adults,
    children: previousValue.children + currentValue.children,
  };
});
//   console.log(val);

console.log(
  "-----2--------increment array by 1------with map through array---------"
);
// #### 2. Increment by 1
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
// * Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements.

function incr(arr) {
  console.log(arr);
  return arr.map((val) => val + 1); // map takes every element from aray and do something with that
  // or => (val++)  or => (val+1)
}
console.log(incr(arrayOfNumbers));

console.log("-----3--------filter evens---------------");

// #### 3. Filter Evens
// * Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

function filterEvens(arr) {
  // first not working, but rest yes ( why not working?)
  // var evens = arr.filter(function(x) {
  //     return console.log(x % 2 === 0);
  //  })

  // mine first
  let even = arr.filter(element => { return element % 2 === 0})
  console.log(even);

  // ex 2
  // var evens = arr.filter(x => x % 2 === 0);
  // return console.log(evens);
}

// general filter example
// function dictionary(str, array){
//     let result = array.filter(element => { return element.startsWith(str); });
//     return result;
// }

filterEvens([1, 2, 3, 11, 12, 13]); //returns [2,12]
filterEvens([22, 2, 31, 110, 6, 13]); //returns [22,2,110,6]

console.log("------------4. filter / search based---------------");
// #### 4. Filter Friends
// * Given an array, create a function which filters array based on a search query.

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

function filterItems(arr, str) {
  let result = arr.filter(element => { return element.match(str); });
  return result;
}

// includes also possible -> see allies

// try again
// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"].filter(function(name){return name.match("ka")})

// example
// ['Tom Harry','Tom John','John Glen','Tom Harward'].filter(function(name){return name.match(/Tom H/);});

console.log(filterItems(friends, "ka")); // ["Rika"];
console.log(filterItems(friends, "e")); // ["Jenna", "Bleda", "Oliver"];

console.log("-------------sum array with reduce---------------");
// #### 5. Sum Up
// * Write a function called sum that uses the reduce method to sum up an array of numbers.

// function sum(arr) {
//   let sum = arr.reduce((a, b) => {
//     return a + b;
//   });
//   console.log("The sum is: ", sum);
// }

// little shorter:
function sum(arr) {
  let sum = arr.reduce((a, b) => a + b);
  console.log("The sum is: ", sum);
}

sum([1, 2, 3, 4, 5]); //returns 15
sum([6, 7, 7]); //returns 20

console.log("-------6--------sqrt   square root of array elements-------");

// #### 6. Square Root
// * Given an array of numbers, find the square root of each element in the array.

let numberArr = [234, 34, 6324, 23, 25, 234];

let x = numberArr.map(Math.sqrt);
console.log(...x);

console.log("next");
// or
function squareRoot (array) {
    return array.map(element => Math.sqrt(element));
}
console.log(squareRoot([2,5,6,9]));