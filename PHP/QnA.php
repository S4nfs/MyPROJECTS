<?php
/*
====================================================================================================================================
 Q1   *
        **
        ***
        ****
        *****   ❔ 
====================================================================================================================================
*/

// for ($i = 1; $i <= 5; $i++) {
//     for ($j = 1; $j <= $i; $j++) {
//         echo "*";
//     }
//     echo "</br>";
// }

/*
====================================================================================================================================
 Q2.Check whether an input is palindrome or not ex. "level" is palindrome ❔
====================================================================================================================================
*/

// function isPalin($str){
//     if(strrev($str) == $str){
//     return "is plaindrome";
// }else{
//     return "not a palindrome";
// }
// }
// echo isPalin("level");

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


/*
====================================================================================================================================
 Q3. Remove duplicates from an sorted array ❔
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
====================================================================================================================================
*/
    
// function removeDuplicates(&$nums) {     // &$nums is a reference to the array
//     $nums = array_unique($nums);
//     return count($nums);
// }

// $nums = [0,0,1,1,1,2,2,3,3,4];
// $result = removeDuplicates($nums);
// echo "Length of the updated array: " . $result . "\n";
// echo "Updated array: ";
// print_r($nums);


/*
====================================================================================================================================
Q3. Write function that return the average of 3 highest grades as an integer. Return -1 if the grades below -1 and -2 if the grades are above 100. The function takes the 5 subjects grades as parameters ❔
====================================================================================================================================
*/

// function best_three($sub1, $sub2, $sub3, $sub4, $sub5){
//     //first check grades if grades are below 0 return -1 and if grades are above 100 return -2
//     if ($sub1 < 0 || $sub2 < 0 || $sub3 < 0 || $sub4 < 0 || $sub5 < 0){
//         return -1;
//     }
//     else if ($sub1 > 100 || $sub2 > 100 || $sub3 > 100 || $sub4 > 100 || $sub5 > 100){
//         return -2;
//     }
//     else{
//         $grades = array($sub1, $sub2, $sub3, $sub4, $sub5);
//         rsort($grades);
//         //take average and return as interger
//         $average = ($grades[0] + $grades[1] + $grades[2]) / 3;
//         return $average;
//     }
// }
// echo best_three(10, 20, 30, 40, 50);

/*
====================================================================================================================================
Q4. Longest Substring Without Repeating Characters
Input: "abcabcbb"
Output: abc
==================================================================================================================================
*/
// function lengthOfLongestSubstring($s) {
//     $max = 0;
//     $start = 0;
//     $i = 0;
//     $characters = [];
//     for($i = 0; $i< strlen($s); $i++){
//         if (isset($characters[$s[$i]])) {
//             $start = max($start, $characters[$s[$i]] + 1);
//         }
//         $characters[$s[$i]] = $i;
//         $max = max($max, $i - $start + 1);
        
//     }
//     return $max;
// }
// echo lengthOfLongestSubstring("abcabcbb");

/*
====================================================================================================================================
Q4. Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
==================================================================================================================================
*/
function removeElement(&$nums, $val) {
    $i = 0;
    $j = 0;
    while($i < count($nums)){
        if($nums[$i] != $val){
            $nums[$j] = $nums[$i];
            $j++;
        }
        $i++;
    }
    $nums = array_slice($nums, 0, $j); //create a new array with the extracted values
    return $j;
}

$nums = [3,2,2,3,3,5];
echo removeElement($nums, 3);
echo "\n";

print_r($nums);
