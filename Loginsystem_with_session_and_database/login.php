<?php
    $login = false;
    $showError = false;

if ($_SERVER["REQUEST_METHOD"]=="POST") {
    include 'partials/_dbconnect.php';


    $username = $_POST["username"];
    $password = $_POST["password"];

      // $sql = "Select * from users where username ='$username' AND password = '$password'";            //without Hash password check  
      $sql = "Select * from users where username ='$username'";                                          //with Hash password check 
      $result = mysqli_query($conn, $sql);
      $num = mysqli_num_rows($result);
      if($num == 1){
          while($row=mysqli_fetch_assoc($result)){
            if(password_verify($password, $row['password'])){
             $login = true;
              session_start();                                                                          //session starts
              $_SESSION['loggedin'] = true;
              $_SESSION['username'] = $username;
              header("location: welcome.php");                                                          //function to route
            }
            else{
              $showError = "Invalid Credentials";
            }
          }

        }
    else{
        $showError = "Invalid Credentials";
      }
}


 ?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <title>Login</title>
  </head>
  <body>
<?php require 'partials/_nav.php' ?>
<!-- Alert from bootstrap ----------------------------------------------------------------------->
<?php
if ($login){
echo ' <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Success</strong> Your are logged in.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> '; 
}
if ($showError){
    echo ' <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Error </strong>'.$showError. '
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div> '; 
    }
?>
<!-- Alert from bootstrap ends ----------------------------------------------------------------------->

<div class="container">
<h1 class="text-center">Login to our website</h1>
<!-- form------------------------------------------------------------------------------------------------------------- -->
    <form action="/Phpcourse/Loginsystem_with_session_and_database/login.php" method="post">
    <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" name="username" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" name="password">
    </div>
    
    <button type="submit" class="btn btn-primary">Login</button>
    </form>
<!-- form ends------------------------------------------------------------------------------------------------------------- -->
</div>
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
    -->
  </body>
</html>
