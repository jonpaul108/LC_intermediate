//A group of kids of mixed ages are playing the game 'chubby bunny. Based on how many marshmallows a child can put in their mouths, return how  impressed the other children will be

/*
  The function has three inputs.
  1) An object containing kids' names (players) as keys and how many marshmallows they can put in their mouths.
  2) An object containing responses based on how many marshmallows the child put in their mouths
  3) the target child's name
*/



var name1 = "Kim";
var actual1 = chubbyBunny(children, responses, name1);



//chess sabotage
//given an object of arrays and a key, replace all the 'pawn' pieces at the key with 'queen'
//return the updated array (do not make a copy)



function chessSabotage(board) {

}

//Word Clouds - intermediate
//
//"Word clouds (also known as text clouds or tag clouds) work in a simple way: the more a specific word appears in a source of textual data (such as a speech, blog post, or database), the bigger and bolder it appears in the word cloud." link: https://boostlabs.com/blog/what-are-word-clouds-value-simple-visualizations/

/// Given a list of words and a target word, based on how many times the given word appears, return if the word will be 'huge', 'large', 'medium', or 'small.'

/* notes:
  - The list will always contain four unique strings
  - The list wil always have a length of 10
*/
/*
    huge: appears 4 times
    large: appears 3 times
    medium: appears 2 times
    small: appears 1 time
  */

var words = [
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

var actual1 = wordClouds(words, "donuts");
var expected1 = "huge";

var actual2 = wordClouds(words, "candy");
var expected = "medium";





// page numbers 1
/*
Given an array of strings (words) and object containing book information (info), return a new array of the page numbers where the words could be found. The page numbers in the new array should match the order of the words in the given words array.
If the word is not in the info object, put a zero in its place in the new array.

Each key in the given object will have a number as a value.
*/

function pageNumbers(words, info) {

}


//Warehouse Bins

/*
  Given an object of empty bins (arrays) and an array of items with their type (items), move the item name to the correct bin based on the type. You can assume the type of item will always have a corresponding bin.

  ****Do not hardcode check the bin names and do not loop over the objects
 */

var unsortedItems = [
  {item: 'desk', type: 'homegoods'},
  {item: 'lamp', type: 'homegoods'},
  {item: 'laptop', type: 'electronics'},
  {item: 'moisturizer', type: 'skincare'},
  {item: 'towel', type: 'homegoods'},
  {item: 'mouse', type: 'electronics'},
  {item: 'sunscreen', type: 'skincare'},
  {item: 'bed frame', type: 'homegoods'}
]

var binNames = {
  homegoods: [],
  electronics: [],
  skincare: [],
};

function warehouseBins(items, bins) {

}

console.log(warehouseBins(unsortedItems, binNames)); // ==> 
/*
  {
    homegoods: ['desk', 'lamp', 'towel', 'bed frame'],
    electronics: ['laptop', 'mouse'],
    skincare: ['moisturizer', 'sunscreen'],
  }
*/

//--------------------------------------

//How many treats

/* A dog is being trained to fetch the paper. When the dog takes the right action, the dog receives a treat. Otherwise, the dog receives nothing.

Given an array of days the dog attempted to fetch the paper, return how many times the dog received a treat. You know the dog performed the correct action when the description says 'brought the paper.' 
*/

var attempts = [
  {day: 'Monday', action: 'ran around the yard'},
  {day: 'Tuesday', action: 'barked at strangers'},
  {day: 'Wednesday', action: 'brought the paper'},
  {day: 'Thursday', action: 'dug a hole'},
  {day: 'Friday', action: 'brought the paper'},
  {day: 'Saturday', action: 'brought the paper'},
  {day: 'Sunday', action: 'went to sleep'},
]

function receivedTreats(actions) {

}

console.log(howManyTreats(attempts)); //==> 3



//-----------
 Killer Robots

/*
There are killer robots on the loose! And they look like all the other robots. There is only one way to tell the robots apart: by what they say. 
All robots speak in 'beep' and 'boop'. A killer robot will always speak in a string that contains 'beeps' and 'boops' with a length that is a multiple of 4, while a non-killer robot will never speak in'beeps' and 'boops' in a string that is a multiple of four.

Given a an array of robots and their strings, find the killer robots! Return a array of true and false. True marks a killer robot and false marks a normal robot.

Note: 
- order of beep and boop does not matter
- 
 */

var robotTalk = [
  {str: 'boop beep boop'},
  {str: 'boop boop beep beep boop boop beep beep'},
  {str: 'beep beep beep beep boop boop boop'},
  {str: 'boop boop boop boop beep beep beep beep boop boop boop boop'},
  {str: 'boop beep boop beep boop'},
  {str: 'boop beep boop beep boop boop beep boop beep boop boop beep boop beep boop boop beep boop beep boop beep'}
]

function killerRobots(strings) {

}

console.log(killerRobots(robotTalk)); //=> [false, true, false, true, false, false]


//--------------------




//----------------------------

//organize billiards 1 - array - intermediate

//Given an array of arrays, return true if the 8 ball is in the correct starting place. If not, return false.
//*In billiards, the 8 ball should be placed in the middle of the third row.* 


var billiardsSetup1 = [
  [1],
  [2,15],
  [4,9,10],
  [6,3,15,14],
  [13,11,12,5,7,8]
]; //=> false

var billiardsSetup2 = [
  [1],
  [2,9],
  [4,8,10],
  [6,3,15,14],
  [13,11,12,5,7,15]
]; //=> true


function readyToPlay(arr) {
  
}

//Weather predictions
//What day
//Sally lives in a very rainy area. She's trying to find the day most likely to be sunny.
//Weather prediction takes in an object containing two sources of weather info. If both sources contain Weather info predicting the same day to be 'sunny', return the day. If no days match, return 'replan'

//info:
// - at most, one sunny day will match 
// - it is possible no days will match.
// - both sources will always have the same length


function weatherPrediction(sources) {

}

//shouldWeWalk
  //Given a distance in miles and an array of people's names and how far they are willing to walk, return true if all people are willing to walk that distance, and false if anyone is not willing to walk that distance.
  
  var people = [
    {
      name: 'Tom',
      'walking distance': 4,
    },
    {
      name: 'Shelly',
      'walking distnace': 3
    },
    {
      name: 'Wandile',
      'walking distance': 5,
    },
    {
      name: 'Geoffrey',
      'walking distance': 2
    }
  ];

function shouldWeWalk(people, distance) {
    
  }
  
  var distance = 3;
  var expected = false;
  
  //should we walk 2
    //return a new array of the people who are willing to walk that distance
    
  var distance = 4;
var expected = ['Tom', 'Wandile'];
  
//Who will walk?

//similar to the aobve, this tie return an aray of people who will walk
