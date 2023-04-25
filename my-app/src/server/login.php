<?php
header("Access-Control-Allow-Origin: *");
header("Referrer-Policy: strict-origin-when-cross-origin");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: applocation/json; charset=UTF-8");

// Connect to the database
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'obanscouts';
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Get the email and password from the query parameters
$email = $_GET['email'];
$password = $_GET['password'];


// Check if the email and password match a user in the database
$sql = "SELECT * FROM user WHERE email='$email' AND password='$password'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  // Fetch the user data
  $row = mysqli_fetch_assoc($result);
  $first_name = $row['first_name'];
  $last_name = $row['last_name'];
  $id = $row['id'];
  $status = $row['status'];
  
  // Return success response
  $response = array(
    "Status" => "200",
    "email" => $email,
    "first_name" => $first_name,
    "last_name" => $last_name,
    "id" => $id,
    "status" => $status
    
  );
} else {
  // Return error response
  $response = array(
    "Status" => "401",
  );
}

// Return response as JSON
header('Content-Type: application/json');
echo json_encode($response);

// Close the database connection
mysqli_close($conn);

?>


