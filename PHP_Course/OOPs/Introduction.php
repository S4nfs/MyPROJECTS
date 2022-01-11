
<?php
// A Class is like a Blueprint of a Building 
//  1. OBJECT like building, mobile, laptop, motorcycle
//  2. Properties / Attributes : tell us more about the Object  (like model_name, screen_size, color, brand, price, weight, etc.)
//  3. Methods / Behaviour : what an Object is capable of doing  (like calling, internet, messaging)

// Access Modifiers: 3
//  1. Public: accessible from everywhere
//  2. Private: accessible only within the class
//  3. Protected: accessible within the class and its subclasses



class BankAccount{

    public $Accno;
    public $AccName;
    public $Balanace;

    public function deposit(){
    echo "Deposit Method";
}
    public function withdraw(){
    echo "Withdraw Method";
}
    public function BankAccount($acno, $acna, $bal){    // Constructor (with same name as class) automatically call itself at time of initialization of objects                                                                                            
        // echo "Constructor Method";

        $this->Accno = $acno;                           // $this variable is ike a pointer to the current object e.g $obj
        $this->AccName = $acna;
        $this->Balanace = $bal;
    }

}

//depost();   can't call like that
$obj = new BankAccount(12345, "Mr.sagar verma", 20000);             // Object of the class
// var_dump($obj->deposit());                                       // just like calling function

echo "<pre>";
print_r($obj);

?>