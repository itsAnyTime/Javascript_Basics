// # Scope
// * Create a method that prints the following: 
// "John smith is a student in class 12"  (Function in object)

const student = { 
    firstName: "John", 
    lastName: "Smith", 
    class: 12,
    //getfct: function() {
    getfct() {  // new in ES6 (without word function)
        return console.log(this.firstName, this.lastName, `is a student in class ${this.class}.`); // in the object with this
        // instead of (outside)
        return console.log(student.firstName, student.lastName, "is a student in class 12.");
    }  
}

student.getfct();

// 2. Create a person object. Include the person's first and last name, age, job, city etc. Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

const person = ({
    name: "Paris",
    lastname: "Turner",
    age: "2,140,526",
    job: "Being a city",
    city: "Hamburg",
    xyz: function xyz() {
        let output = this.name + " " + this.lastname + " is a " + this.age + " Year old " + this.job + " and is situated in " + this.city + ".";
        console.log(output); // Paris Turner is a 2,140,526 Year old Being a city and is situated in Hamburg.
        return output;
      },
    length() { return console.log("length fkt in object: " + Object.keys(this).length); }
  }) 

person.xyz();
person.length();

// 3. Write a method to get the length of the person object.

Object.size = function(obj) {
    var size = 0;
   // var key;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return console.log(size);
};

// Get the size of object person
var size = Object.size(person);
//////////////////////////////////////////////

// Get size of object student
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return console.log("Length of student is: " + size);
}

Object.size(student);

console.log("---------------------------howto----------------------------------");

// This syntax: ${this.class}  needs to be between ` `
// example:  console.log(`is a student in class ${this.class}.`); 

// object syntax
var literal = {
    "Name": "value",
    "Array": [],
    "NestedObject": {}
};


// empty object
const obj1 = {};

// create object with an object literal
obj1.firstName = "Joe";

// create with new
const obj2 = new Object();  // empty

// create with property obj
const obj3 = Object.create(obj1);
console.log(obj3.firstName);
console.log(Object.keys(obj3));

// ACCESS
// easiest
console.log(person.firstName);

// or bracket notation, 
console.log(person['firstName']);
// mostly used in this case:
// object['string]];
// object[expression];
let key = 'firstName';
console.log(person[key]);

// calling function property (method)
console.log(student.getfct());

// change properties
person.age = 82;
console.log(person.age);

// adding properties
person.interests = ['programming','music','dogs'];
console.log(person.interests[1]);

// removing 
delete person.age;
console.log(person.age);

//Object.keys gives an array of object properties