# Coffee Wholesaler 

coffee company - you work for a coffee wholesaler. They are asking you to report from the data below about recent shipments.  
  
Use the below data structure to solve the following three problems:  
  
```js
var coffeeRegions = [
  {
    country: "Brazil",
    regions: [
      {
        region: "Bahia",
        containers: 2,
        "price per container": 1200,
      },
      {
        region: "São Paulo",
        containers: 1,
        "price per container": 1350,
      },
    ],
  },
  {
    country: "Ethiopia",
    regions: [
      {
        region: "Yirgacheffe",
        containers: 4,
        "price per container": 1300,
      },
      {
        region: "Sidamo",
        containers: 2,
        "price per container": 1250,
      },
    ],
  },
  {
    country: "Indonesia",
    regions: [
      {
        region: "Sumatra",
        containers: 5,
        "price per container": 1100,
      },
    ],
  },
];
```


### !challenge

* type: code-snippet
* id: dataStructures-intermediate-3-1
* language: javascript
* title: Total Countries And Regions

### !question 

Return an array of the countries and regions count. The first element of the array should be the total country count from which coffee was purchased. The second element should be the total region count from which coffee was purchased.

```js
console.log(totalCountriesAndRegions(coffeeRegions)); // =>[3, 5]

``` 

### !end-question

#### !placeholder

```js
function totalCountriesAndRegions(arr) {

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

### !challenge

* type: code-snippet
* id: dataStructures-intermediate-3-2
* language: javascript
* title: Total Spent

### !question  

Write a function 'total spent' that calculates the total spent for all coffee.  
   
Hint:  
- The amount of containers purchased is the value of the 'containers' property  

```js
console.log(totalSpent(coffeeRegions)); // => 16950

``` 

### !end-question

#### !placeholder

```js
function totalSpent(arr) {

}
```

#### !end-placeholder


### !tests

```js
describe("totalSpent", function () {

  const coffeeRegions = [
    {
      country: "Brazil",
      regions: [
        {
          region: "Bahia",
          containers: 2,
          "price per container": 1200,
        },
        {
          region: "São Paulo",
          containers: 1,
          "price per container": 1350,
        },
      ],
    },
    {
      country: "Ethiopia",
      regions: [
        {
          region: "Yirgacheffe",
          containers: 4,
          "price per container": 1300,
        },
        {
          region: "Sidamo",
          containers: 2,
          "price per container": 1250,
        },
      ],
    },
    {
      country: "Indonesia",
      regions: [
        {
          region: "Sumatra",
          containers: 5,
          "price per container": 1100,
        },
      ],
    },
  ];
  const coffeeRegions2 = [
    {
      country: "Panema",
      regions: [
        {
          region: "Boquete",
          containers: 1,
          "price per container": 1400,
        },
      ],
    },
  ];
  
  it("should return a number", function () {
    expect(totalSpent(coffeeRegions)).to.be.a('number');
  });

  it("should calculate correct value of all containers", function () {
    expect(totalSpent(coffeeRegions)).to.deep.eq(16950);
    expect(totalSpent(coffeeRegions2)).to.deep.eq(1400);
  })
})



```
### !end-tests

### !end-challenge

### !challenge

* type: code-snippet
* id: dataStructures-intermediate-3-3
* language: javascript
* title: Coffee Price Info

### !question  

 Return an object of the cheapest region based on price per container, most expensive region based on price per container, and average cost of coffee each coffee container rounded to the nearest whole number  
   
 Hints:   
  - To get the average, first sum all the container prices multiplied by the container amount, then divide by the total number of regions
  - To round to the nearest whole number, look up `Math.round` 


```js
console.log(coffeePriceInfo(coffeeRegions)); // => 16950

``` 

### !end-question

#### !placeholder

```js
function coffeePriceInfo(arr) {

}
```

#### !end-placeholder


### !tests

```js
describe("coffeePriceInfo", function () {
  const coffeeRegions = [
    {
      country: "Brazil",
      regions: [
        {
          region: "Bahia",
          containers: 2,
          "price per container": 1200,
        },
        {
          region: "São Paulo",
          containers: 1,
          "price per container": 1350,
        },
      ],
    },
    {
      country: "Ethiopia",
      regions: [
        {
          region: "Yirgacheffe",
          containers: 4,
          "price per container": 1300,
        },
        {
          region: "Sidamo",
          containers: 2,
          "price per container": 1250,
        },
      ],
    },
    {
      country: "Indonesia",
      regions: [
        {
          region: "Sumatra",
          containers: 5,
          "price per container": 1100,
        },
      ],
    },
  ];
  const coffeeRegions2 = [
    {
      country: "Panama",
      regions: [
        {
          region: "Boquete",
          containers: 1,
          "price per container": 1400,
        },
      ],
    },
  ];

  it("should return an object", function () {
    expect(coffeePriceInfo(coffeeRegions)).to.be.an("object");
  });

  it(`should return an object having "cheapest region" as a key` , function () {
    expect(coffeePriceInfo(coffeeRegions)).to.have.property("cheapest region");
  });

  it(`should return an object having "most expensive region" as a key`, function () {
    expect(coffeePriceInfo(coffeeRegions)).to.have.property(
      "most expensive region"
    );
  });

  it(`should return an object having "average" as a key`, function () {
    expect(coffeePriceInfo(coffeeRegions)).to.have.property(
      "average"
    );
  });
  
  it("should return an object having correct key value pairs", function () {
    expect(coffeePriceInfo(coffeeRegions)).to.eql({
      "cheapest region": "Sumatra",
      "most expensive region": "São Paulo",
      average: 1240,
    });
    expect(coffeePriceInfo(coffeeRegions2)).to.eql({
      "cheapest region": "Boquete",
      "most expensive region": "Boquete",
      average: 1400,
    });
  });

});



```
### !end-tests

### !end-challenge