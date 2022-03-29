
// Map() Method

// const arr = [1, 4, 9, 16,25];
// //num > 9

// let newArr = arr.map((currentElement, index, Array) =>{
//     return currentElement > 9;
// })
// console.log(arr);
// console.log(newArr);

const arr = [1, 4, 9, 16,25];
let newArr = arr.map((currElem , index, array) => {
    return `Index no = ${index} and the value is ${currElem} belong to ${array}`;
})
console.log(newArr);


const arr2 = [1, 4, 9, 16,25];
let newArrFor = arr.forEach((currElem , index, array) => {
    return `Index no = ${index} and the value is ${currElem} belong to ${array}`;
})
console.log(newArrFor);