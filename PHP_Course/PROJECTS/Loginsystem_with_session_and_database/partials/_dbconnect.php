<?php
    
    $server = "localhost";
    $username = "root";
    $password = "";
    $database = "users";
 

$conn = mysqli_connect($server, $username, $password, $database);
if (!$conn){
//     echo "success";
// }
// else{
    die("error".mysqli_connect_error());
}



?>