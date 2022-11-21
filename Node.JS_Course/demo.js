// setImmediate(function A() {
//     setImmediate(function B() {
//         console.log(1);
//         setImmediate(function D() {
//             console.log(2);
//         });
//     });

const { count } = require("console")

//     setImmediate(function C() {
//         console.log(3);
//         setImmediate(function E() {
//             console.log(4);
//         });
//     });
// });

// console.log('Started...');

// const fs = require('fs')

// async function logChunks(readable) {
//     for await (const chunk of readable) {
//         console.log(chunk);
//     }
// }

// const readable = fs.createReadStream(
//     'Node.JS_Course/FileSystemAsync.txt', { encoding: 'utf8' });
// logChunks(readable);


function birthdayCakeCandles(candles) {
    let height = 0;
    let counter = 0;

    candles.map(candle => {
        if (candle > height) {
            height = candle;
            counter = 1;
        }
        else if (candle === height) {
            counter++;
        }
    });

    return counter;
}
console.log(birthdayCakeCandles([10, 18, 90, 90, 13, 90, 75, 90, 8, 90, 43]))
console.log(birthdayCakeCandles([4, 3, 2, 1, 3]))