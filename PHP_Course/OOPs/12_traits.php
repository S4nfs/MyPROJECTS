<?php
//Trait: A trait is a collection of methods and properties that can be used as an extension by other classes.
class Base{
   public function show(){
       echo "I am a Base class method";
   } 
}

trait t {
    function show1(){
        echo "I am from traitor :) class";
    }
}
trait t2 {
    function show2(){
        echo "I am from t2 traitor :) class";
    }
}

trait t3{   //function overriding using trait
    function show(){
        echo "I am from t3 traitor :) class but overriding the function show ()";
    }
}

class one extends Base{

}
class two extends Base{
    
}
class three extends Base{
        use t,t2;   //trait, overcomes the  limitation of inheriting multiple classes || also
                    //i can call any specific function using trait class
}
class four extends Base{
    use t3;
    function show(){
        echo "<br>I am class four function (preferred)";
}
}

$obj1 = new three();
$obj1->show1();
$obj1->show2();

$obj2 = new four(); //ONLY one is called || preference: [1]class four function, [2]trait, [3]Base class function
$obj2->show();
