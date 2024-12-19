<?php
class Demo{
    public $value = "Hello i am value <br>";
}
class Demo1{
    public $abc;
    public function __construct()
    {
        $this->abc = new Demo(); //here demo oject is now abc
    }
}

$obj1 = new Demo1();
echo $obj1->abc->value; //superobject->subobject->value


/*There are many ways to acess the same result like in type hinting also-----------------------------------------------------------
With Type hinting we can specify the expected data type (arrays, objects, interface, etc.) for an argument in a function declaration. This practice can be most advantageous because it results in better code organization and improved error messages.*/
class Abc{
    public $valuez = "Hello i am value 2";
}
class Xyz{
    public $abcd;
    public function __construct(Abc $abcd) //type Hinting
    {
        echo $abcd->valuez;
    }
}

$abcd = new Abc();
$obj= new Xyz($abcd);