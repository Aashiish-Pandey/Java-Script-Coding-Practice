const myFunction = (inString, word, pos=-1) => {
   
    let inArray = inString.split(" ")

  if (pos ===-1) {
    inArray.splice(0,0,word)
  } else {

    inArray.splice(pos,0,word)
  }
return inArray.join(" ")
};

console.log(myFunction("I love my India", "why", 3));
