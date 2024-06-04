/*
What does 'result' evaluate to?
*/

const myObj = {
    nestedObject1: {
        price: 100,
        quantity: 5
    },
    nestedObject2: {
        price: 150,
        quantity: 2 
    }
};

const myArray = [myObj.nestedObject1, myObj.nestedObject2];

const result = 
        (myArray[0].price * myArray[0].quantity) > 
        (myArray[1].price * myArray[1].quantity);

console.log(result);
// result evaluates to true
// the two nested objects of the myObj object are the two indexes of the array,
// the result compares the product of price and quantity from the first nested object to the same product of the second nested objects items