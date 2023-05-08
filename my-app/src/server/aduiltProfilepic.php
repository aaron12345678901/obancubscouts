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

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get the ID of the picture to retrieve
$id = 5;

// Prepare a SQL query to retrieve the image data
$stmt = $conn->prepare

("SELECT type, content 
                        FROM profile_pictures 
                        WHERE id = ?");


$stmt->bind_param("i", $id);
$stmt->execute();
$stmt->store_result();

// Check if a picture was found
if ($stmt->num_rows == 1) {
  // Retrieve the image data
  $stmt->bind_result($type, $content);
  $stmt->fetch();

  // Send the image data in the response
  header("Content-Type: $type");
  echo $content;

} else {
  // Send a 404 error if the picture was not found
  http_response_code(404);
}

$stmt->close();
$conn->close();
?>