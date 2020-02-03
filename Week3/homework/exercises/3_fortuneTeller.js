'use strict'

const numChildren = [2, 3, 4, 1, 5];
const partnerNames = ['Julia', 'Emma', 'Sophie', 'Tess', 'Milan'];
const locations = ['Amsterdam', 'Utrecht', 'Rotterdam', 'Hengelo', 'Miami'];
const jobs = ['Web Developer', 'Accountant', 'Doctor', 'Lawyer', 'Nothing'];

function randomItem(array) { // to create a random item from existing arrays
    return array[Math.floor(Math.random() * 5)];
}

function tellFortune(numChild, partner, location, job) {
    return `You will be a ${randomItem(jobs)} in ${randomItem(locations)}, and married to ${randomItem(partnerNames)} with ${randomItem(numChildren)} kids.`
}

console.log(tellFortune(numChildren, partnerNames, locations, jobs));