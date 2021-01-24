// easy - 
// used: push, splice, concat, reverse, sort, toString, join, subStr, charAt

// 1. Array named "euroCities". Another variable assigned the second item of the array as a value.
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let zwei = euroCities[1];

// 2. Changed the first item in the array to "Berlin".
euroCities[0] = "Berlin";

// 3. Printed the length of the array "euroCities".
console.log(euroCities.length);

// 4. Removed the last item of the array "euroCities". 
//console.log(euroCities.pop());
// or
delete euroCities[euroCities.length-1];
console.log(euroCities);
// or 
euroCities.slice(0,4);

// 5. Add "Budapest" to the euroCities array. 
euroCities.push("Budapest");
console.log(euroCities);
//or
euroCities[4] = "Budapest";
console.log(euroCities);

// 6. Removed the second and third items from the euroCities array. 
euroCities.splice(2,2);
console.log(euroCities);

// 7. New variable named asianCities and assigned an array of at least 5 cities to the variable.
let asianCities = ["city 1","city 2","city 3","city 4","city 5" ];

// 8. Method to select items 2-4 from the array of asianCities and stored this in another variable.  
let store = asianCities.splice(1,3);
console.log(asianCities);
console.log(store);

// 9. Method to concat euroCities with asianCities. Stored the result.
let worldCities = euroCities.concat(asianCities);
console.log(worldCities);

// 10. Reversed the order of worldCities.
console.log(worldCities.reverse());
// sort
console.log(worldCities.sort());

// 11. Replaced the 3rd item in the array of worldCities with "Toronto". 
worldCities[2] = "Toronto";
console.log(worldCities);

// 12. Insert "Washington" at the 2nd position. Delete nothing.
// insert on position, delete, add
worldCities.splice(1, 0, "Washington");
console.log(worldCities);

// 13. Join all elements into a string. 
// comma separated
console.log("here:", `${worldCities}`);   /// syntax is: `${firstName}
console.log(worldCities.toString());
// + separated
console.log(worldCities.join('+'));

// 1. Reverse string  //?
function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0); 
    // 1 im substr: jeder Buchstabe, 2: jeder 2., 3: jeder 3. usw
}
console.log(reverseString("hello world"));

// 1. Array of names.
let char = ["char 1, char2, char 3"];
// 2. Array of parents' names.
let parent = ["p 1", "p2"];
// 3. Combined these two arrays.
let comb = char.concat(parent);
// 4. Added pets' names.
comb.push("cosmo");
// 5. Reversed the order of the array.
comb.reverse();
// 6. Accessed one of parents' names.
console.log(comb);
console.log(comb[1]);
// 7. Updated name of one of parents. 
console.log(comb[2] = "Erz");
comb.splice(1,1,"Kasimir");
console.log(comb);