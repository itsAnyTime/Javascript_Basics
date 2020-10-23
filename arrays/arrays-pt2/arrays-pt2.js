// used: push, split, reverse, toString, charAt, join, Math.sign, parseInt/Float, includes, match, indexOf, startWith, filter, foreach, 

//not so easy without google

// last task not ready yet

// 1. Function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. The function should return the elements of the array which are greater than the second argument.

var collect = [];
function greater(a,b) {
    for(i = 0; i < a.length; i++) {
    if(a[i] > b) {
        collect.push(a[i]);
    }
}    
return collect;
}

greater([3, 10, 5], 4) // 5, 10
console.log(collect);


// **2. Function to find the longest word in a given string. 

function findLongestWordLength(str) {
    var strSplit = str.split(' ');
    console.log(strSplit);
    
    var saveLength = 0;
    var word = "";

    for(let i = 0; i < strSplit.length; i++) {
      console.log("stringlänge: ", strSplit[i].length);
        if (strSplit[i].length > saveLength) {
          // returns string length
          // console.log(strSplit[i]);
          word = strSplit[i];
          saveLength = strSplit[i].length;
        }
      }
    //return saveLength;
      return word;
  }
  
  console.log("Longest word is: ", findLongestWordLength("this is is a web development course")); // development

console.log("3.1 -------------");

// 3. Reverse. Functions to reverse a number. 

// example one: int in array reverse
var arr = [34, 234, 567, 4];
console.log(arr);
var new_arr = arr.reverse();
console.log(new_arr); // 4 567 234 34

console.log("ex: 2 ----------------");
// example two: my fun solution

function reverse(b) {
    // console.log("type of b is:" + typeof(b));
    let str = ""; 
    str = b.toString()
    // console.log("str is type of: " + typeof(str));
    // fill every character into an array
    res = []; 
    for (var i = 0; i < str.length; i++) { 
        res[i] = str.charAt(i); 
        console.log(res);
    } 
    return parseInt(res.reverse().join(""));
}
console.log("result:" + reverse(34532)); // 23543


console.log("ex: 3 ---------------");
// example 3: int reverse
function reversedNum(num) {
    return (parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
    //return (num.toString().split('').reverse().join('') //* Math.sign(num)  // floatparse deletes minus, deswegen noch * math.sign(num)
    )                 
  }
  console.log(reversedNum(-34532)); // -23543

  console.log("-----------4---------------");

// **4. AEIOU: Vowels/Vokale**
// Function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string. 

function findVowels(a) {
    let found = 0;
    const pool = [ "a", "e", "i", "o", "u"];
    for(let i = 0; i < a.length; i++) {
    if(pool.includes(a[i])) {
        found++;
    }
}
return found;
}
console.log(findVowels("this is a string")); // 4

// google solution:
function getVowels(str) {
    var m = str.match(/[aeiou]/gi); // g = global search, i = ignores upper/lowercase
    console.log(m);
    return m === null? 0 : m.length;  // if 0 then 0 else length of m (array with found amount)
}

console.log(getVowels("this is A string")); // 4


console.log("-----------5---------------");

// 5. Missing Number. Function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

var collectNums = [];

function missingNums(arr) {
    console.log(arr);
    const completeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for(let i = 1; i <= completeArr.length; i++) {
        if(arr.indexOf(i) == -1) {
            // push missing numbers to Array
            collectNums.push(i);
        }
    }
    return console.log(collectNums);    
}
 
//missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) // 5
//missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) // 10
missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) // 7 

console.log("-----------6--------------");


// 6. Cubed. Function that takes in an array of numbers and returns the sum of its cubes. 

function sumOfCubes(values) {
    let result = 0;  // darf kein array sein!
    console.log("given values:", values);
    for(let i = 0; i < values.length; i++) {
       result += values[i] ** 3;
    }
    return console.log(result);
}
sumOfCubes([1, 5, 9]) // 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
sumOfCubes([2]) // 8
sumOfCubes([]) // 0

console.log("-----------7--------------");


// 7. Dictionary. Function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string. Filtered array is in the same relative order as the original array of words.

function dictionary(str, arr) {
    let newArr = [];
    // my solution 1:
    // for (let i = 0; i < arr.length; i++) {
    //     if(arr[i].startsWith(str)) {
    //     newArr.push(arr[i]);
    //     }
    // }

    // my solution 2: ternäry solution:
    // ternäry needs left and right value at :
    arr.forEach(element => { element.startsWith(str) ? newArr.push(element) : ''; });
    return newArr;
}
                                                // example for foreach:
                                                // var fruits = ["apple", "orange", "cherry"];
                                                // fruits.forEach(myFunction);

                                                // function myFunction(item, index) {
                                                //   document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
                                                //}

                    // syntax example startsWith:
                    // str.startsWith(searchString[, position])

//  Other Solution
function dictionary(str, array){
    let result = array.filter(element => { return element.startsWith(str); });
    return result;
}

console.log(dictionary("bu", ["button", "breakfast", "border"])); // Button
console.log(dictionary("tri", ["piano", "triplet", "tries", "trip", "tree"])); // triplet, trip, tries
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"])); // []


// **8. Even Number Generator.**
// Creates a function that finds all even numbers from 1 to the given number.
// Odd numbers, return an empty array. 0 not included

function evenNums(a) {
    let arr = [];

    for (let index = 1; index <= a; index++) {
        arr.push(index);
    }
    // console.log(arr);            
    // check if array content % 2 == 0 is true. If yes, it is an even number. Even numbers goes to the new Array. (filter creates a new Array.)
    const result = arr.filter(arrContent => arrContent % 2 == 0);
    console.log(result);
}
// filter example #1
// const result = words.filter(word => word.length > 6);
// a % 2 == 0  // = gerade

// filter example #2
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(asdf => asdf.length > 6);
// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]

evenNums(8) // [2, 4, 6, 8]
evenNums(4) // [2, 4]
evenNums(2) // [2]
evenNums(1) // []


// Alphabetical Order.**
// Create a function to sort a string into alphabetical order. **NB:** assume numbers, symbols and punctuation are not included in the string.

function alphaOrder(str) {
    return console.log(str.split('').sort().join(""));
}
alphaOrder("webdev") // "bdeevw" 