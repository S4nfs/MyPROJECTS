// function smallestDivide(num) {
//     for (let i = 0; i < num; i++) {
//         if (i % 2 === 0 && i % 3 === 0 && i % 4 === 0 && ... && i % 20 === 0)
//         return i;

//     }
// }
// smallestDivide(10000)

function nthLargest(arr, n) {
    const map = arr.map((value, index) => { index, value }).sort((e1, e2) => (e2.value - e1.value));
    console.log(map);
    return map[n - 1].index;
}

const arr = [91, 2, 33, 51, 54, 39, 34, 61, 34, 91];
const result = nthLargest(arr, 3);
console.log(`Number is ${arr[result]} at index ${result} `)