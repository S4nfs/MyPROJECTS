<?php

class Database
{
    private $localhost = "localhost";
    private $username = "root";
    private $password = "";
    private $database = "mydb";

    public function __construct()
    {
        try {
            $this->conn = new PDO("mysql:host=$this->localhost;dbname=$this->database", $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            return $e->getMessage();
        }
    }
}
