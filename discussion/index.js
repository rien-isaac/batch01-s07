// An array in the programming is simply a list of data
// [] array literals
// "" string literals
// `` template literals
//  {} object literals

let studentNumbers = ["2020-1923", "2020-1924", "2020-1925"];

console.log(studentNumbers);

console.log(`test ${studentNumbers[1]}`);

// .length property can also be used with strings

let fullName = "Raphael Alampay";
console.log(fullName.length);

//length property on strings shows the number of characters in a string. Spaces are counted as characters in strings.

console.log(studentNumbers.length);

student = studentNumbers.length - 1;
console.log(student);

//another day by using decrementation

studentNumbers.length--;
console.log(studentNumbers);

console.log(fullName.length - 1);
console.log(fullName.length--);

// decrementation can't use in strings

let theBeatles = ["JOhn", "Paul", "Ringo", "George"];

theBeatles.length++;
console.log(theBeatles);

//

console.log(theBeatles[1]);

console.log(theBeatles[5]);

theBeatles[0] = "Jun";
console.log(theBeatles[0]);

let lastElementIndex = theBeatles.length - 1;
console.log(lastElementIndex);

// adding items into the array
// using indices to add items into the array

let newArr = [];
console.log(newArr[0]);

newArr[0] = "Cloud Strife";
console.log(newArr[0]);

console.log(newArr);

newArr[1] = "Tifa Lockhart";
console.log(newArr[1]);

//
// newArr[newArr.length - 1] = "Aerith Gainsborough";
newArr[newArr.length] = "Barrett Wallace";

console.log(newArr);
for (let index = 0; index < newArr.length; index++) {
  //you can use the loop counter as index to be able to show each array items in a console.log
  console.log(newArr[index]);
}

// mulit-dimensional array
// useful for storing complex data structures

// *nagcopy paste si maam ng chess board
// *nag console.log ng chess board

// accessing elements of multideimenstional array

let chessBoard = [
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
];

console.log(chessBoard[1][4]);
console.log("Pan move to: " + chessBoard[1][5]);
