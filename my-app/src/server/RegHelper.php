<?php
header("Access-Control-Allow-Origin: *");
header("Referrer-Policy: strict-origin-when-cross-origin");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'obanscouts';
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$user_id = $_GET['id'];
$value = $_GET['value'];

// Update the data in the database
$sql = "UPDATE aduilt_details
SET `is_Helper` = '$value'
WHERE id = (
  SELECT aduilt_details.id
  FROM user
  INNER JOIN aduilt_details ON user.fk_aduilt_details = aduilt_details.id
  WHERE user.id = '$user_id'
)";

if (mysqli_query($conn, $sql)) {
    echo "Record updated successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

$conn->close();
?>