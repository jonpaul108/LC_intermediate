describe("backwards", function () {

  it("should not use String.split method", function () {
    const funcStr = backwards.toString();
    expected(funcStr).to.not.include('.split');
  })

  it("should return a string", function () {
    expected(backwards('lol')).to.be.a("string");
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
    expected(funcStr).to.not.include(".split");
  });

  it("should return a string", function () {
    expected(everyOtherChar("lol")).to.be.a("string");
  });

  it("should return the expected string", function () {
    expect(backwards("shwoitmj")).to.deep.eq("swim");
    expect(backwards("gkloure")).to.deep.eq("glue");
    expect(backwards("abt")).to.deep.eq("at");
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
    expect(everyThirdChar("drteghlsdbiomweusfj")).to.deep.eq("jumbled");
    expect(everyThirdChar("oerwtyt")).to.deep.eq("two");
    expect(everyThirdChar("tlka")).to.deep.eq("at");
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
    expect(singedIn({
      Tom: {
        signedIn: false,
        lastSignIn: '07/01/2021'
      }
    }, 'Tom')).to.be.a("string");
  });

  it("should return a string containing the given name", function () {
    expect(signedIn(people, 'Wilma')).to.include("Wilma");
    expect(signedIn(people, 'Jesse')).to.include("Jesse");
      expect(singedIn({
      Tom: {
        signedIn: false,
        lastSignIn: '07/01/2021'
      }
    }, 'Tom')).to.include("Tom");
  })

  it("should return a string containing the correct logged in status", function () {
    expect(signedIn(people, 'Wilma')).to.include("signed in");
    expect(signedIn(people, 'Fred')).to.include("signed out");
      expect(singedIn({
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
    signedIn
  });

})

describe("oddOrEvenNums")

