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
   


// Retrieve data from the database based on the user's ID
$sql = "SELECT training.name
FROM user
INNER JOIN aduilt_details
ON user.fk_aduilt_details = aduilt_details.id
INNER JOIN training
ON training.fk_aduilt = aduilt_details.id

WHERE user.id = '$user_id'";
$result2 = $conn->query($sql);



// Check if there are any results
if ($result2->num_rows > 0) {
    // Output the data as a JSON string
    $data2 = array();
    while ($row = $result2->fetch_assoc()) {
        $data2[] = $row;
    }
    echo json_encode($data2);
} else {
    echo json_encode(array());
}

// Close the connection
$conn->close();
?>