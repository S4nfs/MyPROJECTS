// A closure is a function having access to the parent scope, even after the parent function has closed. It makes it possible for a function to have "private" variables


//Ex: 1--------------------------------------------------------------------------
let sum = function (a) {
    console.log("My followers " + a)

    let c = 5;
    return function (b) {
        return a + b + c; // a is accessible (lexical scoping) from parent fuction and retain its value (closure)
    }
}

let store = sum(2); //storing the sum function to get its return function value
console.log(store(5))

//Ex: 2--------------------------------------------------------------------------
function createBase(baseNumber) {
    return function (N) {
        // we are referencing baseNumber here even though it was declared
        // outside of this function. Closures allow us to do this in JavaScript
        return baseNumber + N;
    }
}

var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

//Ex: 3--------------------------------------------------------------------------
const add = (function () { //i want to persist previous values and add new value
    let counter = 0;
    function justAdded() { counter += 1; return counter }
    return justAdded
})();

console.log(add());
console.log(add());
console.log(add());


/*Ex: 4--------------------------------------------------------------------------
You can create a function within an outer function (a closure) that allows you to update a private variable but the variable wouldn't be accessible from outside the function without the use of a helper function.
*/

function counter() {
    var _counter = 0;

    return { //A helper function is a function that performs part of the computation of another function
        add: function (increment) { _counter += increment; },
        retrieve: function () { return 'The counter is currently at: ' + _counter; }
    }
}


var c = counter();
c.add(5);
c.add(9);

// now we can access the private variable in the following way
c.retrieve(); // => The counter is currently at: 14