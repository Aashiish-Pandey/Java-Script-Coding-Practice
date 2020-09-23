//return the character that is most common in a string

const findMaxChar = (inString) => {
  let charObj = {};
  let maxOcc = 0;
  let maxChar = "";

  for (let char of inString) {
    if (charObj[char]) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  }
  
  for(let char in charObj) {

    if (charObj[char]>maxOcc) {

        maxOcc=charObj[char]
        maxChar=char
    }
  }

  console.log(`maximum occuring char in the string is ${maxChar} and it occurs ${maxOcc} times`)
};

findMaxChar("aaaabcccdd");

