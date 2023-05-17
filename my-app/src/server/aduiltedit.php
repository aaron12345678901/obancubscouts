<?php
header("Access-Control-Allow-Origin: *");
header("Referrer-Policy: strict-origin-when-cross-origin");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: applocation/json; charset=UTF-8");



$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'obanscouts';
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get the logged-in user's ID from the session
    
    $user_id = $_GET['id'];
    $days = $_GET['days'];
    $time = $_GET['time'];
   


// Retrieve data from the database based on the user's ID
$sql = 
"UPDATE aduilt_details
        INNER JOIN user ON user.fk_aduilt_details = aduilt_details.id
        SET 
        aduilt_details.days_available = '$days',
        aduilt_details.times_available = '$time'
        WHERE user.id = '$user_id';";

$result = $conn->query($sql); 


if ($result) {
    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('success' => false));
}
// Close the connection
$conn->close();
?>