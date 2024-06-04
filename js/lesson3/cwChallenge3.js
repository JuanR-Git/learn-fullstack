// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// given code

// function solution(str){
// }

// solution
function solution(str){
    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--) {
      reversed = reversed + str[i];
    }
    return reversed;
  }

// better solution
// function solution(str){
//   return str.split('').reverse().join('');  
// }