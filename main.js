let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
let array3 = [11, 12, 13, 14, 15];
let bigArray = [
  [1, [5,5,5,5,5,5], 3, 4, 5],
  [6, ,[6,6,6,6,6,6],7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

let sum = bigArray.reduce((acc, cvalue, index, array) => {
  

  return acc.concat(cvalue)
},[]).reduce((c,a)=>c.concat(a),[])

console.log(sum);
