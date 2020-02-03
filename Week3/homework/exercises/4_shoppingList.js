'use strict'

const groceryList = ['bananas', 'milk'];


function addToShoppingCart(groceryItem) {
    groceryList.push(groceryItem);
    if (groceryList.length > 3) {
        groceryList.shift();
    }
    return `You bought ${groceryList}!`;
}

console.log(addToShoppingCart("onion"));
console.log(addToShoppingCart("cheese"));
console.log(addToShoppingCart("parsley"));