// 1. Fido says...
// In the following code, we want fido to bark. Instead, we get an error. Why?

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }
// Dog.bark = function() {
//   console.log(`${this.name} says woof`);
// };
// let fido = new Dog("fido");
// fido.bark();
// // Edit the code to make fido bark.

class Dog {
  constructor(name) {
    this.name = name;
  }
}
Dog.prototype.bark = function () {  // prototype was missing, to get FIDO bark
  console.log(`${this.name} says woof`);
};
let fido = new Dog("fido");
fido.bark(); 
// Edit the code to make fido bark.

console.log(
  "________________________try and catch_____________2______________"
);

// 2. Month Name
// Create a function called getMonthName, which takes the number of the month as an argument (Jan = 1 - Dec = 12). Throw an error if a user inputs an invalid number as an argument.

// Example
// getMonthName(15) -> Invalid Month Number!

function getMonthName(monthNumber) {
  if (monthNumber <= 12) {
    return console.log("Okay");
  } else {
    throw "InvalidMonthNo"; // throw keyword is used here
  }
}
try {
  // statements to try
  monthNumber = getMonthName(monthNumber); // function could throw exception
} catch (e) {
  monthNumber = "unknown";
  console.log("Not a valid month");
  // logMyErrors(e); // pass exception object to error handler (i.e. your own function)
}

getMonthName(12); // -> Invalid Month Number!

// resorces:
// function getMonthName(mo) {
//     mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
//     let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
//                   'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     if (months[mo]) {
//       return months[mo];
//     } else {
//       throw 'InvalidMonthNo'; // throw keyword is used here
//     }
//   }

//   try { // statements to try
//     monthName = getMonthName(myMonth); // function could throw exception
//   }
//   catch (e) {
//     monthName = 'unknown';
//     // logMyErrors(e); // pass exception object to error handler (i.e. your own function)
//   }

// 3. Reverse
// Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument.
// Example
// reverseString(2019) -> ERROR! This is not a string!

// 4. Comparing Arrays
// Create a function that returns true if two arrays contain identical values, and false otherwise.
// Someone wrote the following code:
// function compareArrays(arr1, arr2) {
//   if (arr1 === arr2) {
//     return true
//    } else {
//     return false
//    }
// }
// ·      Why doesn’t the code work?
// ·      Fix the code (or restart) to solve the problem.
// ·      Examples of output
// ·      compareArrays([1, 2], [1, 3]) ➞ false
// ·      compareArrays([1, 2], [1, 2]) ➞ true
// ·      compareArrays([4, 5, 6], [4, 5, 6]) ➞ true
// ·      compareArrays([4, 7, 6], [4, 5, 6]) ➞ false

// 5. Recursion
// The following code should get the sum of the array items, but it does not work. Fix it so that it will.
// function sum(array) {
//     let result = array.pop() + sum(array);
//     return result;
// }
// console.log(sum([1, 2, 3]));
