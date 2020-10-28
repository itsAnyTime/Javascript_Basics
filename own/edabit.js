//0 Recursion: Reverse a String
// Write a function that reverses a string. Make your function recursive.
// function reverse(str) {
//     if (!str) return str;
//     return str.slice(-1) + reverse(str.slice(0, -1));
//   }

//   // or mine:
//   function reverse(str) {
// 	if(str === "")
// 		return "";
// 	// move to right 
// 	return reverse(str.substring(1)) + str[0];
// }
// reverse("hello");

console.log("------------1---last element in array--------");

// 1 Return the Last Element in an Array

function getLastItem(arr) {
  return console.log(arr[arr.length - 1]);
}

// or with arr.pop() -> gibt auch das letzte array

getLastItem([1, 2, 3]); // 3
getLastItem(["cat", "dog", "duck"]); // "duck"
getLastItem([true, false, true]); // true

console.log("------------3---reverse--------");

// 2 Reverse an Array

function reverse(arr) {
  return console.log(arr.reverse());
}

reverse([1, 2, 3, 4]); // [4, 3, 2, 1]
reverse([9, 9, 2, 3, 4]); // [4, 3, 2, 9, 9]
reverse([]); // []

//or
const reverse2 = (
  arr // { return
) => arr.reverse();
//};

// same but shorter
const reverse3 = (arr) => arr.reverse(); // gleiche ausgabe, wenn reverse3 wie 2 ist

console.log(reverse2([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverse2([9, 9, 2, 3, 4])); // [4, 3, 2, 9, 9]
console.log(reverse2([])); // []

console.log("------------3---indexOf--------");

// 3. Find the Index
// Create a function that finds the index of a given item.
// If the item is not present, return -1.

const search = (arr, item) => (arr.indexOf(item) ? arr.indexOf(item) : "-1");

console.log(search([1, 5, 3], 5)); // 1
console.log(search([9, 8, 3], 3)); // 2
console.log(search([1, 2, 3], 4)); // -1

console.log("------------4---find/includes/indexOf/for-----------");

// 4. Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

const check = (arr, num) => {
  if (arr.find((element) => element === num)) {
    return true;
  } else {
    element = false;
    return element;
  }
};
// or
// function check(arr, el) {
// 	return arr.includes(el)
// }

// or
// function check(arr, el) {
// 	return arr.indexOf(el) > -1;
// }

// or normal for
// function check(arr, el) {
// 	for (var i = 0; i < arr.length; i++){
// 		if (arr[i] === el){
// 			return true;
// 		}
// 	}
// 	return false;
// }

console.log(check([1, 2, 3, 4, 5], 3)); //true
console.log(check([1, 1, 2, 1, 1], 3)); //false
console.log(check([5, 5, 5, 6], 5)); // true
console.log(check([], 5)); // false

console.log("------------5------return specific array element---new Date / .toLocaleString-----arr[]---object zugriff---");

// 5 Convert Number to Corresponding Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
// You can expect only integers ranging from 1 to 12 as test input.

const monthName = (month) => {
    const months = ["Januar", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month-1];
}

//or
// function monthName(num) {
// 	return new Date(2000, num - 1).toLocaleString("en-us", {month: "long"});
// }

//or 
// function monthName(num) {
// 	const mapping = {
// 		1: 'January',
// 		2: 'February',
// 		3: 'March',
// 		4: 'April',
// 		5: 'May',
// 		6: 'June',
// 		7: 'July',
// 		8: 'August', 
// 		9: 'September', 
// 		10:	'October', 
// 		11:	'November', 
// 		12:	'December'
// 	};
// 	return mapping[num];
// }

console.log(monthName(3)); // "March"
console.log(monthName(12)); // "December"
console.log(monthName(6));// "June"

console.log("------------6------filter---");

// 6 Unlucky 13
// Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

// solution 1
const unlucky13 = nums => nums.filter(array => array % 13 != 0);

// solution 2 - grrrrrrr
// function unlucky13(array) {
// let arr = [];
// for (i in array) {
//     if (array[i] % 13 != 0) {
//       arr.push(array[i]);
//     }
//   }
// return arr;
// }

console.log(unlucky13([53, 182, 435, 591, 637])); // [53, 435, 591]
// 182 and 637 are divisible by 13.
console.log(unlucky13([24, 316, 393, 458, 1279])); // [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.
console.log(unlucky13([104, 351, 455, 806, 871])); // []
// All numbers in the array are divisible by 13.

// NR trys
// remove example
// var persons = ["Alice", "John", "Peter", "Clark", "Harry"];
//     removed = persons.splice(2,2); // Removes the third and fourth elements

// filter example #1
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// a % 2 == 0  // = gerade

// filter example #2
// function dictionary(str, array){
//   let result = array.filter(element => { return element.startsWith(str); });
//   return result;
// }
// console.log(dictionary("bu", ["button", "breakfast", "border"])); // Button

console.log("------------7-------Math.max / Mat.min-------------");
// 7
// Difference of Max and Min Numbers in Array
// Create a function that takes an array and returns the difference between the biggest and smallest numbers.

function diffMaxMin(arr) {
  return Math.max(...arr) - Math.min(...arr);
}

// or
//const diffMaxMin = (arr) => Math.max(...arr) - Math.min(...arr);

console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])); // 82
// Smallest number is -50, biggest is 32.
console.log(diffMaxMin([44, 32, 86, 19])); // 67
// Smallest number is 19, biggest is 86.


console.log("------------8-----for/in and .push-----or----.map-------");
// 8 Negate the Array of Numbers
// Given an array of numbers, negate all elements contained within.
//  Negating a positive value -+n will return -n, because all +'s are removed.
//  Negating a negative value --n will return n, because the first - turns the second minus into a +.

const negate = (arr) => {
  let save = [];
      for(i in arr) {
         save.push(arr[i] * (-1)); // ins array pushen: collect.push( value  );
      }
      return save;
}

// or
// function negate(arr) {
// 	return arr.map(val => -val); // map takes every element from aray and do something with that
// }

console.log(negate([1, 2, 3, 4])); // [-1, -2, -3, -4]
console.log(negate([-1, 2, -3, 4])); // [1, -2, 3, -4]
console.log(negate([])); // []
