<?php
/*
Constants cannot be changed once it is declared. A class constant is declared inside a class with the const keyword.
We can access a constant from outside the class by using the class name followed by the scope resolution operator (::)
*/

class Goodbye
{
    const LEAVING_MESSAGE = "Thank you for learning constants in PHP";  //constant are only upper case
    public function byebye()
    {
        echo self::LEAVING_MESSAGE;     //self:: is used to access constant from inside the class
    }
}

$goodbye = new Goodbye();
$goodbye->byebye();
echo "<br>";
echo Goodbye::LEAVING_MESSAGE;
