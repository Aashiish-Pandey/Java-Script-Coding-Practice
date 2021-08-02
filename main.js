const readius = [1, 2, 3, 4];

const calculateArea = function (inArr) {
  let output = [];

  for (let i = 0; i < inArr.length; i++) {
    output.push(Math.PI * inArr[i] * inArr[i]);
  }

  return output;
};

const calculatePerimter = function (inArr) {
  const output = [];
  for (let i = 0; i < inArr.length; i++) {
    output.push(2 * Math.PI * inArr[i]);
  }
  return output;
};

const calculateDiameter = function (inArr) {
  const output = [];
  for (let i = 0; i < inArr.length; i++) {
    output.push(2 * inArr[i]);
  }
  return output;
};

console.log(calculateArea(readius));
console.log(calculatePerimter(readius));
console.log(calculateDiameter(readius));
