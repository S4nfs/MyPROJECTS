<?php
class SignupController extends SignupClass
{

    private $n;
    private $d;
    private $e;
    private $m;
    private $r;
    private $j;

    public function __construct($name, $degree, $email, $mobile, $refer, $jobpost)
    {
        $this->n = $name;
        $this->d = $degree;
        $this->e = $email;
        $this->m = $mobile;
        $this->r = $refer;
        $this->j = $jobpost;
    }

    private function emptyInput()
    {
        $result;
        if (empty($this->n) || empty($this->d) || empty($this->e) || empty($this->m) || empty($this->r) || empty($this->j)) {
            $result = false;
        } else {
            $result = true;
        }
        return $result;
    }

    private function validEmail()
    {
        $result;
        if (!filter_var($this->e, FILTER_VALIDATE_EMAIL)) {
            $result = false;
        } else {
            $result = true;
        }
        return $result;
    }

    private function emailexists()
    {
        //result true if email exists else false
        $result;
        if ($this->checkEmail($this->e)) {
            $result = true; //if email exists
        } else {
            $result = false;
        }
    }


    public function signupUser()
    {
        if ($this->emptyInput() == false) {
            header("location: index2.php?error=emptyfields");
            exit();
        }

        if ($this->validEmail() == false) {
            header("location: index2.php?error=invalidemail");
            exit();
        }
        if ($this->emailexists() == true) {
            header("location: index2.php?error=emailexists");
            exit();
        }
        $this->setUser($this->n, $this->d, $this->e, $this->m, $this->r, $this->j);
    }
}
