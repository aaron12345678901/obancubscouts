<?php
header("Access-Control-Allow-Origin: *");
header("Referrer-Policy: strict-origin-when-cross-origin");
header("Access-Control-Allow-Headers: *");
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


// Check if file was uploaded successfully
if (!isset($_FILES["file"]) || $_FILES["file"]["error"] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo "Error: File upload failed.";
    exit();
  }
  
  // Get file info
  $fileName = $_FILES["file"]["name"];
  $fileType = $_FILES["file"]["type"];
  $fileSize = $_FILES["file"]["size"];
  $fileContent = file_get_contents($_FILES["file"]["tmp_name"]);
  
  // Insert file into database
  $stmt = $conn->prepare
  
  
  (                    "INSERT INTO profile_pictures
                        (name, type, size, content) 
                        VALUES (?, ?, ?, ?)");




  $stmt->bind_param("ssis", $fileName, $fileType, $fileSize, $fileContent);
  
  if ($stmt->execute()) {
    echo "File uploaded successfully.";
  } else {
    http_response_code(500);
    echo "Error: Failed to insert file into database.";
  }
  
  $stmt->close();
  $conn->close();
  ?>