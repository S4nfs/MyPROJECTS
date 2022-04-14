 <!-- Important Tips- PHP is not case sensitive -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP website</title>
</head>
<body>
<div class="container">
This is my first PHP website
<?php
echo "echo just print something on screen without showing its logic of the backend <br>";   //echo
// secret logic here

$variable1 = 5;              //variable denoted by $ sign
$variable2= 2;
echo $variable1;
echo "<br>"; 
echo $variable2;
echo "<br>"; 
echo $variable1+$variable2;
echo "<br>";                 //break line

/* Operators in PHP-----------------------------------------------------------------------------------------------
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Increment/Decrement Operators
5. Logical Operators
6. String Operators
7. Array Operators
8. Conditional assignment operators
*/
// Airthematic Operators  +, -, *, /, %, **
echo "The value of variable1 + variable2 is ";
echo "<br>";                  
echo $variable1 + $variable2;
echo "<br>";

echo "The value of variable1 - variable2 is ";
echo "<br>";                    
echo $variable1 - $variable2;
echo "<br>";

echo "The value of variable1 * variable2 is ";
echo "<br>";                  
echo $variable1 * $variable2;

echo "<br>";
echo "The value of variable1 / variable2 is ";
echo "<br>";                  
echo $variable1 / $variable2;
echo "<br>"; 

echo "The value of variable1 % variable2 is ";
echo "<br>";                  
echo $variable1 % $variable2;
echo "<br>"; 

echo "The value of variable1 ** variable2 is ";
echo "<br>";                  
echo $variable1 ** $variable2;
echo "<br>"; 
echo "<br>"; 


// Assignment Operators  =, +=, -=, *=, /=               ----------------------------------------------------------
$newVar = $variable1;
// $newVar += 1;             Output= 6
// $newVar -= 1;             Output= 4
// $newVar *= 2;             Output= 10
// $newVar /= 2;             Output= 2.5
echo "The value of ne variable is ";
echo $newVar;
echo "<br>"; 

// Comprison Operators  >, <, >=, <=, ==, !=            ----------------------------------------------------------
echo "<br>";
echo "The value of 1==4 is ";
echo var_dump(1==4);                //function var_dump  
echo "<br>";

echo "The value of 1>=4 is ";
echo var_dump(1>=4);                //function var_dump  
echo "<br>";

echo "The value of 1<=4 is ";
echo var_dump(1<=4);                //function var_dump  
echo "<br>";

echo "The value of 1!=4 is ";
echo var_dump(1!=4);                //function var_dump  
echo "<br>";

echo "The value of 1>4 is ";
echo var_dump(1>4);                //function var_dump  
echo "<br>";

echo "The value of 1<4 is ";
echo var_dump(1<4);                //function var_dump  
echo "<br>";


// Increment/Decrement Operators   variable++, variable--, --variable, ++variable -----------------------------------
echo $variable1++;                   //output first pint then increment 5 6
echo "<br>";
echo $variable1;

// echo $variable1--;                  //output first print then decrement 5 4
// echo "<br>";
// echo $variable1;

// echo --$variable1;                    //output first decrement then print 4 4
// echo "<br>";
// echo $variable1;

// echo ++$variable1;                 //output first decrement then print 6 6
// echo "<br>";
// echo $variable1;


// Logical Operators        and (&&),  or(||), not !, xor, ye reverse or hai yaar ---------------------------------------------------------     
$myVar =  (false and true);
echo "<br>";
echo var_dump($myVar);  

?>
<?php
define ('PIkivalue', 3.14);            //this is define a constant variable PI liya h, kahi bhi use kroge value ayegi
// Data types in PHP:
// 1.String
// 2.Integer
// 3.Float 
// 4.Boolean
// 5.Array      used to store multiple values in a single variable
// 6.Object     Instances of classes
// 7.Null       to reset a variable

echo "<br>Data types </br>";
$var = "This is a string";
echo var_dump($var);

echo "<br>";
$var = 67;
echo var_dump($var);

echo "<br>";
$var = 67.1;
echo var_dump($var);

echo "<br>";
echo PIkivalue;

$languages = array("Python", "C++", "JAVA", "PHP");           //arrays is a function = a collection of things
echo $languages[1];

echo "<br>";
echo count ($languages);                                       //count method
echo "<br>";

$name  = null;                                                 //null
echo var_dump($name);
echo "<br>";
echo "<br>";

//Type Casting---------------------------------------------------------------------------------------------------------
$int = (int)"100 USD";
var_dump($int);
echo "<br>";

$str = (string)200;
var_dump($str);


?>
</div>
</body>
</html>