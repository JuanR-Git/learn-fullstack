// CONDITIONALS, FUNCTIONS & LOOPS IN JAVASCRIPT

// Conditionals if () {} else {}

if ('some string' === 'another string') {
    console.log('the strings are equal');
} else {
    console.log('the strings are not equal');
}

const firstNumber = 20;
const secondNumber = 10;
const jsExpression = firstNumber > secondNumber; //true

// Only using an if statement (no "else" statement required here)
if (jsExpression) {
    console.log('this expression is true');
}

// An if-else statement
if (jsExpression) {
    console.log('this expression is true');
} else {
    console.log('this expression is false');
}

// Adding another "code path" with "else if" 
// Hint: you can use as many  "else if" statements as you want 

if (jsExpression) {
    console.log('this expression is true');
} else if (firstNumber > 0) {
    console.log('the expression is false and the firstNumber is greater than 0');
} else {
    console.log('expression false, and firstNumber 0 or less');
}

// Works the same, just formatted differently
if (jsExpression) { console.log('just a different formatting') };



// Index           0         1        2         3        4
const colors = ['orange', 'green', 'yellow', 'purple', 'blue'];

// Gets a random number between 0 and 4 and stores in a variable
const randomIndex = Math.floor(Math.random() * colors.length );

/*
    Remember, to get a value from an array we use bracket notation
    For example, to get 'green', we use 'colors[1]'

    Since randomIndex will be a random number between 0-4, we can
    pass this in as our index to retrieve a random color from the array
*/
const randomColor = colors[randomIndex];

// Conditionals
if (randomColor === 'orange') {
    console.log('the color is orange');
} else if (randomColor === 'green') {
    console.log('the color is green');
} else if (randomColor === 'yellow') {
    console.log('the color is yellow');
} else if (randomColor === 'purple') {
    console.log('the color is purple');
} else if (randomColor === 'blue') {
    console.log('the color is blue');
} else {
    console.log('no color found');
}

// Switch / Case Statement -> switch (condition) {case: Break;}
switch (randomColor) {
    case 'orange':
        console.log('the color is orange');
        break;
    case 'green':
        console.log('the color is green');
        break;
    case 'yellow':
        console.log('the color is yellow');
        break;
    case 'purple':
        console.log('the color is purple');
        break;
    case 'blue':
        console.log('the color is blue');
        break;
    default:
        console.log('no color found');
}

// Looping in javascript
const blogPosts = [
    {
        title: 'what is JavaScript?',
        author: 'Zach Gollwitzer',
        publishDate: 'Dec 20, 2020',
        content: 'some post content here'
    },
    {
        title: 'How do Arrays work?',
        author: 'Zach Gollwitzer',
        publishDate: 'Jan 1, 2020',
        content: 'some post content here'
    },
    {
        title: 'How long does it take to learn coding?',
        author: 'Zach Gollwitzer',
        publishDate: 'Jan 20, 2021',
        content: 'some post content here'
    }
]

for (let i = 0; i < blogPosts.length; i++) {
    const postTitle = blogPosts[i].title;
    const postAuthor = blogPosts[i].author;
    const postDate = blogPosts[i].publishDate;
    const postContent = blogPosts[i].content;

    // Here, we would use these variables to do something with each post
    //I'll just print the values
    console.log(postTitle);
    console.log(postAuthor);
    console.log(postDate);
    console.log(postContent);
}

// Simpler Examples

// in the parenthasis are going to be the conditions
// in the first condition is going to be the variable that we are going to be looping over
//  -> i needs to be defined before it can be used and we use let so i can be redefined after each iteration of the loop
// the code in the middle is the stop condition; in this case we want to go through as many loops until i = 100
// the last condition is how i is going to change after the end of each loop
for (let i = 0; i < 100; i++) {
    console.log(i);
}


// SUPER SIMPLE EXAMPLE!!

const arr = ['wertasdf', 'wertasdfghh', 'qawsxedc', 'qerthjgfds', 1234, 7654, 23455, 5432, 'erty', 'ytrew'];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        console.log(arr[i]);
    }
}

//FUNTIONNNNNNSSSSSS YUUHHHHHHHHHH
function myFunction() {
    console.log('hello world, this is my first function')
}

typeof myFunction

myFunction();

// Parameters and Arguments
function newMyFunction(param1, param2){
    console.log(param1);
    console.log(param2);
}

newMyFunction(20, 'some string');

// Scope
const arrowFunction = () => {
    console.log("I am an arrow function");
}

arrowFunction();

