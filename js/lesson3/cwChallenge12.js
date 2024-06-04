/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

// solution
function getAverage(marks){
    let sum = 0;
    for(let i = 0; i < marks.length; i++) {
      sum = sum + marks[i];
    }
    let average = sum / marks.length

    
    let remainder = average % 1;    // finding the decimal value
    average = average - remainder;  // subtracting decimal value to round down

    return average;
}

// other solution
// function getAverage(marks){
//     return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
// }