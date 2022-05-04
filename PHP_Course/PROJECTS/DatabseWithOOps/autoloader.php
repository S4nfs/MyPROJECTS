<?php
spl_autoload_register("myAutoLoader");

function myAutoLoader($className){
    $path = "classes/";
    $extension = ".php";
    $fullPath = $path . $className . $extension;

    include_once($fullPath);
}



// Autoloader needs to name the file same as the class name