console.log('person1: shows ticket')
console.log('person2: shows ticket')


const promisewifeBringingTicks = new  Promise((resolve,reject) => {

  setTimeout(()=>{

    resolve("ticket")
  },3000)
})

const getPopcorn = promisewifeBringingTicks.then((t)=>{
  
  console.log("wife: I have the ticks")
  console.log("we should go in")
  console.log("wife: no I am hungry")
  return new Promise((resolve,reject) => resolve(`${t} popcorn`))

  
})

const getButter = getPopcorn.then((t)=> {

  console.log("Husband: I have got some popcorn")
  console.log("Husband: we should go in")
  console.log("Wife: I need butter on my popcorn")
  return new Promise((resolve,reject) => {

    resolve(`${t} butter`)
  })
})

getButter.then((t) => console.log(t))

console.log('person 4 shows ticket')
console.log('person 5 shows ticket')
