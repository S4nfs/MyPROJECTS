//==============================================================================================================================
/* Q1: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
Input: nums = [2,5,5,11], target = 10
Output: [1,2]
*/
//==============================================================================================================================
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
/* Q3.Check whether an input is palindrome or not ex. "level" is palindrome */
//==============================================================================================================================
const isPal = (str) => {
  // Use the reverse() method to reverse the new created array
  let reverse = str.split("").reverse().join("");
  return str.toLowerCase() === reverse.toLowerCase();
}
console.log(isPal("level"));

//
const isPal2 = (str) => {

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right])
      return false;
    left++;
    right--;
  }
  return true
}
console.log(isPal2("level"));

//
const isPal3 = (str) => {
  let revStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  console.log(revStr)
  if (str !== revStr) {
    return false
  }
  return true;
}
console.log(isPal3("level"));



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
'hello' -> 'lllheo' not an anagram
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
  for (let items of string2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  }
  return true;
}
console.log(isAnagram('hello', 'llheo'));
// o(n) linear time complexity 


//==============================================================================================================================
/* Q.11 Count Unique Numbers
Input: [1,1,2,2,3,3,4,5,6,8,8]
Output: 8
*/
//==============================================================================================================================
function CountUnique(array) {
  let i = 0;
  if (array.length > 0) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;

  } else {
    throw new Error("Array is Empty");
  }
}
console.log(CountUnique([1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 8]));

//==============================================================================================================================
/* Q.12 Largest sum of 4 consecutive digits
Input: [1,2,3,4,3,5,4,6,7,8]
Output: 25
*/
//==============================================================================================================================

//7 times the outer loop to be executed so the formula is :
// Total - num + 1 = loop
// 10 - 4 + 1 = 7

function findLargest(array, num) {
  if (num > array) {
    throw new Error("Number exceeds array");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - 4 + 1; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        temp += array[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}
console.log(`Largest 4 Consecutive Numbers is ${findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4)}`);

//==============================================================================================================================
/* Q.13 Binary Search - Find the index of given number in a sorted array 7
Input: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
Output: 6
*/
//==============================================================================================================================

/* Working: Divide and conquer technique
min=0;         max=array.length-1
midIndex=(min+max)/2 => (0+14)/2 => 7(index)
if(array[midIndex] < num(7))
min=midIndex+1  =>  RHS
if(array[midIndex] > num(7))
max=midIndex-1  => LHS  => 6  `[1,2,3,4,5,6,7]` && min=0
midIndex=(min+max)/2 => (0+6)/2 => 3(index) 
min=midIndex+1  => LHS => 4(index)  `[5,6,7]` && max=6
midIndex=(min+max)/2 => (4+6)/2 => 5(index) 
min=midIndex+1  => LHS => 6(index) && max=6
return midIndex;
*/

function BinSearch(array, num) {
  let min = 0, max = array.length - 1;

  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2); //prevent decimal at all cost
    if (array[midIndex] < num) {
      min = midIndex + 1;
    } else if (array[midIndex] > num) {
      max = midIndex - 1
    } else {
      return midIndex;
    }
  }
}
console.log(BinSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7)); //Time Complexity Binary o(log(n))

//==============================================================================================================================
/* Q.14 Checking square in another array
Input: [1,2,3,4] [1,9,4,16]
Output: true
*/
//==============================================================================================================================

function isSquare(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    let result = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] * array1[i] === array2[j]) {
        result = true;
      }
      if (j === array2.length - 1) {
        if (!result) {
          return false;
        }
      }
    }
  }
  return true;
}
console.log(isSquare([1, 2, 3, 4], [1, 9, 4, 16]))
//Quadratic Time Complexity o(n^2)
// const isSquareCheck = (arr1,arr2) =>  arr1.every(arr => arr2.includes(arr * arr))
// console.log(isSquareCheck([1,2,3,4],[1,9,4,16]))

//==============================================================================================================================
/* Q.15 Sorting using simple Recursive Function
Input: [2,3,1,4]
case1: [2,1,3,4]
Output: [1,2,3,4]
*/
//==============================================================================================================================

let i = 0, j = 1, myarray = [2, 3, 1, 4], newarray = [];

function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  }
  return true;
}
function sortArray(array) {
  if (isSorted(array)) {
    newarray = array;
    return;
  } else if (array[i] < array[j]) {
    i++;
    j++;
    sortArray(array)  //recursion as the fuction call itself
  } else {
    [array[i], array[j]] = [array[j], array[i]]
    i = 0;
    j = 1;
    sortArray(array)  //recursion
  }
}
sortArray(myarray);
console.log(newarray);


//==============================================================================================================================
/* Q.16 Helper Recursive Function
Input: [1,2,3,4,5,6,7,8,9,10]
Output: [1,3,5,7,9]  //odd numbers
*/
//==============================================================================================================================
function findOdd(array) {
  let result = [];
  function helperFunction(inputArray) {
    if (inputArray.length === 0) {
      return;       //to exit inner function
    }
    if (inputArray[0] % 2 !== 0) {
      result.push(inputArray[0])
    }
    helperFunction(inputArray.slice(1))
  }
  helperFunction(array)
  return result;
}
const res = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(res);

//==============================================================================================================================
/* Q.17 Linear Search Algorithm
*/
//==============================================================================================================================

const users = [{ username: "sagar", email: "sagar@gmail.com" },
{ username: "prateek", email: "prateek@gmail.com" },
{ username: "ajay", email: "ajay@gmail.com" },
{ username: "vaishali", email: "vaishali@gmail.com" }];

function letsSearch(array, val) {
  for (let names of array) {
    if (names['username'] === val)
      return true;
  }
  return false;
}
//time complexity linear o(n)
console.log(letsSearch(users, 'ajay'));


//==============================================================================================================================
/* Q.18 Bubble Sort - a sorting algorithm where the largest values bubble up at the top [left -> right]
*/
//==============================================================================================================================

function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) { //save memory by excluding the last one
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
console.log(bubbleSort([5, 3, 4, 1, 2, 8, 6, 7]));

//==============================================================================================================================
/* Q.19 Selection Sort -  sorts an array by repeatedly finding the minimum element from unsorted part and putting it at the beginning
https://visualgo.net/en/sorting?slide=6-11
 
Steps: Consider first element as smallest (Pointer)
         P
Case 1: [0, 2, 34, 22, 10, 19]  - No Change
            P
Case 2: [0, 2, 34, 22, 10, 19]  - No Change
                P  min                   P      min              
Case 3: [0, 2, 34, 22, 10, 19] , [0, 2, 34, 22, 10, 19] , [0, 2, 10, 22, 34, 19]  - change
                    P  min                   P      min              
Case 4: [0, 2, 10, 22, 34, 19] , [0, 2, 10, 22, 34, 19] , [0, 2, 10, 19, 34, 22]  - change
                        P  min                  
Case 5: [0, 2, 10, 19, 34, 22] , [0, 2, 10, 19, 22, 34] - change
*/
//==============================================================================================================================


function SelectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;      //change index
      }
    }
    if (i !== min) {  //comparing index then swap
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}
console.log(SelectionSort([0, 2, 34, 22, 10, 19]))

//==============================================================================================================================
/* Q.20 Insertion Sort -
*/
//==============================================================================================================================
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

//==============================================================================================================================
/* Q.20 Find the maximum occurence characters in a string
*/
//==============================================================================================================================


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

//==============================================================================================================================
/* Q.21 Longest Substring without repeating characters
*/
//==============================================================================================================================

