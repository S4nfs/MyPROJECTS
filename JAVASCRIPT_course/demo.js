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