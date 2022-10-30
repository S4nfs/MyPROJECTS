//Example: 1 Hoisting 🍄-----------------------------------
//Hoisting is JavaScript's default behavior of moving declarations to the top. Var is hoisted but let is not 
"use strict";                           //means no hoisting rules
function receive(name = "") {
    if (name == "Sagar") {
        var x = "ok";                    //u need to proper define variables
    } else {
        var x = "not ok";
    }
    var x;    // x is hoisted to the top //Declaration
    console.log(x)
}
receive("Sagar");

//Example: 2 Scope 🍄--------------------------------------
var a = 1;
let b = 2;

if (a == 1) {
    var a = 10;
    let b = 20;
    console.log(a); //10
    console.log(b); //20 but its block scoped
}
console.log(a); //10
console.log(b); //2