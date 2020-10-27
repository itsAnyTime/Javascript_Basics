console.log("-------indexOf / lastIndexOf-----------");

let fruits = ["a", "b" ,"c" ,"d"];

let a = fruits.indexOf("d");
console.log(a);

let b = fruits.lastIndexOf("c");
console.log(b);


// next: mapping + sqrt
console.log("---------mapping + sqrt-----------");

let number = [4,9,16,25];

let x = number.map(Math.sqrt);  // Math is not working without map , it seems
console.log(x);


console.log("---------forEach-----------");   // TO CHECK
// next: forEach
// like a for loop with less code, takes automatic the length of the array

// array.forEach(element => {
    
// });

console.log("--------find------------");  // TO CHECK
// next: find
// creates a new array, to work with
// findet nur die erste Zahl im Array, die größer als 10 ist
const arr = [53, 36, 85, 4, 34, 445]; 
const found = arr.find(element => element > 10);  // sucht elemente größer als 10 raus
console.log(found);  // kommt iwi nur die 53 raus

// findet nur die erste Zahl im Array, die größer als 10 ist   TO DO: FINDE ALLE
const array1 = [5, 12, 8, 130, 44];
let found2 = [];
found2 = array1.find(element => element > 10);
console.log(found2); // 12


console.log("-------------");  // TO CHECK for example
// next: shorter way for bool

//return (number === num)
// same like if else - if return true, else return false