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

function isPalin($str){
    if(strrev($str) == $str){
    return "is plaindrome";
}else{
    return "not a palindrome";
}
}
echo isPalin("level");