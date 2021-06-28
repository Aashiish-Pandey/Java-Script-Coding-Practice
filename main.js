// Palindrome number

const isPalindrome = (inNum) => {
  const num = inNum;
  let newNum = 0;
  let rem = 0;

  while (inNum) {
    rem = inNum % 10;
    newNum = newNum * 10 + rem;
    inNum = Math.floor(inNum / 10);
  }

  if (newNum === num) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
