<?php
include 'connection.php';
include 'signupClass.php';
include 'signupController.php';

if(isset($_SERVER['REQUEST_METHOD']) == "POST"){
    $name = $_POST['name'];
    $degree = $_POST['degree'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $refer = $_POST['refer'];
    $jobpost = $_POST['jobpost'];

$demo = new SignupController($name, $degree, $email, $mobile, $refer, $jobpost);
echo $demo->signupUser();
// header("location: index2.php?error=none");
}
