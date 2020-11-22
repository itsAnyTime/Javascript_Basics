console.log("------------Array Multi Data Access---- with > for loop <---or with > for in < loop-----");
// We have an array of objects representing different people in our contacts lists.
// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
// If both are true, then return the "value" of that property.
// If name does not correspond to any contacts then return "No such contact".
// If prop does not correspond to any valid properties of a contact found to match name then return "No such property".
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup

// Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  // for(let i = 0; i < contacts.length; i++) {
  for (i in contacts) {
    if (contacts[i].firstName === name) {
     // console.log("1");

      if (contacts[i][prop] === contacts[i].hasNoPropery) {
        //console.log("2");
        return "No such property";
      }
      {
        return contacts[i][prop];
      }
    }
  }
  {
    return "No such contact";
  }
}

//console.log("a", lookUpProfile("Harry", "likes"));
//console.log("b", lookUpProfile("Sherlock", "likes"));
console.log("c", lookUpProfile("Akira", "adress"));

lookUpProfile("Kristian", "lastName") // "Vos"
lookUpProfile("Sherlock", "likes") // ["Intriguing Cases", "Violin"]
lookUpProfile("Harry", "likes") // an array
lookUpProfile("Bob", "number") // "No such contact"
lookUpProfile("Bob", "potato") // "No such contact"
lookUpProfile("Akira", "address") // "No such property"


console.log("------------Multi Ternary ---- greater, smaller or zero-----");

// check if a number is positive, negative or zero - with multi ternary
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators

function checkSign(num) {
    return num > 0 ? "positive" 
    : num < 0 ? "negative"
    : "zero";
}

console.log(checkSign(0));

console.log("-----------RECURSIVE ---- returns sum-----");

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion

function sum(arr, n) {
      if (n <= 0) {
        return 0;
      } else {
        return sum(arr, n - 1) + arr[n - 1];
      }
  }
  
sum([1], 0); // 0.
sum([2, 3, 4], 1); // 2
console.log(sum([2, 3, 4, 5], 3)); // 9


console.log("-----------RECURSIVE ----Recursion to Create a Countdown----");

// Recursion to Create a Countdown / Countup
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown
// We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.

// countup
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]
  

// countdown unshift
function countdown(n){
    if(n < 1) {
      return [];
    } else {
        const count = countdown(n-1);
        count.unshift(n)
        return count;
    }
  }
console.log(countdown(10)); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

// or splice countdown
function countdown2(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown2(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
}
console.log(countdown2(20));

// or concat coutdown
function countdown(n){
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}

// or rest countdown
function countdown(n){
  return n < 1 ? [] : [n, ...countdown(n - 1)];
}

console.log("---------------Recursive 2 -------------");
// Basic JavaScript: Use Recursion to Create a Range of Numbers
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers

// We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

function rangeOfNumbers(startNum, endNum) {
  if(startNum === endNum) {
    return [startNum];
  } else {
        const countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum);
        // console.log(countArray)
        return countArray; 
  }    
  };
  console.log(rangeOfNumbers(3, 5)) // [3, 4, 5].



console.log("------------freeze Object-----------");
// ES6: Prevent Object MutationPassed

function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log("expected error:", ex); // TypeError: Cannot assign to read only property 'PI' of object '#<Object>'
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// other example
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); // { name: "FreeCodeCamp", review:"Awesome"}

console.log("-----------Default Parameter---------");

// ES6: Set Default Parameters for Your FunctionsPassed
// Only change code below this line
const increment = (number, value=1) => number + value;
// Only change code above this line



console.log("-------------rest / args-----------");
// ES6: Use the Rest Parameter with Function Parameters

// before:
// const summ = (x, y, z) => {
//   const args = [x, y, z];
//   return args.reduce((a, b) => a + b, 0);
// }

//after:
const summ = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

// other example:
// const product = (n1, n2, n3) => {
//   const args = [n1, n2, n3];
//   return args.reduce((a, b) => a * b, 1);
// }
// console.log(product(2, 4, 6)); //48

// Can be written as such
const product = (...n) => {
  return n.reduce((a, b) => a * b, 1);
}
console.log(product(2, 4, 6)); //48


// ES6: Use Destructuring Assignment to Assign Variables from Nested Objects
// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
  // before  
  //const lowToday = LOCAL_FORECAST.today.low;
  //const highToday = LOCAL_FORECAST.today.high;
  
  const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
   
  // Only change code above this line
  
  
  // ES6: Use Destructuring Assignment to Assign Variables from Arrays
  // Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
  
  let a = 8, b = 6;
  // Only change code below this line
  
  [a, b] = [b, a];
  console.log(a);
  
  
  
  // ES6: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
  // Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.
  
  const source = [1,2,3,4,5,6,7,8,9,10];
  function removeFirstTwo(list) {
    "use strict";
    // Only change code below this line
    const [a,b,...arr] = list; // 1 wird a zugewiesen, 2 wird b zugewiesen, rest in ...rest
    console.log(arr); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
    console.log(a, b); // 1 2
    // Only change code above this line
    return arr;
  }
  const arr = removeFirstTwo(source);
  
  
  
  // ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters
  // Use destructuring assignment within the argument to the function half to send only max and min inside the function.
  
  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  
  //before
  //const half = (stats) => (stats.max + stats.min) / 2.0; 
  // now
  const half = ({ max, min }) => (max + min) / 2.0; 
  
  
  // ES6: Create Strings using Template Literals
//   Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.
  
//   Use an iterator method (any kind of loop) to get the desired output (shown below).
  
  [
    '<li class="text-warning">no-var</li>',
    '<li class="text-warning">var-on-top</li>',
    '<li class="text-warning">linebreak</li>'
  ]
  
  // Hint
  //Iterate through each element of arr and add a new element consisting composed of a template literal using arr's elements to create the array failureItems.
  
  // my
  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line 
    let failureItems = [];
    for(let key in arr) {
      failureItems[key] = `<li class="text-warning">${arr[key]}</li>`;
      console.log(failureItems);
    }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  
  // or
   const result2 = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
    // change code below this line
    const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
    // change code above this line
    return failureItems;
  }
  const failuresList2 = makeList(result2.failure);
  
  // ES6: Write Concise Object Literal Declarations Using Object Property Shorthand
  
  // Use object property shorthand with object literals to create and return an object with name, age and gender properties.
  
  const createPerson = (name, age, gender) => {
    "use strict";
    // Only change code below this line
    return {
    // before
     // name: name,
     // age: age,
     // gender: gender
     // now:
     name, age, gender
    };
    // Only change code above this line
  };
  
  
  // ES6: Write Concise Declarative Functions with ES6
  
  // Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.
  
  // Only change code below this line
  const bicycle = {
    gear: 2,
    setGear: function(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);
  
  // now
  // Only change code below this line
  const bicycle2 = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle2.setGear(3);
  console.log(bicycle2.gear);
  
  
  // ES6: Use class Syntax to Define a Constructor Function
  // Use the class keyword and write a constructor to create the Vegetable class.
  // The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.
  
  // Only change code below this line
  
  // Only change code above this line
  
//   const carrot = new Vegetable('carrot');
//   console.log(carrot.name); // Should display 'carrot'
  
  
  // now
  // Only change code below this line
  class Vegetable {
      constructor(name) {
          this.name = name;
      }
  }
  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'
  
  // ES6: Use getters and setters to Control Access to an Object
  
  // example:
//     You can obtain values from an object and set the value of a property within an object.
  
//   These are classically called getters and setters.
  
//   Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
  
//   Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.
  
  class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);  // anonymous
  novel.writer = 'newAuthor';
  console.log(novel.writer);  // newAuthor
  
//   Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details. Note: It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private.
  
  
  ///////////////
  
//   Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
  
//   Now create a getter and a setter in the class, to obtain the temperature in Celsius.
  
//   Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.
  
//   Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.
  
//   This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.
  
//   In other words, you are abstracting implementation details from the user.
  
  
  // before
  // Only change code below this line
  
  // Only change code above this line
  
//   const thermos = new Thermostat(76); // Setting in Fahrenheit scale
//   let temp = thermos.temperature; // 24.44 in Celsius
//   thermos.temperature = 26;
//   temp = thermos.temperature; // 26 in Celsius
  
  
  // now
  // Only change code below this line
  class Thermostat {
      constructor(fahrenheit) {
          this.fahrenheit = fahrenheit;
      }
      // getter
      // Hint 3
      // Create a get method that converts the Fahrenheit attribute to Celsius. Use the formula given to you.
      get temperature() {
        //  C = 5/9 * (F - 32);
          return 5/9 * (this.fahrenheit - 32); 
      }
      // setter
      // Hint 4:
      // Create a set method of the same name as the get method. It should have a parameter that accepts celsius temperature. Convert it to fahrenheit, and set it to the attribute.
      set temperature(celsius) {
        //   F = C * 9.0 / 5 + 32;
          this.fahrenheit = celsius * 9 / 5 + 32; 
      }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let tempp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  tempp = thermos.temperature; // 26 in Celsius
  
  
  // HTML
  // ES6: Create a Module Script

  // JavaScript started with a small role to play on an otherwise mostly HTML web. Today, it’s huge, and some websites are built almost entirely with JavaScript. In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files. This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them. In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module. 

  // Add a script to the HTML document of type module and give it the source file of index.js
  
//   <html>
//     <body>
//       <script type="module" src="index.js"></script>
//     </body>
//   </html>
  
  // A script that uses this module type can now use the import and export features you will learn about in the upcoming challenges. 


  // ES6: Use export to Share a Code Block

  // Imagine a file called math_functions.js that contains several functions related to mathematical operations. One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it.

  // There are two string-related functions in the editor. Export both of them using the method of your choice.

  // given code and solution
  const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  
  // export { uppercaseString, lowercaseString }  // (not working here)



  // ES6: Reuse JavaScript Code Using import 

  // Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file. 

  //example
  // import { add, subtract, … all what you need } from './math_functions.js';			

  //solution
//   import { uppercaseString, lowercaseString } from './string_functions.js';
// // Only change code above this line

// uppercaseString("hello");
// lowercaseString("WORLD!");



  // ES6: Use * to Import Everything from a File 

  // The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions.

  //solution

//   import * as stringFunctions from "./string_functions.js";
// // Only change code above this line

// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");
