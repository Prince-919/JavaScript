
/**
--> The Reducer function takes four arguments :
1. Accumulator
2. Current value
3. Current Index
4. Source Array

 */

let arr = [2, 4 , 6, 8];
let sum =arr.reduce((accumulater , currElem) => {
    debugger;
    return accumulater += currElem;
}, 10);
console.log(sum);

// map(), filter(), reduce()

/******* Professional code */
// let a = [10,20,30,40];
// let a2 = a.map((currElem) => currElem * 2).filter((currElem) => currElem > 10).reduce((accumulater , currElem) => {
//     debugger;
//     return accumulater += currElem;
// });
// console.log(a2);

