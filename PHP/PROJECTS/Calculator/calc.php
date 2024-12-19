<?php
include('logic.php');
$a = $_POST['num1'];
$b = $_POST['num2'];
$c = $_POST['cal'];

$calculator = new Calculate($a, $b, $c);
echo $calculator->calmethod($c);