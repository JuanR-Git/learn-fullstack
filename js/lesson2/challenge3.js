/*
What does 'expression5' evaluate to? How could you write
this in a single line of code (for exercise purposes only;
you would never want to combine all this in one line)?
*/ 

const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;

console.log(expression5);

// expression5 evaluates to false
// 100 % 50 = 0
// 100 / 50 = 2
// 0 < 2 -> true
// 300 + 5 === 305 -> true
// !(true && true) -> false FINAL ANSWER

//This is the same code written on one line

const expression6 = !((100 % 50 < 100 / 50) && (300 + 5 === 305));

console.log(expression6);