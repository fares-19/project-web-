<?php
include 'db.php';

if (isset($_POST['email'])) {
    $email = $_POST['email'];
    $stmt = $conn->prepare("INSERT INTO subscriptions (email) VALUES (?)");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    echo "تم الاشتراك بنجاح!";
} else {
    echo "من فضلك أدخل بريدك الإلكتروني.";
}
?>
