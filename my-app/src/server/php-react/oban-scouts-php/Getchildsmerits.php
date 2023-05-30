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


$id = $_GET['id'];

// Prepare a SQL query to retrieve the image data
$stmt = $conn->prepare("
SELECT badges.id, badges.name, badges.type, badges.description, badges.content
FROM badges
INNER JOIN bridgeforbadge ON bridgeforbadge.`fk-badge` = badges.id
INNER JOIN user ON bridgeforbadge.`fk-user` = user.id
WHERE user.id = ?
");

// Bind the parameter and execute the prepared statement
$stmt->bind_param('i', $id);
$stmt->execute();

$result = $stmt->get_result();

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

$stmt->close();
$conn->close();
?>