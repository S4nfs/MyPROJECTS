/* Q1: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
Input: nums = [2,5,5,11], target = 10
Output: [1,2]
*/

//Solution:
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target)
                return [i, j];
        }
    }
};
console.log(twoSum([2,5,5,11], 10));


/* Q2   *
        **
        ***
        ****
        *****   */


for (var i = "*"; i.length < 5; i+= "*") {
    console.log(i);
}

/* Q3.Check whether an iput is palindrome or not ex. "level" is palindrome */



/* Q4. Reverse a string */
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverseString("hello"));