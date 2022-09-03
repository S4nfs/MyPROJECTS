
const maxCharacters = (str) => {
  const alpha = {};
  str.split("").forEach(element => {
    alpha[element] = alpha[element] ? alpha[element] + 1 : 1;   //key:value

    console.log(alpha)
  })
}
console.log(maxCharacters("Hello World"));