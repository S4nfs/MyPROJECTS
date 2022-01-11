<?php
    
//     $server = "localhost";
//     $username = "root";
//     $password = "";
//     $database = "api";
 

// $conn = mysqli_connect($server, $username, $password, $database);
// if (!$conn){
// //     echo "success";
// // }
// // else{
//     die("error".mysqli_connect_error());
// }

class Connect extends PDO{
    public function __construct()
    {
parent::__construct("mysql:host=localhost;dbname=api", 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
$this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$this->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);


    }
}



?>