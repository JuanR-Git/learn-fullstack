/*
Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
*/

// solution
function isToday(date) {
    //Code goes here.
    const current = new Date();
    console.log("current date: ", current);
    console.log("given date: ", date);
    return current.getFullYear() === date.getFullYear() && current.getMonth() === date.getMonth() && current.getDate() === date.getDate();
}

// other solution
// function isToday(date) {
//     return new Date().toDateString() === date.toDateString();
//   }