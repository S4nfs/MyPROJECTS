

<?php
 $dir = "uploads/";
 $file = $dir.basename($_FILES['myfile']['name']);
 $uploadOK = 1;
$imagefiletype = strtolower(pathinfo($file, PATHINFO_EXTENSION));
if(isset($_POST['submit'])){
     $check = getimagesize($_FILES['myfile']['tmp_name']);
     if($check!== false){
     echo "File is an image - ".$check['mime'];
     $uploadOK = 1;

}else{
     echo "File is not an image";
     $upload = 0;
}
}
