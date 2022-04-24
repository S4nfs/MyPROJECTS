<?php
class ViewUser extends User{
    public function showAllUsers(){
        $datas = $this->getAllUsers();
        foreach ($datas as $items) {
            echo $items['name']."<br>";

        }
    }
}