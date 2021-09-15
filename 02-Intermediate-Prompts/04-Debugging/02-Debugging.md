# Debugging

### !challenge

* type: code-snippet
* id: debugging-intermediate-1
* language: javascript
* title: Coffee Price Info

### !question  

Given an array `arr`, find the first index where a 10 appears. If it doesn't appear, return -1;

```js
var arr = [1, 6, 10, 3]
console.log(findTen(arr)); // => 2
``` 

### !end-question

#### !placeholder

```js
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
```

#### !end-placeholder


### !tests

```js
describe("findTen", function () {
  it("should return a number", function () {
    expect(findTen([1, 6, 10, 3])).to.be.a('number');
  })

  it("should return the first index where 10 is found", function () {
    expect(findTen([1, 10, 10, 3])).to.deep.eq(1);
  })
  it("should return the expected index number", function () {
    expect(findTen([1, 6, 10, 3])).to.deep.eq(2);
    expect(findTen([1, 6, 5, 9])).to.deep.eq(-1);
    expect(findTen([10,10,10])).to.deep.eq(0)
  })

})



```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: debugging-intermediate-2
* language: javascript
* title: Took Vacation

### !question  

Given an array of employee data `arr`, return all the names in an array of the people who took vacation this year 
```js
var vacation = [
    {
      name: "James",
      vacation: "January 6th - 8th",
    },
    {
      name: "Elise",
    },
];

console.log(tookVacation(vacation)); // => ['James']
``` 

### !end-question

#### !placeholder

```js
function tookVacation(arr) {
  for (var i = 0; i < arr.length; i ++) {
    var names = [];
    if (arr[i].vacation !== undefined) {
      names.push(arr[i].name);
    }
    return names;
  }
}
```

#### !end-placeholder


### !tests

```js
describe("tookVacation", function () {
  var vacation = [
    {
      name: "James",
      vacation: "January 6th - 8th",
    },
    {
      name: "Elise",
    },
    {
      name: "Paul",
      vacation: "September 12th - 15th",
    },
    {
      name: "Elise",
      vacation: "October 22nd - 25th",
    },
    {
      name: "Tyler",
    },
  ];

  it("should return an array", function () {
    expect(tookVacation([{name: 'Sam', vacation: 'January 1st'}])).to.be.an('array');
  })

  it("should return an array of the correct length", function () {
    expect(tookVacation(vacation)).to.be.an('array').have.lengthOf(3)
  })

  it("should return an empty array if no one took vacation", function () {
    expect(tookVacation([{name: 'Jeuel'}])).to.eql([])
  })

  it("should return the expected array", function () {
    expect(tookVacation(vacation)).to.eql(["James", "Paul", "Elise"]);
    expect(tookVacation([{ name: "Sam", vacation: "January 1st" }])).to.eql(
      ['Sam']
    );
    expect(tookVacation([{name: 'Jeuel'}])).to.eql([])
  })

})



```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: debugging-intermediate-3
* language: javascript
* title: Greatest Sum

### !question 

Given a list of arrays of numbers `listOfNums`, return the sum of the array with the greatest total. 

```js
var listOfNums = [
  [1,2,3,10], 
  [9,47,6], 
  [60,30, 2, 4], 
  [4,7,9]
];

console.log(greatestSum(listOfNums)); // => 96;
``` 

### !end-question

#### !placeholder

```js
function greatestSum(arr) {
  var greatest = 0;
  var currSum = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      currSum += arr[i][j];
    }
    if (currSum > greatest) {
      greatest = currSum;
    }
  }
  return greatest;
}
```

#### !end-placeholder


### !tests

```js
describe('greatestSum', function () {
  const listOfNums = [
    [1, 2, 3, 10],
    [9, 47, 6],
    [60, 30, 2, 4],
    [4, 7, 9],
  ];

  const listOfNums2 = [
    [1,1,1],
    [2,2,2,],
    [1,1,1,1,1,1,1,1,1,],
    [100],
  ];


  it("should return a number", function (){
    expect(greatestSum(listOfNums)).to.be.a("number");
  })

  it("should return the expected sum", function () {
    expect(greatestSum(listOfNums)).to.deep.eq(96);
    expect(greatestSum([[5, 8, 3]])).to.deep.eq(16);
    expect(greatestSum(listOfNums2)).to.deep.eq(100);
  })
})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: debugging-intermediate-4
* language: javascript
* title: String From Values

### !question 

Given an object `obj` and an array of all the keys in the object `arr`, return a string of every other property concatenated together 

```js
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

console.log('intermediate 4a: ', stringFromValues(objOfStr, arrOfKeys1)); //==> 'My dog loves bones.'
console.log('intermediate 4b: ', stringFromValues(objOfStr, arrOfKeys2)); //==> 'You are a wonderful person.'
``` 

### !end-question

#### !placeholder

```js
function stringFromValues(obj, arr) {
  var str = '';
  for (var i = 0; i < arr.length; i++) {
    str + obj[arr[i]];
  }
  return str;
}

```

#### !end-placeholder


### !tests

```js
describe('stringFromValues', function () {

  const words = {
    key1: "My ",
    key2: "You ",
    key3: "dog ",
    key4: "are ",
    key5: "loves ",
    key6: "a ",
    key7: "bones.",
    key8: "wonderful person.",
  };

  const arrOfKeys1 = [
    "key1",
    "key2",
    "key3",
    "key4",
    "key5",
    "key6",
    "key7",
    "key8",
  ];

  const arrOfKeys2 = [
    "key2",
    "key1",
    "key4",
    "key3",
    "key6",
    "key5",
    "key8",
    "key7",
  ];

  const words2 = {
    messageA: 'love ',
    messageB: 'am.',
    messageC: 'I '
  }

  const arrOfKeys3 = ['messageC', 'messageA', 'messageB']

  it("should return a string", function (){
    expect(stringFromValues(words, arrOfKeys1)).to.be.a("string");
  })

  it("should return the expected string", function () {
    expect(stringFromValues(words, arrOfKeys1)).to.deep.eq(
      "My dog loves bones."
    );
    expect(stringFromValues(words, arrOfKeys2)).to.deep.eq(
      "You are a wonderful person."
    );
    expect(stringFromValues(words2, arrOfKeys3)).to.deep.eq(
      "I am."
    );
  })
})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: debugging-intermediate-5
* language: javascript
* title: Index Or None

### !question 

Given an array of words `arr` and a character `char`, return an array of the first index where the character can be found in each word. If the character cannot be found, add 'none' to the result array.  

```js
var wordArr = ["aim", "tail", "series", "kitten", "fruit", "paper"];

console.log(indexOrNone(wordArr, 'a')); // => [0, 1, 'none', 'none', 'none', 1];
``` 

### !end-question

#### !placeholder

```js
function indexOrNone(arr, char) {
  var indexOfChar = [];
  var ind = arr[0].indexOf(char);
  for (var i = 0; i < arr.length; i++) {
    if (ind === -1) {
      indexOfChar.push(arr[i][ind]);
    } else {
      indexOfChar.push("none");
    }
  }
  return indexOfChar;
}

```

#### !end-placeholder


### !tests

```js
describe('indexOrNone', function () {

 const wordArr = ["aim", "tail", "series", "kitten", "fruit", "paper"];



  it("should return an array", function () {
    expect(indexOrNone(wordArr, 'a')).to.be.an("array");
  })

  it("should return the expected array", function () {
    expect(indexOrNone(wordArr, 'a')).to.eql([0, 1, 'none', 'none', 'none', 1]);
    expect(indexOrNone(wordArr, "e")).to.eql([
      "none",
      "none",
      1,
      4,
      "none",
      3,
    ]);
    expect(indexOrNone(['watermelon'], 'w')).to.eql([0])
    expect(indexOrNone(['jet'], 'z')).to.eql(['none']);
  })
})

```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: debugging-intermediate-6
* language: javascript
* title: Newspaper Delivery

### !question 

   James and Todd live at a time when paper routes are common among kids. James's job is to deliver paper to each house with an odd number.  
     
   Given an array of numbers `houseNums`, gather all the odd number houses from the given list and return a new list for Jame's to follow. 
     
  Notes:  
  - Odd number houses always appear every other number.
  - The starting number of the list could be even or odd.
  - Numbers will always be whole numbers. 

```js
var houseNums1 = [101, 100, 99, 98];

console.log(newspaperDelivery(houseNums1)); // => [101, 99]

var houseNums2 = [50, 49, 48, 47];

console.log(newspaperDelivery(houseNums2)); // => [49, 47]
``` 

### !end-question

#### !placeholder

```js
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


```

#### !end-placeholder


### !tests

```js
describe('newspaperDelivery', function () {
  it("should return an array", function () {
    expect(newspaperDelivery([101, 100, 99, 98])).to.be.an('array');
  })

  it("should return the expected array of odd numbers", function () {
    expect(newspaperDelivery([101, 100, 99, 98])).to.eql([101, 99]);
    expect(newspaperDelivery([5, 6])).to.eql([5]);
    expect(newspaperDelivery([10, 11, 12, 13, 14, 15, 16])).to.eql([11, 13, 15]);
  })
})

```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: debugging-intermediate-7
* language: javascript
* title: Spell Checker

### !question 

 Given two strings, a correctly spelled string `correct word` and an incorrectly spelled word `studentWord`, return an array of all indexes of the second string that do not match the first string. 

 Note:
 - Both words will have the same length;

```js
console.log(spellChecker('transluscent', 'trensloscint')); // = [2, 6, 9];
``` 

### !end-question

#### !placeholder

```js
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

```

#### !end-placeholder


### !tests

```js
describe("spellChecker", function () {
  it("should return an array", function () {
    expect(spellChecker('wonderful', 'womdelful')).to.be.an("array");
  })

  it("should return the expected index numbers in an array given equal length words", function () {
    expect(spellChecker('wonderful', 'womdelful')).to.eql([2, 5]);
    expect(spellChecker("transluscent", "trensloscint")).to.eql([2, 6, 9]);
  })


  it("should return an empty array if the words have the same spelling", function () {
      expect(spellChecker("four", "four")).to.eql([]);
      expect(spellChecker("whole", "whole")).to.eql([]);
  })
})


```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: debugging-intermediate-8
* language: javascript
* title: Hungry Caterpillar

### !question 

 Do you know the story of the hungry caterpillar? It's a famous children's story about a caterpillar that eats many foods over a week to grow and grow until it becomes a beautiful butterfly.  
  
  You are testing out the book with a bunch of caterpillars. You have recorded their eating habits over six days. You are now ready to report your findings.  
    
  Given an array containing the days the caterpillars ate and the food they consumed `arr`, and given a food `food`, find out how many days a particular food was eaten.
 


```js
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

console.log(hungryCaterpillars(eatingHabits, 'apple')); // => 3
``` 

### !end-question

#### !placeholder

```js
function hungryCaterpillars(arr, food) {
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === food) {
        count++;
      }
    }
  }
  return count;
}
```

#### !end-placeholder


### !tests

```js
describe("hungryCaterpillars", function () {

  const eatingHabits = [
    {
      day: "Monday",
      food: ["banana", "ice cream", "apple", "leaf", "cheese"],
    },
    {
      day: "Tuesday",
      food: ["candy", "cake", "ice cream", "cheese"],
    },
    {
      day: "Wednesday",
      food: ["leaf", "cheese", "jelly", "hamburger"],
    },
    {
      day: "Thursday",
      food: ["hamburger", "banana", "leaf", "tomato"],
    },
    {
      day: "Friday",
      food: ["ice cream", "apple", "leaf", "pie", "cake"],
    },
    {
      day: "Saturday",
      food: ["apple", "leaf", "pie", "cheese", "candy", "tomato"],
    },
  ];

  it("should return a number", function () {
    expect(hungryCaterpillars(eatingHabits, 'apple')).to.be.a("number");
  })

  it("should not use Obect.keys, Object.values, nor Object.entries", function() {
    expect(hungryCaterpillars.toString()).to.not.include("Object.keys");
    expect(hungryCaterpillars.toString()).to.not.include("Object.entries");
    expect(hungryCaterpillars.toString()).to.not.include("Object.values");
  })

  it("should return the expected number of times the given food is appears", function () {
    expect(hungryCaterpillars(eatingHabits, 'apple')).to.deep.eq(3);
    expect(hungryCaterpillars(eatingHabits, 'tomato')).to.deep.eq(2);
    expect(hungryCaterpillars(eatingHabits, 'ice cream')).to.deep.eq(3);
    expect(hungryCaterpillars(eatingHabits, 'grapefruit')).to.deep.eq(0);
  })
})
```
### !end-tests

### !end-challenge