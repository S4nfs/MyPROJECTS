<!-- A function is a block of statements that can be used repeatedly in a program -->
<?php

function sum($a, $b){
    $sum = $a + $b;
    echo $sum. "<br>";
}
$c = 50;
sum(10, 20);
sum(42, $c);
echo "The sum of two no. is". sum(20, 20). "<br>";  //no output becoz the function is not return anything, one-way



//🍺 (Return) the value from where it calls==========================================================================================
function sum1($a, $b){
    $sum = $a + $b;
    return $sum;
}
echo "The sum of two no. is ".sum1(20, 20). "<br>"; //two-way | providing arguments + returning value



/*🍺 Call by Value & Call by Reference================================================================================================

1. In case of CALL-BY-VALUE actual value is not modified if its modified inside a function
2. In case of CALL-BY-REFERENCE actual value is modified if its modified inside a function, In such case you need to use & (ampersand)  symbol with formal arguments, the (ampersand) represents reference of the variable.

The term call-by-value means exactly the same as pass-by-value
*/

// Call-By-Value
function Demo($f){      //function definition with formal argument
    $f++;
    return $f;
}
$a = 10;
echo demo($a);          //actual argument    out: 11
echo "<br>";    
echo $a."<br>";         //out: 10


// Call-By-Reference
function Demo1(&$g){    //ampersand symbol
    $g++;
    return $g;
}
$b = 10;
echo demo1($b);         //out: 11
echo "<br>";    
echo $b;                //out: 11

//another example
function removeDuplicates(&$nums) {  
    $nums = array_unique($nums);
    return count($nums);
}

$nums = [0,0,1,1,1,2,2,3,3,4];
$result = removeDuplicates($nums); //$result = 5
echo "Length of the updated array: " . $result . "\n";
echo "Updated array: ";
print_r($nums); //also getting updated varibale value output: [0, 1, 2, 3, 4] 
