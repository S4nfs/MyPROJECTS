<?php
//start the session and get data from the file 39_sessions.php
if(isset($_SESSION["Username"])){
    
    session_start();
    echo "Welcome" . $_SESSION["Username"];
    echo "<br>Your favourite category is" . $_SESSION["favCat"];
}
else{
    echo "<br> Please Login to continue";
}

?>