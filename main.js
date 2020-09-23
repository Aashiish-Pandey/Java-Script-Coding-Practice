// Flatten array of array into a single array

//Aproch1 : using reduce method

// const flattenArray = (inArray) => {

//     return inArray.reduce((a,b) => a.concat(b))

//     }

//     console.log(flattenArray([[1,2],[3,4],[5,6],[7,8],[9,10]]))

////////////////////////////////////////////////////////////////////////

//Aproch 2: using spread operator

const flattenArray = (inArray) => {
  return [].concat(...inArray);
};

console.log(
  flattenArray([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
    [11, 12],
  ])
);
