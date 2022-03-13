<?php

//Function Overriding: A function with same name and same parameters.

class Test
{
    public function show($a)
    {
        echo "This is base class ";
    }
}

class Demo extends Test
{
    public function show($a)
    {  //overiding
        parent::show($a);
        echo "This is child class overiding function " . $a;
    }
}

$obj1 = new Demo();
$obj1->show("Sagar Verma");
