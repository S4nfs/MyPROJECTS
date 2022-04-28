<?php
session_start();
include 'connection.php';
include 'loginClass.php';
include 'loginController.php';

if (isset($_SERVER['REQUEST_METHOD']) == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];

    
    $demo = new LoginController($name, $email);
     $demo->loginUser();
    header("location: home.php");


}

