// 1. Create a boolean variable called 'myBoolean' and set it to 'true'.
let myBoolean = 'true';
console.log("Q1: ", myBoolean);

// 2. Create a string variable called 'myString' and set it to 'hello world'.
let myString = 'hello world';
console.log("Q2: ", myString);

// 3. Create a number variable called 'firstNumber' and set it equal to '20'.
let firstNumber = 20
console.log("Q3: ", firstNumber);

// 4. Create another number variable called 'secondNumber' and set it equal to '40'.
let secondNumber = 40;
console.log("Q4: ", secondNumber);

// 5. Re-assign 'secondNumber' and set it equal to '80'.
secondNumber = 80;
console.log("Q5: ", secondNumber);

// 6. Create an array called 'myArray' and put 'myBoolean' at index 0, and 'myString' at index 1.
let myArray = [myBoolean, myString];
console.log("Q6: ", myArray);

/* 7. Create an object called 'myObject' and assign 'myArray' to a property called 'firstProperty', and
    the sum of 'firstNumber' and 'secondNumber' to a property called 'sumProperty' (hint: we didn't cover 
    how to do this here). */
let myObject = {
    firstProperty: myArray,
    sumProperty: firstNumber + secondNumber
}

console.log("Q7: ", myObject);

// 8. Print 'myObject' to the console.
console.log("Q8: ", myObject);

// 9. Print the 'sumProperty' of 'myObject' to the console.
console.log("Q9: ", myObject.sumProperty);

// 10. Print the value at index 1 of 'firstProperty'.
console.log("Q10: ", myObject.firstProperty[1]);



