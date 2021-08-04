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
    expect(tookVacation([1, 10, 10, 3])).to.be.an('array').have.lengthof(3)
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

  const listOfNums3 = [
    [-1, -1, -1],
    [-2, -2, -2],
  ];


  it("should return a number", function (){
    expect(greatestSum(listOfNums)).to.be.a("number");
  })

  it("should return the expected sum", function () {
    expect(greatestSum(listOfNums)).to.deep.eq(96);
    expect(greatestSum([[5, 8, 3]])).to.deep.eq(16);
    expect(greatestSum(listOfNums2)).to.deep.eq(100);
    expect(greatestSum(listOfNums3)).to.deep.eq(-3);
  })
})

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
    messageB: 'animals.',
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
      "I love animals."
    );
  })
})

describe('indexOrNone', function () {

 const wordArr = ["aim", "tail", "series", "kitten", "fruit", "paper"];



  it("should return an array", function () {
    expect(indexOrNone(wordArr, 'a')).to.be.an("array");
  })

  it("should return the expected array", function () {
    expect(indexOrNone(wordArr, 'e')).to.eql([0, 1, 'none', 'none', 'none', 1]);
    expect(indexOrNone(wordArr, "a")).to.eql([
      "none",
      "none",
      1,
      4,
      "none",
      3,
    ]);
    expect(indexOrNone(['watermelon'], 'w')).to.eql([0])
    expect(indexOrNone(['jet', 'z'])).to.eql(['none']);
  })
})


describe('newspaperDelivery', function () {
  it("should return an array", function () {
    expect(newspaperDelivery([101, 100, 99, 98])).to.be.an('array');
  })

  it("should return the expeted array of odd numbers", function () {
    expect(newspaperDelivery([101, 100, 99, 98])).to.eql([101, 99]);
    expect(newspaperDelivery([5, 6])).to.eql([5]);
    expect(newspaperDelivery([10, 11, 12, 13, 14, 15, 16])).to.eql([11, 13, 15]);
  })
})

describe("spellChecker", function () {
  it("should return an array", function () {
    expect(spellChecker('wonderful', 'womdelful')).to.be.an("array");
  })

  it("should return the expected index numbers in an array given equal length words", function () {
    expect(spellChecker('wonderful', 'womdelful')).to.eql([2, 5]);
    expect(spellChecker("transluscent", "trensloscint")).to.eql([2, 6, 9]);
  })

  it("should return the expected index numbers given different length words", function () {
      expect(spellChecker("four", "for")).to.eql([2, 3]);
      expect(spellChecker("whole", "hole")).to.eql([0,1,2,3,4]);
  })

  it("should return an empty array if the words have the same spelling", function () {
      expect(spellChecker("four", "four")).to.eql([]);
      expect(spellChecker("whole", "whole")).to.eql([]);
  })
})


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
    expect(hungryCaterpillars(eatingHabits, 'ice cream')).to.deep.eq(2);
    expect(hungryCaterpillars(eatingHabits, 'grapefruit')).to.deep.eq(0);
  })
})

