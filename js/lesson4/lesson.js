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

    let result = randomNumber;  // in this example result === 20

    // In this example, shouldCall is 'true', so we do reach the callback
    if (shouldCall) {
        // In this example, 'callback' represents 'myCallback' from above
        result = callback(randomNumber);
    }
    // Since 'result' was re-assigned by the callback function, returns 40
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
const string1 = new String('Hello, world!');  // new key word
                                              // 1. creates a blank object, 2. links that blank object to a parent
const string2 = 'Hello, world!';
console.log(string1 === string2);
console.log(string1 == string2);

// Types of primitives
// 1. String
// 2. Number
// 3. Big Int
// 4. bool
// 5. Undfined
// 6. symbol

// A primitive datatyoe does not have any methods or functions that can be called on them

'some string'.toUpperCase()  // Does work because behind the scenes when we have some sort of primitive value, it actually wraps it in that string object

// what do you actually do with it?
// nothing, it is just a good to know think, you won't actually need to use it


// DATES
const myDate = new Date();  // constructing a date object, going to take a copy of the template and store it in a new variable

myDate.valueOf();  // the number of milliseconds since the specific date

// Example #1 
// Inputs as arguments
// Date(year, month, day, hour, minute, second, millisecond)
// MNote: the month is 0-indexed (I have no clue why...)
new Date(2020, 22,2,7,10);
// Example #2
// Inputs as various strings
// This works with pretty much anything you can think of
new Date('Jan 20 2020');
new Date('January 20 2020');
new Date('Jan-20-2020');
new Date('Jan 20 2020 02:20:10');
// Example 3
// Inputs as numbers (milliseconds)
new Date(102031203);
// Example #4
// Inputs as ISO 8601 (we are about to talk about this)
new Date('2020-01-20T00:00Z');
// Example #5
// Inputs with timezone specifications
new Date('jan 20 2020 02:20:10 -10:00'); // Special Case
new Date('Jan 20 2020 02:20:10 -1000'); // Special Case
new Date('Jan 20 2020 02:20:10 (EDT)'); // Special Case
// Example #6
// The current moment, specified in the user's local timezone
new Date(Date.now()); // Special Case

const theDate = new Date();

theDate.toString();

theDate.toISOString();

theDate.getMonth();

theDate.getFullYear();

// REGULAR EXPRESSIONS
// a way to pattern match in strings

const emailValidatorRegex = new RegExp('^.+@.+\..+$')  // ^ means start at the beggining of the line
                                                       // . means all characters
                                                       // + i want to match any character 1 or nmore times
                                                       // \. you use the slash to escape the period and look for the period
                                                       // $ the end of the line with the dollar sign
// Identifiers, Quantifiers
const regex = new RegExp('g');

const string = 'my favourite food is steak';  // returns false
const secondString = 'my favourite thing to do is code';  // returns true

regex.test(string);
regex.test(secondString);

const regex2 = new RegExp('favorites');

regex2.test(string);  // returns true
regex2.test(secondString);  // returns true

const regex3 = new RegExp('FavouritE');  // is case sensitive

// you can use special characters and that is where the power from the regex come in

// the more common way to create a regex is to place to // and write it inbetween
/FavoritE/.test(string);

// The first thing you can do in a regular expression is to put it in to a character group

/[A-Z]/.test(string1);  // matching all upper case letters -> false, does not match

/[a-z]/.test(string1);  // matching all lower case letters -> true, does not match at least one of those letters

/[0-9]/.test(string1);  // matching all unmbers -> true, does not match at least one of those letters

/[A-Za-z0-9 ]/.test(string1);  // matching all upper case & lower case letters, numbers and spaces -> true, paramaters match at least one of the items

/./.test(string); // matches all characters, returns true

/\d/.test(string); // this is equivalent to all numbers

/\s/.test(string);  // matches any white space characters

/\w/.test(string);  // matches all letters and numbers (alphanumeric), returns true

/^f/.test(string);  // carrots represents the beggining of the string, returns false because our string does not start with f

/f$/.test(string);  // dollar sign represents the end of a string, returns false because string does not end in f

/(code|steak)/.test(string);  // if you put parenthesis it creates a group that'll match one of the parameters (code or steak), returns true

// the next thing, or the second piece of this equation is going to be quantifiers
// quantifiers basically let you tell the script how many times / how far to read into a string
// you put your identifier at the beggining and you follow it by quantifier functions/operators

/[a-z ]*/.exec(string);  // astricks mean we want to match any lower case letter 0 OR MORE TIMES
/[a-z ]+/.exec(string);  // plus sign means we're going to match 1 OR MORE of the proceeding character
/[a-z ]?/.exec(string);  // question mark sign means we're going to represent either 0 or 1 quantitiy of that previous character
/[a-z ]{5}/.exec(string);  // curly brackets let us choose how many character we are choosing to match 
/[a-z ]{2,6}/.exec(string);  // you can also do a range by putting a comma between your characters

// there are also regular expression flags that I'll have to know because it will come up

const str = 'hello world, 2021  @ more of a string'; 

/[a-z ]+,[0-9 ]+@[a-z ]+/.exec(str);
// OR
/.+/.exec(str);

// STRING METHODS

// replaceAll, toUpperCase, substring, trim, match

//replaceAll
const myString = 'My Dog jumped on the bed. My dog is a bad Dog';

const newString = myString.replaceAll('Dog', 'Cat');

const correctStr = myString.replaceAll(/[Dd]{1}og/g, 'cat');  // g at the end is just the global flag which just means match all the occurances, not just the first

// toUpperCase
const theString = 'some string';

theString.toUpperCase();

// substring
theString.substring(5);  // str.substring(index_start) [, index_end])

const result = theString[0].toUpperCase() + theString.substring(1, myString.length);

// trim
const externalData = [
    {
        title: 'How to code                ',
        author: '   Zach'
    },
    {
        title: ' What is Vim?',
        author: ' Zach'
    },
    {
        title: '  How do loops work in JavaScript?     ',
        author: ' Zach'
    }
];

for (let i = 0; i < externalData.length; i ++) {
    const currentTitle = externalData[i].title;
    const currentAuthor = externalData[i].author;

    externalData[i].title = currentTitle.trim();
    externalData[i].author = currentAuthor.trim();
}

// match
const rgex = /[a-z]+/;
const sttr = 'asfwefkojubnmaq';
sttr.match(regex);

// ARRAY METHODS
// push() / pop() / shift() / unshift()
// slice()
// splice()
// findIndex() / indexOf()
// map()
// forEach()
// includes()
// filter()
// reduce()


