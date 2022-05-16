<?php

/*Types of array:
1. Indexed array
2. Associative array
3. Multi-dimensional array
*/

//Indexed Array
// echo "Welcome to associative arrays in PHP";
// $arr = array("this", 'That', 'What');
// echo  $arr[0];

 
$favcol = array( 'subham' =>'red', 'rohan' => 'green', 'harry' => 'Blue', 8=> 'this');
echo $favcol['harry'];
echo $favcol[8];
echo "<br>";
echo "<br>";

// Associative Arrays
foreach ($favcol as $key => $value) {
    echo "<br>Favourite color of $key is $value";
    echo "<br>";
}


//Numeric Array
$lol = array("Bananas", "Apple", "Bread", "Butter", "Jam");
foreach ($lol as $value){
    echo $value. " ";
}


// <!-- MultiDimesnsional Array -->


/*Array functions----------------------------------------------------------------
array_pop($array) - Removes the last element of an array
array_push($array, $element) - Adds an element to the end of an array
array_shift($array) - Removes the first element of an array
array_unshift($array, $element) - Adds an element to the beginning of an array
array_reverse($array) - Reverses the order of the elements in an array
array_search($element, $array) - Searches an array for a given element & return its key
array_slice($array, $offset, $length) - Extracts a part of the array
array_splice($array, $offset, $length, $replacement) - Modifies an array by removing elements
array_merge($array1, $array2) - Merges two or more arrays
array_keys($array) - Returns the keys of an array
array_unique($array) - Removes duplicate values from an array
implode($glue, $pieces) - Joins array elements with a string
explode($delimiter, $string) - Splits a string into an array
*/

$students = array('Sagar', 'Prateek', 'Ajay', 'Vishal', 'Devendra');

array_pop($students);
echo "<pre>";
print_r($students);

array_push($students, "Babloo");
echo "<pre>";
print_r($students);

echo array_search('Prateek', $students);
echo "<br>";

$newStudents = implode(" ", $students);
echo $newStudents;
echo "<br>";

print_r(explode(" ", $newStudents));
echo "<br>";

$splice = array_splice($students, 1, 2);
echo "This is Array Splices ----------------------" . "<pre>";
print_r($splice);
echo "<br>";

?>