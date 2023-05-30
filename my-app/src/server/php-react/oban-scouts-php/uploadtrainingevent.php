<?php

// Set headers
header("Access-Control-Allow-Origin: *");
header("Referrer-Policy: strict-origin-when-cross-origin");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

// Check if file and description are present in the request
if (empty($_FILES['file']) || empty($_POST['description'])) {
    http_response_code(400);
    echo json_encode(array("message" => "File and description are required."));
    exit;
}

// Database configuration
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'obanscouts';

// Establish database connection
$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(array("message" => "Connection failed: " . $conn->connect_error));
    exit;
}

// Prepare the SQL query
$stmt = $conn->prepare("INSERT INTO trainingevents (name, type, size, content, description, date) VALUES (?, ?, ?, ?, ?, ?)");
if (!$stmt) {
    http_response_code(500);
    echo json_encode(array("message" => "Prepare failed: " . $conn->error));
    exit;
}

// Get the file data and description from the request
$file = $_FILES['file'];
$description = $_POST['description'];
$date = $_POST['date'];

// Get the file data
$name = $file['name'];
$type = $file['type'];
$size = $file['size'];
$content = file_get_contents($file['tmp_name']);

// Bind parameters to the prepared statement
$stmt->bind_param("ssissi", $name, $type, $size, $content, $description, $date);

// Execute the prepared statement
if (!$stmt->execute()) {
    http_response_code(500);
    echo json_encode(array("message" => "Execute failed: " . $stmt->error));
    exit;
}

// Send a success response if the file was stored in the database
http_response_code(200);
echo json_encode(array("message" => "File uploaded successfully."));

// Close the prepared statement and database connection
$stmt->close();
$conn->close();

?>