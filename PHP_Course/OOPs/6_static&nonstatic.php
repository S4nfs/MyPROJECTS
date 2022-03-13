<?php

// Diff b/w Non-Static and Static  - You must need an object to show or call non-static variables and methods but not in static variables & methods

class Demo
{
    public $roll; //non-static variable
    public static $age; //static variable

    function showroll() //non-static method
    { 
        echo $this->roll = 1;
    }

    public static function showmsg() //static method
    { 
        echo self::$age = 20;   //to access static keyword use self with scope resolution operator:: instead of $this
    }
}

$obj1 = new Demo();
$obj1->showroll();

Demo::showmsg(); //no need an object
// echo Demo::showmsg()

?>
