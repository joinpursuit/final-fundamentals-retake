/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
function sumArray(arr) {
  var sum = 0;
   arr.forEach(function(val){
     if(typeof val === 'number') {
       sum += val;
     }
  })
  return sum
}

sumArray([1, 'cat', 2, 'dog', 3, {hello: 'world'}, 4]);

/////
//#2
//Write a function called `sumFirstThree` that takes in an array of numbers, and returns a sum of the first three numbers


function sumFirstThree(arr) {
  var sum = 0;
  for(var i = 0; i < arr[2]; i++){
    sum += arr[i]
  }
return sum;
}

sumFirstThree([1, 2, 3, 4]);

/////
//#3
// Write a function called 'tripledPlusFive' that takes in array (that could contain any type of data), multiplies each number by 3, then adds 5 to each number, and returns a new array of those numbers
// for example, tripledPlusFive([1, 2, 3, 'hello', 4, 5]) would return [8, 11, 14, 17, 20]
const tripledPlusFive = (arr) => arr.filter(val => typeof val === 'number').map((int) => (int * 3) + 5);
tripledPlusFive([1, 'cat', 2, 'dog', 3, {hello: 'world'}, 4]);

/////
//#4
//Write a function called 'secondHighest' that takes in an array of numbers and returns the second highest number from the array


function secondHighest(arr){
  arr.sort(function(a,b){
    return b-a;
 });
}

secondHighest([1, 2, 3, 4, 5]);

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
var indexMap = function(arr) {
  var oldArr = arr.map(function(val, idx){
    return (val * idx)
  })
  return oldArr;
}

indexMap([10, 30, 20, 40, 100]);

/////
//#6
//Write a function `evenNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an even number of letters.
function evenNumStrs (arr) {
var evened = arr.filter(function(val) {

     return val.length % 2 === 0;

  })
  return evened
}

evenNumStrs([1, 'hey', 2, 3, 4, 'hi', 5, 6, 'hello', 7]);

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

// Note: because of test error my answer is commented out.

// function changeBearPig() {
//   document.getElementById('text1').innerHTML = 'ManBearPig';
// }
//
// changeBearPig();

/////
//#8
//Write a function called 'catDog' that takes in an object that contains two properties: 'cat' and 'dog'. each property contains a name
// the function should return a string that combines the names of both the cat and dog
// for example, catDog({cat: 'Garfield', dog: 'Scooby'}) would return 'GarfieldScooby'
// catDog({cat: 'Simba', dog: 'Snoop'}) would return 'SimbaSnoop'
// const catDog = () => null;
function catDog(obj){
  return obj.cat + obj.dog

}
catDog({cat: 'Garfield', dog: 'Scooby'});

/////
//#9
//Write a function called `eeee` that takes in a string and returns a new string that replaces every letter from the original string with the letter 'e'
// for example, eeee('watermelon') would return 'eeeeeeeeee'
function eeee(str) {
  var eString = str.split('')
  for(var i = 0; i < eString.length; i++) {
    eString[i] = 'e'
  }
  return eString.join('')
}

eeee('watermelon');


/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist, title){
  this.title = title;
  this.artist = artist;
};

Song.prototype.play = function() {
  return `Now playing ${this.title} by ${this.artist}`
};

new Song('The Baha Men', 'Who Let The Dogs Out?', 1996);
/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(artist, title, year){
  this.title = title;
  this.artist = artist;
  this.year = year;
  this.songs = [];
};

Album.prototype.addSong = function(song) {
  this.songs.push(song);
};

Album.prototype.tracklist = function () {
  return this.songs.reduce(function (str, song) {
    return str.length > 0 ? str + ', ' + song.title : str + song.title;
  }, '');
};

Album('Childish Gambino', 'Awaken, My Love!', 2016);


/////
//#12
//Write a function called 'firstAndLast' that takes in two strings and returns true if both the first AND last letters of both strings are the same, and returns false if they are not
// for example, firstAndLast('hello', 'hippo') would return true
// firstAndLast('hello', 'helicopter') would return false

var firstAndLast = function(str1, str2){
   var strNew1 = str1.split("")
   var strNew2 = str2.split("")
  if(strNew1[0] === strNew2[0]  && strNew1[strNew1.length-1] === strNew2[strNew2.length-1] ){
     return true;
   }else{
    return false;
  }
 }

firstAndLast('hello', 'hippo');

/////
//#13
// Write a function called 'reversed' that takes in two arrays
// it should return 'true' if the two arrays are reversed versions of each other. otherwise, it should return false
// for example, reversed([1, 2, 3], [3, 2, 1]) would return true
// reversed([1, 2, 3], [1, 3, 2]) would return false
var reversed = function(arr1, arr2) {
  for(var i = arr1.length - 1; i > 0; i--) {
    for(var k = 0; arr2.length; i++) {
      if(arr1[i] === arr2[k]){
        return true;
      } else {
        return false
      }
    }
  }
};

/////
//#14
// write a function called `doubles` that takes in an array of numbers.
// it should return a new array that duplicates every number from the original array
// in other words, the new array should be twice as long and have two of each number
// then, multiply each number in the new array by 2
// for example, if the original array is [1, 2, 3, 4, 5], the array you return would be [2, 4, 6, 8, 10, 2, 4, 6, 8, 10]
function doubles (arr) {
  var doubled = arr.map(function(val){
    return val * 2;
  })
  return doubled.concat(doubled)
}

doubles([100, 100, 100, 100])
















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
  catDog,
  Song,
  Album
};
