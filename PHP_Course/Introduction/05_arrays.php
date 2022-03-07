<?php

/*Types of array:
1. Indexed array
2. Associative array
3. Multi-dimensional array
*/

//Indexed Array---------------------------------------------------------------
// echo "Welcome to associative arrays in PHP";
// $arr = array("this", 'That', 'What');
// echo  $arr[0];

 
$favcol = array( 'subham' =>'red', 'rohan' => 'green', 'harry' => 'Blue', 8=> 'this');
echo $favcol['harry'];
echo $favcol[8];
echo "<br>";
echo "<br>";

// Associative Arrays----------------------------------------------------------
foreach ($favcol as $key => $value) {
    echo "<br>Favourite color of $key is $value";
    echo "<br>";
}


//Numeric Array----------------------------------------------------------------
$lol = array("Bananas", "Apple", "Bread", "Butter", "Jam");
foreach ($lol as $value){
    echo $value. " ";
}
?>

<!-- MultiDimesnsional Array -->