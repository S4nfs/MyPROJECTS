<?php
//Getters and Setters: are used to access and modify the properties of an object.
class book{
    public $title;
    private $author;    //private - cant access outside class

    public function __construct($t, $a)
    {
        $this->title = $t;
        $this->author = $a;
    }

    public function getauthor(){     //getters to access private property
        return $this->author;
    }

    public function setauthor($auth){   //setters (takes one parameter)
        $this->author = $auth;
    }
}

$demo = new book("5AM Club", "Robin Sharma");
echo $demo->title;
echo $demo->getauthor();
echo $demo->setauthor("SV");
echo $demo->getauthor();
