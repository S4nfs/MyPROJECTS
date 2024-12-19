
<?php
session_start();
include 'autoloader.php';

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];

    
    $demo = new LoginController($name, $email);
     $demo->loginUser();
    header("location: home.php");


}
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
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
    <input type="text" name="name" id="" placeholder="Name">
    <input type="email" name="email" id="" placeholder="Email">

    <button type="submit">Login</button>
</form>

</body>
</html>

