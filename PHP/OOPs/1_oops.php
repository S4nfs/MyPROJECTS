<?php
/* 
Class - A template for creating objects. Ex - Student, Employee, AC
Object - An instance of a class. Ex - john, jane, mike, Samsung etc.
Method - a function defined in a class. Ex - getName(), setName(), getAge(), speed(), model()etc.
variables - just like in js we have here in class = Public, Private, Protected
Instantiate - create an object from a class.
Constructor - a special method that is called when a new object is created.
Destructor - a special method that is called when an object is destroyed.
static- you can call a static method or variable without calling an object.
*/

class AC
{
    public $model = "xyz"; //variable
    public $speed = 16;

    function speedUp() //method
    {
        echo $this->speed + 1;
    }

    function speedDown()
    {
        echo $this->speed - 1;
    }

    function __construct() //constructor (a function that auto call-itself in every created instance) || SYNTAX: function __construct()
    { 
        echo "HI";
    }
}

$Ac_one = new AC; //object

echo $Ac_one->model = "LG";
$Ac_one->speedUp();
$Ac_one->speedDown();

$Ac_two = new AC;
echo $Ac_two->model;


