//Reverse a number 

const revNumber = (inNumber) => {

    const revString = inNumber.toString().split('').reverse().join('');
    return(parseInt(revString))
}

console.log(revNumber(198))