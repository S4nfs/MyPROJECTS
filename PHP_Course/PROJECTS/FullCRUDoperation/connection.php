<?php
    
    $server = "localhost";
    $username = "root";
    $password = "";
    $database = "fullcrud";
 

$conn = mysqli_connect($server, $username, $password, $database);
if ($conn){
    ?>
    <script>
        alert("Connection Successful")
    </script>
    <?php
}
else{
    die("error".mysqli_connect_error());
}

?>