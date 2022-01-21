//Recursion is when a function calls itself. Its basically a loop but with functions.
let num = 0;
function show() {
    console.log("Hi", num);
    num++;
        show();                     //Recursion
    
}
show();

// let num = 0;
// function show() {
//     console.log("Hi", num);
//     num ++;
//     if (num <=100) {                //Breaking point
//         show();
//     }
// }
// show();