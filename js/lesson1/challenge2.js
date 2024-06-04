/*
    There are three things wrong with this code.
    Find them and explain why they are wrong.
*/

// const some Number = 20;

// someNumber = 50

// Answer
/*
    The first thing that is wrong with this program is that the variable being defined has an improper naming convention,
    the name has a space between 'some' and 'Number' which will make it incomprehensible to the compiler.

    The second thing wrong with this code is that it is trying to redefine a variable that was declared as a const (unchangable variable).

    The final thing wrong with this set of code is that there is no semi colon at the end of the final line.
*/

// Corrected Code

let someNumber = 20;
console.log("before change: ", someNumber);

someNumber = 50;
console.log("After change: ", someNumber);