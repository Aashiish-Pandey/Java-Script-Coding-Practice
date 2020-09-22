//convert first letter of every word of a sentence into capital letter

let captializeLetter = (inSentence) => {
  return inSentence
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};

console.log(captializeLetter("my naMe is ashiSH"));
