'use strict'

let a = 'StringOne';

let b = 'StringTwo';

let contactInfo = {
    firstName: 'Enis',
    lastName: 'Last',
    age: 31,
    eyeColor: 'black',
};

let favAnimals = ['Cat', 'Dog'];

console.log(typeof a);

console.log(typeof contactInfo);

// I used TERNARY OPERATOR instead of if statement. Because this way is more efficient in this case. 

console.log(typeof a === typeof b ? 'SAME TYPE' : 'DIFFERENT TYPE');

console.log(typeof a === typeof contactInfo ? 'SAME TYPE' : 'DIFFERENT TYPE');

console.log(typeof a === typeof favAnimals ? 'SAME TYPE' : 'DIFFERENT TYPE');

console.log(typeof b === typeof contactInfo ? 'SAME TYPE' : 'DIFFERENT TYPE');

console.log(typeof b === typeof favAnimals ? 'SAME TYPE' : 'DIFFERENT TYPE');

console.log(typeof contactInfo === typeof favAnimals ? 'SAME TYPE' : 'DIFFERENT TYPE');