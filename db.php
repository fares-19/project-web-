<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "estkana";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("فشل الاتصال: " . $conn->connect_error);
}
?>
