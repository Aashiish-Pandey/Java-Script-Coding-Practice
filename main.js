const radius = [1, 2, 3, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

Array.prototype.myMap = function (logic) {
  const outPutArray = [];

  for (let i = 0; i < this.length; i++) {
    outPutArray.push(logic(this[i]));
  }

  return outPutArray;
};

console.log(radius.map(area));
console.log(radius.myMap(area));
