let x = 12345656;
let count = 0;

while (x) {
  x = Math.floor(x / 10);
  count++;
}

console.log(count);
