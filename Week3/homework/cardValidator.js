'use strict'

function sumDigit(cardNum) {
    let sum = 0;
    for (let i = 0; i < cardNum.length; i++) {
        sum += Number(cardNum[i]); 
    }
    if (sum < 16) {
        return false;
    }
    return true;
}

function allSame(cardNum) {
    let strCardNum = cardNum.toString()
    let count = 0;
    for (let i = 0; i < strCardNum.length; ++i) {
        if (strCardNum[i] === strCardNum[0]) { // fixing 0 indexed element and comparing it with other digits is same or not. if one of them is different if statement going to be false and func return false.
            count++
        }
    }
    if (count === 16) {
        return true;
    } else {
        return false;
    }
}

function cardValidator(cardNum) {
    let lengthOfNumber = cardNum.toString().length // Number must be 16 digits, all of them must be numbers
    let lastDigit = cardNum % 10; // The final digit must be even
    let isGreaterThan = sumDigit(cardNum); // I`m calling the sumDigit func. to chech it is greater than 16 or not. Getting true or false return. And assigning to a new value to use in if stat.
    let isAllSame = allSame(cardNum); // allSame func. is checking the digits of the credit card are same or not. also getting true or false return
    let result;

    if (lengthOfNumber !== 16) {
        result = 'Invalid character length';
    } else if (isNaN(cardNum)) {
        result = 'All character that you entered must be digit';
    } else if (isAllSame) {
        result = 'Your card must have at least two different digits';
    } else if (lastDigit % 2 !== 0) {
        result = 'The final digit must be even';
    } else if (!isGreaterThan) { // if it is greater than 16 getting true from func. but i am looking for not true option.(!true)
        result = 'Sum of all the digits not greater than 16';
    } else {
        result = `The following credit card numbers are valid: ${cardNum}`;
    }

    return result;
}

console.log(cardValidator("9999777788880000"));
console.log(cardValidator("a92332119c011112"));
console.log(cardValidator("4444444444444444"));
console.log(cardValidator("1111111111111110"));
console.log(cardValidator("6666666666666661"));
console.log(cardValidator("6666666666661666"));
