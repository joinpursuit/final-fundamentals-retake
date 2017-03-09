/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

//I WROTE EVERYTHING IN ES5 BECAUSE CURRENTLY I UNDERSTAND IT MORE//

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
//psuedocode//
//takes in an array
//takes in any data(use filter)
//return sum (new container)
// const sumArray = () =>
function sumArray (arr){
  var sum = 0;
  var onlyNumbers = arr.filter(function(val){
    return typeof val === "number"
  })
  for(var i= 0; i< onlyNumbers.length; i++){
    sum += onlyNumbers[i]
  }
  return sum
}

sumArray([2, 4, "hi", "hello", 5])

/////
//#2
//Write a function called `sumFirstThree` that takes in an array of numbers, and returns a sum of the first three numbers
//pseudocode//
//-takes and array of numbers
//-return sum (new container)
//-only first 3 (slice)
// const sumFirstThree = () => null;
function sumFirstThree (arr){
  var sum = 0
  var slicedNums= arr.slice(0, 3)

  for(var i = 0;i<slicedNums.length;i++){
    sum += slicedNums[i]
  }
  return sum
}

sumFirstThree([1,2,3,4,5,5,6])
/////
//#3
// Write a function called 'tripledPlusFive' that takes in array (that could contain any type of data), multiplies each number by 3, then adds 5 to each number, and returns a new array of those numbers
// for example, tripledPlusFive([1, 2, 3, 'hello', 4, 5]) would return [8, 11, 14, 17, 20]
//pseudocode//
//-takes in an array
//-takes any data(filter)
//-mulitiplies data by 3 then adds 5
// const tripledPlusFive = () => null;
function tripledPlusFive(arr){
  var onlyNums=arr.filter(function(val){
    return typeof val === 'number'
  })
  mappingOnlyNums = onlyNums.map(function(val){
    return ((val * 3) + 5) //[3, 6, 9, 12, 15]
  })
  return mappingOnlyNums
}

tripledPlusFive([1, 2, 3, 'hello', 4, 5])
/////
//#4
//Write a function called 'secondHighest' that takes in an array of numbers and returns the second highest number from the array
//pseudocode//
//-takes in an array
//-return 2nd highest number from array
// const secondHighest = () => null;

function secondHighest(arr){
  var sorted = arr.sort(function(a,b){
    return b-a
  })
  return sorted[1]
}

secondHighest([2,5,6,7,10]) //8
/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
//pseudocode//
//-takes an array
//-returns new array (new container)
//map through
//-mutliply by idx (2 paramaters)
// const indexMap = () => null;
function indexMap (arr){
  var newArray = arr.map(function(val, idx){
    return val * idx
  })
  return newArray
}

indexMap([2,4,6,7,8])

/////
//#6
//Write a function `evenNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an even number of letters.
//pseudocode//
//-takes an array
//uses only strings (filter and typeof)
//only even number strings
// const evenNumStrs = () => null;

function evenNumStrs(arr){
  var newArray = []
  var onlyStrings = arr.filter(function(val){
    return typeof val === "string"
  })
  for(var i; i< onlyStrings; i++){
    if (onlyString[i].length % 2 === 0){
      newArray += onlyString[i]
    }
    return newArray
  }
}

evenNumStrs([2 ,4, 5, "what", "ok"])
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

// const changeBearPig = () => null;
//I know it would be beneficial to do a switch case but I don't partiular know how to do it.

/////
//#8
//Write a function called 'catDog' that takes in an object that contains two properties: 'cat' and 'dog'. each property contains a name
// the function should return a string that combines the names of both the cat and dog
// for example, catDog({cat: 'Garfield', dog: 'Scooby'}) would return 'GarfieldScooby'
// catDog({cat: 'Simba', dog: 'Snoop'}) would return 'SimbaSnoop'
// const catDog = () => null;

function catDog({cat: this.name, dog: this.name}){
  return this.name + this.name
}

catDog({cat: 'Garfield', dog: 'Scooby'})

/////
//#9
//Write a function called `eeee` that takes in a string and returns a new string that replaces every letter from the original string with the letter 'e'
// for example, eeee('watermelon') would return 'eeeeeeeeee'
// const eeee = () => null;

function eeee(str){
  var justE = ''
for(var i = 0; i < str.length; i++){
  if(arr[i]){
    justE.push("e")
    }
  }
  return justE
}
eeee('watermelon')
/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(){
  this.artist = artist,
  this.title = title,
  this.year = year
};

Play.Prototype(function(){
  return "Now Playing" + this.title + "by" + this.artist + "!"
})


/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space
function Album(){
    this.artist = artist,
    this.title = title,
    this.year = year
    this.song = []
  };

addSong.Prototype(function(){

})

};

/////
//#12
//Write a function called 'firstAndLast' that takes in two strings and returns true if both the first AND last letters of both strings are the same, and returns false if they are not
// for example, firstAndLast('hello', 'hippo') would return true
// firstAndLast('hello', 'helicopter') would return false
// const firstAndLast = () => null;

function firstAndLast(str1, str2){
  var strOne = str1.slice(0,2)
  var strTwo = str2.slice(0,2)

  if (strOne === strTwo){
    return "true"
  }else{
    return false
  }
}
firstAndLast("hello", "helicopter")

/////
//#13
// Write a function called 'reversed' that takes in two arrays
// it should return 'true' if the two arrays are reversed versions of each other. otherwise, it should return false
// for example, reversed([1, 2, 3], [3, 2, 1]) would return true
// reversed([1, 2, 3], [1, 3, 2]) would return false
// const reversed = () => null;

function reversed(arr1, arr2){
  var arr2Reversed = arr2.reverse().join

  for(var i = 0; i <= arr1.length; i++){
    if(arr1 === arr2Reversed){
      return true
    }else{
      return false
    }
  }
}

reversed([1, 2, 3], [3, 2, 1])

/////
//#14
// write a function called `doubles` that takes in an array of numbers.
// it should return a new array that duplicates every number from the original array
// in other words, the new array should be twice as long and have two of each number
// then, multiply each number in the new array by 2
// for example, if the original array is [1, 2, 3, 4, 5], the array you return would be [2, 4, 6, 8, 10, 2, 4, 6, 8, 10]


// pseudocode//
//-takes in a function that doubles (map)
//-returns a new array
//-mulitply each number by 2
// const doubles = () => null;

function doubles(arr){
  var doubled = arr.map(function(val){
    return val * val
  })
return doubled.concat(doubled)
}

doubles([1, 2, 3, 4, 5])
















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
