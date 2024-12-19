<?php
class User extends DB
{
    protected function getAllUsers()
    {
        $selectquery = "SELECT * from registration";
        $result = $this->connect()->query($selectquery);
        $numRows = $result->num_rows;
            if($numRows>0){
                while($row = $result->fetch_assoc()){
                    $data[] = $row;
                }
                return $data;

        }

            // return $result;                              //if u use foreach in vieuser.php
        
    }
}

class ViewUser extends User{
    public function showAllUsers(){
        $datas = $this->getAllUsers();
        foreach ($datas as $items) {
            echo $items['name']."<br>";

        }
    }
}