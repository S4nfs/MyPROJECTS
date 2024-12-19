<?php
class Database
{

    private $database = "mydb";


    public function __construct()
    {
        $this->conn = new mysqli("localhost", "root", "", $this->database);
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
        return $this->conn;
    }
}
