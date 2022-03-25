
/************ Increment and Decrement Operator ******/
// Operator : Increment (a++ or ++a) or Decrement(x-- or --x)
// if used postfix, with operator after operand (for example --> a++ )
// the increment operator and returns the value before incrementing.

console.log("Increment Postfix : ");
var a = 12;
// var b = a++ + 8;      // (a(12) + 8)
var c = a++;
console.log(a);
console.log(c);


// postfix increment operator means the expression is evaluated
// first using the osiginal value of the variable and then the variable is increment (increased).
console.log("Increment Prefix : ");
var x = 30;
// var b = a++ + 8;      // (a(12) + 8)
var y = ++x + 5;
console.log(x);
console.log(y);

console.log("Decrement Postfix : ");
var num = 10;
// var newNum = num-- - 5;
var newNum = num--;
console.log(num);
console.log(newNum);


console.log("Decrement Prefix : ");
var num2 = 5;
// var newNum2 = --num2 - 2;
var newNum2 = --num2;
console.log(num2);
console.log(newNum2);