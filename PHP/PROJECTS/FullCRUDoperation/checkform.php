<?php

include('connection.php');
require('partials/header.php');

$selectquery = "SELECT * from registration";
$data = mysqli_query($conn, $selectquery);
?>

<body>
    <div class="center-div">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Degree</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Refer</th>
                    <th>Jobpost</th>
                    <th>Operation</th>
                <tr>
            </thead>
            <?php foreach ($data as $values) { ?>
                <tbody>
                    <tr>
                        <td><?php echo $values['id'] ?></td>
                        <td><?php echo $values['name'] ?></td>
                        <td><?php echo $values['degree'] ?></td>
                        <td><?php echo $values['mobile'] ?></td>
                        <td><?php echo $values['email'] ?></td>
                        <td><?php echo $values['refer'] ?></td>
                        <td><?php echo $values['jobpost'] ?></td>
                        <td><a href="update.php?id=<?php echo $values['id']?>"><button type="button" class="btn btn-info">Edit</button></a>
                            <a href="delete.php?id=<?php echo $values['id']?>"><button type="button" class="btn btn-danger">Delete</button></a>
                        </td>
                    <tr>
                <tbody>
    </div>
<?php
            }
?>
</table>
</body>
</html>