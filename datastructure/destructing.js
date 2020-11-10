// # Destructuring

console.log("---------Array Destructering--------");
// #### 1. Array Destructuring
// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring assignment to complete this task.

// old way:
// let fruit = "banana", vegetable = "cucumber", food = ["bread", "cakes", "pizza"];

const arr = ["banana", "cucumber", ["bread", "cakes", "pizza"]];
let [fruit, vegetable, food] = arr;

// or
// let [fruit, vegetable, ...food] = arr;  // if unclear, see daniela screenshot 10.11. - 10:00

console.log(arr);
console.log(arr[2]);
console.log(fruit);
console.log(food);
console.log(...food);

// resource
const arr2 = ["eyes", "nose", "lips", "ears"]
let [eyes, nose, lips, ears] = arr2


console.log("---------Object Destructering--------");
// #### 2.Object Destructuring
// * Create an object which contains key pair values of names and the respective halloween costume e.g. `fran: "witch"`.   Assign each key pair value to corresponding variable. Print out the object values. 

const PAIRS = {
    fran: "wich",
    john: "zombie",
    baerbel: "little pony"
}

let {fran, john, baerbel} = PAIRS;

console.log(fran);
console.log(john);
console.log(baerbel);

// or from class mate
let franc, jamesi;
({franc, jamesi}={franc:'wicca', jamesi:'ghost'})
console.log("m1:",franc);
console.log("m2", jamesi);


// resource: Basic assignment
const user = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = user;

console.log(id); // 42
console.log(is_verified); // true 

console.log("---------3--------");
// #### 3. Parameters: Object Destructuring 
// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
const MUSIC = {
    name: "Bon Jovi",
    greatest_hits: "Always",
    nationality: "American",
    genre: "Rock"
};

// * Then, create a function to display all of the band/musician's data.
function band({name, greatest_hits, genre}) {
    // console.log(MUSIC);
    return `${name}'s number one album ${greatest_hits} was genre ${genre}`
} 
console.log(band(MUSIC));

// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.

// allie solutions with objects in array
let bands = [
    {
        name: "Prince",
        album: "Purple Rain",
        release: 1984
    },
    {
        name: "bla",
        album: "blabla",
        release: 2948
    }
]

function bandFacts2(arr) {
    for (const {name: n, album: a, release: r} of arr) {
        return (`${n}'s number one album ${a} was released in ${r}`);
    }
}
console.log(bandFacts2(bands));