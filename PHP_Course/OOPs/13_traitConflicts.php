<?php
//WHat if there are two functions of same name in traits


trait t1{
    public function show(){
        echo "I am from trait t1";
    }
}


trait t2{
    public function show(){
        echo "I am from trait t2";
    }
}


class demo{
    use t1,t2{
        t2::show insteadof t1; //i want to use show() from t2 only
        t2::show as showing;   //if you want to call the first one also rename it as
    }

}

$obj1 = new demo();
$obj1->show();
$obj1->showing();
?>