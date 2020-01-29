'use strict'

const drinkTray = [];

const drinkTypes = ["cola", "lemonade", "water"];

for (let i = 0; i < 5; i++) { // this code line creates the new array [0 , 1, 2, 0, 1]. adding the existing array elements to new array.
    drinkTray.push(drinkTypes[i % drinkTypes.length]);
}

let myString = "Hey guys I brought a " + drinkTray + "!";
console.log(myString.replace(/,/g, ', '));


// ----- still trying to make with another soluion. ---- //


// const rngItem = drinkTypes[rng] // Getting random item from array. */ // I didnt use these codes. I tried to choose the drinks randomly and i want to add them to new array. Without function() i did not manage to do that. 




// function rng() {
//     return Math.floor(Math.random() * drinkTypes.length);
// }
// for (let i = 0; i < 5; i++) {
//     drinkTray.push(drinkTypes[rng()])
// }