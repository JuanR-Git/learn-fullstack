/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

// solution 
function generateHashtag (str) {
    str = str.match(/[a-zA-Z]+/g);
    console.log(str);
    if(str !== null && str.length > 0 && str.join('').length <=139){
      for (let i = 0; i < str.length; i ++){
      str[i] = str[i][0].toUpperCase() + str[i].substring(1);
      }
      return "#" + str.join('');
    }
    else {return false;}
  }

// other solution
function generateHashtag (str) {

    var hashtag = str.split(' ').reduce(function(tag, word) {
      return tag + word.charAt(0).toUpperCase() + word.substring(1);
    }, '#');
    
    return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
  }