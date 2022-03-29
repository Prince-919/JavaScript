
/**
 1. find the square root of each element in an array
 2. multiply each element by 2 and only those element which are greater than 10

 let arr = [25,36,49,64,81]
 */
// Solution - 1
//  let arr = [25,36,49,64,81];
//  let arrSquare = arr.map((currElem) => {
//      return Math.sqrt(currElem);
//  })
//  console.log(arrSquare);

// Solution - 2
// let arrNew = arr.map((currElem) => currElem * 2).filter((currElem) => currElem > 10);
let arr = [2, 3, 4, 6, 8];
let arrNew = arr.map((currElem) => {
    return currElem * 2;
}).filter((currElem) => {
    return currElem > 10;
})
console.log(arrNew);