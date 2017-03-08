/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.

const sumArray = (arr) => arr.filter(val => typeof val === 'number').reduce((val1, val2) => val1 + val2);

/////
//#2
//Write a function called `sumFirstThree` that takes in an array of numbers, and returns a sum of the first three numbers

// Write a function that takes in an array
// sum the first 3 numbers in the arr

// const sumFirstThree = () => null;

const sumFirstThree = function(arr){
  var output = 0
   for(var x=0; x<= arr[2];x++){
     output += x
     console.log('Current X is:',x)
    }
   return output
}

/////
//#3
// Write a function called 'tripledPlusFive' that takes in array (that could contain any type of data), multiplies each number by 3, then adds 5 to each number, and returns a new array of those numbers
// for example, tripledPlusFive([1, 2, 3, 'hello', 4, 5]) would return [8, 11, 14, 17, 20]


// const tripledPlusFive = () => null;

//write a funtion that takes in a array (use arugments)
// first loop over the original numbers, mutiple by 3
// lastly add 5 to your new number

const tripledPlusFive = function(arr){
  var initial = arr.filter(val => typeof val === 'number')
  var output = initial.map((num) => (num * 3))
  var secondOutput = output.map((num) => (num + 5))
   return secondOutput 
 }


/////
//#4
//Write a function called 'secondHighest' that takes in an array of numbers and returns the second highest number from the array


//loop over an array using map or for loop
// check high or lower with if statement 


const secondHighest = (arr) =>arr.map((num) => (if(num>)))

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.

let indexMap = (arr) => arr.map((num, indx) => num * indx);

/////
//#6
//Write a function `evenNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an even number of letters.
// const evenNumStrs = () => null;

// filter numbers from the array
// then by even items
const evenNumStrs = (arr) => arr.filter(val => typeof val === 'string').filter((val1) => val1.length % 2 === 0);

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

// create a function that selects a given Id
// reassign the id to 'ManBearPig'
const changeBearPig = () => {
   document.getElementById('text1').innerHTML = 'ManBearPig';
};

/////
//#8
//Write a function called 'catDog' that takes in an object that contains two properties: 'cat' and 'dog'. each property contains a name
// the function should return a string that combines the names of both the cat and dog
// for example, catDog({cat: 'Garfield', dog: 'Scooby'}) would return 'GarfieldScooby'
// catDog({cat: 'Simba', dog: 'Snoop'}) would return 'SimbaSnoop'
 const catDog = function(objOne,objTwo){
  let obj = objOne
  return obj.cat + obj.dog
 };


//THis works!!!!



/////
//#9
//Write a function called `eeee` that takes in a string and returns a new string that replaces every letter from the original string with the letter 'e'
// for example, eeee('watermelon') would return 'eeeeeeeeee'


//Write a function that takes in a string 
//split the given string
//replace every letter with an e
//join the string back together

const eeee = (str) =>{
  var output = str.split('')
   for(var x =0;x <output.length;x++){
    output[x] = 'e';
   }
  return output.join()
 
  };


/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song


// Create a song function
// pass artist,title,year in as arguments
// Make a plat prototype that return Nates string
// Use template literal to refer to 'this' function and concat the title & artist

function Song(artist, title,year){
  this.title = title;
  this.artist = artist;
  this.year = year;
};
Song.prototype.play = function() {
  return `now playing ${this.title} by ${this.artist}`
};

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

Album.prototype.tracklist = function() {
  return this.songs.reduce((str, song) => {
    return str.length > 0 ? str + ', ' + song.title : str + song.title;
  }, '');
}




/////
//#12
//Write a function called 'firstAndLast' that takes in two strings and returns true if both the first AND last letters of both strings are the same, and returns false if they are not
// for example, firstAndLast('hello', 'hippo') would return true
// firstAndLast('hello', 'helicopter') would return false

//split the string into an arrays
//check the first letter in the array
// check the last letter in the array
// if statement to return true or false 


let firstAndLast = function(str1, str2){
  var strOne = str1.split("")
  var strTwo = str2.split("")
  if(strOne[0] === strTwo[0]  && strOne[strOne.length-1] === strTwo[strTwo.length-1] ){
    return true;
  }else{
    return false;
  }
}


/////
//#13
// Write a function called 'reversed' that takes in two arrays
// it should return 'true' if the two arrays are reversed versions of each other. otherwise, it should return false
// for example, reversed([1, 2, 3], [3, 2, 1]) would return true
// reversed([1, 2, 3], [1, 3, 2]) would return false

// const reversed = () => null;

const reversed = (arr1,arr2) => {
  for(var x = arr1.length - 1; x >= 0; x--) {
     for(var j= 0; arr2.length;j++){
      if(arr1[x] === arr2[j]){
        return true;
    }else{
        return false;
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


//function that takes in an array
//

const doubles = () => null;

let doubles = function(arr){
  var output = arr.map((num) => (num * 2))
   return output.concat(output)
 
}




















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
