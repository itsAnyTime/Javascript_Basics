// 10. Write a function called “getSquaredElementsAtProperty”.
// Given an object and a key, “getSquaredElementsAtProperty” returns an array containing all the squared elements of the array located at the given key.
// Notes:
// If the array is empty, it should return an empty array.
// If the property at the given key is not an array, it should return an empty array.
// If there is no property at the key, it should return an empty array.
// var obj = {
//   key: [2, 1, 5]
// };
// var output = getSquaredElementsAtProperty(obj, 'key');
// console.log(output); // --> [4, 1, 25]

// G!
var obj = {
  key: [2, 1, 5],
};
var output = getSquaredElementsAtProperty(obj, "key");
console.log(output); // --> [4, 1, 25]

function getSquaredElementsAtProperty(obj, key) {
  if (!Array.isArray(obj[key])) {
    return [];
  }

  for (let prop in obj) {
    for (let i = 0; i < obj[key].length; i++) {
      obj[prop][i] = obj[prop][i] ** 2;
    }
  }
  return obj[key];
}

// 11. Write a function called “getSmallestElementAtProperty”.
// Given an object and a key, “getSmallestElementAtProperty” returns the smallest element in the array located at the given key.
// Notes:
// If the array is empty, it should return undefined.
// If the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.
// var obj = {
//   key: [2, 1, 5]
// };
// var output = getSmallestElementAtProperty(obj, 'key');
// console.log(output); // --> 1

// G!

var obj = {
  key: [2, 1, 5],
};
var output = getSmallestElementAtProperty(obj, "key");
console.log(output); // --> 1

function getSmallestElementAtProperty(obj, key) {
  if (
    obj[key] === undefined ||
    Array.isArray(obj[key]) === false ||
    obj[key].length < 1
  ) {
    return undefined;
  }
  var smallestElement = obj[key][0];
  for (var prop in obj[key]) {
    if (obj[key][prop] < smallestElement) {
      smallestElement = obj[key][prop];
    }
  }
  return smallestElement;
}

// 12. Write a function called “getLargestElementAtProperty”.
// Given an object and a key, “getLargestElementAtProperty” returns the largest element in the array located at the given key.
// Notes:
// If the array is empty, it should return undefined.
// If the property at the given key is not an array, it should return undefined.
// If there is no property at the key, it should return undefined.
// var obj = {
//   key: [1, 2, 4]
// };
// var output = getLargestElementAtProperty(obj, 'key');
// console.log(output); // --> 4

// G!

var obj = {
  key: [1, 2, 4],
};
var output = getLargestElementAtProperty(obj, "key");
console.log(output); // --> 4

function getLargestElementAtProperty(obj, key) {
  if (
    obj[key] === undefined ||
    Array.isArray(obj[key]) === false ||
    obj[key].length < 1
  ) {
    return undefined;
  }
  var largestElement = obj[key][0];
  for (var prop in obj[key]) {
    if (obj[key][prop] > largestElement) {
      largestElement = obj[key][prop];
    }
  }
  return largestElement;
}

// 13. Write a function called “getAllButLastElementOfProperty”.
// Given an object and a key, “getAllButLastElementOfProperty” returns an array containing all but the last element of the array located at the given key.
// Notes:
// If the array is empty, it should return an empty array.
// If the property at the given key is not an array, it return an empty array.
// If there is no property at the key, it should return an empty array.
// var obj = {
//   key: [1, 2, 3]
// };
// var output = getAllButLastElementOfProperty(obj, 'key');
// console.log(output); // --> [1,2]

// G!

var obj = {
  key: [1, 2, 3],
};
var output = getAllButLastElementOfProperty(obj, "key");
console.log(output); // --> [1,2]

function getAllButLastElementOfProperty(obj, key) {
  var allButLast = [];
  if (
    obj[key] === undefined ||
    Array.isArray(obj[key]) === false ||
    obj[key].length < 1
  ) {
    return allButLast;
  }
  for (var i = 0; i < obj[key].length - 1; i++) {
    allButLast.push(obj[key][i]);
  }
  return allButLast;
}

// 14.  Write a function called “getProductOfAllElementsAtProperty”.
// Given an object and a key, “getProductOfAllElementsAtProperty” returns the product of all the elements in the array located at the given key.
// Notes:
// If the array is empty, it should return 0.
// If the property at the given key is not an array, it should return 0.
// If there is no property at the given key, it should return 0.
// var obj = {
//   key: [1, 2, 3, 4]
// };
// var output = getProductOfAllElementsAtProperty(obj, 'key');
// console.log(output); // --> 24

// G!

var obj = {
  key: [1, 2, 3, 4],
};
var output = getProductOfAllElementsAtProperty(obj, "key");
console.log(output); // --> 24

function getProductOfAllElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length > 0
    ? obj[key].reduce((a, b) => a * b)
    : 0;
}

// 15.  Write a function called “sumDigits”.
// Given a number, “sumDigits” returns the sum of all its digits.
// var output = sumDigits(1148);
// console.log(output); // --> 14
// If the number is negative, the first digit should count as negative.
// var output = sumDigits(-316);
// console.log(output); // --> 4
// Notes:
// In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
// Be sure to familiarize yourself with the “toString” method, as well as the “Number” function.

// G!

var output = sumDigits(1148);
console.log(output); // --> 14
// If the number is negative, the first digit should count as negative.
var output = sumDigits(-316);
console.log(output); // --> 4

function sumDigits(num) {
  let nums = num.toString().split("");
  // console.log(nums);
  if (nums[0] === "-") nums.shift(), (nums[0] = "-" + nums[0]);
  return nums.reduce((a, b) => Number(a) + Number(b), 0);
}

// 16.  Write a function called “getSumOfAllElementsAtProperty”.
// Given an object and a key, “getSumOfAllElementsAtProperty” returns the sum of all the elements in the array located at the given key.
// Notes:
// If the array is empty, it should return 0.
// If the property at the given key is not an array, it should return 0.
// If there is no property at the key, it should return 0.
// var obj = {
//   key: [4, 1, 8]
// };
// var output = getSumOfAllElementsAtProperty(obj, 'key');
// console.log(output); // --> 13

//G!

var obj = {
  key: [4, 1, 8],
};
var output = getSumOfAllElementsAtProperty(obj, "key");
console.log(output); // --> 13

function getSumOfAllElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length > 0
    ? obj[key].reduce((a, b) => a + b, 0)
    : 0;
}

// 17.  Write a function called “modulo”.
// Given 2 numbers, “modulo” returns the remainder after dividing num1 by num2.
// It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()
// Notes:
// Do NOT use the actual built-in modulo (aka “remainder”) operator (%) in your implementation.
// 0 % ANYNUMBER = 0.
// ANYNUMBER % 0 = NaN.
// If either operand is NaN, then the result is NaN.
// Modulo always returns the sign of the first number, even if the remainder is 0.

// var output = modulo(25, 4);
// console.log(output); // --> 1

// G!

var output = modulo(25, 4);
console.log(output); // --> 1

function modulo(num1, num2) {
  let multiple = Math.floor(Math.abs(num1) / Math.abs(num2));
  let remainder = Math.abs(num1) - Math.abs(num2) * multiple;
  return num1 < 0 ? remainder * -1 : remainder;
}

// 18.  Write a function called “isOddWithoutModulo”.
// Given a number, “isOddWithoutModulo” returns whether the passed in number is odd.
// Note:
// It does so without using the modulo operator (%).
// It should work for negative numbers and zero.
// var output = isOddWithoutModulo(17);
// console.log(output); // --> true

// G!
var output = isOddWithoutModulo(17);
console.log(output); // --> true

function isOddWithoutModulo(num) {
  return !Number.isInteger(num / 2);
}
