describe('wordClouds', function () {
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

  const words2 = [
    'a',
    'a',
    'a',
    'a',
    'b',
    'b',
    'b',
    'c',
    'c',
    'd'
  ]



  it('Should return a string', function () {
    expected(wordClouds(words1, 'donuts')).to.be.a('string');
  })

    it("Should return one of four possible words equating to a size", function () {
      expected(['huge', 'medium', 'small', 'large']).to.include(wordClouds(words1, 'sprinkles'));
      expected(['huge', 'medium', 'small', 'large']).to.include(wordClouds(words1, 'donuts'));
      expected(['huge', 'medium', 'small', 'large']).to.include(wordClouds(words1, 'candy'));
      expected(['huge', 'medium', 'small', 'large']).to.include(wordClouds(words2, 'd'));
      
    });

  it("Should return the correct word size", function () {
    expected(wordClouds(words1, "donuts")).to.deep.eq("huge");
    expected(wordClouds(words1, "candy")).to.deep.eq("medium");
    expected(wordClouds(words2, "d")).to.deep.eq("small");
    expected(wordClouds(words2, "b")).to.deep.eq("large");
  });

})