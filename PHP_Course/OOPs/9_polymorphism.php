<?php
/*Polymorphism is the ability of an object to take on many forms.
Polymorphism
    |
    Compile Time
        |
        Function Overloading
            |
            Operator Overloading            //late binding

    Run Time
        |
        Virtual Function                    //Early binding


*/

interface shape{
    public function calcarea();
}

class Rectangle implements shape{
    public $length;
    public $breadth;

    public function __construct($l, $b)
    {
     $this->length = $l;
     $this->breadth = $b;


    }
    public function calcarea(){
        return $this->length*$this->breadth;
    }
}

class Circle implements shape{
    public $radius;

    public function __construct($r)
    {
        $this->radius = $r;
    }


    public function calcarea()
    {
        return $this->radius*$this->radius*3.14;
    }
}
$obj1 = new Rectangle(23,45);
echo $obj1->calcarea();
echo "<br>";
$obj2 = new Circle(50);
echo $obj2->calcarea();

// Scenario: Function is same but the functionality is different
