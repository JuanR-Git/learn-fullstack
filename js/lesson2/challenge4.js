/*
What does 'result' evaluate to? You might want to review
the previous lesson for this one.
*/

const myObj = {
    prop1: 'first value',
    prop2: 20
};

const myArray = [40, 50, 2];

const result = myObj.prop2 === (myArray[0] / myArray[2]);

console.log(result);

// The result evaluates to true
// this may be confusing because we know that objects and arrays are not comparable data types but we are calling the objects inside of them which are comparable
// Obj.prop2 = 20 && myArray[0] (40) / myArray[2] (2) = 20 -> true
