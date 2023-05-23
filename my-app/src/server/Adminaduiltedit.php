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
    $first_name = $_GET['first_name'];
    $last_name = $_GET['last_name'];
    $disclosure = $_GET['disclosure'];
    $about_me = $_GET['about_me'];

// Retrieve data from the database based on the user's ID
            $sql = 
                "UPDATE user
                    SET 
                    user.first_name = '$first_name',
                    user.last_name = '$last_name'
                    WHERE user.id = '$user_id';";
                    $result = $conn->query($sql); 

            $sql =
                "UPDATE aduilt_details 
                    INNER JOIN user
                    ON user.fk_aduilt_details = aduilt_details.id
                    SET 
                    disclosure ='$disclosure',
                    about_me=' $about_me'
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