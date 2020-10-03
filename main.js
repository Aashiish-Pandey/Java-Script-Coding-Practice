let cleanRoom = function () {
  return new Promise(function (resolve, reject) {
    resolve("cleaned the room");
  });
};

let removeGarbage = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + " remove Garbage ");
  });
};

let winIcecream = function (message) {
  return new Promise(function (resolve, reject) {
    resolve(message + " won Icecream");
  });
};

//// if we want to perform anyting or execute anything only  after all the promises gets completed

Promise.all([cleanRoom, removeGarbage, winIcecream]).then(function () {
  console.log("all finsihed");
});
