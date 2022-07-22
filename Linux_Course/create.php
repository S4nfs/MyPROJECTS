<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);


include_once 'con.php';

$dbname = 'roytuts';
$collection = 'users';

//DB connection
$db = new DbManager();
$conn = $db->getConnection();

//record to add
$data = array(
    'name' => 'John',
    'email' => 'nothing@gmail.com',
    'password' => '123456'
);


// insert record
$insert = new MongoDB\Driver\BulkWrite();
$insert->insert($data);

$result = $conn->executeBulkWrite("$dbname.$collection", $insert);

// verify
if ($result->getInsertedCount() == 1) {
    echo json_encode(
		array("message" => "Record successfully created")
	);
} else {
    echo json_encode(
            array("message" => "Error while saving record")
    );
}