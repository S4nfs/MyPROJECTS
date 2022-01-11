<?php
$ftpr = fopen("myfile2.txt", "w");                             //write mode
fwrite($ftpr, "This is the best file on this planet \n");

fwrite($ftpr, "This is another content \n");
fclose($ftpr);

// $ftpr = fopen("myfile2.txt", "a");                               //append mode add content eveytime we reload like log files
// fwrite($ftpr, "This is the being appended on the file \n");         
 
?>