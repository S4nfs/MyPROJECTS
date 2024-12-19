<?php

namespace abc\newabc{    //subnamespace newabc

    class Demo 
    {    
        public function __construct()
        {
            echo "I am a constructor of abc namespace <br>";
        }

        public function show()
        {
        }
    }
    
}

namespace { 
    class Demo{
        public function __construct()
        {
            echo "I am constructor of global namespace <br>";
        }
    }
//also u can use 'use' keyword to access but use alias if there are classes of same name
use abc\newabc\demo as somethingElse;
$obj1 = new somethingElse();



//OR just
// $obj1 = new abc\newabc\Demo();


}
