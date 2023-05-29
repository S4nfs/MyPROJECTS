<?php
/* Abstraction means showing the essential features and hiding the background details. U can achieve abstraction by using:
Abstract Class and Interface

Abstract Class - is a class that contains empty methods as well as non-empty methods, have constructor and variables, but instanciation is not possible (meaning u cant create an object of that class which is helpful when u want that class to be untouched).
*/
abstract class BaseClass //you can't create object using abstract class
{
    protected $Firstname;
    protected $Lastname;

    public function Getfullname() //method with definition
    {
        return $this->Firstname . "" . $this->Lastname;
    }

    public function __construct($f, $l)
    {
        $this->Firstname = $f;
        $this->Lastname = $l;
    }

    abstract function GetMonthlysal(); //method without definition (Common function)
}

class RegularEmployee extends BaseClass
{

    protected $Annualsalary = 1200;


    public function GetMonthlysal()
    {
        return $this->Annualsalary / 12;
    }
}


class PartEmploye extends BaseClass
{

    protected $Hourrate;
    protected $Totalhrs;

    public function GetMonthlysal()
    {
        return $this->Hourrate * $this->Totalhrs;
    }
}


$obj1 = new RegularEmployee("Sagar", "Verma");
echo $obj1->Getfullname();
echo $obj1->GetMonthlysal();
