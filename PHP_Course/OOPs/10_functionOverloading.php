<?php
// Function Overloading: Two or more functions with same name but different parameters

class test{

    public function __construct(){
        echo "Implement Function Overloading <br>";
    }

    public function __call($name, $arguments){ // __call is also a magic function auto-call's itself
        if($name == "Overload"){
            $count = count($arguments);
            switch($count){
                case "1":
                    echo "One Argument";
                    break;
                case "2":
                    echo "Two Arguments";
                    break;
                case "3":
                    echo "Three Arguments";
                    break;
                default:
                    echo "No arguments";
                    break;
            }
        }
    }
}


$obj1 = new Test();
$obj1->Overload("Sagar Verma");
$obj1->Overload("Ajay", 23);
$obj1->Overload("Pratreek", 23, "IITian");
?>