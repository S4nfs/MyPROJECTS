<?php

$server = "localhost";
$username = "root";
$db = "fullcrud";
$password = "";

$conn = mysqli_connect($server, $username, $db, $password);

if ($conn) {
?>
    <script>
        alert("connection Successfull");
    </script>
<?php
} else {
    die("Connection Error" . mysqli_connect_error());
}

?>