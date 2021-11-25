<?php
class Student{
    public $roll;

    function __construct($enroll){
        echo "Constructor Method With Parameters <br>";
        $this->roll = $enroll;
        echo $this->roll;
    }

}

$stu = new Student(123);



?>