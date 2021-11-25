<?php
class Mobile{
    public $model;                                          //property   
        function showModel($number){
        // global $model;
        // $model = $number;   can be used in this way also
        $this->model = $number;
        echo "Model Number is: $this->model <br>";
    }


}


$samsung = new Mobile;
$samsung->showModel('A8');

$lg = new Mobile;
$lg->showModel('G7');
?>