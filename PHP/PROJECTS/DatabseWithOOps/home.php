<?php
session_start();

if (isset($_SESSION['user'])) {
    echo "Welcome " . $_SESSION['user'];
}else{
    echo "You are not logged in";
}
?>

<a href="logout.php"><button>Logout</button></a>