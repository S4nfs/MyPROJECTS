<?php
/* ACCES MODIFIERS :
1. private - within a class
2. protected -  within the class + inherited
3. public - access anywhere
*/

//to access private property we use getter or setter
class AC
{
    private $model;
    public $speed;

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

    function getmodel() //Accessor function (getter R)
    {
        return $this->model;
    }

}

class SmartAc extends AC 
{
}
$ajay = new AC("Voltas", 20);
// echo $ajay->model;
// echo $ajay->model = "Diakin"; //ajay can changed the model which is ❌ when its public

echo $ajay->getmodel();
echo $ajay->speed;












?>