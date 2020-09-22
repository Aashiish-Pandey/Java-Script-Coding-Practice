//Q1: Reverse a string::

//Sol 1:

// const revString = (inString) => {

// // newArr = inString.split('')
// // newArr.reverse()
// // return newArr.join('')

// return inString
// .split('')
// .reverse()
// .join('')

// }

// console.log(revString("abcd"))

//////////////////////////////////////////////////////////////////////
//Sol2 using for loop

// let newString = ""

// const revString = (inString) => {

//     for (let i = inString.length-1; i>=0;i--) {
//         newString += inString[i]

//     }
//     return newString;
// }

//  console.log(revString("aadd"))

/////////////////////////////////////////////////////////////////////
// Sol3 using for of loop(nice aproch)

// let revStr = ""

// const reverseStr = (intStr) => {

//     for(let char of intStr) {

//         revStr = char + revStr;
//     }

//     return revStr;
// }
// console.log(reverseStr("aabb"))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//sol4 by using array forEach() method

// let revString= ""

// const reverseStr = (inString) => {

//     inString.split('').forEach(char => {

//         revString = char+revString;

//     });

//     return revString;

// }

// console.log(reverseStr("abbcd"))

////////////////////////////////////////////////////////////////////////////////////////////////

// sol 5 Using Reduce method

let revString = "";

const reverseString = (intString) => {
  return intString
    .split("")
    .reduce((intialChar, currenValue) => currenValue + intialChar, " ");
};

console.log(reverseString("ipl"));
