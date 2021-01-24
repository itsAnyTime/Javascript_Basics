// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import { jsonRecipes } from '../scripts/data.js';
// import { jsonRecipes } from './data.js'; // works too ./ = current directory


// \/ All of your javascript should go here \/

// json parse
let recipes = JSON.parse(jsonRecipes)
console.log("json Recipes: ", recipes);

