/////
//Solve each of the following problems. Replace each empty function with your correct soltuon.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.
const sumArray = (arr) => {
  return arr.filter(val => typeof val === 'number').reduce((sum, currentNumber) => {
    return sum + currentNumber;
  })
}

/////
//#2
//Write a function called `sumFirstThree` that takes in an array of numbers, and returns a sum of the first three numbers
function sumFirstThree(arr) {
  let sum = 0;
  for (var i = 0; i < 3; i++) {
    sum = sum + arr[i]
  }
  return sum
}


/////
//#3
// Write a function called 'tripledPlusFive' that takes in array (that could contain any type of data), multiplies each number by 3, then adds 5 to each number, and returns a new array of those numbers
// for example, tripledPlusFive([1, 2, 3, 'hello', 4, 5]) would return [8, 11, 14, 17, 20]
const tripledPlusFive = (arr) => {
  return arr.filter(val => typeof val === 'number').map((currentNumber) =>{
    return (currentNumber * 3) + 5
  })
}

/////
//#4
//Write a function called 'secondHighest' that takes in an array of numbers and returns the second highest number from the array
// [1, 2, 3, 4, 5] => second = 4
function secondHighest(arr) {
  let first = arr[0];
  let second = arr[0];

  for (var i = arr[0]; i < arr.length; i++) {
    if(arr[i] > first){
      second = first;
      first = arr[i];
    } 
    else if(arr[i] > second && second < first){
      second = arr[i]
    } 
  }
  return second
}


/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
const indexMap = (arr) => {
  return arr.map((currentNumber, index) => {
    return currentNumber * index;
  })
} 

/////
//#6
//Write a function `evenNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an even number of letters.
const evenNumStrs = (arr) => {
 arr = arr.filter(val => typeof val === 'string');
 return arr.filter((word) => {
    if(word.length % 2 == 0) return word
  })
}


 // for (var i = 0; i < arr.length; i++) {
  //   if(arr[i] % 2 !== 0){
  //     return letter
  //   }
  // }

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
  document.getElementById('text1').innerHTML = 'ManBearPig';
}

/////
//#8
//Write a function called 'catDog' that takes in an object that contains two properties: 'cat' and 'dog'. each property contains a name
// the function should return a string that combines the names of both the cat and dog
// for example, catDog({cat: 'Garfield', dog: 'Scooby'}) would return 'GarfieldScooby'


// catDog({cat: 'Simba', dog: 'Snoop'}) => 'SimbaSnoop'
const catDog = (obj) => {
  let str = ''
  Object.keys(obj).forEach((key) => {
    str += obj[key]
  })
  return str 
}




/////
//#9
//Write a function called `eeee` that takes in a string and returns a new string that replaces every letter from the original string with the letter 'e'
// for example, eeee('watermelon') would return 'eeeeeeeeee'
const eeee = (str) => {
  str = str.split('')
  return str.map((letter) => {
    if(letter) return 'e'
  }).join('')
}

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
  return 'Now playing ' + this.title + ' by ' + this.artist;
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
  this.songs = [];
};
Album.prototype.addSong = function(song) {
  this.songs.push(song);
}
Album.prototype.tracklist = function(){
  return this.songs.reduce((str, song) =>{
    return str.length > 0 ? str + ', ' + song.title : str + song.title 
  }, '')
}

/////
//#12
//Write a function called 'firstAndLast' that takes in two strings and returns true if both the first AND last letters of both strings are the same, and returns false if they are not
// for example, firstAndLast('hello', 'hippo') would return true
// firstAndLast('hello', 'helicopter') would return false
const firstAndLast = (str1, str2) => {
  if(str1[0] === str2[0] && str1[str1.length-1] === str2[str2.length-1]) return true;
  else return false;
}

/////
//#13
// Write a function called 'reversed' that takes in two arrays
// it should return 'true' if the two arrays are reversed versions of each other. otherwise, it should return false
// for example, reversed([1, 2, 3], [3, 2, 1]) would return true
// reversed([1, 2, 3], [1, 3, 2]) would return false
// [1, 2, 3, 4, 5], [5, 4, 3, 2, 1])
const reversed = (arr1, arr2) => {
  let newArr2 = [];
  let arr1Start = arr1[0];
  let arr2Start = arr2[0];
  let result = true;

  for (var i = arr2.length - 1; i >= 0; i--) {
    newArr2.push(arr2[i])
  }

  // for (var i = 0 ; i < arr1.length; i++) {
  //   for (var j = 0 ; j < arr2.length; j++) {
  //     if(arr1[i] !== arr2[j]) result = false
  //   }
  // }

  while(arr1 <= arr1.length-1  && arr2 <= arr2.length-1){
    if(arr1[arr1Start] !== arr2[arr2Start]){
      result = false
    }
    arr1Start++;
    arr2Start++;
  }
  return result;
}


// const reversed = (arr1, arr2) => {
//   let start = arr1[0];
//   let end = arr2[arr2.length-1];
//   // while(start !== end && start < end)
//   console.log('arr1.length', arr1.length)

//   while(arr1.length  && arr2 >= 0){
//     if(arr1[start] !== arr2[end]){
//       return false
//     }
//     start++;
//     end--;
//   }
//   return true;
// } 

/////
//#14
// write a function called `doubles` that takes in an array of numbers.
// it should return a new array that duplicates every number from the original array
// in other words, the new array should be twice as long and have two of each number
// then, multiply each number in the new array by 2
// for example, if the original array is [1, 2, 3, 4, 5], the array you return would be [2, 4, 6, 8, 10, 2, 4, 6, 8, 10]
// [100, 100, 100, 100] => [200, 200, 200, 200, 200, 200, 200, 200]
const doubles = (arr) => {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]){
      let newVal = arr[i] * 2
      newArr.push(newVal)
    }
  }

  for (var i = 0; i < arr.length; i++) {
    if(arr[i]){
      let newVal2 = arr[i] * 2
      newArr.push(newVal2)
    }

  }
  return newArr

  // return arr.map((val) => {
  //   return (val * 2, val * 2)
  // })

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
