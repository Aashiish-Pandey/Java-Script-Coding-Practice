// sum(1)(2)(3)(4)..( n)() | Amazon UI/Frontend Javascript Interview Question

const sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
};

console.log(sum(1)(2)(3)());


// const sum = (a) => {
//   return function (b) {
//     return b ? sum(a + b) : a;
//   };
// };

// console.log(sum(1)(2)(3)());


// const sum = (a) => (b)=> b ?sum(a+b) :a
  
//   console.log(sum(1)(2)(3)(4)());
