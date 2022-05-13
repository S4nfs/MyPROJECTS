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

/* 🍺 Operators in PHP:==============================================================================================================
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
echo $newVar += 1;                   //Output= 6
echo "<br>"; 

echo $newVar -= 1;                   //Output= 4
echo "<br>"; 

echo $newVar *= 2;                   //Output= 10
echo "<br>"; 

echo $newVar /= 2;                   //Output= 2.5
echo "<br>"; 
echo "<br>"; 


// Comprison Operators  >, <, >=, <=, ==, !=, ===, <=>   ----------------------------------------------------------
echo "<br>";
echo "The value of 1==4 is ";
echo var_dump(1==4);                //equal   
echo "<br>";

echo "The value of 1>=4 is ";
echo var_dump(1>=4);                //greater than or equal to 
echo "<br>";

echo "The value of 1<=4 is ";
echo var_dump(1<=4);                //less than or equal to
echo "<br>";

echo "The value of 1!=4 is ";
echo var_dump(1!=4);                //not equal
echo "<br>";

echo "The value of 1>4 is ";
echo var_dump(1>4);                //greater than
echo "<br>";

echo "The value of 1<4 is ";
echo var_dump(1<4);                //less than
echo "<br>";

echo "The value of 1===1 is ";
echo var_dump(1===1);               //identical 
echo "<br>";

echo "The value of 1<=>1 is ";
echo var_dump(1<=>1);               //spaceship 0, 1, -1  //0 means equal, 1 means greater than, -1 means less than
echo "<br>";
echo "<br>";

// Increment/Decrement Operators   variable++, variable--, --variable, ++variable -----------------------------------
echo $variable1++;                      //output first pint then increment 5 6
echo "<br>";
echo $variable1;

// echo $variable1--;                   //output first print then decrement 5 4
// echo "<br>";
// echo $variable1;

// echo --$variable1;                   //output first decrement then print 4 4
// echo "<br>";
// echo $variable1;

// echo ++$variable1;                   //output first decrement then print 6 6
// echo "<br>";
// echo $variable1;
echo "<br>";
echo "<br>";

// Logical Operators        and (&&),  or(||), not !, xor (True if either $x or $y is true, but not both--
$myVar =  (false and true);
echo "<br>";
echo var_dump($myVar);  
echo "<br>";
echo "<br>";


//String Operators  ., .=, .(), .[]  ---------------------------------------------------------------------
$string1 = "Hello";                      //Concatenation
$string2 = "World";
echo $string1 . $string2;
echo "<br>";

echo $string1 .= $string2;              //Concatenation and assignment
echo "<br>";
echo "<br>";

//Array Operators  +, ==, ===, !=, !==,---------------------------------------------------------------------
$x = array("a" => "red", "b" => "green");  
$y = array("c" => "blue", "d" => "yellow");  
print_r($x + $y);                        //Union of $x and $y
echo "<br>";

var_dump($x == $y);                      //True if $x and $y contain the same key/value pairs
echo "<br>";
echo "<br>";


//Conditional assignment operators  ?:  ---------------------------------------------------------------------
$me = 10; 
$you = 20;
echo $me > $you ? "Me greater than you" : "Me is less than you";
echo "<br>";
echo "<br>";

//🍺 Constant
define ('PIkivalue', 3.14);            //this is define a constant variable PI liya h, kahi bhi use kroge value ayegi
echo PIkivalue. "<br>";

//🍺 Data types in PHP:==============================================================================================================
// 1.String
// 2.Integer
// 3.Float 
// 4.Boolean
// 5.Array      used to store multiple values in a single variable
// 6.Object     Instances of classes
// 7.Null       to reset a variable
// 8.Resource   to store a file handle

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

//🍺 Type Casting:==============================================================================================================
$int = (int)"100 USD";
var_dump($int);
echo "<br>";

$str = (string)200;
var_dump($str);


?>
</div>
</body>
</html>