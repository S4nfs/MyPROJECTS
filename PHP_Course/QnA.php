<?php
/* Q1   *
        **
        ***
        ****
        *****   */

// for ($i = 1; $i <= 5; $i++) {
//     for ($j = 1; $j <= $i; $j++) {
//         echo "*";
//     }
//     echo "</br>";
// }

/* Q2.Check whether an iput is palindrome or not ex. "level" is palindrome */

// function isPalin($str){
//     if(strrev($str) == $str){
//     return "is plaindrome";
// }else{
//     return "not a palindrome";
// }
// }
// echo isPalin("level");

/* Q3.

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
*/


// function removeDuplicates( &$nums ) {
//    $unique = array_unique($nums);
//    return $unique;
// }

// $nums = [0,0,1,1,1,2,2,3,3,4];
// $k = 0;
// print_r(removeDuplicates($nums));
// //count the number of unique elements in the array
// $k = count(removeDuplicates($nums));
// echo $k;


 function removeDuplicates($nums) {
        // Length of the updated array
        $count = 0;
        // Loop for all the elements in the array
        for ( $i = 0; $i < $nums.length; $i++) {
            // If the current element is equal to the next element, we skip
            if ($i < $nums.length - 1 && $nums[i] == $nums[i + 1]) {
                continue;
            }
            // We will update the array in place
            $nums[count] = $nums[i];
            count++;
        }
        return count;
    };