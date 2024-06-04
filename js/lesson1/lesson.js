// Variables and Datatypes in javascript

const yourFirstVariable = 'Learning to code gives you superpowers';

const yourSecondVariable = 10;

const yourThirdVariable = {firstproperty: 'hello world'};

console.log(yourFirstVariable);

// decloration and assignment 

const newVariable = 'hello world'; // declares and assigns variables

let anotherVariable; // doing this declares a varible without assigning a value

anotherVariable = 20; // doing this assigns the previously declared variable

console.log(anotherVariable);

const variable1 = 10; // use constant varaibles when you expect the value to never change

let variable2 = 10; // always use let when you want to redefine a variable 

var variable3 = 10; // not recommended for use, not used anymore because it can be redeclared 

let counter = 0;

counter = counter + 1;


counter = counter ++;

counter

// variable naming conventions

// const yourFirstVariable = 10; //camel case industry standard
const your_first_variable = 10; // snake case
const YOUR_FIRST_VARIABLE = 10; // constant case
const yourfirstvariable = 10;   // lower case
const YourFirstVariable = 10;   //pascal case

// left side and right side, the left side is always going to include const or let and also the
// given variable name.  the right side is always going to bethe data that your assigning to that variable

// data types

const var1 = 10;
const var2 = "some value";
const var3 = false;

typeof var1;
typeof var2;
typeof var3;

const number1 = '10';

const number2 = 20;

typeof number1;

typeof number2;

number1 + number2;

Number(number1) + number2;

const stringValue = 'hello world';

const anotherStringValue = "hello world";

const numberValue = 20;

// const numberValue2 = 20,000;
const booleanValue = false;

// arrays
const firstArray = [10, 20, 30, 40];

const secondArray = [10, 'a string', {prop: 'qwerty'}, [1,2]];

console.log(firstArray[0]);

// objects, might hear the phrase that everything is an objst in JavaScript

const objectVariable = {prop1: 20, prop2: 50};

objectVariable // outputs Object { prop1: 20, prop2: 50}

objectVariable.prop1 // outputs 20

const nestedObject = {
    layer1: {
        layer2: {
            layer3: {
                targetValue: 20
            }
        }
    }
}

nestedObject.layer1.layer2.layer3.targetValue;

objectVariable['prop1']; // another way to get property of an object

const functionContainerVariable = function() {
    return 20;
}

functionContainerVariable();

