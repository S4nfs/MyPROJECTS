<?php

abstract class Demo {
  private $name;
  private $age;
  public static $drinkingage = 21;
  const EXAMPLE = "You can't change this";

  // public function __construct($na)
  // {
  //   $this->name = $na;
  // }
  public function setname(string $na){
    
    return $this->name = $na;
  }

  public function getname(){
    return $this->name;
  }

  abstract function lol();
}

class Demo2 extends Demo{
  public function showme(){
    echo self::$drinkingage;
    //access constant from inside the class
    echo "<br>";
   

  }

  public function lol()
  {
    
  }
}


// $obj = new Demo("Sagar");
// echo $obj->what();