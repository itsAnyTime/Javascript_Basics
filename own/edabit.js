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