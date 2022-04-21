<?php


$servername = 'localhost';
$username = 'root';
$password = "";
$database = "mydb";

$conn = mysqli_connect($servername, $username, $password);

if (!$conn) {
  die("Connection Error".mysqli_error());
}
echo "Connected Successfully \t";
$db_select = mysqli_select_db($conn,$database);
if (!$db_select) {
//Create Database Query
  $db_create = "CREATE DATABASE IF NOT EXISTS $database";
  $db_selected = mysqli_query($conn, $db_create);

if ($db_selected) {
    echo "Database $database created successfully\n";
} else {
    echo 'Error creating database: ' . mysqli_error() . "\n";
}
}
else{
  echo "Database $database is connected";
}



