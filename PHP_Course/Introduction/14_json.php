<?php
/* 🍺 JSON stands for JavaScript Object Notation, and is a syntax for storing and exchanging data.
PHP has some built-in functions to handle JSON
- json_encode()
- json_decode()
*/

$asarray = ["Cat" => "Mouse", "Dog"=> "Cat", "Horse"=>"Grass"];
$je = json_encode($asarray);        //encode array to json
echo $je."<br>";

print_r(json_decode($je));          // decode a JSON object into a PHP object(if no second args) otherwise an associative array.
echo "<br>";
print_r(json_decode($je, true));