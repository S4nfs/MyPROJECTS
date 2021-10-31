<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP tutorial</title>
</head>
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

.container{
    max-width: 80%;
    background-color: Grey;
    margin: auto;
}

</style>
<body>
    <div class="container">
    <h1> Lets learn about PHP </h1>
    <?php
    
//simple if-else ladder---------------------------------------------------------------------------------------
$age = 34;                                                  
if($age>18){
echo "You are welcome to the party";
}
else{
echo "You are a minor";
}   
echo "<br>";

//Arrays in PHP ---------------------------------------------------------------------------------------------

$languages = array("Python", "C++", "JAVA", "PHP");           //arrays is a function = a collection of things
echo $languages[1];

echo "<br>";
echo count ($languages);                                       //count method
echo "<br>";
echo "<br>";


// <!-- Loops in PHP----------------------------------------------------------------------------------------------- -->
//while loop
$a=0;
while ($a <= 10){
echo "<br> The Value of a is: ";
echo $a;
$a++;
}
echo "<br>";

//do-while loop
$a=0;                                     //the difference is just that in do-while first iteration is always executed
do {
echo "<br> The Value of a is: ";
echo $a;
$a++;
} while ($a < 10);
echo "<br>";

//for loop

for ($a=0; $a < 10; $a++) { 
    echo "<br> The Value of a in FOR loop is: "; 
    echo $a;

}
echo "<br>";

//foreach loop------------------- The foreach loop works only on arrays, and is used to loop through each key/value pair in an array.
foreach ($languages as $value){
    echo "<br> The value from foreach loop is: ";
    echo $value;
    echo "<br>";
}

//Functions in PHP------------------------------------------------------------------------------------------
function print5(){
    echo "FIVE";
}
print5();
print5();
print5();
print5();
echo "<br>";
echo "<br>"; 



function processMarks($marksArr){
    $sum = 0;
    foreach ($marksArr as $value){
        $sum += $value;

    }
    return $sum;

}
$rohan = [34, 98, 45, 12, 98, 93];
$summarks = processMarks($rohan);
echo "Total marks obtained by rohan out of 600 is $summarks";

?>




    </div>
</body>
</html> 