//Recursion is when a function calls itself. Its basically a loop but with functions.
// let num = 0;
// function show() {
//     console.log("Hi", num);
//     num++;
//     show();                             //Recursion (infinite)

// }
// show();

// let num = 0;
// function show() {
//     console.log("Hi", num);
//     num ++;
//     if (num <=100) {                     //Breaking point or Base case to terminate the recursion
//         show();
//     }
// }
// show();

//Find Factorial of a number 4
// const f = n => n <= 1 ? 1 : n * f(n - 1);
// console.log(f(4))                       //4*3*2*1 = 24


//Indirect Recursion (functions calling in each others hood )
let item = 0, money = 100;
function addToCart(x) {
    if (x > 0) {
        console.log("I have ", item, "item & Balance Rs ", x);
        balance(x);
    } else {
        console.log("Cart", item, "Balance left: Rs", x);
    }
}
function balance(x) {
    item++;
    addToCart(x - 10)
}
addToCart(money)
