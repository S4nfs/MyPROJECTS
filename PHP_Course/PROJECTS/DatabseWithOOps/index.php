<?php
// include 'connection.php';
// include 'users.php';
include 'autoloader.php';       //Autoload Classes automatically
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <?php  $user = new ViewUser();
   $user->showAllUsers();

   ?>
</body>
</html>