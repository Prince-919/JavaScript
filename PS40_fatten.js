const arr = [
    ['zone_1','zone_2'],
    ['zone_3','zone_4'],
    ['zone_5','zone_6'],
    ['zone_7','zone_8']
];

let flatArr = arr.reduce((accum, currElem) => {
    return accum.concat(currElem);
}) 
console.log(flatArr);