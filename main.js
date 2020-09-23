//Longest Word in a sentence::

const findLongestWord = (inSentence) => {
  const wordArray = inSentence.toLowerCase().match(/[a-z0-9]+/g);
  const sortedArray = wordArray.sort(
    (fWord, sWord) => sWord.length - fWord.length
  );
  const lWordArray = sortedArray.filter(
    (word) => word.length >= sortedArray[0].length
  );

  if (lWordArray.length == 1) {
    return lWordArray[0];
  } else {
    return lWordArray;
  }
};

console.log(findLongestWord("Hi there ,I am Ashish Pandey ,allahabad"));
