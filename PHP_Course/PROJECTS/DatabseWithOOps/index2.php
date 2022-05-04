
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
    <input type="text" name="degree" id="" placeholder="Degree">
    <input type="email" name="email" id="" placeholder="Email">
    <input type="text" name="mobile" id="" placeholder="Mobile">
    <input type="text" name="refer" id="" placeholder="Refer">
    <input type="text" name="jobpost" id="" placeholder="Jobpost">

    <button type="submit">Create User</button>
</form>

<?php
include 'autoloader.php';

if($_SERVER['REQUEST_METHOD'] == "POST"){
    $name = $_POST['name'];
    $degree = $_POST['degree'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $refer = $_POST['refer'];
    $jobpost = $_POST['jobpost'];

$demo = new SignupController($name, $degree, $email, $mobile, $refer, $jobpost);
echo $demo->signupUser();
header("location: index2.php?error=none");
}

?>
</body>
</html>

