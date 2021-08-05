///A) **iteration**
//Strings are iterable! Practice iterating over strings with the prompts below.

//-------------------------

//1)backwards word
//iterate backwards and return the word facing the right way

//** You do not need to split to solve this. try to solve this by iterating backwards

function backwards(str) {
  let reverse = '';
  for (var i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

// console.log('olleh') //=> 'hello'
//actual2 = 'lla';
//expected2 = 'all';


//2) every other character char
  //Given a string, build a new string by iterating over every other character from index 0. Return the new string.

  function everyOtherChar(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i += 2) {
      newStr += str[i];
    }
    return newStr;
  } 

// console.log(everyOtherChar('shwoitmj')); // => 'swim'
// console.log(everyOtherChar('gkloure')); //= > 'glue'



//4) Get every third char
  //** pay close attention to the examples
    //**hint: try looping backwards 

  //Get every third character starting from the end of the string to get a word

  function everyThirdChar(str) {
    var newStr = '';
    for (var i = str.length - 1; i >= 0; i -= 3) {
      newStr += str[i];
    }
    return newStr;
  }


  // console.log(everyThirdChar('oerwtyt')); //=> 'two'
  //console.log(everyThirdChar('tlka')); //=> at


