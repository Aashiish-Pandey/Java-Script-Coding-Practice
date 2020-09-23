// array chunking 
// split an array into chunked array of specific length


const chunkArray = (inArray,inLen) => {

    let i = 0 
    chunkedArray = []

    while(i<inArray.length) {

        chunkedArray.push(inArray.slice(i,i+inLen))
        i+=inLen
    }

    return chunkedArray
}

console.log(chunkArray([1,2,3,5,6,7,8,9,10],2))