// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]\

// solution
function maps(x){
    let arr = [];
    for(let i = 0; i < x.length; i++){
      arr.push(x[i] * 2);
    }
    return arr;
  }

//other solutions
// function maps(x){
//     return x.map(n => n * 2);
//   }