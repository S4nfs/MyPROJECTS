// function sum(){
//     var a = 10, b = 20;
//     var total = a + b; 
//     console.log(total);
// }
// sum();

// // ---------------------------------------------------------------------------------------------------------------------------

// //✔️function parameters are the names listed in function's definitions
// //✔️function parameters are the real values passed to the functions

// function sum(a, b){          //parameters
//     var total = a + b; 
//     console.log(total);
// }
// sum(20, 30);                 //Arguments


// //✔️function expression means creating a function and put it into a variable-----------------------------------------------------

// function sum(a , b){
//     var total = a + b;
//     console.log(total);
// }
// var funcExp = sum(50,50);    //Expression (but here variable funcExp is undefined becoz value is stil in $total so we use return)
// console.log("The sum of total number is : " + funcExp);

// //✔️Return simply return backs the value to caller-------------------------------------------------------------------------------

// function sum(a , b){
//     return total = a + b;
// }
// var funcExp = sum(50,50);                    
// console.log("The sum of total number is : " + funcExp);


// //✔️Anonnymous Function (function with no name ex. libvirt demo3 wala)-----------------------------------------------------------
// var funcExp = function(a , b){
//     return total = a + b;
// }
// console.log("The sum of total number is : " + funcExp(5,15));

//✔️High order function & callback function-------------------------------------------------------------------------------------
//using calculator
const add = (a,b) => {
    return a+b;
}
const sub = (a,b) => {
    return a-b;
}
const mult = (a,b) => {
    return a*b;
}

const calculator = (num1,num2, operator) => {
    return operator(num1,num2);
}
console.log(calculator(10,20,sub));          //calculator is a High order function and it contains a function as an argument while add,sub,mult are callback functions



//SOME Functions RAW Examples:
//this generates random number between 0 and 10
function randomRange(myMin, myMax) {
  
  var result = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    return result;
  }
  randomRange(0,10);