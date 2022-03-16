<?php
//Scenario: Dependency Injection (DI) means to inject the dependency of a class into another class. Here we create logs for our application

// class logger{
//     public function log($message){
//         echo "logging message:  $message";
//     }


// }
// class userInfo{

//     public function Createuser(){   //create onject in another class
//         $obj1 = new logger();
//         $obj1->log("User Created");
//     }
// }

// $sagar = new userInfo();
// $sagar->Createuser();

//with DRY------------------------
// class logger
// {
//     public function log($message)
//     {
//         echo "Message:  $message";
//     }
// }
// class userInfo
// {
//     private $logger;

//     public function Createuser()
//     {
//         $this->logger->log("User Created");
//     }

//     public function Updateuser()
//     {
//         $this->logger->log("User Updated");
//     }
//     public function __construct()
//     {
//         $this->logger = new logger();   //here variable logger becomes object
//     }
// }
// $sagar = new userInfo();
// $sagar->Createuser();
// $sagar->Updateuser();


//with DRY moresimplified------------------------
class logger
{
    public function log($message)
    {
        echo "Message:  $message";
    }
}
class userInfo
{
    private $logger;

    public function Createuser()
    {
        $this->logger->log("User Created");
    }

    public function Updateuser()
    {
        $this->logger->log("User Updated");
    }
    public function __construct(logger $logger) //first parameter is class name[optional] (aka TypeHinting, to find when code becomes big)
    {
        $this->logger = $logger; 
    }
}
$obj1 = new logger();
$sagar = new userInfo($obj1); //Dependency Injection
$sagar->Createuser();
$sagar->Updateuser();