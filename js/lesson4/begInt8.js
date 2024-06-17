/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/
//solution
function capitalize(s){
    let string1 = "";
    let string2 = "";
    for (let i = 0; i < s.length; i++){
      if(i % 2 === 0){
        string1 += s[i].toUpperCase();
        string2 += s[i];
      }
      else{
        string1 += s[i];
        string2 += s[i].toUpperCase();
      }
    }
    return [string1, string2];
};

// other solutions
// function capitalize(s){
//     const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
//     const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
//     return [even, odd];
// };