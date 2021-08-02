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

