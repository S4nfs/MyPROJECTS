<?php

class Calculate
{
    public $num1;
    public $num2;
    public $cal;

    public function __construct($n1, $n2, $c)
    {
        $this->num1 = $n1;
        $this->num2 = $n2;
        $this->cal = $c;
    }

    public function calmethod()
    {
        switch ($this->cal) {
            case "add":
                $result = $this->num1 + $this->num2;
                break;
            case "sub":
                $result = $this->num1 - $this->num2;
                break;
            case "mul":
                $result = $this->num1 * $this->num2;
                break;
            case "div":
                $result = $this->num1 / $this->num2;
                break;
            default:
                return "ERROR";
        }
        return $result;
    }
}
