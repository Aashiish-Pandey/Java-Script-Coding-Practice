 const arry = [1,2,3,4]


const findMaxMin = function(inArr) {

    const max = Math.max(...inArr)
    const min= Math.min(...inArr)

    const sum = inArr.reduce((ca,acc)=> ca+acc,0)

    return[sum-max,sum-min]


}

console.log(findMaxMin(arry))