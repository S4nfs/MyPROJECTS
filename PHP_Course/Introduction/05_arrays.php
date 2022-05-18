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

 
$favcol = array( 'subham' =>'red', 'rohan' => 'green', 'harry' => 'Blue', 8 => 'this');
echo $favcol['harry'];
echo $favcol[8];
echo "<br>";

// Associative Arrays
foreach ($favcol as $key => $value) {
    echo "<br>Favourite color of $key is $value";
}
echo "<br>";


//Numeric Array
$lol = array("Bananas", "Apple", "Bread", "Butter", "Jam");
foreach ($lol as $value){
    echo $value. " ";
}
echo  "<br><br>";


// <!-- MultiDimesnsional Array -->


/*Array functions----------------------------------------------------------------
count() - returns the number of elements in an array
unset() - deletes an element from an array
array_pop($array) - Removes the last element of an array
array_push($array, $element) - Adds an element to the end of an array
array_shift($array) - Removes the first element of an array
array_unshift($array, $element) - Adds an element to the beginning of an array
array_reverse($array) - Reverses the order of the elements in an array
array_search($element, $array) - Searches an array for a given element & return its key
array_slice($array, $offset, $length) - Extracts a part of the array & returns it as a new array
array_splice($array, $offset, $length, $replacement) - Modifies an array by removing elements
array_merge($array1, $array2) - Merges two or more arrays
array_keys($array) - Returns the keys of an array
array_unique($array) - Removes duplicate values from an array
implode($glue, $pieces) - Joins array elements with a string
explode($delimiter, $string) - Splits a string into an array
*/

$students = array('Sagar', 'Prateek', 'Ajay', 'Vishal', 'Devendra');
echo "Count the array ".count($students) ."<br>";

for($i=0; $i<count($students); $i++){
    //unset vishal
    if($students[$i] == 'Vishal'){
        unset($students[$i]);
    }
//echo

    echo $students[$i]."<br>";
}


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

$array8 = ["mohan", "samrat", "bittu", "nilesh","santosh", "amit"];
$sliced = array_slice($array8, -2, 2); //(array, start, length)
echo "This is Array Slice that take 3 params----------------------" . "<pre>";
print_r($sliced); 
echo "</pre>";
print_r($array8);   //original array

$array8 = ["mohan", "samrat", "bittu", "nilesh","santosh", "amit"];
$spliced = array_splice($array8, -2, 2); 
echo "This is Array Splice that take 4 params if you want to replace the extracted elements----------------------" . "<pre>";
print_r($spliced); 
echo "</pre>";
print_r($array8);  //modify the original array
?>