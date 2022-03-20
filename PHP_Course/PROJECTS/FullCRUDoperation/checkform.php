<?php

include('connection.php');

$selectquery = "SELECT * from registration";
$data = mysqli_query($conn, $selectquery);
?>
<table border="2">
    <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Degree</td>
        <td>Mobile</td>
        <td>Email</td>
        <td>Refer</td>
        <td>Jobpost</td>
    <tr>
        <?php foreach ($data as $values) { ?>
    <tr>
        <td><?php echo $values['id'] ?></td>
        <td><?php echo $values['name'] ?></td>
        <td><?php echo $values['degree'] ?></td>
        <td><?php echo $values['mobile'] ?></td>
        <td><?php echo $values['email'] ?></td>
        <td><?php echo $values['refer'] ?></td>
        <td><?php echo $values['jobpost'] ?></td>
    <tr>
    <?php
        }


    ?>
</table>