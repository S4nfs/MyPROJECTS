<?php

/*Interface - is a collection of only abstract methods
  Why Interface ? - When you want to inherit multiple classes

*/
interface A
{    //can't use varibles in interface

    function demo();  //can only define public methods
}

interface B
{
    function demo1();
}

class Mono implements A,B
{
    public function demo()
    {
        return "Sagar Verma";
    }

    public function demo1()
    {
        return "Ajay Verma";
    }
}

$obj1 = new Mono();
echo $obj1->demo();
