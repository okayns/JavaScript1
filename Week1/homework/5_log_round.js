'use strict'

let z = 7.25;

console.log('Value of z:',z);

let a = Math.round(z);

console.log('Value of a:',a);

let highestValue;

if (a > z) {
    highestValue = a;
} else {
    highestValue = z;
}

console.log('Highest Value:',highestValue);