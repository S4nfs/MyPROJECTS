// const Sort = (array) => {
//   for (let i = 1; i < array.length; i++) {
//     let curr = array[i];
//     let j;
//     for (j = i - 1; j >= 0; j--) {
//       if (array[j] >= 0 && array[j] > curr) {
//         array[j + 1] = array[j];
//       }
//     }
//     array[j + 1] = curr;
//   }
//   return array
// }

// console.log(Sort([8, 2, 4, 1, 3]))


const mergePlz = (array1, array2) => {
    let result = [];
    for (i = 0; i < array1.length; i += 1) {
        result[i] = array1[i];
    }
    for (j = 0; j < array2.length; j += 1) {
        result[array1.length + j] = array2[j];
    }
    return result;
}
console.log(mergePlz([20, 55, 46, 2, 90, 44], [98, 55, 3, 14, 20, 36, 88]))

//
let array1 = [20, 55, 46, 2, 90, 44], array2 = [98, 55, 3, 14, 20, 36, 88];
let mergePlz2 = [...array1, ...array2];
console.log(mergePlz2);