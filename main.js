// function doSomething(){}
// doSomething.prototype.foo = "bar"; // add a property onto the prototype
// var doSomeInstancing = new doSomething();
// doSomeInstancing.prop = "some value"; // add a property onto the object
// console.log( doSomeInstancing );

// function doSomething(){}
// doSomething.prototype.foo = "bar";
// var doSomeInstancing = new doSomething();
// doSomeInstancing.prop = "some value";
// console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
// console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
// console.log("doSomething.prop:           " + doSomething.prop);
// console.log("doSomething.foo:            " + doSomething.foo);
// console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
// console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);

let arr = ["ashish", "Pandey"]

let object = {
name : "ashish",
city:"allahabad",
getIntro: function() {

  //console.log(this.name + "from" + this.city); 
}
}

console.log(Array.prototype)