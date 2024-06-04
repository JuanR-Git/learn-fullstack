//  JAVA SCRIPT OPERATORS

// What is an operator? an operator is something that exists in all coding languages
// it is something that allows you to compare values, modify varibales, and combine different values together

//arithmitic, assignment, comparement, and logical 

//arithmitic operators + - * / % ** (exponent operator) ++ --
let add = 8 + 2;
let sub = 8 - 2;
let mult = 8 * 2;
let div = 8 / 2;
let exponent = 8**2;
let increment = 8;
increment++;
let decrement = 8;
decrement--;

//Assignment Operators
let assignment = 8;
assignment += 1;
assignment -= 1;
assignment *= 1;
assignment /= 1;

// Comparison Operators
const stringValue ='20';
const numberValue = 20;

stringValue == numberValue; // returns true because while these are not the same data type they are the same value
Number(stringValue) === numberValue;    //  returns true because the values are of the same type and value

// == does not care about the data type but === does 

stringValue  != numberValue //  this returns false because string value does equal the number value
Number(stringValue) !== numberValue //  this returns false because the values are of the same data type and value

// != and !== return the oposite of their respective == and === comparison operators

// you can not compare everything

const myArray = [1, 2, 3, 4, 5];
const anotherArray = [1, 2, 3, 4, 5];

myArray === anotherArray;   //returns false even though both are the same

myObj = {
    property1: 'some value',
    property2: 20
};
anotherObj = {
    property1: 'some value',
    property2: 20
};

myObj === anotherObj;   //  returns false even though both are the same

myObj == anotherObj //  returns false even though both are the exact same

//numeric comparison operators

let greaterThan = 2 > 1;
let lessThan = 1 < 2;
let greaterThanEqual = 2 >= 2;
let lessThanEqual = 2 <= 2;

const newResult = 20 === 20 ? 'values match' : 'values do not match';

// Logical Operators

let and = 20 === 20 && 10 === 10;
let or = 20 === 20 || 10 === 12;
let not = !(20 === 20);

