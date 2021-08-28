# Coffee Wholesaler 

You work for a coffee wholesaler. They are asking you to report from the data below about recent shipments.  
###### 
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

Given an array of coffee information `arr`, return an array of the countries and regions count. The first element of the array should be the total country count from which coffee was purchased. The second element should be the total region count from which coffee was purchased.

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
describe("totalCountriesAndRegions", function () {
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

  it("should return an array", function () {

    expect(totalCountriesAndRegions(coffeeRegions)).to.be.an('array');
  })

  it("should return an array having length of two", function () {
    expect(totalCountriesAndRegions(coffeeRegions)).to.have.lengthOf(2);
  })

  it("should return an array having correct countries and regions count", function () {
    expect(totalCountriesAndRegions(coffeeRegions)).to.eql([3, 5]);
    expect(totalCountriesAndRegions(coffeeRegions2)).to.eql([1, 1])
  })

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
   
Note:  
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

 Return an object of the cheapest region based on price per container, most expensive region based on price per container, and average cost of coffee based on every price per container of all regions.
   
 Note:   
  - To get the average, first sum all the container prices, then divide by the total number of regions
 


```js
console.log(coffeePriceInfo(coffeeRegions)); // => 
/*
{
  "cheapest region": "Sumatra",
  "most expensive region": "São Paulo",
  average: 1240,
}
*/
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
  
  it("should return the expected object", function () {
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