let promiseToCleanTheRoom = new Promise(function(resolve,reject) {

    let isClean = true

    if(isClean) {

        resolve('clean')
    } else {
        reject('not clean')
    }
})

promiseToCleanTheRoom.then(function(fromResolve) {

    console.log("The room is " + fromResolve)
}).catch(function(fromReject) {

    console.log('the room is '+fromReject)
})