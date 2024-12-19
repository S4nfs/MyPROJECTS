<?php
class LoginController extends LoginClass
{

    private $n;
    private $e;


    public function __construct($name, $email)
    {
        $this->n = $name;
        $this->e = $email;
    }

    private function emptyInput()
    {
        $result;
        if (empty($this->n) || empty($this->e)) {
            $result = false;
        } else {
            $result = true;
        }
        return $result;
    }


    public function loginUser()
    {
        if ($this->emptyInput() == false) {
            header("location: index3.php?error=emptyfields");
            exit();
        }
        $this->getUser($this->n, $this->e);
    }
}
