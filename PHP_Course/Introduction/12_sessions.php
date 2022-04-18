<?php
session_start();
$_SESSION["Username"] = "Sagar";
$_SESSION["favCat"] = "Books";

if (isset($_SESSION["Username"])) {
    echo "Welcome " . $_SESSION["Username"];
    echo "<br>Your favourite category is " . $_SESSION["favCat"];
} else {
    echo "<br> Please Login to continue";
}
