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
// 7. Objects
// 8. null
var myname = "Sagar Verma";
console.log(typeof myname);    //like var_dump to determine which datatype

var something;
console.log(typeof something); //undefined

var marks = {
    maths: 90,
    science: 80,
    english: 70
}
console.log(typeof marks);     //object

// OPERTORS IN JAVASCRIPT---------------------------------------------------------------------------------------
// 1. Arithmetic Operators  +, -, *, /, %,
// 2. Assignment Operators =, +=, -=, *=, /=, %=
// 3. Comparison Operators ==, ===, !=, !==, >, <, >=, <=
// 4. Logical Operators &&, ||, !
// 5. String Concatenation Operators  +, +=,
// 6. Increment/Decrement Operators ++, --
// 7. Conditional (Ternary) Operators if, else, else if, switch, case, default

//Arithmetic Operators
console.log("Remainder is " + (81 % 8));

var x = 5;
var y = 5;
console.log(`Is both the x and y are equal: ${x === y}`);

//Logical Operators
var s = 30;
var t = -20;
console.log(s > t && t > -50 && t < 0);
console.log(!(s > t && t > -50 && t < 0));

//String Concatenation Operators
console.log("Hello World");
console.log("Hello" + "World");

//Conditional (Ternary) Operators
var year = 2020;
debugger;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("The year " + year + " is a leap year");
    } else {
      console.log("The year " + year + " is not a leap year");
    }
  } else {
    console.log("The year " + year + " is a leap year");
  }
} else {
  console.log("The year " + year + " is not a leap year");
}

// ---------------------------------------------------------------------
var age = 17;
console.log(age >= 18 ? "You can vote" : "You can't vote");


/* CONTROL STATEMENTS & LOOPs--------------------------------------------------------------------------------------------------
If-Else
2. For Loop
3. While Loop
4. Do-While Loop
5. For-In Loop
6. For-Of Loop
7. Switch
8. Break
9. Continue */

// var area = "circle";
// var PI = 3.142, l = 5, b = 4, r = 3;

// if(area == "circle"){
//     console.log("The area of circle is : " + PI*r**2);
// }else if(area == "triangle"){
//     console.log("The area of triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){
//     console.log("The are of rectangle is : " + l*b);
// }else{
//     console.log("please enter valid data");
// }
// ---------------------------------------------------------------------Switch Case

var area = "circle";
var PI = 3.142, l = 5, b = 4, r = 3;

switch (area) {
  case "circle":
    console.log("the area of circle is : " + PI * r ** 2);
    break;
  case "triangle":
    console.log("the area of triangle is : " + (l * b) / 2);
    break;
  case "rectangle":
    console.log("the area of rectangle is : " + l * b);
    break;
  default:
    console.log("Please enter valid data");
}

// ---------------------------------------------------------------------While
var num = 0;
while(num <= 10){
  console.log(num);
  num++;
}

// ---------------------------------------------------------------------Do-While
// var num = 0;
// do{
//   console.log(num);
//   num++;
// }while(num <= 10);

// ---------------------------------------------------------------------For Loop

for(var num = 0; num <= 10; num++){
  console.log(num);
}
