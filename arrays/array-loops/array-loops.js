// 1. **sumOfNumbers.** Program that adds up the numbers in an array (of at least 3 numbers). **Bonus**: Prints to screen both the sum and the product of these numbers.


// 2. **Hello Frien** Create an array filled with your friends' and family's names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. **Bonus**: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array. 

// sandeep, function missing
let friends = ["Tom", "Harry", "John", "Garry", "Sherry", "Erika", "Max"]
friends.forEach(function (name, index) {
    console.log(`Hello ${name}`);
    console.log(`${name} is at index ${index} of my friends array.`)
  });

// 3. **City Names.** Create an array of city names. Loop through the array and add the city names to a string. Example of expected output: "Berlin, Paris, Prague, Rome". 



// eliz
let cities =  ['Tokio', 'New York','London','Hamburg','Oslo'];
let cityNames = '';
cities.forEach(function(city) {
  cityNames = cityNames.concat(city).concat(', ');
});
cityNames = cityNames.substr(0, cityNames.length - 2);// -2 takes out the space and comma from the end of the string.
console.log(cityNames)

//igor
let cityArr = ["Berlin", "Paris", "Prague", "Rome"]
let reducerEq = (accumulator,element) => accumulator + " " + element; //implicit coercion when typeof element is something else than string in this case
let cityString = cityArr.reduce(reducerEq);
console.log(cityString);

function cityString(array) {
    return array.reduce((accumulator,element) => accumulator + "," + element)
}
console.log(cityString(["Berlin", "Paris", "Prague", "Rome"]));

// egle
let cities = ["Berlin", "Paris", "Prague", "Rome"];
function joinString (array){
    let finalString = '';
    for (let i=0; i<array.length; i++) {
    finalString = finalString + cities[i] + ", ";
}
    return finalString.slice(0,finalString.length-2);   
}
console.log(joinString(cities));


// dilshod:
const cityArr = ["Paris", "Berlin", "EveryDisco", "I-Am-In"];
function arrToString(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
       str += arr[i];
       if (i == arr.length - 1) {
           str += "."
       } else {
           str += ", ";
       }
    }
    return str;
}
console.log(arrToString(cityArr));

// 4. **Odds and Evens.** Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// * [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// * [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

// 5. **Capitalize.** Create a program that capitalises the first letter of each element in an array of names. Examples:
// * ["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]
// * ["samuel", "MARIA", "luke", "mary"] ➞ ["Samuel", "Maria", "Luke", "Mary"]
// * ["Cynthia", "Karen", "Jane", "Carrie"] ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

// * **Note:** Keep names in the same order and make sure that only the first lesson of the name is capitalised (See "Maria" in the second above example). 
	
// 6. **No Duplicates!** A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// * [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]

// * [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// * [2, 2, 2, 2, 2, 2] ➞ [2]
// * [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

// 7. **Repeat it.** Create a program with two variables: "item" and "times". Create a program that repeats the "item" as many times as specified by "times". The first variable ("item") is the item that needs repeating while the second argument ("times") is the number of times the item is to be repeated. Print the result in an array.

// * Example: ("example", 3) ➞ ["example", "example", "example"]

// **Bonuses - Choose the loop**

// **Factors.** A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
// [3, 6, 12, 36]

// * // 3 is a factor of 6 (3 * 2 = 6)
// * // 6 is a factor of 12 (6 * 2 = 12)
// * // 12 is a factor of 36 (12 * 3 = 36)

// Create a program that determines whether or not a given array is a factor chain.
// * Examples
// * [1, 2, 4, 8, 16, 32] ➞ true
// * [1, 1, 1, 1, 1, 1] ➞ true
// * [2, 4, 6, 7, 12] ➞ false
// * [10, 1] ➞ false

// **No Duplicates!** A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// * [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]

// * [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// * [2, 2, 2, 2, 2, 2] ➞ [2]
// * [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

