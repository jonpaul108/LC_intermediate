describe("backwards", function () {

  it("should not use String.split method", function () {
    const funcStr = backwards.toString();
    expect(funcStr).to.not.include('.split');
  })

  it("should return a string", function () {
    expect(backwards('lol')).to.be.a("string");
  });

   it("should return the given string reversed", function () {
     expect(backwards('olleh')).to.deep.eq('hello');
     expect(backwards('lla')).to.deep.eq('all')
     expect(backwards('sheer')).to.deep.eq('reehs')
     expect(backwards("elkniwt elkniwt")).to.deep.eq("twinkle twinkle");
   });
});

describe("everyOtherChar", function () {

  it("should not use String.split method", function () {
    const funcStr = everyOtherChar.toString();
    expect(funcStr).to.not.include(".split");
  });

  it("should return a string", function () {
    expect(everyOtherChar("lol")).to.be.a("string");
  });

  it("should return the expected string", function () {
    expect(everyOtherChar("shwoitmj")).to.deep.eq("swim");
    expect(everyOtherChar("gkloure")).to.deep.eq("glue");
    expect(everyOtherChar("abt")).to.deep.eq("at");
  });
});


describe("everyThirdChar", function () {
  it("should not use String.split method", function () {
    const funcStr = everyThirdChar.toString();
    expect(funcStr).to.not.include(".split");
  });

  it("should return a string", function () {
    expect(everyThirdChar("lolol")).to.be.a("string");
  });

  it("should return the expected string", function () {
    expect(everyThirdChar("tlka")).to.deep.eq("at");
    expect(everyThirdChar("oerwtyt")).to.deep.eq("two");
    expect(everyThirdChar("drteghlsdbiomweusfj")).to.deep.eq("jumbled");
  });
});

describe('signedIn', function () {

  const people = {
    Al: {
      signedIn: false,
      lastSignIn: '07/01/2021'
    },
    Jesse: {
      signedIn: true,
      lastSignIn: '07/10/2021'
    },
    Wilma: {
      signedIn: true,
      lastSignIn: '07/30/2021'
    },
    Fred: {
      signedIn: false,
      lastSignIn: '09/05/2015'
    }
  }
  it("should not use String.split method", function () {
    const funcStr = signedIn.toString();
    expect(funcStr).to.not.include(".split");
  });

    it("should not loop", function () {
    const funcStr = signedIn.toString();
    expect(funcStr).to.not.include('for');
  })

  it("should return a string", function () {
    expect(signedIn({
      Tom: {
        signedIn: false,
        lastSignIn: '07/01/2021'
      }
    }, 'Tom')).to.be.a("string");
  });

  it("should return a string containing the given name", function () {
    expect(signedIn(people, 'Wilma')).to.include("Wilma");
    expect(signedIn(people, 'Jesse')).to.include("Jesse");
      expect(signedIn({
      Tom: {
        signedIn: false,
        lastSignIn: '07/01/2021'
      }
    }, 'Tom')).to.include("Tom");
  })

  it("should return a string containing the correct logged in status", function () {
    expect(signedIn(people, 'Wilma')).to.include("signed in");
    expect(signedIn(people, 'Fred')).to.include("signed out");
      expect(signedIn({
      Tom: {
        signedIn: false,
        lastSignIn: '07/01/2021'
      }
    }, 'Tom')).to.include("signed out");
  })


  it("should return the expected message", function () {

    expect(signedIn(people, 'Fred')).to.deep.eq("Fred is currently signed out. They last signed in on 09/05/2015.");
    expect(signedIn(people, "Jesse")).to.deep.eq(
      "Jesse is currently signed in. They last signed in on 07/10/2021."
    );
    expect(
      signedIn(
        {
          Tom: {
            signedIn: false,
            lastSignIn: "07/01/2021",
          },
        },
        "Tom"
      )
    ).to.deep.eq(
      "Tom is currently signed out. They last signed in on 07/01/2021."
    );
  });

})

describe("oddOrEvenNums", function () {
  

  it("should return an array with the same length as the input array", function () {
    expect(oddOrEvenNums([3, 7, 9])).to.have.lengthOf(3);
    expect(oddOrEvenNums([3, 10, 9, 12])).to.have.lengthOf(4);
  })

  it("should return an array containing the expected strings", function () {
    expect(oddOrEvenNums([3, 7, 9])).to.eql(['odd: 3', 'odd: 7', 'odd: 9']);
    expect(oddOrEvenNums([3, 10, 9, 12])).to.eql(['odd: 3', 'even: 10', 'odd: 9', 'even: 12']);
    expect(oddOrEvenNums([100, 101, 90, 1002])).to.eql(['even: 100', 'odd: 101', 'even: 90', 'even: 1002']);
  })
})

describe("hasVacationRemaining", function () {

  const people = [
    {
      name: "Kim",
      vacationRemaining: false
    },
    {
      name: "Lee",
      vacationRemaining: true
    },
    {
      name: "Sarah",
      vacationRemaining: true
    },
    {
      name: "Ted",
      vacationRemaining: true
    },
    {
      name: "Martha",
      vacationRemaining: false
    },
  ];

  const people2 = [
    {
      name: "James",
      vacationRemaining: false,
    },
    {
      name: "Melvin",
      vacationRemaining: false,
    }
  ]
  it("should not use the split method", function () {
    const funcStr = hasVacationRemaining.toString();
    expect(funcStr).to.not.include('.split');
  })
  
  it("should return an array", function () {
    expect(hasVacationRemaining(people)).to.be.an('array');
  })

  it("should return an array of the same length as the input array", function () {
    expect(hasVacationRemaining(people)).to.be.an('array').have.lengthOf(5);
    expect(hasVacationRemaining([{name: 'Apple', vacationRemaining: true}])).to.be.an('array').have.lengthOf(1);
  })

  it("should return an array containing the expectd elements", function () {
    const answer1 = ['Kim', '*Lee*', '*Sarah*', '*Ted*', 'Martha'];
    expect(hasVacationRemaining(people)).to.eql(answer1);
    })
    expect(hasVacationRemaining(people2)).to.eql(['James', 'Melvin']);
    expect(hasVacationRemaining([{name: 'Apple', vacationRemaining: true}])).to.eql(['*Apple*'])
})

