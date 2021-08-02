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
     expect(chubbyBunny(players2, responses2, "Kelly")).to.deep.eq("super");
     expect(chubbyBunny(players1, responses2, "Tim")).to.deep.eq("meh");
   });

  
})


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
    expected(wordClouds(words1, "donuts")).to.be.a("string");
  });

  it("Should return one of four possible words equating to a size", function () {
    expected(["huge", "medium", "small", "large"]).to.include(
      wordClouds(words1, "sprinkles")
    );
    expected(["huge", "medium", "small", "large"]).to.include(
      wordClouds(words1, "donuts")
    );
    expected(["huge", "medium", "small", "large"]).to.include(
      wordClouds(words1, "candy")
    );
    expected(["huge", "medium", "small", "large"]).to.include(
      wordClouds(words2, "d")
    );
  });

  it("Should return the correct word size", function () {
    expected(wordClouds(words1, "donuts")).to.deep.eq("huge");
    expected(wordClouds(words1, "candy")).to.deep.eq("medium");
    expected(wordClouds(words2, "d")).to.deep.eq("small");
    expected(wordClouds(words2, "b")).to.deep.eq("large");
  });
});

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
    row2: ["empty", "pawn", "pawn", "empty", "empty", "pawn", "bishop", "pawn"],
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
    row4: ["pawn", "empty", "pawn", "pawn", "empty", "", "empty", "bishop"],
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
    row7: ["pawn", "pawn", "empty", "empty", "bishop", "pawn", "pawn", "pawn"],
    row8: ["rook", "empty", "empty", "king", "empty", "rook", "queen", "empty"],
  };

  it("should return the input object", function () {
    const obj = {...chessRows};
    expect(chessSabotage(obj, "row1")).to.eq(obj);
  })

  it("should modify the correct row", function () {
    const obj = { ...chessRows };
    expect(chessSabotage({...obj}, "row4").row4).to.not.eql(obj.row4);
    expect(chessSabotage({...obj}, "row2").row3).to.eql(obj.row3)
  });

    it("should modify the correct row", function () {
      const obj = { ...chessRows };
      expect(chessSabotage({ ...obj }, "row4").row4).to.not.eql(obj.row4);
      expect(chessSabotage({ ...obj }, "row3").row3).to.eql(obj.row3);
    });

  it("should update the specified array's 'pawn's changed to 'queen' ", function () {
      const obj = { ...chessRows };
      expect(chessSabotage({ ...obj }, "row4").row4).to.not.eql(obj.row4);
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
    const obj = [...info1];
    pageNumbers([...words1], obj);
    expect(obj).to.eql(info1);
  }); 

  it("should return the expected array given the example inputs", function () {
    expect(pageNumbers([...words1], { ...info1 })).to.eql([400, 0, 10, 45, 0, 0, 3]);
  });

  it("should return the expected array with any valid inputs", function () {
    expect(pageNumbers([...words1], { ...info2 })).to.eql([400, 0, 10, 0, 0, 0, 3]);
    expect(pageNumbers([...words1], [...info2])).to.eql([400, 0, 10, 0, 0, 0, 3]);
    expect(pageNumbers(['gravity', 'cheeky', 'figurative'], {figurative:1, gravity: 1 })).to.eql([1,0,1])
  })

});




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
    banana: [],
    dental: []
  }

  it("should return an object", function () {
    expect(warehouseBins([...unsortedItems1], { ...binNames1 })).to.be.an("object");
  });

  it("should not use Object.keys, Object.values, or Objects.entries", function () {
    const funcStr = warehouseBins.toString();
    expect(funcStr).to.not.include("Object.keys");
    expect(funcStr).to.not.include("Object.values");
    expect(funcStr).to.not.include("Object.entries");
  });



  it("should return the expected object based on the example inputs", function () {
    expect(warehouseBins([...unsortedItems1 ], { ...binNames1 })).to.eql({
      homegoods: ["desk", "lamp", "towel", "bed frame"],
      electronics: ["laptop", "mouse"],
      skincare: ["moisturizer", "sunscreen"],
    });
  });

  it("should return the expected modified object with any valid inputs", function () {
     expect(warehouseBins([...unsortedItems1], { ...binNames1 })).to.eql({
       homegoods: ["desk", "lamp", "towel", "bed frame"],
       electronics: ["laptop", "mouse"],
       skincare: ["moisturizer", "sunscreen"],
     });
     expect(warehouseBins([...unsortedItems3], { ...binNames1 })).to.eql({
       homegoods: ["table", "couch", "towel"],
       electronics: ["laptop", "ipad"],
       skincare: ["moisturizer"],
     });
     expect(warehouseBins([...unsortedItems2], { ...binNames2 })).to.eql({
       fruit: ["banana", "apple"],
       dental: ["toothbrush"],
     });
  });
});

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
    expect(warehouseBins([...attempts])).to.deep.eq(3);
  });

  it("should return the expected number", function () {
    expect(
      warehouseBins([{ day: "Tuesday", action: "brought the paper" }])
    ).to.deep.eq(1);
  
    expect(
      warehouseBins([{ day: "Saturday", action: "went to sleep" }])
    ).to.deep.eq(0);
  
    expect(
      warehouseBins([
        { day: "Friday", action: "went to sleep" },
        { day: "Saturday", action: "brought the paper" },
        { day: "Saturday", action: "brought the paper" },
        { day: "Sunday", action: "brought the paper" },
        { day: "Saturday", action: "brought the paper" },
      ])
    ).to.deep.eq(4);
  });

});



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
    expect(receivedTreats([...robotTalk])).to.be.an("array");
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