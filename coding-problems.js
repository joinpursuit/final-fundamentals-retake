/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = (arr) => arr.filter(val => typeof val === 'number').reduce((num1, num2) => num1 + num2);

/////
//#2
//Write a function called `sumFirstThree` that takes in an array of numbers, and returns a sum of the first three numbers
const sumFirstThree = () => null;

/////
//#3
// Write a function called 'tripledPlusFive' that takes in array (that could contain any type of data), multiplies each number by 3, then adds 5 to each number, and returns a new array of those numbers
// for example, tripledPlusFive([1, 2, 3, 'hello', 4, 5]) would return [8, 11, 14, 17, 20]
const tripledPlusFive = () => null;

/////
//#4
//Write a function called 'secondHighest' that takes in an array of numbers and returns the second highest number from the array
const secondHighest = () => null;

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = () => null;

/////
//#6
//Write a function `evenNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an even number of letters.
const evenNumStrs = () => null;

/////
//#7
//Note: there is no test for this function
//Given the below code, write a function called 'changeBearPig' that will change the word 'Dog' to 'ManBearPig':

`<html>
    <head>
        <script src="index.js" defer></script>
    </head>
    <body>
		<div>
      <p class="text1">Cat</p>
			<p id="text1" class="text1">Dog</p>
      <h1 id="text2" class="text2">Bear</h1>
		</div>
    </body>
</html>`

const changeBearPig = () => null;

/////
//#8
// write a function called `doubles` that takes in an array of numbers.
// it should return a new array that duplicates every number from the original array
// in other words, the new array should be twice as long and have two of each number
// then, multiply each number in the new array by 2
// for example, if the original array is [1, 2, 3, 4, 5], the array you return would be [2, 4, 6, 8, 10, 2, 4, 6, 8, 10]
const doubles = () => null;

/////
//#9
//Write a function called `eeee` that takes in a string and returns a new string that replaces every letter from the original string with the letter 'e'
// for example, eeee('watermelon') would return 'eeeeeeeeee'
const eeee = () => null;

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(){

};

/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(){

};

/////
//#12
//Write a function called 'firstAndLast' that takes in two strings and returns true if both the first AND last letters of both strings are the same, and returns false if they are not
// for example, firstAndLast('hello', 'hippo') would return true
// firstAndLast('hello', 'helicopter') would return false
const firstAndLast = () => null;

/////
//#13
// Write a function called 'reversed' that takes in two arrays
// it should return 'true' if the two arrays are reversed versions of each other. otherwise, it should return false
// for example, reversed([1, 2, 3], [3, 2, 1]) would return true
// reversed([1, 2, 3], [1, 3, 2]) would return false
const reversed = () => null;

/////
//#14
//Write a function called 'oddsCounts' that takes in an array of numbers and returns an object with a count of the number of odd numbers in the original array
const oddsCount = () => null;














//Ignore this:
module.exports = {
  sumArray,
  sumFirstThree,
  tripledPlusFive,
  secondHighest,
  doubles,
  indexMap,
  evenNumStrs,
  eeee,
  firstAndLast,
  reversed,
  oddsCount,
  Song,
  Album
};
