// function birthdayCakeCandles(candles) {
//     let count = 1;
//     let first = candles[0];

//     for (let i = 1; i < candles.length; i++) {
//         if (first == candles[i]) {
//             count++

//         }
//         first = candles[i]
//     }
//     return count;

// }

// console.log(birthdayCakeCandles([3, 2, 1, 3]))
// console.log(birthdayCakeCandles([10, 18, 90, 90, 13, 90, 75, 90, 8, 90, 43]))

// function birthdayCakeCandles(candles) {
//     let cond = Math.max(...candles);
//     return candles.filter(function (e) {
//       return e === cond;
//     }).length;
//   }

function birthdayCakeCandles(candles) {
    let count = 0;
    let highest = Math.max(...candles);
    for (i of candles) {
        if (highest == i) {
            count++
        }
    }
    return count
}
print(birthdayCakeCandles([10, 18, 90, 90, 13, 90, 75, 90, 8, 90, 43]))
