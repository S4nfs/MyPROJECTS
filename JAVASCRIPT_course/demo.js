function getIndexToIns(arr, num) {
  let newArray = arr.sort((a, b) => a - b);

  for(let i=0; i<newArray.length; i++){
    if(newArray[i]<=num){
      newArray.push(num);
    }else{
      newArray.unshift(num);
    }
  }
  return newArray.indexOf(num);
}

console.log(getIndexToIns([3, 10, 5], 3));