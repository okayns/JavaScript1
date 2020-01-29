'use strict'
// I used both switchcase and ifelse statements. 
function gradeCalc(score) { // this function converts the given score to its grade score. 
    let grade;
    if (score >= 0 && score <= 49) {
        grade = 'F';
    } else if (score < 60) {
        grade = 'E';
    } else if (score < 70) {
        grade = 'D';
    } else if (score < 80) {
        grade = 'C';
    } else if (score < 90) {
        grade = 'B';
    } else if (score < 101) {
        grade = 'A';
    } else {
        grade = 'Error';
        console.log('Invalid Entry'); // If there is a out-of 0-100 value input this line is going to log the result.
    }
    return `You got a '${grade}' (${score}%)!` // I logged both grade and score values in the same line.
}

console.log(gradeCalc(90));

// ------------------------- Second Solution ------------------------- //

// function gradeCalc(score) {
//     let grade = ''
//     switch (true) {
//         case (score < 50):
//             grade = 'F';
//             break;
//         case (score < 60):
//             grade = 'E';
//             break;
//         case (score < 70):
//             grade = 'D';
//             break;
//         case (score < 80):
//             grade = 'C';
//             break;
//         case (score < 90):
//             grade = 'B';
//             break;
//         case (score < 101):
//             grade = 'A';
//             break;
//         default:
//             grade=null
//             console.log('Invalid Entry')
//             break;
//     }
//     return `You got a '${grade}' (${score}%)!`
// }

