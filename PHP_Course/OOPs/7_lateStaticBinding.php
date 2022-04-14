<?php
//Late static binding is a feature in PHP 5.3 and above. It is used to bind a static method to an object at runtime.

class DBclassroom{

    protected static $table = "Classroom Tables <br>";

    public function select(){
        echo "SELECT * from ".self::$table;
    }

    public function insert(){
        echo "INSERT into ".static::$table; //late static binding 
    }
}

class Student extends DBclassroom{
    protected static $table = "Students tables <br>";

}

$obj1 = new Student();
$obj1->select(); //Classroom Table
$obj1->insert(); //Students tables


/* https://www.geeksforgeeks.org/what-is-late-static-bindings-in-php/
Where to use it ?
- Where a function is overridden and you want to display the new properties.
- Where the program is too big, and you cannot write the same function again and again.

*/
?>

