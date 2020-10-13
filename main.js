let myFunction = (inString) => {
  let strArray = inString.split(" ");
  let nArray = strArray.map(
    (item) => item[0].toLowerCase() + item.substring(1).toUpperCase()
  );

  return nArray.join(" ");
};

console.log(myFunction("The Quick Brown Fox"));
