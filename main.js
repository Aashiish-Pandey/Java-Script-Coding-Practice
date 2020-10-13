let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let countObj =  {}
let maxCount = 0
let maxItem = null

arr.forEach(item => {

    if(countObj[item]) {

        countObj[item]++
    }
    else {
        countObj[item]=1
    }
})

for(let item in countObj) {

    if (countObj[item] > maxCount) {

        maxCount = countObj[item]
        maxItem = item
    }


}

console.log(`max element ${maxItem} and Count is ${maxCount}`)