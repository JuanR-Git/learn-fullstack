/*
Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
*/

// solution
function isToday(date) {
    //Code goes here.
    let current_date = Date();
    
    return Date.UTC(date) === Date.UTC(current_date)
}