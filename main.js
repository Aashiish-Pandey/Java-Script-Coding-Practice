//missing number

const arr = [1, 2, 4, 5, 6, 7, 8, 9];
const len = arr.length - 1;
const maxEl = arr[len];

const sum = (maxEl * (maxEl + 1)) / 2;

const arrSum = arr.reduce((ca, ac) => ca + ac);

const missingEl = sum - arrSum;
console.log(sum);
console.log(arrSum);
console.log(missingEl);
