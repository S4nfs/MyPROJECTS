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

/* Q5. Return Largest Numbers in Arrays */
function largestOfFour(arr) {
  let result = [];
  for(let i=0; i<arr.length; i++){
      let maxnumber = arr[i][0];
      for(let j=0; j<arr[i].length; j++){
        if(arr[i][j] > maxnumber){
          maxnumber = arr[i][j];
        } 
      }
      result[i] = maxnumber;
    }
    return result;
  }
  
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10], [2, 33, 4, 8]]));

//
function largestOfFour(arr) {
  return arr.map(function(group) {
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    });
  });
}
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, 10, 18, 21], [72, 3, 17, 10], [2, 33, 4, 8]]));



/* Q6 Confirm the Ending */

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target; //7 - 4 = 3 which starts from 0
}
console.log(confirmEnding("newname", "name"));

/* Q7 Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.*/

function titleCase(str) {
   let splitter = str.split(" ");
   let newarr = [];
   for(var st in splitter){
      newarr[st] = splitter[st][0].toUpperCase()+splitter[st].slice(1).toLowerCase();
   }
   return newarr.join(" ")
 }
 
console.log(titleCase("I'm a little tea pot"));