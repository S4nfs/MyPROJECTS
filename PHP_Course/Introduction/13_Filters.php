<?php
/*🍺 The filter_var() function both validate and sanitize data.
--Sanitizing mean to remove all illegal characters from the inputed value
--Validation mean to check if the inputed value is valid or not
*/
$str = "<h1>Hello, Sagar Verma!<h1>";
echo filter_var($str, FILTER_SANITIZE_STRING);   //remove all html tags in string
echo "<br>";

$int = "100";
echo filter_var($int, FILTER_VALIDATE_INT) ? "Integer is valid" : "Integer is not valid";    //validate integer
echo "<br>";

$ip = "127.0.0.1";
echo filter_var($ip, FILTER_VALIDATE_IP) ? "IP is valid" : "IP is not valid";    //validate IP address
echo "<br>";

$email = "sagar@gmail.com<>:/ ";
echo filter_var($email, FILTER_SANITIZE_EMAIL);     //remove all illegal chars sagar@gmail.com
echo filter_var($email, FILTER_VALIDATE_EMAIL) ? "Email is valid" : "Email is not valid";
echo "<br>";

$url = "https://chatnaut.com";
echo filter_var($url, FILTER_SANITIZE_URL);    //sanitizes url
echo filter_var($url, FILTER_VALIDATE_URL) ? "URL is valid" : "URL is not valid";
