'use strict'
//Declare a variable that holds an object (your meal recipe) 
const myKebap = { //Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
    meal: 'Adana Kebap',
    serve: 4,
    ingredients: [
        '1 pound ground lamb',
        '1 small onion (peeled and minced)',
        '4 cloves garlic (peeled and minced)',
        '1 1/2 teaspoons ground cumin (divided)',
        '1 1/2 teaspoons ground sumac (divided)',
        '1/2 teaspoon salt',
        '1/4 teaspoon ground black pepper',
        '1/4 teaspoon red pepper flakes (or to taste)',
        '2 tablespoons water (ice cold)',
        '4 metal skewers or wooden skewers (soaked in water)',
    ]
};

const keys = Object.keys(myKebap); // creates an array that contains the properties of myKebap object.

const values = Object.values(myKebap); // creates an array that contains the values of every property in myKebap object.

for (let i = 0; i < keys.length; i++) {//Log each property out seperately, using a loop (for, while or do/while)
    if (keys[i] == keys[0]) {
        console.log(`Meal name: ${values[i]}`);
    } else if (keys[i] == keys[1]) {
        console.log(`Serves: ${values[i]}`);
    } else {
        console.log('Ingredients:');
        for (let j = 0; j < values[i].length; j++) {
            console.log(values[i][j]);
        }
    }
}

console.log('// ------------------------- Second Solution ------------------------- //')

for (const keys in myKebap) { // for...in loop usage in Objects. Just make that to practice. And to see the compare with first solution.
    if (keys === 'meal') {
        console.log(`Meal name: ${myKebap[keys]}`);
    } else if (keys === 'serve') {
        console.log(`Serves: ${myKebap[keys]}`);
    } else {
        console.log('Ingredients:');
        for (let i = 0; i < myKebap.ingredients.length; i++) {
            console.log(myKebap.ingredients[i]);
        }
    }
}