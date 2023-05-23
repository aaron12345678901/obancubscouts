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


// Retrieve data from the database based on the user's ID
$sql = "SELECT user.first_name,user.last_name,user.id
FROM user
WHERE status = 0";
$result = $conn->query($sql);

// Check if there are any results
if ($result->num_rows > 0) {
    // Output the data as a JSON string
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo json_encode(array());
}

// Close the connection
$conn->close();
?>