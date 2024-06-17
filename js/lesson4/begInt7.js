/*
Your task is simply to count the total number of lowercase letters in a string.

Examples
"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26
*/

// solution
function lowercaseCount(str){
    //How many?
  let count = 0;
  const list  = str.split("");
  list.forEach(item => {
    if (/[a-z]/.test(item)) {
      count += 1;
    }
  });
  return count;
}

// other solutions
// function lowercaseCount(str){
//     return (str.match(/[a-z]/g) || []).length
// }

// function lowercaseCount(str){
//     return str.replace(/[^a-z]/g, "").length;
// }