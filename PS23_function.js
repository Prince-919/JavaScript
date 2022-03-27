
/*********** 🙋‍♂️🙋‍♂️ Function 🙋🙋 ***********/
// A JavaScript function is a block of code designed to perform a particular task.

// 1️⃣💯Function Definition
// Before we use a function , we need to define it

// A function definition (also called a function decraration , or function statement) consists of the function keyword, followed by:

// The name of the function 
// A list of parameters to the function , enclosed in parentheses and separated by commas.
// The JavaScript statements that define the function, enclosed in curly brackets, { ... }.

// function syntax

// ---> function functionName()
//{
    // Statement
//}

// 2️⃣ Calling functions 
// Defining a function does not executed it.
// A javaScript function is executed when "something " invokes it (call it).

// Normal method

// var a = 10, b =40;
// console.log(a + b);


console.log("Function");
function sum()  // function create 
{
    var x = 2, y = 3;
    var total = x + y;
    console.log(total);
}
   sum();  // function calling

console.log();


/******3️⃣ Function Parameter Vs Function Arguments */
// function parameters are the names listed in the function 's definition 
// function argument are the real values passed to the function 

console.log("function parameter Vs function Arguments");

function add(a,b)
{
    var t = a + b;
    console.log(t);
}
add();  // NaN (Not a Number)
add(10,20);
add(4,6);
add(100, 200)


// 🙋‍♂️🙋‍♂️ Interview Question 🙋‍♂️🙋‍♂️
// Why Functions?

// you can reuse code : define the code once , and use it many times 
// You can use the same code many times with different arguments, to produce different results.

// OR

// A function is a group of reusable code which can be called anywhere in your program . This eliminates the need of writing the same code again and again.