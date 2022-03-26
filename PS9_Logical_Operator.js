/***************Logical Operator  **************/
// Logical operator are typically used with boolean (logical) values
// when they are , they return a boolean vaule.


/*********** Logical AND(&&) *************/
// the logical AND (&&) operator (logical conjunction ) for a set of operands is true if and only if all of its true.
console.log("Logical AND ( && )");
var a = 30;
var b = -20;
console.log(a > b && b > a);
console.log(a > b && b > -50 && b < 0);

/********* Logical OR ( || ) ***************/
// the logical OR ( || ) operator (logical conjunction) for a set of operand is true if only if one oe more of its operand is true.

console.log("Logical OR ( || )");
var a = 10;
var b = 20;
console.log((a < b) || (a > b) || (a == b));

/******* Logical NOT (!) *******************/
/*** The logical NOT(!) operator (logical complement , negation takes truth to falsity and vice verse.)*/

console.log("Logical NOT(!)");
var x = 10;
var y = 30;
console.log(!((0 < x) || (0 < y)));
console.log(!false);