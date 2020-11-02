console.log("______________multi arrays in object: list array with forin (checked with hasOwnProperty)________");

// NEST: 2D Array
// * Given the 2D Array below, **loop** through the arrays to print the values.

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];

for (const key in board) {
  if (board.hasOwnProperty(key)) {
    console.log(board[key]);
  }
}

console.log("---------object with strings, array and method: shows array content-------------");

// #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
// * 2.3 Access the second element of the doggo's favorite foods.
// * 2.4 Add a method that loops through and print all the doggo's favorite food.

const doggo = {
  name: "",
  breed: "",
  favFoods: ["meat", "cheese"], // 2.2
  print() {
    // 2.4
    console.log(this.favFoods);
  },
};

doggo.name = "Cosmo";
doggo.breed = "Dog";
console.log(doggo.name);

// 2.3
console.log(doggo.favFoods[1]);

// 2.4
doggo.print();

// #### 3.
// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value.
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`.
// * 3.4 Change the ingredient `sugar` to `brown sugar`.
// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.

console.log("---------------nested objects: syntax, access, add to array, change element, show content----------------------------");
// 3.1     "NestedObject": {}

const recipes = {
  "obj": { incredients: ["butter", "sugar", "flour"]},
  values() {
    return this.obj.incredients; // 3.5
  },
};

//3.3  syntax array.push("Budapest");
recipes.obj.incredients.push("ginger");

// 3.4  // add element on position x
recipes.obj.incredients[1] = "brown sugar";
console.log(recipes.obj.incredients);

// 3.5
console.log("show recipe incedient values:", recipes.values());
