<?php
require('connection.php');

// if (!mysqli_query($conn, "SHOW TABLES LIKE 'users'") && !mysqli_query($conn, "SHOW TABLES LIKE 'users2'")) {
    $createtables = "CREATE table IF NOT EXISTS users(
    userID INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR (255) DEFAULT 'null',
    password VARCHAR (255))";

    $result = mysqli_query($conn, $createtables);
    if ($result) {
        echo "Tables Created";
    } else {
        echo mysqli_error($conn);
    }

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $date = date('d-m-y h:i:s:a');
    $insertquery = "INSERT into users(email, password, dt)VALUES('$email', '$password', '$date')";

    $rresult = mysqli_query($conn, $insertquery);
    if ($rresult) {
?>
        <script>
            alert("DATA INSERTED");
        </script>
    <?php
    } else {
    ?>
        <script>
            alert("<?php echo mysqli_error($conn); ?>");
        </script><?php
                }
            }
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>
    <form method="POST">
        <div class="form-group" align="center">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>
</html>