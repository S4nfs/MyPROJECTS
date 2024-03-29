//✔️ Hoisting in Javascript is a mechanism where variables and functions declarations are moved to the top of their scope before the code executes. (see image b)

console.log(myName);
var myName;
myName = "Sagar Verma"; 

👆
/*Steps:
1. var myName = undefined;     
2. console.log(myName);        //print undefined
3. myName = "Sagar Verma";     //nothing executes
*/

//✔️Scope Chain - (see image c)
var a = "Hello";

function one() {
    var b = "How are You?";
    console.log(b);
    two()
    function two() {
        var c = "What are you doing?"
        console.log(a + b + c); //can access parent function + global context
        three()
    }
}
function three() {
    var d = "Please answer, Bro?";
    console.log(d);  //can only access its execution stack + global context (a,d)
}
one();

//✔️ Stict Mode - (see image d)
"use strict";
function sum(a, b) {
    add = a + b; //add is not defined
    console.log(add);
}
sum(10, 20);


//✔️ This Keyword - (see image e)
function sum() {
    add = 2 + 2;
    console.log("Sum of two no. is " + add)
    console.log(this) //return global object which is window
}
sum()

const bioData = {
    name: "John",
    age: 30,
    sum: function () {
        add = 2 + 2;
        console.log("Sum of two no. is " + add)
        console.log(this) //return bioData object

        function anotherFunc(){
            var name = "Sagar";
            console.log("Your name is " + name);
            console.log(this); //return globar object as it act as a regular func
        }
        anotherFunc();
    }
}
bioData.sum()


//✔️ Difference b/w Pass by value || pass by reference (see image f)

let a =10;
let b = a;
b += 5;
console.log(a); //10
console.log(b); //15

let arr1 = [1,2.3,4];
let arr2 = arr1;
arr2.push(5);
console.log(arr1) //same
console.log(arr2)  //same becoz reference data types share same memory 
