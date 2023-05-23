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
    $rank = $_GET['rank'];
    $term_of_service = $_GET['term_of_service'];
    $outstanding_merit = $_GET['outstanding_merit'];


// Retrieve data from the database based on the user's ID
            $sql = 
                "UPDATE user
                    SET 
                    user.first_name = '$first_name',
                    user.last_name = '$last_name'
                    WHERE user.id = '$user_id';";
                    $result = $conn->query($sql); 

            $sql =
                "UPDATE childs_details 
                    INNER JOIN user
                    ON user.fk_childs_details = childs_details.id
                    SET 
                    rank ='$rank',
                    term_of_service=' $term_of_service',
                    outstanding_merit=' $outstanding_merit'
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