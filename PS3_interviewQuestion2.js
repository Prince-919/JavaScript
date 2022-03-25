/************ Interview Question 2 ******************/
/************* What is NaN? *************************/

// --> NaN is property of the global object.
// --> In Order words , it is a variable in global scope
// --> The initial value of NaN is Not-A-Number 

var myPhoneNumber = 9199683605;
var myName = " Prince Sharma";

console.log(isNaN(myPhoneNumber));
console.log(isNaN(myName));

if(isNaN(myName))
{
    console.log("Plz enter valid phone number : ");
}