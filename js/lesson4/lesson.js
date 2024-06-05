// REFERENCE MOZILLA FOR JAVASCRIPT DOCS/REFERENCE GUIDES
// Array pop() method
let arr =[];
arr.pop()  // the pop() method removes the last element of an array and returns it

// Array join() method
arr.join([separator]); // [] mean optional in ()
// creates and returns a new string by joining elements into an array

// Array includes() method
arr.includes(valueToFind /*[, fromIndex]*/);
// determines wether an array includes a certain value amoung its entries returning true or false as appropriate

// callback functions -> it's just a different way of using a function, it's a different way of thinking

function myCallback(someNumber) {
    return someNumber *2;
}
function mainFunction(randomNumber, shouldCall, callback) {

    let result = randomNumber;

    if (shouldCall) {
        result = callback(randomNumber);
    }
    return result;
}
mainFunction(20, true, myCallback);

// why do we actually need callbacks?
// ->reusability
// ->asynchronous programming

// Array map() method
// map method creates a new array with the results of calling a provided function on every element on the array

const myArray = [2, 4, 6, 8]; 

function myCustomMapOperationCallback(itemFromArray) {
    return itemFromArray * 2;
} 

const newArray = myArray.map(myCustomMapOperationCallback); 

const strArray = ["Hello", "world", "my", "name", "is", "Zach"];

strArray.map(itemFromArray => itemFromArray[0])

//asynchronous programming
// allow us to run some code and run some other code while that previous code is still running

//JAVASCRIPT PRIMITIVES
const string1 = new String('Hello, world!');
const string2 = 'Hello, world!';
console.log(string1 === string2);
console.log(string1 == string2);