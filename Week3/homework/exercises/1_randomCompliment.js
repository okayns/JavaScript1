'use strict'

function giveCompliment(name) {
    let complimentsList = ['great', 'smart', 'awesome', 'helpful', 'wonderful', 'kind', 'inspiring', 'creative', 'thoughtful', 'generous'];
    let randomComp = complimentsList[Math.floor(Math.random() * complimentsList.length)];
    return `You are ${randomComp}, ${name}!`;
}

console.log(giveCompliment('Noer'));
console.log(giveCompliment('Noer'));
console.log(giveCompliment('Noer'));