<?php

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

    function __construct($model, $speed) //constructor || SYNTAX: function __construct()
    {
        $this->model = $model;
        $this->speed= $speed;
    }
}

class SmartAc extends AC   //Inheritance  - the property of one class inherit by another class 
{
    public $timer = true;
    public $wifi = true;

    function __construct(){
    parent::__construct("LG", 17);
    }
}

$Ajay = new AC("Voltas", 16);
echo $Ajay->model;
echo $Ajay->speed;

$Sagar = new SmartAc("Samsung", 32);
echo $Sagar->model;
echo $Sagar->speed;
