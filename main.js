//sum of even and odd numbers 

numbers = [1,2,3,4,5,6,7]  

const evenOddSums = (arr) => {

  let evenSum = 0
  let oddSum = 0

  arr.forEach(num => num%2===0?(evenSum+=num):(oddSum+=num)) 
  return[evenSum,oddSum]
  
  
}

console.log(evenOddSums(numbers))