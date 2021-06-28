// contains and every method

const arr1 = [1, 3, 6, 9, 6, 6, 6, 10, 11, 54, 101];
const arr2 = [1, 3, 6, 9];

const isSubset = (arr1, arr2) => {
  let isSub = arr2.every((item) => arr1.includes(item));

  isSub
    ? console.log(`${arr2} is subset of ${arr1}`)
    : console.log(`${arr2} is not  subset of ${arr1}`);
};

isSubset(arr1,arr2);
