<?php



class Demo{
    function show(){
        echo "show functiion from Demo class";
    }
}
class XYZ{
    function show1(){
        echo "show1 function from XYZ class";
    }
}

function test(XYZ $obj1){ //type hinting (see ex: dependencyInjection.php)
    $obj1->show1();
}

$obj1 = new XYZ();
test($obj1);