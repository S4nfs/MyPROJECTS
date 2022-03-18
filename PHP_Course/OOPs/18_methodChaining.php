<?php
//Scenario: if you want to acess all other function at the same time

class Demo{
    function fun(){
        echo "This is fun method <br>";
        return $this;       //now function becomes object, that means we can acess other functions
    }
    function fun1(){
        echo "This is fun1 method <br>";
        return $this;
    }
        function fun2(){
        echo "This is fun2 method <br>";
        return $this;
    }
        function fun3(){
        echo "This is fun3 method <br>";
        
    }
}
$obj1 = new Demo();
var_dump($obj1->fun()->fun1()->fun2()->fun3());