//1: debugging A
//the function below has a problem. there is something wrong with the flow of informaton in the 'if' brackets. Discover, describe, and fix the bug.

/*
Given an array, find the first index where a 10 appears. If it doesn't appear, return -1;
 */

function findTen(arr) {
  var idx = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 10) {
      idx = arr[i];
      break;
    } else {
      return idx;
    }
  }
}

// console.log('debug 1:', findTen([1,6,10,3])); // => 2
// console.log('debug 1:', findTen([1,6,5,9])); // => -1




//-------------------------------

//2: debugging B
/* Given an array of employee data, return all the names in an array of the people who took vacation this year */ 



function tookVacation(arr) {
  for (var i = 0; i < arr.length; i ++) {
    var names = [];
    if (arr[i].vacation !== undefined) {
      names.push(arr[i].name);
    }
    return names;
  }
}

var vacation = [
  {
    name: 'James',
    vacation: 'January 6th - 8th',
  },
  {
    name: 'Elise',
  },
  {
    name: 'Paul',
    vacation: 'September 12th - 15th',
  },
  {
     name: 'Elise',
     vacation: 'October 22nd - 25th',
  },
  {
    name: 'Tyler'
  }
]

// console.log(tookVacation(vacation));// => ['James', 'Paul', 'Elise'];



//greatestSum
/*Given a list of arrays of numbers, return the sum of the array with the greatest total */
//debug the function below
var listOfNums = [
  [1,2,3,10], 
  [9,47,6], 
  [60,30, 2, 4], 
  [4,7,9]
];

function greatestSum(arr) {
  var greatest = 0;
  var currSum = 0;
  for (var i = 0; i < arr.length; i ++) {
   // var currSum = 0;
    for (var j = 0; j < arr[i].length; j ++) {
      currSum += arr[i][j];
      console.log('currSum:', currSum);
    }
    if (currSum > greatest) {
      greatest = currSum;
    }
  }
  return greatest;
}

console.log(greatestNums(listOfNums)); // => 96;
//distance from



//-----------------

//stringFromValues
//given an object and an array of all the object keys, return a string of every other value concatenated togther 

var objOfStr = {
  key1: 'My ',
  key2: 'You ',
  key3: 'dog ',
  key4: 'are ',
  key5: 'loves ',
  key6: 'a ',
  key7: 'bones.',
  key8: 'wonderful person.',
}

var arrOfKeys1 = ['key1', 'key2', 'key3', 'key4', 'key5', 'key6', 'key7', 'key8'];

var arrOfKeys2 = ['key2', 'key1', 'key4', 'key3', 'key6', 'key5', 'key8', 'key7'];

function findValues(obj, arr) {
  var str = '';
  for (var i = 0; i < arr.length; i ++) {
    str + obj[arr[i]];
  }
  return str;
}

//console.log('basic 8a: ', findValues(objOfStr, arrOfKeys1)); //==> 'My dog loves bones.'
//console.log('basic 8b: ', findValues(objOfStr, arrOfKeys2)); //==> 'You are a wonderful person.'



//----------------------

var wordArr = ["aim", "tail", "series", "kitten", "fruit", "paper"];

function indexOrNone(arr, char) {
  var indexOfChar = [];
  var ind = arr[i].indexOf(char);
  for (var i = 0; i < arr; i++) {
    if (ind !== -1) {
      indexOfChar.push(arr[i][ind]);
    } else {
      indexOfChar.push("none");
    }
  }
  return indexOfChar;
}


// actualInd1 = indexes(wordArr, 'a');
// expectedInd1 = [0, 1, 'none', 'none', 'none', 1];

// actualInd2 = indexes(wordArr, 'e');
// expectedInd2 = ['none', 'none', 1, 4, 'none', 3];


//------------------------------


//Newspaper delivery - 
      //James and Todd live in the 1960's, when paper routes were common among kids. Jame's job is deliver paper to each house with an odd number. 
      // Odd number houses always appear every other number. However, the starting number of the list could be even or odd.
      //Gather all the odd number houses from the given list and return a new list for Jame's to follow. 

      //note: numbers will always be whole numbers

function newspaperDelivery(houseNums) {
  var houses = [];
  var start = 1;
  if (houseNums[0] % 2 === 0) {
    start = 0;
  }
  for (var i = start; i < houseNums.length; i += 1) {
    houses.push(houseNums[i]);
  }
  return houses;
}


  //SpellChecker
      //Given two strings, return an array of all indexes of the second string that do not match the first string. 


      
      // var actual1 = spellChecker('transluscent', 'trensloscint');
      // var expected2 = [2, 6, 9];
      // var actual2 = spellChecker('four', 'for');
      // var expected2 = [2, 3];


function spellChecker(correctWord, studentWord) {
  var indexes = [];
  if (correctWord === studentWord) {
    return indexes;
  }

  for (var i = 0; i < studentWord.length; i++) {
    if (correctWord[i] !== studentWord[i]) {
      indexes.push[i];
    } else {
      return indexes;
    }
  }
}


/*Science Experiment:

  Do you know the story of the hungry caterpillar? If you don't, look it up! It's a famous kid's story about a caterpillar that eats many foods over a week to grow and grow until it becomes a beautiful butterfly.

  You are testing out the book with a bunch of caterpillars. You have recorded their eating habits over six days. You are now ready to report your findings.
 */


var eatingHabits = [
  {
    day: 'Monday', 
    food: ['banana', 'ice cream', 'apple', 'leaf', 'cheese']
  },
  {
    day: 'Tuesday',  
    food: ['candy', 'cake', 'ice cream', 'cheese'],
  },
  {
    day: 'Wednesday', 
    food: ['leaf', 'cheese', 'jelly', 'hamburger'],
  },
  {
    day: 'Thursday',
    food:['hamburger', 'banana', 'leaf', 'tomato'],
  },
  {
    day: 'Friday',
    food:['ice cream', 'apple', 'leaf', 'pie', 'cake'],
  },
  {
    day: 'Saturday',
    food: ['apple', 'leaf', 'pie', 'cheese', 'candy', 'tomato'],
  }
]

//a) Given an array of the days the caterpillars ate and the food they consumed, find out how many days a particular food was eaten.

  //hungryCaterpillars(eatingHabits, 'apple') //=> 3
  //hungryCaterpillars(eatingHabits, 'tomato') //=> 2

function hungryCaterpillars(arr, food) {
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; J < arr[i].length; j++) {
      if (arr[i][j] === food) {
        count++;
      }
    }
  }
  return count;
}
// console.log('caterpillars a: ', hungryCaterpillars(eatingHabits, 'apple')) //=> 3
// console.log('caterpillars a: ', hungryCaterpillars(eatingHabits, 'tomato')); //=> 2
      

