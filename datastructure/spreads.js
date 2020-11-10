console.log("--------------------SPREADS-------------");
console.log("----------1");
// Spread the Word
// 1. Combining Arrays
// Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
// Once again create two arrays. Save all elements of both arrays to another variable.
let euroCountries = [1, 2, 3],
  asianCountries = [4, 5];
console.log(...asianCountries); // 4 5
console.log(...euroCountries); // 1 2 3
euroCountries = [...euroCountries, ...asianCountries];
console.log(euroCountries); // [ 1, 2, 3, 4, 5 ]
let arr = ["a", "b"],
  arr2 = [...arr, "c", "d"];
console.log(arr2); // [ 'a', 'b', 'c', 'd' ]
let arr3 = [...arr, ...arr2];
console.log(arr3); // [ 'a', 'b', 'a', 'b', 'c', 'd' ]

console.log("----------2");
// 2. Copying Arrays
// Copy an array using the spread operator. Store the copied array in another variable.
// can do this, but it is not a good idea -> https://gomakethings.com/can-you-copy-an-array-using-the-javascript-spread-operator/

var sandwiches = [
  "turkey",
  "tuna",
  "chicken salad",
  "italian",
  "blt",
  "grilled cheese",
];
var newSandwiches = [...sandwiches];
console.log(newSandwiches);

// meaning from a blogger: "It works, but...
//     It’s less explicit than using something like array.slice() or Array.from(sandwiches). Both were made specifically to copy or create arrays, and the latter in particular tells you exactly what it’s doing in the name.
//     Array.slice() has exceptional backwards compatibility, and Array.from() is polyfillable. The spread operator only works in the latest browsers and can’t be polyfilled."

// or
const nums1 = [1,2,3];
const nums2 = [4,5,6];
const nums = [...nums1, ...nums2];
console.log(nums);

console.log("----------3");
// 3. Find the Largest...
// Create a function to find the largest number in an array.
const MEINARR = [43, 67, 8, -3, 55];

const MY_FUNC = nums => {  // only one parameter? -> no brackets
  return console.log(Math.max(...nums));
};
MY_FUNC(MEINARR); // 67

console.log("----------4");
// 4. Find the Smallest
// Create a function to find the smallest number in an array.
// console.log(Math.min(...minArr));  // NaN
console.log(Math.min(...MEINARR)); // -3

console.log("----------5");

// 5. Clone and Merge
// Given two objects:
const person = { name: "John" };
const job = { role: "Teacher" };

// 5.1 Clone the person object.
let clonedObject = { ...person };
console.log("cloned:", clonedObject); // { name: 'John' }

// 5.2 Merge these two objects into one object: “employee”. Use the spread operator to do so.
let employee = { ...person, ...job };
console.log("merged", employee);

// 5.3 Then change the values of the properties in the employee object.
employee = { ...person, role: "updated role" };
console.log("changed:", employee);

// or (5.3)
employee.name = "Snuh";
employee.role = "Banker";
console.log(employee);

// example:
// const o1 = {a: "original a", b: "original b"};
//               // Doesn't work:
//               const o2 = {a: "updated a", ...o1};
//               console.log(o2);
// // Works:
// const o3 = {...o1, a: "updated a"};
// console.log(o3);

console.log("----------6");
// Bonus: 6. Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.

function isWhole(a, b, c, d) {
  return ((a + b + c + d) / 4) % 1 === 0;
  // let avg = sum / arguments.length;
  // return (avg % 1 === 0)
}

// or
function isWhole(a, b, c, d) {
  const total = a + b + c + d;
  const average = total / arguments.length;
  return Number.isInteger(average);
}
console.log(isWhole(...[1, 2, 3, 6])); // true

let array = [8,2,14,24];
console.log(isWhole(...array)); // true
console.log(isWhole(1, 2, 3, 4)); // false
console.log(isWhole(9, 2, 2, 5)); // false
console.log(isWhole(10, 2, 2, 6)); // true


// Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!

function isWhole(...num) {
    let avg = num.reduce((a,b) => (a+b)) / num.length;
    return avg % 1 === 0;
  }
  
// or
function isWhole(...numbers) {
  let sum = 0;
 for (let i = 0; i < numbers.length; i++) {
   sum += numbers[i];
 }
 return sum % numbers.length ? false : true; // 0-> false
}

  console.log(isWhole(1, 2, 3, 4)); // false
  console.log(isWhole(9, 2, 2, 5)); // false
  console.log(isWhole(2, 4, 6, 8))  //true

// from class mate
  function isWhole (...array) {
    return (array.reduce((acc, curr) => acc+curr)) % array.length === 0;
}
console.log(isWhole(2, 4, 6, 8))  //true
console.log(isWhole(...[1, 2, 3, 4, 5, 6])) // ➞ false
console.log(isWhole(...[9, 2, 2, 5]))// ➞ false
  