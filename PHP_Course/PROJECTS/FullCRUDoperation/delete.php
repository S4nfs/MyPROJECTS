<?php
include('connection.php');

$ids = $_GET['id'];
$deletequery = "DELETE from registration WHERE id= $ids";
$data = mysqli_query($conn, $deletequery);

if($data){
    echo "User Deleted";
}else{
    echo "ERROR".mysqli_error($conn);
}
?>