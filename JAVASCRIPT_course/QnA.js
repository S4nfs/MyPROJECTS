//==============================================================================================================================
/* Q1: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
Input: nums = [2,5,5,11], target = 10
Output: [1,2]
*/
//==============================================================================================================================
//Solution:
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target)
        return [i, j];
    }
  }
};
console.log(twoSum([2, 5, 5, 11], 10));

//==============================================================================================================================
/* Q2   *
        **
        ***
        ****
        *****   */
//==============================================================================================================================

for (var i = "*"; i.length < 5; i += "*") {
  console.log(i);
}

//==============================================================================================================================
/* Q3.Check whether an iput is palindrome or not ex. "level" is palindrome */
//==============================================================================================================================


//==============================================================================================================================
/* Q4. Reverse a string */
//==============================================================================================================================
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverseString("hello"));

//==============================================================================================================================
/* Q5. Return Largest Numbers in Arrays */
//==============================================================================================================================
function largestOfFour(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let maxnumber = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > maxnumber) {
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
  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return current > prev ? current : prev;
    });
  });
}
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, 10, 18, 21], [72, 3, 17, 10], [2, 33, 4, 8]]));


//==============================================================================================================================
/* Q6 Confirm the Ending */
//==============================================================================================================================
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target; //7 - 4 = 3 which starts from 0
}
console.log(confirmEnding("newname", "name"));

//==============================================================================================================================
/* Q7 Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.*/
//==============================================================================================================================
function titleCase(str) {
  let splitter = str.split(" ");
  let newarr = [];
  for (var st in splitter) {
    newarr[st] = splitter[st][0].toUpperCase() + splitter[st].slice(1).toLowerCase();
  }
  return newarr.join(" ")
}

console.log(titleCase("I'm a little tea pot"));

//==============================================================================================================================
/* Q8 Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array. */
//==============================================================================================================================

function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false; //return -1 if not found otherwise return index 
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
//==============================================================================================================================
/* Q9 Checking Sun Zero
Input: nums = [-5, -4, -3, -2, 0, 2,4,6,8]
Output: [-4, 4] sum should be 0
*/
//==============================================================================================================================

//o(n^2) quadratic time complexity
function getSumZero(array) {
  for (let number of array) {
    for (let j = 1; j <= array.length; j++) {
      if (number + array[j] === 0) {
        return [number, array[j]];
      }
    }
    console.log(number)
  }
}
console.log(getSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]));

//make it linear o(n) with single loop that saves memory
function findSomePair(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];

    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(findSomePair([-5, -4, -3, -2, 0, 2, 4, 6, 8]));

//==============================================================================================================================
/* Q.10 String anagram
'hello' -> 'lllheo' no an anagram
'sagar' -> 'agars'  is anagram
*/
//==============================================================================================================================

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let counter = {};
  for (let letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1;
    console.log(counter[letter]);
  }
  for(let items of string2){
    if(!counter[items]){
      return false;
    }
    counter[items] -= 1;
  }
  return true;
}
console.log(isAnagram('hello', 'llheo'));