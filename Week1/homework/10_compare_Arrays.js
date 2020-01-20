'use strict'

let cars = ['tesla', 'ferrari', 'audi', 'opel', 'mercedes', 'bmw', 'murat131'];

let bikes = ['gazelle', 'sparta', 'spirit', 'batavus'];

console.log(`cars array has: ${cars.length} item`);

console.log(`bikes array has: ${bikes.length} item`);

if (cars.length === bikes.length) {
    console.log('They are the same!');
} else {
    console.log('Two different sizes');
}