/* Q1: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
Input: nums = [2,5,5,11], target = 10
Output: [0,1]
*/

//Soulution:
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target)
                return [i, j];
        }
    }
};
console.log(twoSum([2,5,5,11], 10));
