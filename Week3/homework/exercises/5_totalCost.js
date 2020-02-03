'use strict'

const cartForParty = {
    cokes: 1.25,
    chips: 0.5,
    peanuts: 2.09,
    fireworks: 7.99,
    ornaments: 3.99,
};

function calculateTotalPrice(items) {
    let total = 0;
    for (let prop in items) {
        total += cartForParty[prop];
    }
    return total;
}

console.log(calculateTotalPrice(cartForParty));