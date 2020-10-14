// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

const myFunction = (inArray) => {

    return([...new Set(inArray)].join(""))


}


console.log(myFunction("ashish"))