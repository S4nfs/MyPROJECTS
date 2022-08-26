
let i = 0, j = 1, myarray= [2,3,1,4], newarray = [];

function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  }
  return true;
}


function sortArray(array) {
  if (isSorted(array)) {
    // newarray = array;
    console.log(array)
    return array; 
  } else if (array[i] < array[j]) {
    i++;
    j++;
    sortArray(array)  //recursion as the fuction call itself
  } else {
    [array[i],array[j]] = [array[j],array[i]]
    i = 0;
    j = 1;
    sortArray(array)  //recursion
  }
}
const res = sortArray(myarray);
console.log(res);