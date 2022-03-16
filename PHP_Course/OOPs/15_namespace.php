<?php
//Namespace : They allow the same name to be used for more than one class.

namespace abc {

    class Demo //access with a namespace
    {    
        public function __construct()
        {
            echo "I am a constructor of abc namespace <br>";
        }

        public function show()
        {
        }
    }
    // $obj1 = new Demo(); 
}

namespace {
    class Demo  //Global class,access anywhere
    {         
        public function __construct()
        {
            echo "I am constructor of global namespace <br>";
        }
    }

    $obj1 = new Demo();     //call this constructor
    $obj1 = new abc\Demo(); //call constructor from Demo

}
