# All Stars

Use the below data structure to solve the next three problems:
```js
var allStars = [
  {
    name: "Dwyane Wade",
    pointsPerGame: 23.7,
    assistsPerGame: 5.8,
    reboundsPerGame: 4.8,
  },
  {
    name: "Kyle Lowry",
    pointsPerGame: 13.5,
    assistsPerGame: 5.7,
    reboundsPerGame: 4.0,
  },
  {
    name: "LeBron James",
    pointsPerGame: 27.2,
    assistsPerGame: 6.9,
    reboundsPerGame: 7.2,
  },
  {
    name: "Paul George",
    pointsPerGame: 16.9,
    assistsPerGame: 3.1,
    reboundsPerGame: 6.2,
  },
  {
    name: "Carmelo Anthony",
    pointsPerGame: 24.9,
    assistsPerGame: 3.2,
    reboundsPerGame: 6.6,
  },
  {
    name: "Stephen Curry",
    pointsPerGame: 22.4,
    assistsPerGame: 6.9,
    reboundsPerGame: 4.3,
  },
  {
    name: "Russell Westbrook",
    pointsPerGame: 21.5,
    assistsPerGame: 2.6,
    reboundsPerGame: 5.6,
  },
  {
    name: "Kobe Bryant",
    pointsPerGame: 25.0,
    assistsPerGame: 4.7,
    reboundsPerGame: 5.2,
  },
  {
    name: "Kevin Durant",
    pointsPerGame: 25.6,
    assistsPerGame: 2.9,
    reboundsPerGame: 5.6,
  },
  {
    name: "Kawhi Leonard",
    pointsPerGame: 14.3,
    assistsPerGame: 2.0,
    reboundsPerGame: 6.3,
  },
];
```


### !challenge

* type: code-snippet
* id: dataStructures-2-1
* language: javascript
* title: High Scoring Players

### !question 

Your scouting manager only wants you to pay attention to players who score at least 20 points per game. Create a function that returns an array of player names who fit this description.

```js
console.log(highScoringPlayers(allStars)); //=> 
/*
  [
    "Dwyane Wade",
    "LeBron James",
    "Carmelo Anthony",
    "Stephen Curry",
    "Russell Westbrook",
    "Kobe Bryant",
    "Kevin Durant",
  ]
*/

``` 

### !end-question

#### !placeholder

```js
function highScoringPlayers(players) {

}
```

#### !end-placeholder


### !tests

```js
describe("highScoringPlayersA", function () {
  const allStars = [
    {
      name: "Dwyane Wade",
      pointsPerGame: 23.7,
      assistsPerGame: 5.8,
      reboundsPerGame: 4.8,
    },
    {
      name: "Kyle Lowry",
      pointsPerGame: 13.5,
      assistsPerGame: 5.7,
      reboundsPerGame: 4.0,
    },
    {
      name: "LeBron James",
      pointsPerGame: 27.2,
      assistsPerGame: 6.9,
      reboundsPerGame: 7.2,
    },
    {
      name: "Paul George",
      pointsPerGame: 16.9,
      assistsPerGame: 3.1,
      reboundsPerGame: 6.2,
    },
    {
      name: "Carmelo Anthony",
      pointsPerGame: 24.9,
      assistsPerGame: 3.2,
      reboundsPerGame: 6.6,
    },
    {
      name: "Stephen Curry",
      pointsPerGame: 22.4,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3,
    },
    {
      name: "Russell Westbrook",
      pointsPerGame: 21.5,
      assistsPerGame: 2.6,
      reboundsPerGame: 5.6,
    },
    {
      name: "Kobe Bryant",
      pointsPerGame: 25.0,
      assistsPerGame: 4.7,
      reboundsPerGame: 5.2,
    },
    {
      name: "Kevin Durant",
      pointsPerGame: 25.6,
      assistsPerGame: 2.9,
      reboundsPerGame: 5.6,
    },
    {
      name: "Kawhi Leonard",
      pointsPerGame: 14.3,
      assistsPerGame: 2.0,
      reboundsPerGame: 6.3,
    },
  ];

  const arr1 = [
    {
      name: "Stephen Curry",
      pointsPerGame: 22.4,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3,
    },
  ];

  const arr2 = [
    {
      name: "Kevin Durant",
      pointsPerGame: 22.4,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3,
    },
    {
      name: "Stephen Curry",
      pointsPerGame: 7,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3,
    },
  ];

  const arr3 = [
    {
      name: "Kevin Durant",
      pointsPerGame: 10,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3,
    },
    {
      name: "Stephen Curry",
      pointsPerGame: 7,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3,
    },
  ];

  it("should not use Object.keys or Object.values", function () {
    const funcStr = highScoringPlayersA.toString();
    expect(funcStr).to.not.contain("Object.keys");
    expect(funcStr).to.not.contain("Object.values");
  });

  it("should only return names of players with more than 20 points", function () {
    expect(highScoringPlayersA(arr1)).to.eql(["Stephen Curry"]);
    expect(highScoringPlayersA(arr2)).to.eql(["Kevin Durant"]);
  });

  it("should return an array of the correct names", function () {
    expect(highScoringPlayersA(allStars)).to.eql([
      "Dwyane Wade",
      "LeBron James",
      "Carmelo Anthony",
      "Stephen Curry",
      "Russell Westbrook",
      "Kobe Bryant",
      "Kevin Durant",
    ]);
    expect(highScoringPlayersA(arr2)).to.eql(["Kevin Durant"]);
  });

  it("should return an empty array if no players have 20 or more points", function () {
    expect(highScoringPlayersA([])).to.eql([]);
    expect(highScoringPlayersA(arr3)).to.eql([]);
  });
});


```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: dataStructures-2-2
* language: javascript
* title: High Scoring Players B

### !question  

Right now your function looks for only players with 20 points per game. Modify your function such that it takes in a target number and filters accordingly.   
You may copy your code from `highScoringPlayers` to speed up the process.

```js
console.log(highScoringPlayers(allStars, 23)); //=> 
/*
  [
    "Dwyane Wade",
    "LeBron James",
    "Carmelo Anthony",
    "Kobe Bryant",
    "Kevin Durant",
  ]
*/

``` 

### !end-question

#### !placeholder

```js
function highScoringPlayersB(players, targetNum) {

}
```

#### !end-placeholder


### !tests

```js
describe("highScoringPlayersB", function () {
  const allStars = [
    {
      name: "Dwyane Wade",
      pointsPerGame: 23.7,
      assistsPerGame: 5.8,
      reboundsPerGame: 4.8,
    },
    {
      name: "Kyle Lowry",
      pointsPerGame: 13.5,
      assistsPerGame: 5.7,
      reboundsPerGame: 4.0,
    },
    {
      name: "LeBron James",
      pointsPerGame: 27.2,
      assistsPerGame: 6.9,
      reboundsPerGame: 7.2,
    },
    {
      name: "Paul George",
      pointsPerGame: 16.9,
      assistsPerGame: 3.1,
      reboundsPerGame: 6.2,
    },
    {
      name: "Carmelo Anthony",
      pointsPerGame: 24.9,
      assistsPerGame: 3.2,
      reboundsPerGame: 6.6,
    },
    {
      name: "Stephen Curry",
      pointsPerGame: 22.4,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3,
    },
    {
      name: "Russell Westbrook",
      pointsPerGame: 21.5,
      assistsPerGame: 2.6,
      reboundsPerGame: 5.6,
    },
    {
      name: "Kobe Bryant",
      pointsPerGame: 25.0,
      assistsPerGame: 4.7,
      reboundsPerGame: 5.2,
    },
    {
      name: "Kevin Durant",
      pointsPerGame: 25.6,
      assistsPerGame: 2.9,
      reboundsPerGame: 5.6,
    },
    {
      name: "Kawhi Leonard",
      pointsPerGame: 14.3,
      assistsPerGame: 2.0,
      reboundsPerGame: 6.3,
    },
  ];

  const arr1 = [
    {
      name: "Stephen Curry",
      pointsPerGame: 22.4,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3,
    },
  ];

  const arr2 = [
    {
      name: "Kevin Durant",
      pointsPerGame: 22.4,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3,
    },
    {
      name: "Stephen Curry",
      pointsPerGame: 7,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3,
    },
  ];

  const arr3 = [
    {
      name: "Kevin Durant",
      pointsPerGame: 10,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3,
    },
    {
      name: "Stephen Curry",
      pointsPerGame: 7,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3,
    },
  ];

  it("should not use Object.keys or Object.values", function () {
    const funcStr = highScoringPlayersB.toString();
    expect(funcStr).to.not.contain("Object.keys");
    expect(funcStr).to.not.contain("Object.values");
  });

  it("should return names of players based on the target number", function () {
    expect(highScoringPlayersB(allStars, 23)).to.eql([
      "Dwyane Wade",
      "LeBron James",
      "Carmelo Anthony",
      "Kobe Bryant",
      "Kevin Durant",
    ]);
    expect(highScoringPlayersB(allStars, 25), "based on 25 points").to.eql([
      "LeBron James",
      "Kobe Bryant",
      "Kevin Durant",
    ]);
  });

  it("should return an empty array if no players have points at or above the target", function () {
    expect(highScoringPlayersB([], 0)).to.eql([]);
    expect(highScoringPlayersB(arr3, 11)).to.eql([]);
  });
});


```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: dataStructures-2-3
* language: javascript
* title: High Scoring Players C

### !question  

Right now your function looks for only players with 20 points per game. Modify your function such that it takes in a target number and filters accordingly.   
You may copy your code from `highScoringPlayersB` to speed up the process.

```js
console.log(highScoringPlayersC(allStars, 25, "pointsPerGame")); //=> 
/*
  ["LeBron James", "Kobe Bryant", "Kevin Durant"]
*/

``` 

### !end-question

#### !placeholder

```js
function highScoringPlayersC(players, targetNum, category) {

}
```

#### !end-placeholder


### !tests

```js
describe("highScoringPlayersC", function () {
  const allStars = [
    {
      name: "Dwyane Wade",
      pointsPerGame: 23.7,
      assistsPerGame: 5.8,
      reboundsPerGame: 4.8,
    },
    {
      name: "Kyle Lowry",
      pointsPerGame: 13.5,
      assistsPerGame: 5.7,
      reboundsPerGame: 4.0,
    },
    {
      name: "LeBron James",
      pointsPerGame: 27.2,
      assistsPerGame: 6.9,
      reboundsPerGame: 7.2,
    },
    {
      name: "Paul George",
      pointsPerGame: 16.9,
      assistsPerGame: 3.1,
      reboundsPerGame: 6.2,
    },
    {
      name: "Carmelo Anthony",
      pointsPerGame: 24.9,
      assistsPerGame: 3.2,
      reboundsPerGame: 6.6,
    },
    {
      name: "Stephen Curry",
      pointsPerGame: 22.4,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3,
    },
    {
      name: "Russell Westbrook",
      pointsPerGame: 21.5,
      assistsPerGame: 2.6,
      reboundsPerGame: 5.6,
    },
    {
      name: "Kobe Bryant",
      pointsPerGame: 25.0,
      assistsPerGame: 4.7,
      reboundsPerGame: 5.2,
    },
    {
      name: "Kevin Durant",
      pointsPerGame: 25.6,
      assistsPerGame: 2.9,
      reboundsPerGame: 5.6,
    },
    {
      name: "Kawhi Leonard",
      pointsPerGame: 14.3,
      assistsPerGame: 2.0,
      reboundsPerGame: 6.3,
    },
  ];

  const arr1 = [
    {
      name: "Stephen Curry",
      pointsPerGame: 22.4,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3,
    },
  ];

  const arr2 = [
    {
      name: "Kevin Durant",
      pointsPerGame: 22.4,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3,
    },
    {
      name: "Stephen Curry",
      pointsPerGame: 7,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3,
    },
  ];

  const arr3 = [
    {
      name: "Kevin Durant",
      pointsPerGame: 10,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3,
    },
    {
      name: "Stephen Curry",
      pointsPerGame: 7,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3,
    },
  ];

  it("should not use Object.keys or Object.values", function () {
    const funcStr = highScoringPlayersC.toString();
    expect(funcStr).to.not.contain("Object.keys");
    expect(funcStr).to.not.contain("Object.values");
  });

  it("should only return names of players based on the target number and property", function () {
    expect(
      highScoringPlayersC(allStars, 25, "pointsPerGame"),
      "based on 25 points"
    ).to.eql(["LeBron James", "Kobe Bryant", "Kevin Durant"]);

    expect(
      highScoringPlayersC(allStars, 5, "assistsPerGame"),
      "based on 5 assists"
    ).to.eql(["Dwyane Wade", "Kyle Lowry", "LeBron James", "Stephen Curry"]);

    expect(
      highScoringPlayersC(allStars, 6, "reboundsPerGame"),
      "based on 6 rebounds"
    ).to.eql([
      "LeBron James",
      "Paul George",
      "Carmelo Anthony",
      "Kawhi Leonard",
    ]);
  });

  it("should return an empty array if property doesn't exist", function () {
    expect(highScoringPlayersC([], 12, "threePointsPerGame")).to.eql([]);
    expect(highScoringPlayersC(arr3, 11, "freeThrowsPerGame")).to.eql([]);
  });

  it("should return an empty array if number is too great", function () {
    expect(highScoringPlayersC([], 30, "pointsPerGame")).to.eql([]);
    expect(highScoringPlayersC(arr3, 10, "reboundsPerGame")).to.eql([]);
  });
});



```
### !end-tests

### !end-challenge