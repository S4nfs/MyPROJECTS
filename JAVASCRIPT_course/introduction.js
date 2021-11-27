console.log("Hello World");

// Values and Variables----------------------------------------------------------------------------------------

var myName = "SAGAR VERMA";
var myAge = 30;
// var _myAge = 30;             // valid variable name
// var $myAge = 30;             // valid variable name
// var 1myAge = 30;             // invalid variable name
// var _1myAge = 30;            // valid variable name
console.log(myName);
console.log(myAge);

// Data Types 6--------------------------------------------------------------------------------------------------
// 1. String
// 2. BigInt
// 3. Boolean
// 4. Number
// 5. undefined   ---- if variable is not set
// 6. Symbol
var myname = "Sagar Verma";
console.log(typeof myname); //like var_dump to determine which datatype

var something;
console.log(typeof something); //undefined

// Operators in JavaScript---------------------------------------------------------------------------------------
// 1. Arithmetic Operators  +, -, *, /, %,
// 2. Assignment Operators =, +=, -=, *=, /=, %=
// 3. Comparison Operators ==, ===, !=, !==, >, <, >=, <=
// 4. Logical Operators &&, ||, !
// 5. String Concatenation Operators  +, +=,
// 6. Increment/Decrement Operators ++, --
// 7. Conditional (Ternary) Operators if, else, else if, switch, case, default


//Arithmetic Operators
console.log("Remainder is " + 81%8);

var x = 5;
var y = 5;
console.log(`Is both the x and y are equal: ${x === y}`);


//Logical Operators
var s = 30;
var t = -20;
console.log(s > t && t > -50 && t < 0);
console.log(!((s > t) && (t > -50) && (t < 0)));

//String Concatenation Operators
console.log("Hello World");
console.log("Hello" + "World");

//Conditional (Ternary) Operators
var year = 2020;
debugger;
if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log("The year " + year + " is a leap year");
            }else{
                console.log("The year " + year + " is not a leap year");
            }
        } else {
            console.log("The year " + year + " is a leap year");
        }
    } else { console.log("The year " + year + " is not a leap year");
}
