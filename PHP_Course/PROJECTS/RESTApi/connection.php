<?php
class Databse{

public $database = "mydb";


public function getConnection(){
    $this->conn = new mysqli("localhost", "root", "", $this->database);
    if($this->conn->connect_error){
        die("Connection failed: " . $this->conn->connect_error);
    }
    return $this->conn;
}
