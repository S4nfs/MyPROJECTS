<?php
$conn = mysqli_connect('localhost','root',"",'ajaxcrud');
extract($_POST);

// -----------------------------------------------Display Records in Table-------------------------------------------------
if(isset($_POST['readrecord'])){
    $data = '<table class="table table-bodered tabe-striped">
                <tr>
                    <th>No.</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Edit Action</th>    
                    <th>Delete Action</th>
                </tr>';
    $displayquery = " SELECT * From `crudtable` ";
    $result = mysqli_query($conn, $displayquery);

    if(mysqli_num_rows($result) > 0){
        $number = 1;
        while($row = mysqli_fetch_array($result)){
            $data .= '<tr>
                        <td>'.$number.'</td>
                        <td>'.$row['firstname'].'</td>
                        <td>'.$row['lastname'].'</td>
                        <td>'.$row['email'].'</td>
                        <td>'.$row['mobile'].'</td>
                        <td>
                        <button onclick = "GetUserDetails('.$row['id'].')"
                        class="btn btn-warning">Edit</button>
                        </td>
                        <td>
                        <button onclick = "DeleteUser('.$row['id'].')"
                        class="btn btn-danger">Delete</button>
                        </td>
                    </tr>';
                    $number++;
        }
    }
    $data .= '</table>';
    echo $data;
}


// ----------------------------------------------Add Records in Database--------------------------------------------------

if(isset($_POST['firstname']) && isset($_POST['lastname']) && isset($_POST['email']) && isset($_POST['mobile'])){
$query = "INSERT INTO `crudtable`(`firstname`, `lastname`, `email`, `mobile`) VALUES ('$firstname','$lastname','$email','$mobile')";
mysqli_query($conn, $query);

}

// -----------------------------------------------Delete Records----------------------------------------------------------

if(isset($_POST['deleteid'])){
    $userid = $_POST['deleteid'];
    $deletequery = " DELETE From crudtable where id='$userid' ";
    mysqli_query($conn, $deletequery);
}









?>