// call apply and bind methods:

let Name1  = {

  fName:"ashish",
  lName:"pandey"
}

let Name2 = {

  fName:"Shivam",
  lName:"Pandey"
}

let printFullName = function(homeTown, state) {

  console.log(this.fName + " " + this.lName +"from" +homeTown +state)


}

printFullName.call(Name1,"allahabad","up")
printFullName.apply(Name2,["allahabad","uttarpradesh"])
let returnedF=printFullName.bind(Name2,"katnai","Phoolpur")
returnedF()
