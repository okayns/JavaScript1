'use strict'
let myString = "hello,this,is,a,difficult,to,read,sentence"; //Added the variable to file
console.log(myString.length); //Log of the length of myString.
myString = myString.replace(/,/g, ' '); //(g means - global - if we dont use g flag in that case it is going to change just first comma to space.)
console.log(myString); //After replacing the commas, log myString to see if you succeeded.