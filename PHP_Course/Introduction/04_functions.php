<!-- A function is a block of statements that can be used repeatedly in a program -->
<?php

function sum($a, $b){
    $sum = $a + $b;
    echo $sum. "<br>";
}
$c = 50;
sum(10, 20);
sum(42, $c);
echo "The sum of two no. is". sum(20, 20); //no output becoz the function is not return anything, one-way


//(Return) the value from where it calls
function sum1($a, $b){
    $sum = $a + $b;
    return $sum;
}
echo "The sum of two no. is ".sum1(20, 20); //two-way | providing arguments + returning value



?>