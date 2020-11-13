// 1.    Write a function called “removeArrayValues”.
// Given an object, “removeArrayValues” removes any properties whose values are arrays.

var obj = {
 a: [1, 3, 4],
 b: 2,
 c: ["hi", "there"]
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }

function removeArrayValues(obj) {
    // remove properties with array values
    for (const key in obj) {
        if(Array.isArray(obj[key])) {
            delete obj[key];
        }
    }
}

// 2. Write a function called “removeNumberValues”.
// Given an object, “removeNumberValues” removes any properties whose values are numbers.

var obj = {
 a: 2,
 b: "remaining",
 c: 4
};

removeNumberValues(obj);

function removeNumberValues(obj) {
    // remove number with values
    for (const key in obj) {
        if(typeof obj[key] === 'number') {
            delete obj[key];
        }
    }
}
console.log(obj); // --> { b: ‘remaining’ }


// 3. Write a function called “removeStringValues”.
// Given an object, “removeStringValues” removes any properties on the given object whose values are strings.
var obj = {
 name: "Sam",
 age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }

function removeStringValues(obj) {
    // remove string values
    for (const key in obj) {
        if(typeof obj[key] === 'string') {
            delete obj[key];
        }
    }
}

// 4. Write a function called “removeNumbersLargerThan”.
// Given a number and an object, “removeNumbersLargerThan” removes any properties whose values are numbers greater than the given number.
var obj = {
 a: 8,
 b: 2,
 c: "montana"
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: ‘montana’ }

function removeNumbersLargerThan(int, obj) {
    // remove number-values greater than given number
    for (const key in obj) {
        // if(typeof obj[key] === 'number' && obj[key] > int) {  
            if(obj[key] > int) {
            delete obj[key];
        }
    }
}

// 5. Write a function called “select”.
// Given an array and an object, “select” returns a new object whose properties are those in the given object AND whose keys are present in the given array.
// Notes:
// · If keys are present in the given array, but are not in the given object, it should ignore them.
// · It does not modify the passed in object.
var arr = ["a", "c", "e"];
var obj = {
 a: 1,
 b: 2,
 c: 3,
 d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }

function select(arr, obj) {
    let newObj = {};
    for (const key in obj) {
        if(arr.includes(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

// 6. Write a function called “getElementsLessThan100AtProperty”.
// Given an object and a key, “getElementsLessThan100AtProperty” returns an array containing all the elements of the array located at the given key that are less than 100.
// Notes:
// ·      If the array is empty, it should return an empty array.
// ·      If the array contains no elements less than 100, it should return an empty array.
// ·      If the property at the given key is not an array, it should return an empty array.
// ·      If there is no property at the key, it should return an empty array.
var obj = {
 key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, "key");
// console.log(output); // --> [20, 50]

function getElementsLessThan100AtProperty(obj) {
    
}
// 7. Write a function called “getOddLengthWordsAtProperty”.
// Given an object and a key, “getOddLengthWordsAtProperty” returns an array containing all the odd length word elements of the array located at the given key.
// Notes:
// ·      If the array is empty, it should return an empty array.
// ·      If it contains no odd length elements, it should return an empty array.
// ·      If the property at the given key is not an array, it should return an empty array.
// ·      If there is no property at the given key, it should return an empty array.
var obj = {
 key: ["It", "has", "some", "words"]
};
var output = getOddLengthWordsAtProperty(obj, "key");
// console.log(output); // --> [‘has’, ‘words’]

function getOddLengthWordsAtProperty(obj) {
    
}

// 8. Write a function called “getAverageOfElementsAtProperty”.
// Given an object and a key, “getAverageOfElementsAtProperty” returns the average of all the elements in the array located at the given key.
// Notes:
// ·      If the array at the given key is empty, it should return 0.
// ·      If the property at the given key is not an array, it should return 0.
// ·      If there is no property at the given key, it should return 0.
var obj = {
 key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, "key");
// console.log(output); // --> 2

function getAverageOfElementsAtProperty(obj) {
    
}


// 9. Write a function called “getEvenLengthWordsAtProperty”.
// Given an object and a key, “getEvenLengthWordsAtProperty” returns an array containing all the even length word elements of the array located at the given key.
// Notes:
// ·      If the array is empty, it should return an empty array.
// ·      If it contains no even length elements, it should return an empty array.
// ·      If the property at the given key is not an array, it should return an empty array.
// ·      If there is no property at the key, it should return an empty array.
var obj = {
 key: ["a", "long", "game"]
};
var output = getEvenLengthWordsAtProperty(obj, "key");
// console.log(output); // --> [‘long’, ‘game’]

function getEvenLengthWordsAtProperty(obj) {
    
}
