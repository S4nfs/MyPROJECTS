function sum(){
    var a = 10, b = 20;
    var total = a + b; 
    console.log(total);
}
sum();

// ---------------------------------------------------------------------------------------------------------------------------

//✔️function parameters are the names listed in function's definitions
//✔️function parameters are the real values passed to the functions

function sum(a, b){          //parameters
    var total = a + b; 
    console.log(total);
}
sum(20, 30);                 //Arguments


//✔️function expression means creating a function and put it into a variable-----------------------------------------------------

function sum(a , b){
    var total = a + b;
    console.log(total);
}
var funcExp = sum(50,50);    //Expression (but here variable funcExp is undefined becoz value is stil in $total so we use return)
console.log("The sum of total number is : " + funcExp);

//✔️Return simply return backs the value to caller-------------------------------------------------------------------------------

function sum(a , b){
    return total = a + b;
}
var funcExp = sum(50,50);                    
console.log("The sum of total number is : " + funcExp);


//✔️Anonnymous Function (function with no name ex. libvirt demo3 wala)-----------------------------------------------------------
var funcExp = function(a , b){
    return total = a + b;
}
console.log("The sum of total number is : " + funcExp(5,15));