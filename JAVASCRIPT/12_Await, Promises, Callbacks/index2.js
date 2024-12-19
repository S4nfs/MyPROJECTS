// Another example of Async JS programming [Callbacks, Promises, Async/Awiait------------------------------------------------------

const { resolve } = require("path");

//Normal situation
let a =10;
let b =20;

// setTimeout(() => {  
//     b = 25;
// }, 2000);

// console.log(a+b);   //30 becoz javascript didn't wait for the setTimeout to finish and executes the other task

//Promises=========================================================
let waitingData = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(25);
    }, 2000)
});

waitingData.then((b)=> {
    console.log(a+b);   //35
})

//Async/Await=======================================================
// async function getData() {
//     let a = 10;
//     let b = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(25);
//         }
//         , 2000);
//     });
//     console.log(a + b);
// }
// getData();


//Callbacks=========================================================
// function getData() {
//     let a = 10;
//     setTimeout(() => {
//         let b = 25;
//         console.log(a + b);
//     }
//     , 2000);
// }
// getData();

