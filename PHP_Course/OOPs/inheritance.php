<?php
// If a class is derived from one base class (parent class) it is called Single Inheritance
class Father{
    public $a;
    public $b;
    function getValue($x,$y){
        $this->a = $x;
        $this->b = $y;
    }
}
class Son extends Father{
    function display(){
        echo "Value of a is: $this->a <br>";
        echo "Value of b is: $this->b <br>";
    }
}

$obg = new Son;
$obg->getValue(10,20);
$obg->display();

// If a class inherits  the feature of another derived class (child class) it is called Multi-level Inheritance


?>