// coffee company - you work for a coffee wholesaler. They are asking you to report from the data below about recent shipments.

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

//Return an array of the countries and regions count. The first element of the array should be the amount of countries bought from. The second element should be the total regions bought from

  function totalCountriesAndRegions(arr) {
    const countries = arr.length;
    const regions = arr.reduce((acc, curr) => {
      return acc += curr.regions.length;
    }, 0)
    return [countries, regions];
  }


  
  //**continue to use the data from problem 1
  //Write a function 'total spent' that calculates the total spent for all coffee. 
  //**the amount of containers purchased is the value of the 'containers' property

function totalSpent(arr) {

}
  



  // console.log('totalSpent:', total); // =>16950


 
    //Return an object of the cheapest region based on price per container, most expensive region based on price per container, and average cost of coffee each coffee container rounded down to the nearest whole number
    //To get the average, first sum all the container prices by th container amount, then divide by the total number of regions

function coffeePriceInfo(arr) {
  let cheapest = arr[0].regions[0];
  let expensive = arr[0].regions[0];
  let sum = 0;
  let count = 0;

  for (let obj of arr) {
    const curr = obj.regions;
    for (let reg of curr) {
      if (cheapest["price per container"] > reg["price per container"]) {
        cheapest = reg;
      }
      if (expensive["price per container"] < reg["price per container"]) {
        expensive = reg;
      }
      sum += reg["price per container"];
      count++;
    }
  }

  return {
    "cheapest region": cheapest.region,
    "most expensive region": expensive.region,
    average: sum / count,
  };
}

  // console.log('coffeePrices:', highLowAverage);
    /* 
        {
          'cheapest region': 'Sumatra', 
          'most expensive region': 'São Paulo', 
          average: 1210,
        }
    */


