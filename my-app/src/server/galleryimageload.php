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

$sql = "SELECT id, name, type, description, content FROM gallery_pictures 
WHERE NOT id = 1 ;";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $row['content'] = base64_encode($row['content']);
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo json_encode(array());
}

$conn->close();
?>