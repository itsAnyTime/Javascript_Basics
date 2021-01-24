console.log("----------------1-------------.min / .max");

// # Objects: Part 2

// **1. Check if a number is within a given range.**
// Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

function rangeCheck(num, range) {
  return num >= range.min && num <= range.max;
  // not needed:
  if (num >= range.min && num <= range.max) {
    return true;
  } else return false;
}

console.log(rangeCheck(4, { min: 0, max: 5 })); // true
console.log(rangeCheck(4, { min: 4, max: 5 })); // true
console.log(rangeCheck(4, { min: 6, max: 10 })); // false

// or
const isInRange2 = (num, range) => num >= range.min && num <= range.max;
console.log(isInRange2(5, { min: 5, max: 5 })); // true

console.log(
  "-----------------2----Sum of values in an object array---.reduce --------------"
);
// **2. Scrabble.**
// Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.

// works in edabit test
function maximumScore(obj) {
  let initialValue = 0;
  let sum = obj.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.score;
  }, initialValue);
  console.log(sum); // 28
}
maximumScore([
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
]);

function maxScore() {
  // first idea:
  //     console.log(obj); geht
  //     console.log((obj.score)); geht nich
  //     let sum = 0;
  //     sum += obj.score;
  //     console.log(sum);
  let initialValue2 = 0;
  let sum = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
  ].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.score;
  }, initialValue2);

  console.log("summe:", sum); // logs 28
}
console.log(maxScore()); // returns undefined, so better the solution on top

// nr gegoogelt:  -- Sum of values in an object array--
let initialValue2 = 0;
let sum2 = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (
  accumulator,
  currentValue
) {
  return accumulator + currentValue.x;
},
initialValue2);

console.log(sum2); // logs 6

// shorter xD
function maximumScore(tileHand) {
  return console.log(
    "shorter:",
    tileHand.reduce((p, c) => p + c.score, 0)
  );
}
maximumScore([
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
]);   // shorter: 28

// with arrow fct
const maximumScore2 = (obj) =>
  console.log(
    "arrow:",
    obj.reduce((a, { score }) => a + score, 0)
  );

maximumScore2([
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
]);

// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

console.log("--------------3---------------------------");

// **3. Is it an empty object?**
// Write a program that returns true if an object is empty, and false if otherwise.
const isEmpty = (obj) => Object.keys(obj).length === 0; // didn't work with console.log

function empty(obj) {
  // console.log(Object.values(obj));
  // console.log(Object.keys(obj));
  if (Object.keys(obj) == "") {
    return true;
  } else return false;
}

// or
function isEmpty2(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

// or
// function isEmpty(obj) {
// 	return !Object.keys(obj).length
// }

console.log(isEmpty({})); // true
console.log(isEmpty({ a: 1 })); // false

console.log(isEmpty2({})); // true
console.log(isEmpty2({ a: 1 })); // false

console.log(empty({})); // true
console.log(empty({ a: 1 })); // false

console.log("--------------4--------------------------");

// **4. Counting Letters.**
// Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.

// from Marika
function countLetters(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    // reset
    let count = 0;
    for (let index = 0; index < str.length; index++) {
      if (str[i] === str[index]) {
        count++;
      }
    }
    obj[str[i]] = count;
  }
  return obj;
}

console.log(countLetters("tree")); // {t: 1, r: 1, e: 2}

// from Sandeep
function count (str) {
    let freq = {};
    for(let i = 0; i < str.length; i++) {
      freq[str.charAt(i)] = freq[str.charAt(i)] + 1 || 1;
    }
    return freq;
  }
  console.log(count("tree"));

  // or from Gerhard
function getLetterCounts(str) {
    let counts = {};
    for (let i = 0; i < str.length; i += 1) {
        let letter = str[i];
        counts[letter] = counts[letter] ? counts[letter] + 1 : 1;
    }
    return counts;
}
console.log(getLetterCounts("tree"));

// mandys
function count (string) {
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }
  console.log(count("hello"));

  //mandys 2
  function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
    return freq;
};
console.log(getFrequency("hello"));

// mandys 3
// Stack Overflow:
let s = 'hello';
var result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
console.log(result); // {h: 1, e: 1, l: 2, o: 1}

console.log("--------------5--------------------------");

// **5. Free Shipping.**
// Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

function freeShipping(obj) {
  let cost = 0;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log("111", Object.values(obj));
      console.log("222", obj[key]);
      cost += parseFloat(obj[key]);
    }
  }
  if (cost >= 50) {
    return true;
  } else {
    return false;
  }
}

freeShipping({ Sponge: 3.5, Soap: 5.99 }); // false
freeShipping({ "Surround Sound Equipment": 499.99 }); // true
freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 }); // false

console.log("--------------6--------------------------");

// **6. Programming Object.**

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

function six() {
  // - Write the command to add the language "Go" to the end of the languages array.
  programming.languages.push("Go");
  console.log(programming.languages);
  // - Change the difficulty to the value of 7.
  programming.difficulty = 7;
  console.log(programming.difficulty);
  // - Using the delete keyword, write the command to remove the jokes key from the programming object.
  delete programming.jokes;
  // - Write a command to add a new key called isFun and a value of true to the programming object.
  programming.isFun = true;
  // - Using a loop, iterate through the languages array and console.log all of the languages.
  console.log("iterate through language array:");
  for (const i in programming.languages) {
    if (programming.languages.hasOwnProperty(i)) {
      console.log(programming.languages[i]);
    }
  }
  // - Using a loop, console.log all of the keys in the programming object.
  console.log("-iterate all keys---");
  for (const key in programming) {
    if (programming.hasOwnProperty(key)) {
      console.log(`${key}`); 
      // or
      console.log("test", key);
    }
  }
  // - Using a loop, console.log all of the values in the programming object.
  console.log("-iterate all values---");
  for (const key in programming) {
    if (programming.hasOwnProperty(key)) {
      console.log(`${programming[key]}`); 
      // or
      console.log("it vals:", programming[key]);
    }
  }
  // - Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging.
  console.log("add method to object");
  programming.benefit = function () {
    // to get correct comma separated space
    let temp = programming.languages;
    const giveSpace = temp.join(', ');
    // output
    if (this.isChallenging && this.isRewarding) {
      return console.log(
        "Learning the programming languages: " +
       giveSpace +
          " is rewarding and challenging"
      );
    }
  };
  console.log(programming);
  programming.benefit();
  //**Bonus:** In a comment, explain what is printed if we console.log an object method without calling it and why.
  // -> nothing is printed, if the method is not called. It needs to wake up first, syntax:
  // accessing object methods:
  // objectName.methodName()  ->   programming.benefit();
}

six();

// **Bonus**:
// - Make sure that any other code cannot delete or change properties of the object.
// -> I used const variables
