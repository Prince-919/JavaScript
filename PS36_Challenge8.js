
/**
 1. Add December at the end of an array
 2. What is the return value of splice method
 3. update march to march (update)?
 4. Delete June from an array

 const months = ['Jan','march','April','June','July'];
 */

 //solution - 1
// Splice method (Adding)
//  const months = ['Jan','march','April','June','July'];
//  const newMonth = months.splice(months.length,0,"Dec");
//  console.log(months);

// solution - 2
// console.log(newMonth);

//solution - 3
// const months = ['Jan','march','April','June','July'];
// const indexOfMonth = months.indexOf('march');
// if(indexOfMonth != -1)
// {
//     const updateMonth = months.splice(indexOfMonth,1,"March");
//     console.log(months);
// }else{
//     console.log('No such data found : ');
// }

// solution - 4
const months = ['Jan','march','April','June','July'];
const indexOfMonth = months.indexOf('march');
if(indexOfMonth != -1)
{
    // const updateMonth = months.splice(indexOfMonth,1);
    const updateMonth = months.splice(indexOfMonth,1)
    console.log(months);
    console.log(updateMonth );
}else{
    console.log('No such data found : ');
}