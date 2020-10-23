var toDo = pickRandom([
    "Sololearn",
    Codecademy,
    CodecamdemyGo,
    Edabit,
    Grashopper,
    Freecodecamp,
    math2,
    pb-array-loops,
    pb-arrays-pt2,
    pb-arrays-pt3,
    start-include-js
]);
console.log(answer);


const random = Math.floor(Math.random() * toDo.length);
console.log(random, toDo[random]);

// not working example
// Array.prototype.sample = function(){
//     return this[Math.floor(Math.random()*this.length)];
//   }
  
  
//   [1,2,3,4].sample() //=> a random element