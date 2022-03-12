<?php
// class IRCTC{
//     public $count;


//     public function getCount(){
// return $this->count;
//     }

//     function __construct(){
//         $this->count++;
//     }
// }

// $obj1 = new IRCTC();
// $obj2 = new IRCTC();

// echo $obj1->getCount(); //1  Every Object has its own memory and allocation 
// echo $obj2->getCount(); //1

class IRCTC
{
    public static $count=0;
    public static $name1;

     static function getCount()
    {
        return self::$count;
    }

    function __construct()
    {
        self::$count++;
    }
}

$obj1 = new IRCTC();
$obj2 = new IRCTC();
$obj3 = new IRCTC();
$obj4 = new IRCTC();
$obj5 = new IRCTC();
echo IRCTC::getCount(); //5 Now every object share same variable