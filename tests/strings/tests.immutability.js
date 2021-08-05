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

