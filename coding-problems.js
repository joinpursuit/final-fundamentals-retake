/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.

const sumArray = (arr) => {
  return arr.reduce(function (a, b) {
    return a + b
  })
}

/////
//#2
//Write a function called `sumFirstThree` that takes in an array of numbers, and returns a sum of the first three numbers

const sumFirstThree = (arr) => {
  var firstThree = arr.slice(0, 3)
  return firstThree.reduce(function (a,b) {
    return a + b 
  })
};

/////
//#3
// Write a function called 'tripledPlusFive' that takes in array (that could contain any type of data), multiplies each number by 3, then adds 5 to each number, and returns a new array of those numbers
// for example, tripledPlusFive([1, 2, 3, 'hello', 4, 5]) would return [8, 11, 14, 17, 20]

const tripledPlusFive = (arr) => {
  var numOnly = []
  var output = []
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      numOnly.push(arr[i])
    }
  }
  numOnly.forEach(function(num) {
    output.push(num * 3 + 5)
  })
  return output
};

/////
//#4
//Write a function called 'secondHighest' that takes in an array of numbers and returns the second highest number from the array

const secondHighest = (arr) => {
  return arr.sort(function(a, b){return b-a})[1]
};

/////
///#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.

const indexMap = (arr) => {
  var output = []
  for(var i = 0; i < arr.length; i++) {
    output.push(arr[i] * i)
  }
  return output
};

/////
//#6
//Write a function `evenNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an even number of letters.

const evenNumStrs = (str) => {
  var strings = []
  for(var i = 0; i < str.length; i++) {
    if(typeof str[i] === 'string') {
      strings.push(str[i])
    }
  }
  return strings.filter(function (val) {
    return val.length % 2 === 0
  })
};

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

const changeBearPig = () => {
  document.getElementById('text1').replace('ManBearPig')
};

/////
//#8
//Write a function called 'catDog' that takes in an object that contains two properties: 'cat' and 'dog'. each property contains a name
// the function should return a string that combines the names of both the cat and dog
// for example, catDog({cat: 'Garfield', dog: 'Scooby'}) would return 'GarfieldScooby'
// catDog({cat: 'Simba', dog: 'Snoop'}) would return 'SimbaSnoop'

const catDog = ({cat, dog}) => {
  return cat + dog
};


/////
//#9
//Write a function called `eeee` that takes in a string and returns a new string that replaces every letter from the original string with the letter 'e'
// for example, eeee('watermelon') would return 'eeeeeeeeee'

const eeee = (str) => {
  return str.replace(/[A-Z]/gi, 'e')
};

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist, title, year){
  this.artist = artist;
  this.title = title;
  this.year = year;
};

Song.prototype.play = function() {
  return "Now playing " + this.title + this.artist;  
}

/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space

function Album(artist, title, year){
  this.artist = artist;
  this.title = title;
  this.year = year;
  this.songs = []
};

Album.prototype.addSong = function(song) {
  //push the newest song into the songs array
  this.songs.push(song)
}

Album.prototype.tracklist = function() {
  return songs
}

/////
//#12
//Write a function called 'firstAndLast' that takes in two strings and returns true if both the first AND last letters of both strings are the same, and returns false if they are not
// for example, firstAndLast('hello', 'hippo') would return true
// firstAndLast('hello', 'helicopter') would return false

const firstAndLast = (str1, str2) => {
  var str1fL = str1[0]
  var str2fL = str2[0]
  var str1lL = str1[str1.length - 1]
  var str2lL = str2[str2.length - 1]
  if (str1fL === str2fL && str1lL === str2lL) {
    return true
  } else {
    return false
  }
};

/////
//#13
// Write a function called 'reversed' that takes in two arrays
// it should return 'true' if the two arrays are reversed versions of each other. otherwise, it should return false
// for example, reversed([1, 2, 3], [3, 2, 1]) would return true
// reversed([1, 2, 3], [1, 3, 2]) would return false

//to solve this question i decided a simple solution would be to take one of the arrays reverse them & then compare the two arrays... 
// i console.log to check & make sure that they were equal & they were but the solution will not pass 
// 😖

const reversed = (a, b) => {
  var bRev = b.reverse()
  if(a === bRev) {
    return true
  }
};

/////
//#14
// write a function called `doubles` that takes in an array of numbers.
// it should return a new array that duplicates every number from the original array
// in other words, the new array should be twice as long and have two of each number
// then, multiply each number in the new array by 2
// for example, if the original array is [1, 2, 3, 4, 5], the array you return would be [2, 4, 6, 8, 10, 2, 4, 6, 8, 10]

const doubles = (arr) => {
  var newArr = []
  for(var i = 0; i < arr.length; i++) {
    newArr.push(arr[i])  
  }
  var joined = arr.concat(newArr)
  return joined.map(function(ele) {
    return ele * 2
  })
};





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