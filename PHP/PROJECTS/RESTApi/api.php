<?php
header("Content-Type:application/json");
require('connection.php');

$conn = new Database();


// GET All Users Mysqli without pdo
if ($_SERVER['REQUEST_METHOD'] == "GET") {
    echo json_encode($conn->conn->query("SELECT * FROM users")->fetch_all(MYSQLI_ASSOC));
}


// GET All Users PDO
// if ($_SERVER['REQUEST_METHOD'] == "GET") {
//     echo json_encode($conn->conn->query("SELECT * FROM users")->fetchAll(PDO::FETCH_ASSOC));
// }

//     $response["status"] = "true";
//     $response["message"] = "User Details";
//     $response["users"] = $user;
    
//    } else {
//     $response["status"] = "false";
//     $response["message"] = "No customer(s) found!";
//         http_response_code(405);

// }
// echo json_encode($response); exit;

//POST
// if($_SERVER['REQUEST_METHOD'] == "POST"){
//     $email = $_POST['email'];
//     $password = $_POST['password'];
//     $insertquery = "INSERT INTO users (email, password) VALUES ('$email', '$password')";
//     $result = mysqli_query($conn, $insertquery);
//     if($result){
//         $response["status"] = "true";
//         $response["message"] = "User Added Successfully";
//     }else{
//         $response["status"] = "false";
//         $response["message"] = "User Not Added";
//     }
// }
// echo json_encode($response); exit;