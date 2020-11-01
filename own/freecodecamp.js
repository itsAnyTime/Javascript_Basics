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
  

// countdown
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