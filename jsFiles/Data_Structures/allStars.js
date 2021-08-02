//Examine the data structure below. You will use the data structure to solve several problems.


// var allStars = [
//   {
//     name: "Dwyane Wade",
//     pointsPerGame: 23.7,
//     assistsPerGame: 5.8,
//     reboundsPerGame: 4.8,
//   },
//   {
//     name: "Kyle Lowry",
//     pointsPerGame: 13.5,
//     assistsPerGame: 5.7,
//     reboundsPerGame: 4.0,
//   },
//   {
//     name: "LeBron James",
//     pointsPerGame: 27.2,
//     assistsPerGame: 6.9,
//     reboundsPerGame: 7.2,
//   },
//   {
//     name: "Paul George",
//     pointsPerGame: 16.9,
//     assistsPerGame: 3.1,
//     reboundsPerGame: 6.2,
//   },
//   {
//     name: "Carmelo Anthony",
//     pointsPerGame: 24.9,
//     assistsPerGame: 3.2,
//     reboundsPerGame: 6.6,
//   },
//   {
//     name: "Stephen Curry",
//     pointsPerGame: 22.4,
//     assistsPerGame: 6.9,
//     reboundsPerGame: 4.3,
//   },
//   {
//     name: "Russell Westbrook",
//     pointsPerGame: 21.5,
//     assistsPerGame: 2.6,
//     reboundsPerGame: 5.6,
//   },
//   {
//     name: "Kobe Bryant",
//     pointsPerGame: 25.0,
//     assistsPerGame: 4.7,
//     reboundsPerGame: 5.2,
//   },
//   {
//     name: "Kevin Durant",
//     pointsPerGame: 25.6,
//     assistsPerGame: 2.9,
//     reboundsPerGame: 5.6,
//   },
//   {
//     name: "Kawhi Leonard",
//     pointsPerGame: 14.3,
//     assistsPerGame: 2.0,
//     reboundsPerGame: 6.3,
//   },
// ];

//Your scouting manager only wants you to pay attention to players who score at least 20 points per game. Create a function that returns an array of player names who fit this description.

function highScoringPlayersA(players) {
  const p = players.reduce((acc, el) => {
    if (el.pointsPerGame >= 20) {
      return [...acc, el.name];
    } else {
      return acc;
    }
  }, []);
  return p;
};

//Right now your function looks for only players with 20 points per game. Modify your function such that it takes in a target number and filters accordingly. (You may copy your code from `highScoringPlayers` to speed up the process).


function highScoringPlayersB(players, target) {
  
    const p = players.reduce((acc, el) => {
      if (el.pointsPerGame >= target) {
        return [...acc, el.name];
      } else {
        return [...acc];
      }
    }, []);
    return p;
};

//Now, your function takes in a third argument that indicates which property you are interested in, and returns a filtered array based on the property.

function highScoringPlayersC(players, target, prop) {
  const p = players.reduce((acc, el) => {
    if (el[prop] >= target) {
      return [...acc, el.name];
    } else {
      return [...acc];
    }
  }, []);
  return p;
};