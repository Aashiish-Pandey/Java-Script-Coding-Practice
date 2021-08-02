const radius = [1, 2, 3, 4];

const calculateArea = function (raduis) {
  return Math.PI * radius * radius;
};

const calculatePerimter = function (radius) {
  return 2 * Math.PI * radius;
};

const calculateDiameter = function (radius) {
  return 2 * radius;
};

const calculate = function (inArr, logic) {
  const output = [];

  for (let i = 0; i < inArr.length; i++) {
    output.push(logic(inArr[i]));
  }

  return output;
};

console.log(calculate(radius, calculateArea));
console.log(calculate(radius, calculatePerimter));
console.log(calculate(radius, calculateDiameter));
