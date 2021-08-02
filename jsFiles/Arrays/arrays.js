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




