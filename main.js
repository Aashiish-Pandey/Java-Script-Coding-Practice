// Write a JavaScript program to compute the union of two arrays.

const myFunction = (arr1,arr2) => {

    return([...new Set(arr1), ...new Set(arr2)])


}


console.log(myFunction([1,2,2,3,3,4],[5,5,6,7,7,7]))