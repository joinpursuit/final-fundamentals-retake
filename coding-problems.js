/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = (array) =>{
  var sum = 0;
for(var i = 0; i < array.length; i++){
  if(typeof array[i] === 'number'){
    sum += array[i];
  }
}
return sum;
};

/////
//#2
//Write a function called `sumFirstThree` that takes in an array of numbers, and returns a sum of the first three numbers
const sumFirstThree = (array) => {
 var sum = 0; 
 for(var i = 0; i < array.length; i++){
   if(i === 0 || i === 1 || i === 2){
      sum += array[i]
   }
 }
 return sum;
};

/////
//#3
// Write a function called 'tripledPlusFive' that takes in array (that could contain any type of data), multiplies each number by 3, then adds 5 to each number, and returns a new array of those numbers
// for example, tripledPlusFive([1, 2, 3, 'hello', 4, 5]) would return [8, 11, 14, 17, 20]
const tripledPlusFive = (array) =>{
var newArr = [];
for(var i = 0; i < array.length; i++){
  if(typeof array[i] === 'number'){
    newArr.push((array[i] * 3) + 5 )
  }
}
return newArr;
};

/////
//#4
//Write a function called 'secondHighest' that takes in an array of numbers and returns the second highest number from the array
const secondHighest = (array) =>{
var highest = 0;
var secondHighest = 0;
var lowest = 0;

for(var i = 0; i < array.length; i++){
  if(array[i] > array[i + 1]){
    highest = array[i];
  }
  else if (array[i + 1] > array[i] || array[i] < highest){
    secondHighest = array[i];
  }
  else{
    lowest = array[i];
  }
}
return secondHighest;
};

/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = (array) =>{
  var newArr = [];
  for(var i = 0; i < array.length; i++){
    newArr.push(array[i] * i);
  }
  return newArr;
};

/////
//#6
//Write a function `evenNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an even number of letters.

//MY GOAL FOR SOLVING THIS PROBLEM:
// My goal for solving this problem was to filter the array first by eliminating the strings from the original array and pushing them into a new one. Afterwards, I was trying to figure out how I was going to count the actual letters within the string. The only way I believe I could do that is by spliting the strings into an array and then loop through the array and filter out only the strings that had an even number of letters. 

//I am pretty sure I could have used a method that involved using an object as well but I was not too sure and think it would have taken some time to solve it. 

const evenNumStrs = (array) =>{
var newArr = [];
for(var i = 0; i < array.length; i++){
  if(typeof array[i] === 'string'){
    newArr.push(array[i]);
  }
}
console.log(newArr.split);

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

const changeBearPig = () =>{

var changes = document.getElementById('text1').innerHTML('ManBearPig');
return changes;
};

/////
//#8
//Write a function called 'catDog' that takes in an object that contains two properties: 'cat' and 'dog'. each property contains a name
// the function should return a string that combines the names of both the cat and dog
// for example, catDog({cat: 'Garfield', dog: 'Scooby'}) would return 'GarfieldScooby'
// catDog({cat: 'Simba', dog: 'Snoop'}) would return 'SimbaSnoop'
const catDog = (object) =>{
var cat = object.cat; 
var dog = object.dog 

return cat.concat(dog);

};


/////
//#9
//Write a function called `eeee` that takes in a string and returns a new string that replaces every letter from the original string with the letter 'e'
// for example, eeee('watermelon') would return 'eeeeeeeeee'
const eeee = (string) =>{
var split = string.split('');
for(var i = 0 ; i < split.length; i++){
  split[i] = 'e';
}
return split.join('');
};

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist, title,year){  
  this.artist = artist;
  this.title = title;
  this.year = year;
};

Song.prototype.play = function(artist,title){
  return 'Now playing ' + this.title + ' by ' + this.artist;
}

/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(artist,title,year){
  this.artist = artist;
  this.title = title;
  this.year = year;
  this.songs = [];
};

Album.prototype.addSong = function(song){
  this.songs.push(song);
}
Album.prototype.tracklist = function(song){
  var newArr = [];
   this.songs.map(function(value,index){
    newArr.push(value.title);
  })
 return newArr.join(', ');
}
/////
//#12
//Write a function called 'firstAndLast' that takes in two strings and returns true if both the first AND last letters of both strings are the same, and returns false if they are not
// for example, firstAndLast('hello', 'hippo') would return true
// firstAndLast('hello', 'helicopter') would return false
const firstAndLast = (str1,str2) =>{
var newStrOne = str1.split('');
var newStrTwo = str2.split('');
for(var i = 0; i < newStrOne.length; i++){
  for(var j = 0; j < newStrTwo.length; j++){
    if(newStrOne[0] === newStrTwo[0] && newStrOne[newStrOne.length -1] === newStrTwo[newStrTwo.length - 1]){
      return true;
    }
    else{
      return false;
    }
  }
}
};

/////
//#13
// Write a function called 'reversed' that takes in two arrays
// it should return 'true' if the two arrays are reversed versions of each other. otherwise, it should return false
// for example, reversed([1, 2, 3], [3, 2, 1]) would return true
// reversed([1, 2, 3], [1, 3, 2]) would return false


//Method 1: 
//Since we are given two arrays, I wanted to first loop through every value in both of them in order for me to check to see if the position of one value matched the other. If so, I would then return true and do this process for each value within the array. If it is not, it would return false

//Method 2: I was also thinking if I created two new variables where I did the reverse method on the two arrays, I can then compare one to the other to check and make sure that it is true. If it not, then of course I would return false. 
const reversed = (arr1,arr2) =>{
for(var i = 0; i < arr1.length; i++){
  for(var j = 0; j < arr2.length; j++){
    if(arr1[0] === arr2[arr2.length -1]){
      return true;
    }
    else if(arr1[1] === arr2[1]){
      return true;
    }
    else if(arr1[arr1.length -1] === arr2[0]){
      return true;
    }
    else{
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
const doubles = (array) =>{

var newArr = [];
for(var i = 0; i < array.length; i++){
  array[i] = array[i] * 2;
  newArr.push(array[i]);
}
return newArr.concat(array);
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
