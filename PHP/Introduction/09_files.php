<?php
//path
$path = realpath(__DIR__) . '/jojo.txt';
echo $path;
echo "<br><br>";


//  readfile----------------------------------------------------------------------------------------------
echo readfile('myfile.txt');    
echo "<br><br>";

//  fopen - gives more control on file handling-----------------------------------------------------------
$ftpr = fopen("myfile.txt", "r");   

if(!$ftpr){
    die("Unable to open please ente a valid flename");
}

$content = fread($ftpr, filesize("myfile.txt"));
echo $content;
fclose($ftpr);
echo "<br><br>";


// fgets - read file line wise line------------------------------------------------------------------------
$ftpr = fopen("myfile.txt", "r");
// echo fgets($ftpr);               //fgets print line wise of myfiles.txt content so we use while loop here
while($a=fgets($ftpr)){
    echo $a;
}
echo "<br><br>";

// fgetc - read file character wise------------------------------------------------------------------------
$file = fopen('myfile.txt', 'r');
// echo fgetc($file);
while(!feof($file)){                //The feof() function checks if the "end-of-file" (EOF) has been reached.
    echo fgetc($file);
}

// fwrite
$ftpr = fopen("myfile2.txt", "w");                             //write mode
fwrite($ftpr, "This is the best file on this planet \n");

fwrite($ftpr, "This is another content \n");
fclose($ftpr);

// $ftpr = fopen("myfile2.txt", "a");                               //append mode add content eveytime we reload like log files
// fwrite($ftpr, "This is the being appended on the file \n");    