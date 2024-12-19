<?php
/* 
Incapsulation - means hiding the data from the outside world. Ex - private, protected, public
ACCES MODIFIERS :
1. private - within a class
2. protected -  within the class + inherited
3. public - access anywhere
*/

//to access private property we use getter or setter


class AC
{
    private $model;
    protected $speed;

    function speedUp()
    {
        echo $this->speed + 1;
    }

    function speedDown()
    {
        echo $this->speed - 1;
    }

    function __construct($model, $speed)
    {
        $this->model = $model;
        $this->speed = $speed;
    }

    function model()                //Can access private property as its in same class
    {
        return $this->model;
    }

}

class SmartAc extends AC 
{
    //access private property of parent class
    function model()
    {
        return $this->model;
    }
    
    function myspeed()
    {
         return $this->speed;       //Can access protected property in extended class
    }
}
$ajay = new AC("Voltas", 20);
// echo $ajay->model;               //❌ Can't access private property outside class
// echo $ajay->model = "Diakin";    //ajay can changed the model which is ❌ when its public
// echo $ajay->model();
// echo $ajay->speed. "<br>";       //❌Can't access protected property outside class


echo "<br";
$sagar = new SmartAc("Haier", 25);
echo $sagar->model();
echo $sagar->myspeed();












?>