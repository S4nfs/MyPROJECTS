<?php

$arrayLatest = file('https://chatnaut.com/version.php'); //Check for a newer version of OpenVM
$arrayExisting = file('version.php'); //Check the existing version of OpenVM
$latestExploded = explode('.', $arrayLatest[0]); //Seperate Major.Minor.Patch
$existingExploded = explode('.', $arrayExisting[1]); //Seperate Major.Minor.Patch
$latest = $latestExploded[0] . $latestExploded[1] . $latestExploded [2];
$existing = $existingExploded[0] . $existingExploded[1] . $existingExploded[2];


echo $arrayLatest[0];
// echo $arrayExisting[1];

if ($latest > $existing) {
    echo "abe update kro yaar";
  }
else{
    echo "abe update kro nahi yaar";
}





?>