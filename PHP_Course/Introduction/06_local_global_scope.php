<?php
echo "Welcome to local/global vars in PHP";
$a = 98;   //global var

function printvalue(){
    $a = 97;   //local variable becoz its inside a function, if you need to access the global ones write this
    // global $a;
echo "The value of your variable is $a ";

}
echo $a;
printvalue();     //call

echo "The value of your variable is $a ";

?>