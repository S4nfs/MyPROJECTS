<?php
//Behaviour of access level: Public, Protected, Private in trait


trait t1
{
    private function show()
    {
        echo "I am a private function";
    }
}

class Demo
{
    use t1 {
        t1::Show as public; //without this you cant access private function, rename as function_name_u_want after public
//      t1::Show as public customName;
    }
}

$obj1 = new Demo();
$obj1->show();
