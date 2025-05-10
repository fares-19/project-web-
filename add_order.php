<?php
include __DIR__ . '/db.php';

if (
    isset($_POST['customer_name']) &&
    isset($_POST['drink']) &&
    isset($_POST['quantity'])
) {
    $name = $_POST['customer_name'];
    $drink = $_POST['drink'];
    $qty = $_POST['quantity'];
    $notes = $_POST['notes'] ?? '';

    $stmt = $conn->prepare("INSERT INTO orders (customer_name, drink, quantity, notes) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssis", $name, $drink, $qty, $notes);
    $stmt->execute();

    echo "تم إرسال الطلب بنجاح!";
} else {
    echo "يرجى تعبئة جميع البيانات المطلوبة.";
}
?>
