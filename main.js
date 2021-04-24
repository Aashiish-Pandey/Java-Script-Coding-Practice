let animals = [
  "dog",
  "cat",
  "hen",
  "pig",
  "dog",
  "cat",
  "dog",
  "cat",
  "dog",
  "cat",
  "hen",
  "pig",
  "dog",
  "hen",
  "pig",
  "dog",
];

// find unique values using reducer

// let unqAnimals = animals.reduce((acc, cvalue) => {
//   if (!acc.includes(cvalue)) {
//     acc.push(cvalue);
//   }

//   return acc;
// }, []);

// console.log(unqAnimals);

// find unique values using set and spread operator


console.log([...new Set(animals)])
