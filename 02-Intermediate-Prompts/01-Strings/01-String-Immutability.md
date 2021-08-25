### !challenge

* type: code-snippet
* id: strings-01
* language: javascript
* title: Replace First Letter

### ! 

Given a word and a character, combine the word an character so the first letter of the word is now the character. Return the new word.

```js
  var actual = replaceFirstLetter("word", "f");
  var expected = 'ford';
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

  it('should not iterate', function () {
     const funcStr = replaceFirstLetter.toString();
    expect(funcStr).to.not.include('for');
  })

  it('should return a the word with the first letter replaced', function () {
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

### ! 

Given a string of all lower case characters, return the word with its first and last characters change to uppercase. 

```js
  var actual = firstLastUppercase('world');
  var expected = 'WorlD';
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

   it("should not iterate", function () {
     const funcStr = firstLastUppercase.toString();
     expect(funcStr).to.not.include("for");
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

### ! 

Given a string and an index, return the given string with all the characters from the given index uppercased. 

```js
  var actual = uppercaseFromIndex('world', 1);
  var expected = 'wORD';
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

### ! 

Iterate from the end of the given word to the first index to create a reversed string. Return the reversed string. 

**Do not use String.split method.**

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
* title: Every OtherChar

### ! 

Given a string, build a new string by iterating over every other character from index 0. Return the new string.

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

### ! 

Given a string, build a new string by iterating over every other character from index 0. Return the new string.

**Do not use String.split method.**

```js
  console.log(everyThirdChar("tlka")) //=> 'at'
  console.log(everyThirdChar("oerwtyt")) //=> 'two'
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

### ! 

Given a string, build a new string by iterating over every other character from index 0. Return the new string.

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
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: strings-07
* language: javascript
* title: Signed In

### ! 

Given a string, build a new string by iterating over every other character from index 0. Return the new string.

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
```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: strings-08
* language: javascript
* title: Has Vacation Remaining

### ! 

Given an array of objects containing names and vacation remaining status, return an array of all the names. Mark the people who have vacation remaining by surrounding their names in asterisks ('*').

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

  console.log(hasVacationRemaining(people); //=>  ['Kim', '*Lee*', '*Sarah*', '*Ted*', 'Martha']
``` 

### !end-question

#### !placeholder

```js
function hasVacationRemaining(people) {

}
```

#### !end-placeholder


### !tests

```js
describe("hasVacationRemaining", function () {

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
    const funcStr = hasVacationRemaining.toString();
    expect(funcStr).to.not.include('.split');
  })
  
  it("should return an array", function () {
    expect(hasVacationRemaining(people)).to.be.an('array');
  })

  it("should return an array of the same length as the input array", function () {
    expect(hasVacationRemaining(people)).to.be.an('array').have.lengthOf(5);
    expect(hasVacationRemaining([{name: 'Apple', vacationRemaining: true}])).to.be.an('array').have.lengthOf(1);
  })

  it("should return an array containing the expectd elements", function () {
    const answer1 = ['Kim', '*Lee*', '*Sarah*', '*Ted*', 'Martha'];
    expect(hasVacationRemaining(people)).to.eql(answer1);
    })
    expect(hasVacationRemaining(people2)).to.eql(['James', 'Melvin']);
    expect(hasVacationRemaining([{name: 'Apple', vacationRemaining: true}])).to.eql(['*Apple*'])
})



```
### !end-tests

### !end-challenge


