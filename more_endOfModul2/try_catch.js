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
Dog.prototype.bark = function () {
  // prototype was missing, to get FIDO bark
  console.log(`${this.name} says woof`);
};
let fido = new Dog("fido");
fido.bark(); // fido barks

console.log(
  "________________________try and catch_____________2______________"
);

// 2. Month Name
// Create a function called getMonthName, which takes the number of the month as an argument (Jan = 1 - Dec = 12). Throw an error if a user inputs an invalid number as an argument.

// Example
// getMonthName(15) -> Invalid Month Number!

// Dilshods

// Example
// getMonthName(15) -> Invalid Month Number!
function getMonthName(num) {
  const monthOfYear = ["January", "February", "March"];
  let nums = [1, 2, 3];
  if (!nums.includes(num)) {
    throw {
      name: "Input Error",
      message: "Invalid Input",
    };
  }
  return monthOfYear[num - 1];
}
try {
  getMonthName(5);
} catch (error) {
  console.log(error.message);
  console.log(error.name);
}

getMonthName(15); // Invalid Month Number!

//////////////////////

// function getMonthName(num) {
//   const monthOfYear = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   const numOfMonth = num - 1;
//   if (num <= 0) {
//     return `no corresponding month`;
//   } else if (num >= 1 && num <= 12) {
//     return monthOfYear[numOfMonth];
//   } else {
//     throw new Error("Invalid month number!");
//   }
// }
// try {
//   getMonthName(16);
// } catch (e) {
//   console.log("Error!!!!", e);
  // expected output: "Invalid month number!"
// }
// console.log(getMonthName(16));

///////////////////// mine

// function getMonthName(monthNumber) {
//   if (monthNumber <= 12) {
//     return console.log("Okay");
//   } else {
//     throw new Error("InvalidMonthNo"); // throw keyword is used here. without new Error, it shows only the console.log
//   }
// }
// try {
//   // statements to try!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   getMonthName(15); // ->  Error! Error: InvalidMonthNo
// } catch (e) {
//   console.log("Error!", e);
  // logMyErrors(e); // pass exception object to error handler (i.e. your own function)
// }

// NOT NEEDED HERE; PUT IT TO TRY BLOCK:
// getMonthName(12); // -> Valid Month Number!
// getMonthName(15); // -> Invalid Month Number!

// resorces:
// function getMonthName(mo) {
//   mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
//   let months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   if (months[mo]) {
//     console.log(months[mo]);
//     return months[mo];
//   } else {
//     throw "InvalidMonthNo"; // throw keyword is used here
//   }
// }

// try {
//   // statements to try
//   monthName = getMonthName(4); // function could throw exception
// } catch (e) {
//   console.log("here", e);
  // logMyErrors(e); // pass exception object to error handler (i.e. your own function)
// }

// getMonthName(12); // -> Valid Month Number!
// getMonthName(15); // -> Invalid Month Number!

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

function compareArrays(arr1, arr2) {
  if (arr1 === arr2) {
    return console.log(true);
   } else {
    return console.log(false);
   }
}
compareArrays([1, 2], [1, 3]) // false
compareArrays([1, 2], [1, 2]) // true
compareArrays([4, 5, 6], [4, 5, 6]) // true
compareArrays([4, 7, 6], [4, 5, 6]) // false

// 5. Recursion
// The following code should get the sum of the array items, but it does not work. Fix it so that it will.
function sum(array) {
    let result = array.pop() + sum(array);
    console.log(result);
    return result;
}
console.log(sum([1, 2, 3]));
