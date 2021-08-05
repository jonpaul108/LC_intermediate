///1) Given a word and a character, replace the first letter of the word with the character
function replaceFirstLetter(word, char) {
  return char + word.slice(1);

}

console.log(replaceFirstLetter("word", "f")); //=> ford





///2) Given a string of all lower case characters, Replace the given word's first and last character with an uppercase

function firstLastUppercase(str) {
  return str[0].toUpperCase() + str.slice(1, str.length - 1) + str[str.length - 1].toUpperCase()
}

// console.log(firstLastUppercase('world')); //=> 'WorlD'


//3
/*
  Given a string and an index, return the given string with all the characters from the given index uppercased. Return the whole string
*/

function uppercaseFromIndex(str, idx) {
  return str.slice(0, idx) + str.slice(idx).toUpperCase();
}


//4 Signedin

//Given an objects of objects [status] containing a information about peoples signed in status and a string [name], return a message describing when the person is signed out or signed in, plus when they last signed in.

//The message should take the form:
//[name] is currently signed [in/out]. They last signed in on [time].


function signedIn(status, name) {
  const inOrOut = status[name].signedIn ? 'in' : 'out';
  return `${name} is currently signed ${inOrOut}. They last signed in on ${status[name].lastSignIn}.`;
}

//5 Odd or Even Numbers
//Given an array of number, return a new array of strings where the number is concatenated with whether it is odd or even, plus a colon, plus space and the number.
 
function oddOrEvenNums(nums) {
  return nums.map(el => {
    const oddEven = el % 2 ? 'odd' : 'even';
    return oddEven + ': ' + el;
  })
}

//6 Has Vacation Remaining

//Given an array of objects that tell whether a person used all their vacation or not, return a new array with people's names surrounded by '*' if they have vacation remaining.

function hasVacationRemaining(arr) {
  return arr.map(el => {
    return el['vacationRemaining'] ? '*' + el.name + '*' : el.name;
  })
}


