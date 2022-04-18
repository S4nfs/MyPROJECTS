<p align = center>String Functions<p>
<?php
$str= "I am a Dev";
$str1 = "My name is Sagar";
$str2 = " My hobby is coding\n and nothing else ";


echo strlen($str). "<br>";                          //length - 10
echo str_word_count($str)."<br>";                   //count words - 4 
echo strrev($str)."<br>";                           //reverse - veD a ma I
echo str_replace("am", "need", $str)."<br>";        //replace - I need a Dev
echo similar_text($str, $str1)."<br>";              //characters similar - 5
echo chop($str2)."yes"."<br>";                      //remove whitespace and extra characters from right
echo trim($str2)."<br>";                            //remove whitespace and extra characters from both end
echo "<br><br>";
echo ucfirst($str)."<br>";                          //first letter capital - I
echo lcfirst($str)."<br>";                          //first letter lower - i
echo ucwords($str)."<br>";                          //first letter capital of each word - I Am A Dev
echo strtoupper($str)."<br>";                       //all uppercase - I AM A DEV
echo strtolower($str)."<br>";                       //all lowercase - i am a dev
echo wordwrap($str, 5, "<br>")."<br>";              //word wrap - I am 
                                                    //            a Dev
echo substr($str, 2)."<br>";                        //returns a part of a string starting from 0 - am a Dev
echo "<br><br>";
?>

<p align = center>String Functions<p>
<?php
//function(seperator, array)
$arr = explode(" ", $str);                          //string to array - Array ( [0] => I [1] => am [2] => a [3] => Dev )
print_r($arr);
echo "<br>";
echo implode(" ", $arr)."<br>";                     //array to string - I am a Dev
echo join("+", $arr)."<br>";                        //join array - I+am+a+Dev
?>

<p align= center>Math Functions<p><br><br>
<?php

echo abs(-100)."<br>";                              //returns the absolute (positive) value of a number - 100


    





