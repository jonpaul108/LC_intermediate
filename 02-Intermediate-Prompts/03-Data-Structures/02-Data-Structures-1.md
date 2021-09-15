# Various 

### !challenge

* type: code-snippet
* id: dataStructures-1-01
* language: javascript
* title: Chubby Bunny

### !question 

A group of kids are playing the game "Chubby Bunny." Based on how many marshmallows a child can put in their mouths, return how  impressed the other children will be

  The function has three inputs.
  1) An object containing kids' names `players` as keys and how many marshmallows they can put in their mouths.
  2) An object containing responses `responses` based on how many marshmallows the child put in their mouths
  3) A string of the target child's name `name`
######
*You do not need to iterate to solve this problem*

```js
var players1 = {
    Lisa: 2,
    James: 4,
    Tim: 1,
    Ashley: 7,
    Kim: 3,
  };

  var responses1 = {
    1: "meh",
    2: "okay",
    3: "not bad",
    4: "pretty good",
    5: "wow",
    6: "super",
    7: "that's dangerous",
  };

  var name1 = 'Lisa';
  console.log(chubbyBunny(children, responses, name1)); //=>  "okay"
``` 

### !end-question

#### !placeholder

```js
function chubbyBunny(players, responses, name) {

}
```

#### !end-placeholder


### !tests

```js
describe('chubbyBunny', function () {

  var players1 = {
    Lisa: 2,
    James: 4,
    Tim: 1,
    Ashley: 7,
    Kim: 3,
  };

  var players2 = {
    Tom: 1,
    Kelly: 6,
  };

  var responses1 = {
    1: "meh",
    2: "okay",
    3: "not bad",
    4: "pretty good",
    5: "wow",
    6: "super",
    7: "that's dangerous",
  };

   var responses2 = {
     1: "hmmm",
     6: "fantastic",
   };

  it('should not make use of a for loop', function () {
    var funcStr = chubbyBunny.toString();
    expect(funcStr).to.not.include('for');
  })

  it("should not use Object.values, Object.keys, or Objects.entries", function () {
    var funcStr = chubbyBunny.toString();
    expect(funcStr).to.not.include("Object");
  });

  it("should return a string", function () {
    expect(chubbyBunny(players1, responses1, 'Lisa')).to.be.a('string');
  });

   it("should return the correct response", function () {
     expect(chubbyBunny(players1, responses1, "Lisa")).to.deep.eq("okay");
     expect(chubbyBunny(players1, responses1, "James")).to.deep.eq("pretty good");
     expect(chubbyBunny(players2, responses2, "Kelly")).to.deep.eq("fantastic");
     expect(chubbyBunny(players1, responses2, "Tim")).to.deep.eq("hmmm");
   });

  
})



```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: dataStructures-1-02
* language: javascript
* title: Word Clouds

### !question 

Given a list of 10 words `words` and a target word `target`, based on how many times the given word appears, return if the word will be 'huge', 'large', 'medium', or 'small.'
  * Huge: appears 4 times
  * Large: appears 3 times
  * Medium: appears 2 times
  * Small: appears 1 time

Notes: 
  - The list will always contain four unique strings
  - The list will always have a length of 10

Info: "Word clouds (also known as text clouds or tag clouds) work in a simple way: the more a specific word appears in a source of textual data (such as a speech, blog post, or database), the bigger and bolder it appears in the word cloud." Read more [here](https://boostlabs.com/blog/what-are-word-clouds-value-simple-visualizations/)
```js
const words1 = [
    "donuts",
    "sprinkles",
    "soda",
    "donuts",
    "donuts",
    "soda",
    "soda",
    "donuts",
    "candy",
    "candy",
  ];


  console.log(wordClouds(words1, "donuts"); //=>  "huge"
``` 

### !end-question

#### !placeholder

```js
function wordClouds(words, target) {

}
```

#### !end-placeholder


### !tests

```js
describe("wordClouds", function () {
  const words1 = [
    "donuts",
    "sprinkles",
    "soda",
    "donuts",
    "donuts",
    "soda",
    "soda",
    "donuts",
    "candy",
    "candy",
  ];

  const words2 = ["a", "a", "a", "a", "b", "b", "b", "c", "c", "d"];

  it("Should return a string", function () {
    expect(wordClouds(words1, "donuts")).to.be.a("string");
  });

  it("Should return one of four possible words equating to a size", function () {
    expect(["huge", "medium", "small", "large"]).to.include(
      wordClouds(words1, "sprinkles")
    );
    expect(["huge", "medium", "small", "large"]).to.include(
      wordClouds(words1, "donuts")
    );
    expect(["huge", "medium", "small", "large"]).to.include(
      wordClouds(words1, "candy")
    );
    expect(["huge", "medium", "small", "large"]).to.include(
      wordClouds(words2, "d")
    );
  });

  it("Should return the correct word size", function () {
    expect(wordClouds(words1, "donuts")).to.deep.eq("huge");
    expect(wordClouds(words1, "candy")).to.deep.eq("medium");
    expect(wordClouds(words2, "d")).to.deep.eq("small");
    expect(wordClouds(words2, "b")).to.deep.eq("large");
  });
});


```
### !end-tests

### !end-challenge


### !challenge

* type: code-snippet
* id: dataStructures-1-03
* language: javascript
* title: Chess Sabotage

### !question 

Given an object of arrays `board` and a key `row`, replace all the 'pawn' pieces at the key with 'queen'. Return the input object with the specified row updated (do not make a copy).
```js
  var chessBoard = {
    row1: [
      "rook",
      "empty",
      "bishop",
      "king",
      "empty",
      "rook",
      "queen",
      "empty",
    ],
    row2: [
      "empty", 
      "pawn", 
      "pawn", 
      "empty", 
      "empty", 
      "pawn", 
      "bishop", 
      "pawn"
      ],
    row3: [
      "knight",
      "empty",
      "empty",
      "pawn",
      "empty",
      "knight",
      "bishop",
      "empty",
    ],
    row4: [
      "pawn", 
      "empty", 
      "pawn", 
      "pawn", 
      "empty", 
      "empty", 
      "empty", 
      "bishop"
    ],
    row5: [
      "empty",
      "empty",
      "pawn",
      "empty",
      "pawn",
      "empty",
      "empty",
      "empty",
    ],
    row6: [
      "empty",
      "empty",
      "empty",
      "empty",
      "knight",
      "empty",
      "knight",
      "empty",
    ],
    row7: [
      "pawn", 
      "pawn", 
      "empty", 
      "empty", 
      "bishop", 
      "pawn", 
      "pawn", 
      "pawn"
      ],
    row8: [
      "rook", 
      "empty", 
      "empty", 
      "king", 
      "empty", 
      "rook", 
      "queen", 
      "empty"
      ],
  };

  var key1 = "row7";

  console.log(chessSabotage(chessBoard, key1); //=>
  /*should return the entire given object with "row7" changed to 
   [
     "queen",
     "queen",
     "empty",
     "empty",
     "bishop",
     "queen",
     "queen",
     "queen",
    ]
     */
``` 

### !end-question

#### !placeholder

```js
function chessSabotage(board, row) {

}
```

#### !end-placeholder


### !tests

```js
describe("chessSabotage", function () {
  var chessRows = {
    row1: [
      "rook",
      "empty",
      "bishop",
      "king",
      "empty",
      "rook",
      "queen",
      "empty",
    ],
    row2: [
      "empty", 
      "pawn", 
      "pawn", 
      "empty", 
      "empty", 
      "pawn", 
      "bishop", 
      "pawn"
      ],
    row3: [
      "knight",
      "empty",
      "empty",
      "pawn",
      "empty",
      "knight",
      "bishop",
      "empty",
    ],
    row4: [
      "pawn", 
      "empty", 
      "pawn", 
      "pawn", 
      "empty", 
      "empy", 
      "empty", 
      "bishop"
    ],
    row5: [
      "empty",
      "empty",
      "pawn",
      "empty",
      "pawn",
      "empty",
      "empty",
      "empty",
    ],
    row6: [
      "empty",
      "empty",
      "empty",
      "empty",
      "knight",
      "empty",
      "knight",
      "empty",
    ],
    row7: [
      "pawn", 
      "pawn", 
      "empty", 
      "empty", 
      "bishop", 
      "pawn", 
      "pawn", 
      "pawn"
    ],
    row8: [
      "rook", 
      "empty", 
      "empty", 
      "king", 
      "empty", 
      "rook", 
      "queen", 
      "empty"
      ],
  };

  it("should return the input object", function () {
    const obj = {...chessRows};
    expect(chessSabotage(obj, "row1")).to.eq(obj);
  })

  it("should update the specified row's \'pawn\'s\' to \'queen\' ", function () {
    const obj = { ...chessRows };
    expect(chessSabotage({ ...obj }, "row3").row3).to.eql([
      "knight",
      "empty",
      "empty",
      "queen",
      "empty",
      "knight",
      "bishop",
      "empty",
    ]);
    expect(chessSabotage({ ...obj }, "row6").row6).to.eql([
      "empty",
      "empty",
      "empty",
      "empty",
      "knight",
      "empty",
      "knight",
      "empty",
    ]);
     expect(chessSabotage({ ...obj }, "row7").row7).to.eql([
       "queen",
       "queen",
       "empty",
       "empty",
       "bishop",
       "queen",
       "queen",
       "queen",
     ]);
  })
})


```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: dataStructures-1-04
* language: javascript
* title: Page Numbers

### !question 

Given an array of strings `words` and object containing book information `info`, return a new array of the page numbers where the words are found. The page numbers in the new array should match the order of the words in the given words array.  
If the word is not in the info object, put a zero in its place in the new array.  

Each key in the given object will have a number as a value.  

Notes:  
- The relationship between `words` and `info` is important. 
- Do not use a `for...in` loop to iterate over `info`. 
- -To help facilitate problem solving without looping over the given object, use of the protected term `in` will throw an error.
- Each key in the given object will have a number as a value. 
```js
  var words1 = [
    "cold",
    "princess",
    "love",
    "war",
    "jealousy",
    "dragons",
    "city",
  ];
  var info1 = {
    war: 45,
    love: 10,
    city: 3,
    cold: 400,
  };


  console.log(pageNumbers(words1, info1); //=> [400, 0, 10, 45, 0, 0, 3]
``` 

### !end-question

#### !placeholder

```js
function pageNumbers(words, info) {

}
```

#### !end-placeholder


### !tests

```js
describe("pageNumbers", function () {


  var words1 = [
    "cold",
    "princess",
    "love",
    "war",
    "jealousy",
    "dragons",
    "city",
  ];
  var info1 = {
    war: 45,
    love: 10,
    city: 3,
    cold: 400,
  };

  var info2 = {
    love: 10,
    city: 3,
    cold: 400,
  };

 it("should not use a for...in loop", function () {
   const funcStr = pageNumbers.toString();
   expect(funcStr).to.not.include(" in ");
 });

  it("should return an array", function () {
    
    expect(pageNumbers(words1, info1)).to.be.an('array');
  });

  it("should not use Object.keys, Object.values, or Objects.entries", function () {
    const funcStr = pageNumbers.toString();
    expect(funcStr).to.not.include('Object.keys');
    expect(funcStr).to.not.include('Object.values');
    expect(funcStr).to.not.include('Object.entries');
  });


  it("should not modify the input array", function () {
    const arr = [...words1];
    pageNumbers(arr, { ...info1 });
    expect(arr).to.eql(words1);
  });

  it("should not modify the input object", function () {
    const obj = { ...info1 };
    pageNumbers([...words1], obj);
    expect(obj).to.eql(info1);
  }); 

  it("should return the expected array given the example inputs", function () {
    expect(pageNumbers([...words1], { ...info1 })).to.eql([400, 0, 10, 45, 0, 0, 3]);
  });

  it("should return the expected array", function () {
    expect(pageNumbers([...words1], { ...info2 })).to.eql([400, 0, 10, 0, 0, 0, 3]);
    expect(pageNumbers([...words1], { ...info2 })).to.eql([400, 0, 10, 0, 0, 0, 3]);
    expect(pageNumbers(['gravity', 'cheeky', 'figurative'], {figurative:1, gravity: 1 })).to.eql([1,0,1])
  })

});


```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: dataStructures-1-05
* language: javascript
* title: Warehouse Bins

### !question 

  Given an object of empty bins `bins` and an array of items with their type `items`, move the item name to the correct bin based on the type. You can assume the type of item will always have a corresponding bin.  


Note:  
- The relationship between `items` and `bins` is important. 
- Do not use a `for...in` loop to iterate over `bins`. 
- To help facilitate problem solving without looping over the given object, use of the protected term `in` will throw an error.
```js
  var unsortedItems = [
    { item: "desk", type: "homegoods" },
    { item: "lamp", type: "homegoods" },
    { item: "laptop", type: "electronics" },
    { item: "moisturizer", type: "skincare" },
    { item: "towel", type: "homegoods" },
    { item: "mouse", type: "electronics" },
    { item: "sunscreen", type: "skincare" },
    { item: "bed frame", type: "homegoods" },
  ];
 
 var binNames = {
    homegoods: [],
    electronics: [],
    skincare: [],
  };


  console.log(warehouseBins(unsortedItems, binNames); 
  //=> 
  /*
    {
      homegoods: ["desk", "lamp", "towel", "bed frame"],
      electronics: ["laptop", "mouse"],
      skincare: ["moisturizer", "sunscreen"],
    }
  */
``` 

### !end-question

#### !placeholder

```js
function warehouseBins(items, bins) {

}
```

#### !end-placeholder


### !tests

```js
describe("warehouseBins", function () {
  
  const unsortedItems1 = [
    { item: "desk", type: "homegoods" },
    { item: "lamp", type: "homegoods" },
    { item: "laptop", type: "electronics" },
    { item: "moisturizer", type: "skincare" },
    { item: "towel", type: "homegoods" },
    { item: "mouse", type: "electronics" },
    { item: "sunscreen", type: "skincare" },
    { item: "bed frame", type: "homegoods" },
  ];



  const unsortedItems2 = [
      { item: "banana", type: "fruit" },
      { item: "toothbrush", type: "dental" },
      { item: "apple", type: "fruit" },
    ];

  
    const unsortedItems3 = [
      { item: "table", type: "homegoods" },
      { item: "couch", type: "homegoods" },
      { item: "laptop", type: "electronics" },
      { item: "moisturizer", type: "skincare" },
      { item: "towel", type: "homegoods" },
      { item: "ipad", type: "electronics" },
    ];
  
  
  const binNames1 = {
    homegoods: [],
    electronics: [],
    skincare: [],
  };

  const binNames2 = {
    fruit: [],
    dental: []
  }

  function copyArraysToObj(obj) {
    return Object.keys(obj).reduce((acc, el) => {
      acc[el] = [...obj[el]];
      return acc;
    }, {})
  }

  it("should return an object", function () {
    expect(warehouseBins([...unsortedItems1], copyArraysToObj(binNames1))).to.be.an("object");
  });

 it("should not use a for...in loop", function () {
   const funcStr = warehouseBins.toString();
   expect(funcStr).to.not.include(" in ");
 });

  it("should not use Object.keys, Object.values, or Objects.entries", function () {
    const funcStr = warehouseBins.toString();
    expect(funcStr).to.not.include("Object.keys");
    expect(funcStr).to.not.include("Object.values");
    expect(funcStr).to.not.include("Object.entries");
  });

  it("should return the expected object based on the example inputs", function () {
    expect(
      warehouseBins([...unsortedItems1], copyArraysToObj(binNames1))
    ).to.eql({
      homegoods: ["desk", "lamp", "towel", "bed frame"],
      electronics: ["laptop", "mouse"],
      skincare: ["moisturizer", "sunscreen"],
    });
  });

  it("should return the expected modified object with any valid inputs", function () {
     expect(
       warehouseBins([...unsortedItems1], copyArraysToObj(binNames1))
     ).to.eql({
       homegoods: ["desk", "lamp", "towel", "bed frame"],
       electronics: ["laptop", "mouse"],
       skincare: ["moisturizer", "sunscreen"],
     });
     expect(
       warehouseBins([...unsortedItems3], copyArraysToObj(binNames1))
     ).to.eql({
       homegoods: ["table", "couch", "towel"],
       electronics: ["laptop", "ipad"],
       skincare: ["moisturizer"],
     });
     expect(
       warehouseBins([...unsortedItems2], copyArraysToObj(binNames2))
     ).to.eql({
       fruit: ["banana", "apple"],
       dental: ["toothbrush"],
     });
  });
});


```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: dataStructures-1-06
* language: javascript
* title: Organize Billiards

### !question 

Given an array of arrays `arr`, return `true` if the 8 ball is in the correct starting place. If not, return `false`.

*In billiards, the 8 ball should be placed in the middle of the third row.* 
```js

  var billiardsSetup1 = [
    [1],
    [2,15],
    [4,9,10],
    [6,3,15,14],
    [13,11,12,5,7,8]
  ]; 

  var billiardsSetup2 = [
    [1],
    [2,9],
    [4,8,10],
    [6,3,15,14],
    [13,11,12,5,7,15]
  ]; 
 
  console.log(organizeBilliards(billiardsSetup1)); //=> false
  console.log(organizeBilliards(billiardsSetup2)); //=> true 

``` 

### !end-question

#### !placeholder

```js
function organizeBilliards(arr) {

}
```

#### !end-placeholder


### !tests

```js
describe('organizeBilliards', function () {
  const billiardsSetup1 = [
    [1],
    [2,15],
    [4,9,10],
    [6,3,15,14],
    [13,11,12,5,7,8]
  ]; //=> false

  const billiardsSetup2 = [
    [1],
    [2,9],
    [4,8,10],
    [6,3,15,14],
    [13,11,12,5,7,15]
  ]; //=> true

  const billiardsSetup3 = [
    [5],
    [2,9],
    [8,4,10],
    [6,3,15,14],
    [13,11,12,1,7,15]
  ]

  it("should return a boolean", function () {
    expect(organizeBilliards(billiardsSetup1)).to.be.a('boolean');
  })

  it("should return the expected boolean", function () {
    expect(organizeBilliards(billiardsSetup1)).to.deep.eq(false);
    expect(organizeBilliards(billiardsSetup2)).to.deep.eq(true);
    expect(organizeBilliards(billiardsSetup3)).to.deep.eq(false);
  })

})


```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: dataStructures-1-07
* language: javascript
* title: Received Treats

### !question  

A dog is being trained to fetch the paper. When the dog takes the right action, the dog receives a treat. Otherwise, the dog receives nothing.  

Given an array of days the dog attempted to fetch the paper `actions`, return how many times the dog received a treat. You know the dog performed the correct action when the description says 'brought the paper.' 

```js
var attempts = [
  {day: 'Monday', action: 'ran around the yard'},
  {day: 'Tuesday', action: 'barked at strangers'},
  {day: 'Wednesday', action: 'brought the paper'},
  {day: 'Thursday', action: 'dug a hole'},
  {day: 'Friday', action: 'brought the paper'},
  {day: 'Saturday', action: 'brought the paper'},
  {day: 'Sunday', action: 'went to sleep'},
];

console.log(receivedTreats(attempts)); //==> 3
``` 

### !end-question

#### !placeholder

```js
function receivedTreats(actions) {
 
}
```

#### !end-placeholder


### !tests

```js
describe("receivedTreats", function () {

  var attempts = [
    { day: "Monday", action: "ran around the yard" },
    { day: "Tuesday", action: "barked at strangers" },
    { day: "Wednesday", action: "brought the paper" },
    { day: "Thursday", action: "dug a hole" },
    { day: "Friday", action: "brought the paper" },
    { day: "Saturday", action: "brought the paper" },
    { day: "Sunday", action: "went to sleep" },
  ];


  it("should return a number", function () {
    expect(receivedTreats([...attempts])).to.be.a(
      "number"
    );
  });

  it("should not use Object.keys, Object.values, or Objects.entries", function () {
    const funcStr = receivedTreats.toString();
    expect(funcStr).to.not.include("Object.keys");
    expect(funcStr).to.not.include("Object.values");
    expect(funcStr).to.not.include("Object.entries");
  });

  it("should return the correct number based on the example input", function () {
    expect(receivedTreats([...attempts])).to.deep.eq(3);
  });

  it("should return the expected number", function () {
    expect(
      receivedTreats([{ day: "Tuesday", action: "brought the paper" }])
    ).to.deep.eq(1);
  
    expect(
      receivedTreats([{ day: "Saturday", action: "went to sleep" }])
    ).to.deep.eq(0);
  
    expect(
      receivedTreats([
        { day: "Friday", action: "went to sleep" },
        { day: "Saturday", action: "brought the paper" },
        { day: "Saturday", action: "brought the paper" },
        { day: "Sunday", action: "brought the paper" },
        { day: "Saturday", action: "brought the paper" },
      ])
    ).to.deep.eq(4);
  });

});


```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: dataStructures-1-08
* language: javascript
* title: Killer Robots

### !question 

There are killer robots on the loose! And they look like all the other robots. There is only one way to tell the robots apart: by what they say.  
  
All robots speak in 'beep' and 'boop'. A killer robot will always speak in a string that contains 'beeps' and 'boops' with a length that is a multiple of 4, while a non-killer robot will never speak in 'beeps' and 'boops' in a string that is a multiple of four.  
  
Given a an array of robots and their strings `speech`, find the killer robots!  
  
Return an array of `true` and `false` values. `true` marks a killer robot and `false` marks a normal robot.

```js
var robotTalk = [
  {str: 'boop beep boop'},
  {str: 'boop boop beep beep boop boop beep beep'},
  {str: 'beep beep beep beep boop boop boop'},
  {str: 'boop boop boop boop beep beep beep beep boop boop boop boop'},
  {str: 'boop beep boop beep boop'},
  {str: 'boop beep boop beep boop boop beep boop beep boop boop beep boop beep boop boop beep boop beep boop beep'}
]


console.log(killerRobots(robotTalk)); //=> [false, true, false, true, false, false]
``` 

### !end-question

#### !placeholder

```js
function killerRobots(speech) {

}
```

#### !end-placeholder


### !tests

```js
describe("killerRobots", function () {
  var robotTalk = [
    { str: "boop beep boop" },
    { str: "boop boop beep beep boop boop beep beep" },
    { str: "beep beep beep beep boop boop boop" },
    { str: "boop boop boop boop beep beep beep beep boop boop boop boop" },
    { str: "boop beep boop beep boop" },
    {
      str: "boop beep boop beep boop boop beep boop beep boop boop beep boop beep boop boop beep boop beep boop beep",
    },
  ];

    var robotTalkA = [
      { str: "boop boop beep beep boop boop beep beep" },
      { str: "boop beep boop" },
    ];
  
   var robotTalkB = [
     { str: "boop beep" },
     { str: "boop beep boop" },
   ];

  
   var robotTalkC = [{ str: "boop boop beep boop" }, { str: "boop beep boop beep beep beep beep beep" }];



  it("should return an array", function () {
    expect(killerRobots([...robotTalk])).to.be.an("array");
  });

  it("should not use Object.keys, Object.values, or Objects.entries", function () {
    const funcStr = killerRobots.toString();
    expect(funcStr).to.not.include("Object.keys");
    expect(funcStr).to.not.include("Object.values");
    expect(funcStr).to.not.include("Object.entries");
  });

  it("should return the correct array based on the example input", function () {
    expect(killerRobots([...robotTalk])).to.eql([
      false,
      true,
      false,
      true,
      false,
      false,
    ]);
  });

  it("should return the expected array", function () {
    expect(
      killerRobots([...robotTalkA])
    ).to.eql([true, false]);

    expect(killerRobots([...robotTalkA])).to.eql([true, false]);
    expect(killerRobots([...robotTalkB])).to.eql([false, false]);
    expect(killerRobots([...robotTalkC])).to.eql([true, true]);   
  });
});

```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: dataStructures-1-09
* language: javascript
* title: Weather Predictions

### !question 

Sally lives in a very rainy area. She's trying to find the day most likely to be sunny. She looks at two sources of information to find a day likely to be sunny.
  
Weather prediction takes in an object containing two sources of weather info `sources`. If both sources contain weather info predicting the same day to be 'sunny', return the day. If no days match, return 'reschedule'.

Notes:  
- At most, one sunny day will match 
- It is possible no days will match  
- Both sources will always have the same length  
- Sources will always have the same days  
- The given object will always have properties 'source1' and 'source2'

```js
const sources = {
    source1: [
      {
        day: "Monday",
        weather: 'rainy'  
      },
      {
        day: 'Tuesday',
        weather: "sunny"
      },
    ],
    source2: [
      {
        day: "Monday",
        weather: 'sunny'  
      },
      {
        day: 'Tuesday',
        weather: "sunny"
      },
    ],
  }


console.log(weatherPredictions(sources)); //=> 'Tuesday'
``` 

### !end-question

#### !placeholder

```js
function weatherPredictions(sources) {

}
```

#### !end-placeholder


### !tests

```js
describe("weatherPredictions", function () {

  const sourcesA = {
    source1: [
        {
          day: "Monday",
          weather: 'rainy'  
      },
      {
        day: 'Tuesday',
        weather: "sunny"
      },
    ],
    source2: [
        {
          day: "Monday",
          weather: 'sunny'  
      },
      {
        day: 'Tuesday',
        weather: "sunny"
      },
    ],
  }
  const sourcesB = {
    source1: [
        {
          day: "Monday",
          weather: 'rainy'  
      },
      {
        day: 'Tuesday',
        weather: "sunny"
      },
    ],
    source2: [
        {
          day: "Monday",
          weather: 'sunny'  
      },
      {
        day: 'Tuesday',
        weather: "rainy"
      },
    ],
  }
  const sourcesC = {
    source1: [
      {
        day: "Monday",
        weather: 'rainy'
      },
      {
        day: 'Tuesday',
        weather: "rainy"
      },
      {
        day: "Wednesday",
        weather: 'rainy'
      }
    ],
    source2: [
      {
        day: "Monday",
        weather: 'rainy'
      },
      {
        day: 'Tuesday',
        weather: "rainy"
      },
      {
        day: 'Wednesday',
        weather: 'rainy'
      }
    ],
  };

   const sourcesD = {
     source1: [
       {
         day: "Monday",
         weather: "rainy",
       },
       {
         day: "Tuesday",
         weather: "rainy",
       },
       {
         day: "Saturday",
         weather: "sunny",
       },
     ],
     source2: [
       {
         day: "Monday",
         weather: "rainy",
       },
       {
         day: "Tuesday",
         weather: "rainy",
       },
       {
         day: "Saturday",
         weather: "sunny",
       },
     ],
   };
  
   const sourcesE = {
     source1: [
       {
         day: "Monday",
         weather: "rainy",
       },
       {
         day: "Tuesday",
         weather: "rainy",
       },
       {
         day: "Saturday",
         weather: "sunny",
       },
     ],
     source2: [
       {
         day: "Monday",
         weather: "rainy",
       },
       {
         day: "Tuesday",
         weather: "rainy",
       },
       {
         day: "Saturday",
         weather: "sunny",
       },
     ],
   };


  it("should return a string", function () {
    expect(weatherPredictions(sourcesA)).to.be.a('string');
  })

  it("should return \"reschedule\" if sunny days do not match or there are no sunny days", function () {
    expect(weatherPredictions(sourcesB)).to.deep.eq('reschedule');
    expect(weatherPredictions(sourcesC)).to.deep.eq('reschedule');
  })

  it("should return the correct day if sunny weather days match", function () {
    expect(weatherPredictions(sourcesA)).to.deep.eq('Tuesday');
    expect(weatherPredictions(sourcesD)).to.deep.eq('Saturday');
  })
})

```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: dataStructures-1-10
* language: javascript
* title: Should We Walk

### !question  

Given a distance in miles `distance` and an array of people's names and how far they are willing to walk `people`, return `true` if all people are willing to walk that distance, and `false` if anyone is not willing to walk that distance.

```js
var peopleA = [
    {
      name: 'Tom',
      'walking distance': 4,
    },
    {
      name: 'Shelly',
      'walking distnace': 3
    },
    {
      name: 'Wandile',
      'walking distance': 5,
    },
    {
      name: 'Geoffrey',
      'walking distance': 2
    }
  ];


console.log(shouldWeWalk(peopleA, 3)); //=> false
``` 

### !end-question

#### !placeholder

```js
function shouldWeWalk(people, distance) {

}
```

#### !end-placeholder


### !tests

```js
describe("shouldWeWalk", function () {
   const people = [
     {
       name: "Tom",
       "walking distance": 4,
     },
     {
       name: "Shelly",
       "walking distance": 3,
     },
     {
       name: "Wandile",
       "walking distance": 5,
     },
     {
       name: "Geoffrey",
       "walking distance": 2,
     },
   ];

   const people2 = [
     {
       name: "Sam",
       "walking distance": 10,
     },
   
   ];

  it("should return a boolean", function () {
    expect(shouldWeWalk(people, 3)).to.be.a('boolean');
  })

  it("should return the expected boolean", function () {
    expect(shouldWeWalk(people, 3)).to.deep.eq(false);
    expect(shouldWeWalk(people, 1)).to.deep.eq(true);
    expect(shouldWeWalk(people2, 10)).to.deep.eq(true);
  })
})

```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: dataStructures-1-11
* language: javascript
* title: Who Will Walk

### !question 

Similar to the above, return an array of people who who will walk the given distance.

```js
var peopleA = [
    {
      name: 'Tom',
      'walking distance': 4,
    },
    {
      name: 'Shelly',
      'walking distnace': 3
    },
    {
      name: 'Wandile',
      'walking distance': 5,
    },
    {
      name: 'Geoffrey',
      'walking distance': 2
    }
  ];


console.log(whoWillWalk(peopleA, 3)); //=> ["Tom", "Shelly", "Wandile"]
``` 

### !end-question

#### !placeholder

```js
function whoWillWalk(people, distance) {

}
```

#### !end-placeholder


### !tests

```js
describe("whoWillWalk", function () {
   const people = [
     {
       name: "Tom",
       "walking distance": 4,
     },
     {
       name: "Shelly",
       "walking distance": 3,
     },
     {
       name: "Wandile",
       "walking distance": 5,
     },
     {
       name: "Geoffrey",
       "walking distance": 2,
     },
   ];

   const people2 = [
     {
       name: "Sam",
       "walking distance": 10,
     },
   
   ];

  it("should return an array", function () {
    expect(whoWillWalk(people, 3)).to.be.an('array');
  })

  it("should return an array of the correct names", function () {
    expect(whoWillWalk(people, 3)).to.eql(['Tom', 'Shelly', 'Wandile']);
    expect(whoWillWalk(people, 1)).to.eql(['Tom', 'Shelly', 'Wandile', 'Geoffrey']);
    expect(whoWillWalk(people2, 10)).to.deep.eq(['Sam']);
  })

  it("should return an empty array if no one will walk", function () {
    expect(whoWillWalk(people2, 11)).to.deep.eq([]);
  })
})

```
### !end-tests

### !end-challenge