<?php
$insert =false;
If(isset($_POST['name'])){

//set connection variable
$_SERVER = "localhost";
$usernname = "root";
$password = "";

//creating a database connection
$con = mysqli_connect($_SERVER, $usernname, $password);

//check for connection success  
if(!$con){
    die("connection to this database failed due to" . mysqli_connect_error());

}
// echo "connection successful to database";           uncomment this to check connection to DB, its for debugging
 

//collect post variables      
$name = $_POST['name'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$desc = $_POST['desc'];
$sql = "INSERT INTO `chatnautform`. `chatnautform` ( `name`, `age`, `gender`, `email`, `phone`, `other`, `dt`) VALUES ('$name', '$age', '$gender', '$email', '$phone', '$desc', current_timestamp());";
// echo $sql;

// `chatnautform`. `chatnautform` is database and table name
//inserting this acquired data in DB
// execute the query
if($con->query($sql) == true){
    // echo "successfully inserted";                     uncomment this to check insertion to DB, its for debugging
    //flag for successful insertion
$insert=true;

}
else{
    echo "ERROR: $sql <br> $con->error";
  
}
$con->close();                         //close the DB connection
}
?>




<!-- HTML starts from here ------------------------------------------------------------------------------------------->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <title>Welcome to Login Page</title>
    <link rel="stylesheet" href="style.css">             <!--link css file before ending head tag-->
                                                         <!--You may add custom fonts here-->
</head>
<body>
    <div class="container">
<h1>Chatnaut Login Page</h1>
<p>Enter your details and Submit for contribution</p>
<?php
if($insert == true){
echo "<p class='submitMsg'> Thanks for submitting this form</p>";
}
?>
<form action="index.php" method="post">      <!--there are two methods:GET(searchable) and POST(secure)-->
<input type="text" name="name" id="name" placeholder="Enter your name">
<input type="text" name="age" id="age" placeholder="Enter your age">
<input type="text" name="gender" id="gender" placeholder="Enter your gender">
<input type="email" name="email" id="email" placeholder="Enter your email">
<input type="phone" name="phone" id="phone" placeholder="Enter your phone">
<textarea name="desc" id="desc" cols="30" rows="10" placeholder="If any"></textarea>
<button class="btn">Submit</button>
    
</form> 

</div>


    <script src="index.js"></script>                        <!--link index.js file before ending body tag-->

     
</body>
</html>