// const userz = {
//   Alan: {
//     online: false
//   },
//   Jeff: {
//     online: true
//   }
// }
// for (let user in userz) {
//   console.log(userz[user])
// }

// var str = ["Apple", "Banana", "Orange"]

// var message = {
//   error: ["Error1", "Error2", "Error3"],
//   success: ["Success1", "Success2", "Success3"]
// }

// message.forEach((key) => {
//   message([key].forEach(value => {
//     console.log(`${key} and the value is ${value}`);
//   }))
// })


// function largestOfFour(arr) {
//   let result = [];
//   t = 0
//   for (let i = 0; i < arr.length; i++) {
//     let maxnumber = arr[i][0];
//     for (let j = 0; j < arr[i].length; j++) {
//       console.log(t++)
//       if (arr[i][j] > maxnumber) {
//         maxnumber = arr[i][j];
//       }
//     }
//     result[i] = maxnumber;
//   }
//   return result;
// }

const insertionSort = (array) => {

  for (i = 1; i < array.length; i++) {
    let curr = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > curr) {
      array[j + 1] = array[j];  //temp [8,8,4,1,3]
      j--;
    }
    array[j + 1] = curr;  //-1+1 = 0 [2,8,4,1,3]
  }
  return array;
}

console.log(insertionSort([8, 2, 4, 1, 3]));
