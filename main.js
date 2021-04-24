let animals =["dog","cat","hen","pig","dog","cat","dog","cat","dog","cat","hen","pig","dog",,"hen","pig","dog"]
// count number of unique animals
let unqAnimals = animals.reduce((acc,cvalue)=>{

  if(cvalue in acc) {

    acc[cvalue]++
  } else {

    acc[cvalue] =1
  }

  return acc

},{})

console.log(unqAnimals)