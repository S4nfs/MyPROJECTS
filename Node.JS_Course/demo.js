// setImmediate(function A() {
//     setImmediate(function B() {
//         console.log(1);
//         setImmediate(function D() {
//             console.log(2);
//         });
//     });

//     setImmediate(function C() {
//         console.log(3);
//         setImmediate(function E() {
//             console.log(4);
//         });
//     });
// });

// console.log('Started...');

const fs = require('fs')

async function logChunks(readable) {
    for await (const chunk of readable) {
        console.log(chunk);
    }
}

const readable = fs.createReadStream(
    'Node.JS_Course/FileSystemAsync.txt', { encoding: 'utf8' });
logChunks(readable);