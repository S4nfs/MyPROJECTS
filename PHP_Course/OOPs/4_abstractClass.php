<?php
//Abstraction menas showing the essential features and hiding the background details.

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

    protected $Annualsalary;


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
// $obj1->Annualsalary = 1200;
echo $obj1->GetMonthlysal();
