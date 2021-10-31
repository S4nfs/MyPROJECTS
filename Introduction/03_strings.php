<?php
$str= "This";
echo $str;
$lenn = strlen($str);
echo "The length of this sting is ";      //also written as "The length of this sting is " .$lenn; this is 
echo $lenn;                                         // called concatenate and dot is to connect two strings

 

echo "The length of this sting is " . $lenn . "  Thank You <br>";                       //function  length
echo "The length of this sting is " . str_word_count($lenn) . "  Thank You";           //str_word_count is a function
echo "The reverse of the sting is " . strrev($lenn) . "  Thank You";                   //strrev function 
echo "string replacement function " . str_replace("is", "at", $str) . "  Thank You";   //string replace function









?>