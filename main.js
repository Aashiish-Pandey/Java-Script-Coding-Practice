// call apply and bind methods:

let name = {
  fName: "ashish",
  lName: "pandey",
};

let printName = function () {
  console.log(this.fName + " " + this.lName);
};

let printMyName = printName.bind(name);
printMyName();
