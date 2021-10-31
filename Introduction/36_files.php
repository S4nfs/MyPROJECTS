<?php
$ftpr = fopen("myfile.txt", "r");
// echo fgets($ftpr);               fgets print line wise of myfiles.txt content so we use while loop here
// echo fgets($ftpr);

while($a=fgets($ftpr)){
    echo $a;
}

echo "Line ends here no more lines to print";
fclose($ftpr);
?>