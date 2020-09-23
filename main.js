// Fizz Buzz

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("Fizz buzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i %3  === 0 && i % 5===0) {
    console.log("Fizz ");
  } else {
    console.log(i);
  }
}
