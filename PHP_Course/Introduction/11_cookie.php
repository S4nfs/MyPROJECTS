<?php
//Cookies | Sessions
setcookie("Category", "Books", time() + 86400, "/");  //86400 seconds = 1 day
echo "The cookie is all set";

if (isset($_COOKIE)) {
    print_r($_COOKIE);
    
    $cat =  $_COOKIE["Category"];
    echo "Here is a list of all $cat";
} else {
    echo "Cookies not found";
}
