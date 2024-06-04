/*
Do the following two blocks of code result in the same answer?
If not, which one would you recommend using and why? 
*/

// ===== SNIPPET 1 ==========
const firstNumber = 20;
const secondNumber = '20';

const result = firstNumber === secondNumber;

console.log(result);
// ===== SNIPPET 2 ==========
const firstNumber2 = 20;
const secondNumber2 = '20';

const result2 = firstNumber2 == secondNumber2;

console.log(result);

// these do not result in the same answer,
// snippet 1 evaluates to false because of the ===
// snippet 2 evaluates to true because of the ==

// would not recommend either of these blocks of code and instead compare variables of the same type with the === comparison operator