// Seek and Destroy

//Remove from the array whatever is in the following argument . returns the left over number in an array

const removeElemments = (arr, ...rest) => {
  return arr.filter((arrEl) => !rest.includes(arrEl));
};

console.log(
  removeElemments([1, 2, 3, 4, 5, 6, "hello", "ashish"], 1, 2, "hello")
);
