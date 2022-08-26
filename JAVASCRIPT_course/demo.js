
let i = 0, j = 1, myarray= [2,3,1,4];
function isSorted(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        return false
      }
      return true;
    }
  }

  console.log(isSorted(myarray))