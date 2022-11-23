/*
1. The function `fibonacci` takes a number `n` as an argument.
2. If `n` is less than 2, then return `n`.
3. Otherwise, return the sum of the previous two numbers in the sequence.
*/
/*
Time Complexity: O(2^n)
*/
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(6))