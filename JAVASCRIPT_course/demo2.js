
function findOdd(array){
  let result = [];
  function helperFunction(inputArray){
    if(inputArray.length === 0){
      return; 
    }
    if(inputArray[0]%2 !== 0){
      result.push(inputArray[0])
    }
    helperFunction(inputArray.slice(1))
  }
  helperFunction(array)
  // return result;
}
const res = findOdd([]);
console.log(res);