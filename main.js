const users = [
  { fname: "ashish", lName: "Pandey", age: 26 },
  { fname: "ajay", lName: "devgan", age: 56 },
  { fname: "amit", lName: "singh", age: 26 },
  { fname: "mark", lName: "Juk", age: 32 },
];

// name of the persons whose age is less than  50


const name = users.filter(persons=>persons.age<50).map(person=>person.fname)

console.log(name)