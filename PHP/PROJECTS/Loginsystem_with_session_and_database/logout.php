<?php
session_start();
session_unset();                    //Free all session variables
session_destroy();
header("location: login.php");
exit;
?>