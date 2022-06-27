// A closure is a function which has access to the variable from another function's scope

let sum = function(a){
    console.log("My followers " + a)

let c = 5;
    return function(b){
        return a+b+c; // a is accessible (lexical scoping) from parent fuction and retain its value (closure)
    }
}

let store = sum(2); //storing the sum function to get its return function value
console.log(store(5)) 