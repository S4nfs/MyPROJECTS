<!-- 
The implode function is used to “join elements of an array with a string”.
The explode function is used to “it breaks a string into an array”. -->



<?php
// Example 1
// $pizza  = "piece1 piece2 piece3 piece4 piece5 piece6";
// $pieces = explode(" ", $pizza);
// echo $pieces[0]; // piece1
// echo $pieces[1]; // piece2


// $arr = array('Nikunj','Joshi','PHP','Developer');
// $str = implode("-",$arr);
// echo $str;

// echo "<br>";
// echo "<br>";
// $names = "Nikunj Joshi PHP Developer \n Sagar Loves PHP";
// // $outpit = explode(" ",$names);                                        arrays space-wise
// $outpit = explode("\n", $names);                                         //arrays line-wise
// echo $outpit[1];
$str = "foo bar php js";
$arr =  explode(" ", $str);

//print all the value which are in the array
foreach($arr as $v){
    echo $v[0][1];
}


?>
