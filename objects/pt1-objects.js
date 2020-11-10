console.log("-----------1-------goes through object with forin-----------------------");

// # Objects: Part 1
// **1. Object Person.**
// Create an object named person. Loop through the object and print both the property and value of the object. 

const person = {
    name: "Any",
    bikes: 6
}
function show() {
    console.log("object:", person);
    for (const key in person) {
        if (person.hasOwnProperty(key)) {
            return console.log("Key:", key + ", Value:", person[key]);
        }
    }
}
show();
// or with "Object" method 
console.log("Values as Array:", Object.values(person));
console.log("Keys as Array:", Object.keys(person));
// or
console.log("Key 'name':", person["name"]);

// or destructing
const { bikes } = person;
console.log("destruct:", bikes);

// or with:  ${key] and ${obj[key]


console.log("------------2----forin-/-Object method---------Object method in arrow function-----------------");

// **2. Get Values.** 
// Create a function that returns an array of all **values** of an object's properties. 
// * Examples:

const getObjectValues = ({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})
 
function name() {
    for (const key in getObjectValues) {
        if (getObjectValues.hasOwnProperty(key) ) {
             return console.log(Object.values(getObjectValues));
        }
    }
}

name(); // ["tea", "coffee", "milk"] 

// or with arrow function
let values = (obj) => Object.values(obj);
console.log("arrow function:", values(getObjectValues));

console.log("------------3----------values of objects in str--------add space in array with .join------------");

// **3. Add A Method.**
// Create an object and add a method to that object which prints the values of the objects in a string. 
 
let person2 = {
  firstName: "Michael",
  lastName: "Smith", 
  job: "driver",
  age: 20, 
  city: "Paris",
  print() {
    let temp = Object.values(this);
    delete temp[temp.length-1]; // ...-1 to remove the last element print()
    const giveSpace = temp.join(', ');
      console.log("values of the object:", giveSpace); // values of the object: Michael, Smith, driver, 20, Paris, 
      console.log(person2.firstName, this.lastName, "is a", this.age, "year old", this.job, "in", this.city, "."); // Michael Smith is a 20 year old driver in Paris .
  }
}

person2.print(); // test & call print() method

console.log("------------4----------keys and values to array------------");

// ## Bonus Questions

// **1. Convert keys and values into an array.** 
// Create a function that converts an object into an array of keys and values. 

const objectToArray = ({
  A: 1,
  B: 2,
  C: 3
});

function objToArr() {
    console.log("object:", objectToArray); // object: { A: 1, B: 2, C: 3 }
    console.log("keys from object:", Object.keys(objectToArray)); // keys from object: [ 'A', 'B', 'C' ]
    console.log("values from object:", Object.values(objectToArray)); // values from object: [ 1, 2, 3 ]

    let arr = Object.keys(objectToArray);
    console.log("keys saved in new array:", arr); // keys saved in new array: [ 'A', 'B', 'C' ]
    console.log("keys AND values:", Object.entries(objectToArray)); // keys AND values: [ [ 'A', 1 ], [ 'B', 2 ], [ 'C', 3 ] ]
}

objToArr();

///////Example/2/////without function////////////
 
 const objectToArray2 = ({
  cats: 1,
  dogs: 2, 
  turtles: 4
}) 

console.log(Object.entries(objectToArray2)); // [["cats", 1], ["dogs", 2], ["turtles", 4]] 

// from Basem
let anArray = { a: 1, b: 2, c: 3 };
let anArray2 = {key: true};
function KaysAndValues(params3) {
    let newPrint = Object.keys(params3);
    // console.log(newPrint);
    let newPrint2 = Object.values(params3);
    //console.log(newPrint2);
    return [newPrint, newPrint2];
}
console.log(KaysAndValues(anArray));  // [ [ 'a', 'b', 'c' ], [ 1, 2, 3 ] ]
console.log(KaysAndValues(anArray2));  // [ [ 'key' ], [ true ] ]
 
// **2. List Properties.**
// Create a function that returns an array of **properties** of a javascript object. 
// * Example
 // let student = {
//   name: "Mike", 
//   class: "4A" 
//   course: "English"
// }
 
// * Expected output: 
 // ["name", "class", "course"]
 
// **3. Merge.**
// Create a function that takes two objects as its parameters and merges them together into a new object. 
// * Example
 // let first = {firstName: "John"}
// let last = {lastName: "Smith"}
 // * Expected output:
 // {firstName: "John", lastName: "Smith"}
 
// **Extra Credit:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.

// **4. Switch Keys and Values.**
// Create a function to get a copy of an object. The copy must switch the keys and values.
// * Example: 
 // let person = {
//   name: "John", 
//   job: "teacher"
// }
//  
// * Expected Output: 
 // {"John": name, "teacher": job} 

 // from MO
//  let person = {
//     name: "John", 
//     job: "teacher"
//   }
//   function xchng(obj){
//     let nu = {};
//     for(let key in obj){
//       nu[obj[key]] = key;
//     }
//     return console.log(nu);
//   }
//   xchng(person);
 
// **5. Return Keys and Values.**
// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

// * Examples:
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]




// from igor monday 2.11., to what exercise was that?
// let counter = 0;
//         for (let key in worker) {
//             if (typeof(worker[key]) !== 'function' )
//             counter++
//         }