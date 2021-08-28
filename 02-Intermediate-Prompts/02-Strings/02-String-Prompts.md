#  Strings

### !challenge

* type: code-snippet
* id: strings-01
* language: javascript
* title: Replace First Letter

### !question

Given a word `word` and a character `char`, combine the word and given character so the first letter of the word is now the character. Return the new word.

```js
  console.log(eplaceFirstLetter("word", "f")) // => 'ford'
``` 

### !end-question

#### !placeholder

```js
function replaceFirstLetter(word, char) {

}
```

#### !end-placeholder


### !tests

```js
describe('replaceFirstLetter', function () {
  it('should not split the given string', function () {
    const funcStr = replaceFirstLetter.toString();
    expect(funcStr).to.not.include('.split')
  })

  it('should return a string', function () {
    expect(replaceFirstLetter('word', 'f')).to.be.a('string');
  })

  it('should return the word with the first letter replaced', function () {
    expect(replaceFirstLetter('word', 'f')).to.deep.eq('ford');
    expect(replaceFirstLetter('near', 't')).to.deep.eq('tear');
    expect(replaceFirstLetter('wee shrimp', 's')).to.deep.eq('see shrimp');
  })
})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: strings-02
* language: javascript
* title: First Last Uppercase

### !question 

Given a string `str` of all lower case characters, return the word with its first and last characters changed to uppercase. 

```js
  console.log(firstLastUppercase('world')) // ==> 'WorlD';
``` 

### !end-question

#### !placeholder

```js
function firstLastUppercase(str, ind) {

}
```

#### !end-placeholder


### !tests

```js
describe('firstLastUppercase', function () {
   it("should not split the given string", function () {
     const funcStr = firstLastUppercase.toString();
     expect(funcStr).to.not.include(".split");
   });

   it("should return a string", function () {
     expect(firstLastUppercase("word")).to.be.a("string");
   });

   it("should return a the word with the first and last characters uppercased", function () {
     expect(firstLastUppercase("word")).to.deep.eq("WorD");
     expect(firstLastUppercase("near")).to.deep.eq("NeaR");
     expect(firstLastUppercase("wee shrimp")).to.deep.eq("Wee shrimP");
   });
})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: strings-03
* language: javascript
* title: Uppercase From Index

### !question 

Given a string `str` and an index `ind`, return the given string with all the characters starting from the given index changed to uppercase. The given index will always be greater than or equal to zero.

```js
  console.log(uppercaseFromIndex('world', 1)) //=> 'wORD'
``` 

### !end-question

#### !placeholder

```js
function uppercaseFromIndex(str, ind) {

}
```

#### !end-placeholder


### !tests

```js
describe('uppercaseFromIndex', function () {
 it("should not split the given string", function () {
   const funcStr = uppercaseFromIndex.toString();
   expect(funcStr).to.not.include(".split");
 });

 it("should return a string", function () {
   expect(uppercaseFromIndex("word", 2 )).to.be.a("string");
 });

 it("should return a the word with the first and last characters uppercase", function () {
   expect(uppercaseFromIndex("word", 1)).to.deep.eq("wORD");
   expect(uppercaseFromIndex("near", 3)).to.deep.eq("neaR");
   expect(uppercaseFromIndex("wee shrimp", 4)).to.deep.eq("wee SHRIMP");
   expect(uppercaseFromIndex("hello", 0)).to.deep.eq('HELLO');
  });
})
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: strings-04
* language: javascript
* title: Backwards

### !question

Iterate from the end of the given word `str` to the first index to create a reversed string. Return the reversed string. 

**Do not use String.split or Array.reverse methods.**

```js
  console.log(backwards('lla')); // => 'all'
``` 

### !end-question

#### !placeholder

```js
function backwards(str) {

}
```

#### !end-placeholder


### !tests

```js
describe("backwards", function () {

  it("should not use String.split method", function () {
    const funcStr = backwards.toString();
    expect(funcStr).to.not.include('.split');
  })

  it("should not use Array.reverse method", function () {
    const funcStr = backwards.toString();
    expect(funcStr).to.not.include('.reverse');
  })

  it("should return a string", function () {
    expect(backwards('lol')).to.be.a("string");
  });

   it("should return the given string reversed", function () {
     expect(backwards('olleh')).to.deep.eq('hello');
     expect(backwards('lla')).to.deep.eq('all')
     expect(backwards('sheer')).to.deep.eq('reehs')
     expect(backwards("elkniwt elkniwt")).to.deep.eq("twinkle twinkle");
   });
});
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: strings-05
* language: javascript
* title: Every Other Char

### !question 

Given a string `str`, build a new string by iterating over every other character from index 0. Return the new string.

**Do not use String.split method.**

```js
  console.log(everyOtherChar('abt')); //=> 'at'
  console.log(everyOtherChar('o n e')) //=> 'one'
``` 

### !end-question

#### !placeholder

```js
function everyOtherChar(str) {

}
```

#### !end-placeholder


### !tests

```js
describe("everyOtherChar", function () {

  it("should not use String.split method", function () {
    const funcStr = everyOtherChar.toString();
    expect(funcStr).to.not.include(".split");
  });

  it("should return a string", function () {
    expect(everyOtherChar("lol")).to.be.a("string");
  });

  it("should return the expected string", function () {
    expect(everyOtherChar("shwoitmj")).to.deep.eq("swim");
    expect(everyOtherChar("gkloure")).to.deep.eq("glue");
    expect(everyOtherChar("abt")).to.deep.eq("at");
  });
});
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: strings-06
* language: javascript
* title: Every Third Char

### !question 

Given a string `str`, return a new string by iterating from the end of the string by three to find the word mixed into the characters

**Do not use String.split method.**

```js
  console.log(everyThirdChar("tlka")) //=> 'at'
  console.log(everyThirdChar("oerwtyt")) //=> 'two'
``` 

### !end-question

#### !placeholder

```js
function everyThirdChar(str) {

}
```

#### !end-placeholder


### !tests

```js
describe("everyThirdChar", function () {
  it("should not use String.split method", function () {
    const funcStr = everyThirdChar.toString();
    expect(funcStr).to.not.include(".split");
  });

  it("should return a string", function () {
    expect(everyThirdChar("lolol")).to.be.a("string");
  });

  it("should return the expected string", function () {
    expect(everyThirdChar("tlka")).to.deep.eq("at");
    expect(everyThirdChar("oerwtyt")).to.deep.eq("two");
    expect(everyThirdChar("drteghlsdbiomweusfj")).to.deep.eq("jumbled");
  });
});
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: strings-07
* language: javascript
* title: Signed In

### !question 

Given an objects of objects `people` containing a information about peoples signed in status and a string `name`, return a message describing
  * if the person is signed out or signed in and
  * when they last signed in.   
    
The message should take the form:
`[name] is currently signed [in/out]. They last signed in on [date].`


**Do not use String.split method.**

```js
var people = {
    Al: {
      signedIn: false,
      lastSignIn: '07/01/2021'
    },
    Jesse: {
      signedIn: true,
      lastSignIn: '07/10/2021'
    },
    Wilma: {
      signedIn: true,
      lastSignIn: '07/30/2021'
    },
    Fred: {
      signedIn: false,
      lastSignIn: '09/05/2015'
    }
  }

  console.log(signedIn(people, "Jesse"); //=> "Jesse is currently signed in. They last signed in on 07/10/2021."
``` 

### !end-question

#### !placeholder

```js
function signedIn(people, name) {

}
```

#### !end-placeholder


### !tests

```js
describe('signedIn', function () {

  const people = {
    Al: {
      signedIn: false,
      lastSignIn: '07/01/2021'
    },
    Jesse: {
      signedIn: true,
      lastSignIn: '07/10/2021'
    },
    Wilma: {
      signedIn: true,
      lastSignIn: '07/30/2021'
    },
    Fred: {
      signedIn: false,
      lastSignIn: '09/05/2015'
    }
  }

  it("should not use String.split method", function () {
    const funcStr = signedIn.toString();
    expect(funcStr).to.not.include(".split");
  });

  it("should not loop", function () {
    const funcStr = signedIn.toString();
    expect(funcStr).to.not.include('for');
  })

  it("should return a string", function () {
    expect(signedIn({
      Tom: {
        signedIn: false,
        lastSignIn: '07/01/2021'
      }
    }, 'Tom')).to.be.a("string");
  });

  it("should return a string containing the given name", function () {
    expect(signedIn(people, 'Wilma')).to.include("Wilma");
    expect(signedIn(people, 'Jesse')).to.include("Jesse");
      expect(signedIn({
      Tom: {
        signedIn: false,
        lastSignIn: '07/01/2021'
      }
    }, 'Tom')).to.include("Tom");
  })

  it("should return a string containing the correct logged in status", function () {
    expect(signedIn(people, 'Wilma')).to.include("signed in");
    expect(signedIn(people, 'Fred')).to.include("signed out");
      expect(signedIn({
      Tom: {
        signedIn: false,
        lastSignIn: '07/01/2021'
      }
    }, 'Tom')).to.include("signed out");
  })
})
```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: strings-08
* language: javascript
* title: Vacation Remaining

### !question 

Given an array of objects `people` containing names and vacation remaining status, return an array of all the names. Mark the people who have vacation remaining by surrounding their names in asterisks ('*').

**Do not use String.split method.**

```js
var people = [
    {
      name: "Kim",
      vacationRemaining: false
    },
    {
      name: "Lee",
      vacationRemaining: true
    },
    {
      name: "Sarah",
      vacationRemaining: true
    },
    {
      name: "Ted",
      vacationRemaining: true
    },
    {
      name: "Martha",
      vacationRemaining: false
    },
  ];

  console.log(vacationRemaining(people); //=>  ['Kim', '*Lee*', '*Sarah*', '*Ted*', 'Martha']
``` 

### !end-question

#### !placeholder

```js
function vacationRemaining(people) {

}
```

#### !end-placeholder


### !tests

```js
describe("vacationRemaining", function () {

  const people = [
    {
      name: "Kim",
      vacationRemaining: false
    },
    {
      name: "Lee",
      vacationRemaining: true
    },
    {
      name: "Sarah",
      vacationRemaining: true
    },
    {
      name: "Ted",
      vacationRemaining: true
    },
    {
      name: "Martha",
      vacationRemaining: false
    },
  ];

  const people2 = [
    {
      name: "James",
      vacationRemaining: false,
    },
    {
      name: "Melvin",
      vacationRemaining: false,
    }
  ]
  it("should not use the split method", function () {
    const funcStr = vacationRemaining.toString();
    expect(funcStr).to.not.include('.split');
  })
  
  it("should return an array", function () {
    expect(vacationRemaining(people)).to.be.an('array');
  })

  it("should return an array of the same length as the input array", function () {
    expect(vacationRemaining(people)).to.be.an('array').have.lengthOf(5);
    expect(vacationRemaining([{name: 'Apple', vacationRemaining: true}])).to.be.an('array').have.lengthOf(1);
  })

  it("should return an array containing the expectd elements", function () {
    const answer1 = ['Kim', '*Lee*', '*Sarah*', '*Ted*', 'Martha'];
    expect(vacationRemaining(people)).to.eql(answer1);
    })
    expect(vacationRemaining(people2)).to.eql(['James', 'Melvin']);
    expect(vacationRemaining([{name: 'Apple', vacationRemaining: true}])).to.eql(['*Apple*'])
})



```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: strings-09
* language: javascript
* title: Odd Or Even Nums

### !question  

Given an array of numbers `nums`, return a new array of strings where each number is concatenated with whether it is odd or even, a colon, a space and the number.

```js
  console.log(oddOrEvenNums([3, 10, 9, 12]); //=> ['odd: 3', 'even: 10', 'odd: 9', 'even: 12']
``` 

### !end-question

#### !placeholder

```js
function oddOrEvenNums(nums) {

}
```

#### !end-placeholder


### !tests

```js
describe("oddOrEvenNums", function () {

  it("should return an array with the same length as the input array", function () {
    expect(oddOrEvenNums([3, 7, 9])).to.have.lengthOf(3);
    expect(oddOrEvenNums([3, 10, 9, 12])).to.have.lengthOf(4);
  })

  it("should return an array containing the expected strings", function () {
    expect(oddOrEvenNums([3, 7, 9])).to.eql(['odd: 3', 'odd: 7', 'odd: 9']);
    expect(oddOrEvenNums([3, 10, 9, 12])).to.eql(['odd: 3', 'even: 10', 'odd: 9', 'even: 12']);
    expect(oddOrEvenNums([100, 101, 90, 1002])).to.eql(['even: 100', 'odd: 101', 'even: 90', 'even: 1002']);
  })
})


```
### !end-tests

### !end-challenge



