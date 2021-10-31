<?php
$ftpr = fopen("myfile.txt", "r");     //this is file pointer and here read is only pointed

if(!$ftpr){
    die("Unable to open please ente a valid flename");
}

$content = fread($ftpr, filesize("myfile.txt"));
echo $content;
fclose($ftpr);

?>