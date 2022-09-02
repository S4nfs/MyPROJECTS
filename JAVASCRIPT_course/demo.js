
const maxCharacters = (str) => {
  const alpha = {};
  str.split("").forEach(element => {
    alpha[element] = alpha[element] ? alpha[element] + 1 : 1;   //key:value
  });

  let max = 1;
  let letter
  for (let k in alpha) {  //get value
    if (alpha[k] > max) {
      max = alpha[k];
      letter = k;
    }
  }
  return letter;
}
console.log(maxCharacters("Hello World"));