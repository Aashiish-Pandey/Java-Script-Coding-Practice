// add all numbers

// const addAll = (...numbers) => {
//   let sum = 0;

//   for (num of numbers) {
//     sum += num;
//   }
//   return sum;
// };

// console.log(addAll(1, 2, 3, 4, 5, 6));

/////////////////////////////////////////////////////////////////////////////////////////////

// using reduce method

const addAll = (...numbers) => {
  let sum = numbers.reduce((a, b) => a + b, 0);
  return sum;
};

console.log(addAll(1, 2, 3, 4, 5, 6,10));
