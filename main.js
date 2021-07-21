//unwarp a nested array without using predefined methods

const arr = [1, 2, [1, 2, [2, 3, [4, 5,6,7,8,9]]]];

const flatArray = (inArr) => {
  const arrStack = inArr;
  const flatArray = [];

  while (arrStack.length) {
    let stkEl = arrStack.pop();
    if (Array.isArray(stkEl)) {
      arrStack.push(...stkEl);
    } else {
      flatArray.push(stkEl);
    }
  }

  return flatArray.reverse();
};

console.log(flatArray(arr));
