/*
    Why is this code invalid? Edit this until it is valid.
*/

// const objectVariable = {
//     property1: 'i am property 1';
//     property2: 'i am property 2';
//     property3: [20, 30, 40];
// };

// console.log(objectVariable.property3[2])

/*
    The problem with this code is that the properties of the object are separated with semi colons instead of commas 
*/

// Corrected Code

const objectVariable = {
    property1: 'i am property 1',
    property2: 'i am property 2',
    property3: [20, 30, 40],
};

console.log(objectVariable.property3[2])
