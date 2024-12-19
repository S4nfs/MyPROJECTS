<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $desc = $_POST['desc'];
}


//connecting to database
$servername = "localhost";
$username = "root";
$password = "";
$database = "bootstrapform";

      //create a connection
      $conn = mysqli_connect($servername, $username, $password, $database);
      //die if connection is not successful
      if (!$conn){
        die("sorry we failed to connect: ". mysqli_connect_error());
      }
      else{
        echo "connection was successful<br>";
        //submit these to data base
      }

      $sql = "SELECT * FROM `contactus`";
      $result = mysqli_query($conn, $sql);

      //fetch the number of records returned
      $num = mysqli_num_rows($result);
      echo $num;
      echo "<br>";
      if($num>0){
        $row= mysqli_fetch_assoc($result);
        echo var_dump($row);
        echo "<br>";

        // $row= mysqli_fetch_assoc($result);
        // echo var_dump($row);
        // echo "<br>";

        // $row= mysqli_fetch_assoc($result);
        // echo var_dump($row);
        // echo "<br>";

        // $row= mysqli_fetch_assoc($result);
        // echo var_dump($row);
        // echo "<br>"; 

        // $row= mysqli_fetch_assoc($result);
        // echo var_dump($row);
        // echo "<br>";

        // $row= mysqli_fetch_assoc($result);
        // echo var_dump($row);
        // echo "<br>";

        // $row= mysqli_fetch_assoc($result);
        // echo var_dump($row);
        // echo "<br>";

        // $row= mysqli_fetch_assoc($result);
        // echo var_dump($row);
        // echo "<br>";

        // $row= mysqli_fetch_assoc($result);
        // echo var_dump($row);
        // echo "<br>";

        // $row= mysqli_fetch_assoc($result);
        // echo var_dump($row);
        // echo "<br>";

        // $row= mysqli_fetch_assoc($result);
        // echo var_dump($row);
        // echo "<br>";

        // $row= mysqli_fetch_assoc($result);
        // echo var_dump($row);
        // echo "<br>";

        // $row= mysqli_fetch_assoc($result);
        // echo var_dump($row);
        // echo "<br>";

        // $row= mysqli_fetch_assoc($result);
        // echo var_dump($row);
        // echo "<br>";
        
        //we can fetch in a better way using while loop

        while ($row = mysqli_fetch_assoc($result)){
          echo var_dump($row);
          echo "<br>";
        }


      }


?>