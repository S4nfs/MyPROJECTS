<?php
header("Content-Type:application/json");
require('connection.php');

// if($_SERVER['REQUEST_METHOD'] == "POST"){
// echo "HELLO POST";
// }
// else if($_SERVER['REQUEST_METHOD'] =='GET'){
// echo "HELLO GET";

// }else{
//     echo "Not ALlowed ".http_response_code(405);
// }


//GET
if(isset($_GET['id']) && $_GET['id'] != ""){
    $id = $_GET['id'];
    $selectquery = "SELECT * from users WHERE userID = $id";
    $result = mysqli_query($conn, $selectquery);
    $data = mysqli_fetch_array($result);
    $user['userID'] = $data['userID'];
    $user['email'] = $data['email'];
    $user['password'] = $data['password'];

    $response["status"] = "true";
    $response["message"] = "User Details";
    $response["users"] = $user;
    
   } else {
    $response["status"] = "false";
    $response["message"] = "No customer(s) found!";
        http_response_code(405);

}
   echo json_encode($response); exit;

//POST
if($_SERVER['REQUEST_METHOD'] == "POST"){
    $email = $_POST['email'];
    $password = $_POST['password'];
    $insertquery = "INSERT INTO users (email, password) VALUES ('$email', '$password')";
    $result = mysqli_query($conn, $insertquery);
    if($result){
        $response["status"] = "true";
        $response["message"] = "User Added Successfully";
    }else{
        $response["status"] = "false";
        $response["message"] = "User Not Added";
    }
}
