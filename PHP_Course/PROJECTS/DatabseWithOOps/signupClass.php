<?php
class SignupClass extends DB
{
    protected function setUser($na, $de, $em, $mo, $re, $jo)
    {
        //insert query using prepared mysqli statement
        $conn = $this->connect();
        $stmt = $conn->prepare("INSERT INTO registration (name, degree, email, mobile, refer, jobpost) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssiss", $na, $de, $em, $mo, $re, $jo);
        $stmt->execute();
        $stmt->close();
        $conn->close();
    }


    //checking if this email already exists
    protected function checkEmail($em)
    {
        $conn = $this->connect();
        $stmt = $conn->prepare("SELECT email FROM registration WHERE email=?");
        $stmt->bind_param("s", $em);
        $stmt->execute();
        $stmt->store_result();
        $rnum = $stmt->num_rows;
        if ($rnum == 0) {
            return false;
        } else {
            return true;
        }
    }
}
