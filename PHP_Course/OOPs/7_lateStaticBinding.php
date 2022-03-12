<?php
//Late static binding is a feature in PHP 5.3 and above. It is used to bind a static method to an object at runtime.

class DBclassroom{

    protected static $table = "Classroom Tables";

    public function select(){
        echo "SELECT * from ".self::$table;
    }

    public function insert(){
        echo "INSERT into ".static::$table; //late static binding 
    }
}

class Student extends DBclassroom{
    protected static $table = "Students tables";

}

$obj1 = new Student();
$obj1->select(); //Classroom Table
$obj1->insert(); //Students tables


?>