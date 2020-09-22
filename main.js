//Palindrome

let isPalindrome = (inString) => {
  return inString.split("").reverse().join("") === inString;
};

console.log(isPalindrome("abba"));
