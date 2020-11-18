// See screenshots for Datagrams (date between 16. and 17.11.20)


// Test Your Predictions: Properties
// What will happen when you run the following code snippets, and why? Write down your answers, then check if they are correct.
// 1.
const walter = {
    lastName: "White",
    address: {
        city: "Albuquerque, NM"
    }
};
const jesse = {
    lastName: "Pinkman",
    address: walter.address
};
jesse.lastName = "Driscoll";
jesse.address.city = "Anchorage, AK";
console.log(walter.lastName);  // White
console.log(walter.address.city); // 
console.log(jesse.lastName); // 
console.log(jesse.address.city); // 
// console.log(walter.employer.address); // undefined
console.log(walter.address); //
console.log(jesse.address); //


// // 2.
let street = "1600 Pennsylvania Avenue";
let potus = {
    address: street
};
street = "721 Fifth Avenue";
console.log(potus.address); // 
potus.address = "721 Fifth Avenue";
console.log(street); // 721 Fifth Avene


// // 3.
let pres = {
    lastName: "Trump"
};
let incumbent = {
    lastName: "Trump"
};
console.log(pres.lastName === incumbent.lastName); //true
console.log(pres === incumbent); //



// // 4.
let hank = {
    age: undefined
};
let gus = {};
console.log(hank.age === gus.age);  //


// // 5.
let one = { name: "Will" };
let two = { name: "Bill" };
one.name = two.name;
two.name = one.name;
console.log(one.name); // Bill
console.log(two.name); // Bill


// // 6. What 3 lines of code will swap the names?
const me = { name: "Paul" };
const you = { name: "Saul" };
// - ??? - 
let temp = me.name;
// - ??? -
me.name = you.name;
// - ??? -
you.name = temp; 

console.log(me.name); // "Saul"
console.log(you.name); // "Paul"


// // 7.
const current = {
    name: "Magnus",
    next: null
};
current.next = {
    name: "Fabiano",
    next: current
};
console.log(current.next.next.next.name); //


// // 8.
let restaurant = {
    Owner: {
        name: "Gus Frings"
    }
};
// console.log(restaurant.owner.name === "Gus Frings");  //undefined


// // 9.
const contract = { title: "sale" };
const copy = contract;
copy.title = copy.title +"(copy)";
console.log(contract.title); // sale(copy)


// // 10.
let rust = {
    address: {
        city: "New Orleans" // 
    }
};
let marty = {
    address: rust.address
};
rust.address = {
    city: "Galveston"
};
console.log(marty.address.city); // 


// // 11.
let albert = {
    address: {
        city: "Prague" // 
    }
};
let franz = {
    address: {
        city: albert.address.city
    }
};
albert.address = { city: "Zürich" };  
console.log(franz.address.city); // 


// // 12. Fill in the missing lines of code
// // - ??? -
const first = {
    taste: "pineapple"
};

second = first; 

console.log(first.taste); // pineapple
second.taste = "strawberry";
console.log(first.taste); // strawberry

