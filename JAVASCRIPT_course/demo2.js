
function largestOfFour(arr) {
    return arr.map(function(group) {
      return group.reduce(function(prev, current) {
        return current > prev ? current : prev;
      });
    });
  }
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, 10, 18, 21], [72, 3, 17, 10], [2, 33, 4, 8]]));

//rewrite the above program using fat arrow function
function largestOfFour(arr) {
    return arr.map(group => group.reduce((prev, current) => current > prev ? current : prev));
  }