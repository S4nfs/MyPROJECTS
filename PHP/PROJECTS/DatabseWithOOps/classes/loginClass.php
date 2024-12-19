<?php
class LoginClass extends DB
{
    protected function getUser($na, $em)
    {
        //insert query using prepared mysqli statement
        $conn = $this->connect();
        $stmt = $conn->prepare("SELECT * FROM registration WHERE name = ? AND email = ?");
        $stmt->bind_param("ss", $na, $em);
        if ($stmt->execute()) {
            $result = $stmt->get_result();
           //fetch in assosc array and store them in session
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $_SESSION['user'] = $row['name'];
                    $_SESSION['email'] = $row['email'];                }
            } else {
                header("location: index3.php?error=wrongcredentials");
            }
        }
    }
}



    