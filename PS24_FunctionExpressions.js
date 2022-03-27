/***** 4️⃣Function Expressions  *******/
// Function expressions simply means create a functioin and put it into the variable.

console.log("Function Expressions");
function sum(a,b)
{
    var total = a+b;
    console.log(total);
}
 
var funExp =  sum(10,30);
funExp;

console.log();

/******5️⃣ return KeyWord ***************/
// When JavScript reaches a return statement, the function will stop executing.
//function often compute a return value.
// The return value is "Returned " back to the "caller"

console.log("Function return Keyword : ");
function add(a,b)
{
    return total = a+b;
}
var funEx = add(200,50);
console.log("The sum of the two no. is : "+funEx);

/******6️⃣ Anonymous Function *****/
// A function expression is simiar to and the same syntax as a function declaration One can define "Named" function expression (where the name of the expression might be used in the call stack for example) or "anonymous" function expressions

console.log("Function Anonymous : ");
var funExpre = function(a,b)
{
    return t = a+b;
}
var addition = (funExpre(4,4));
var addition2 = (funExpre(4,4));
console.log("The sum of the two no. is : "+ addition);
console.log(addition > addition2);
