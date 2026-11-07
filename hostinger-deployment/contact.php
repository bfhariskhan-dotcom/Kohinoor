<?php
/**
 * Kohinoor Audio Visual - Contact Form Handler
 * Suitable for Hostinger Shared Hosting
 */
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

$fullName = trim($_POST['full_name'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$email = trim($_POST['email'] ?? '');
$organization = trim($_POST['organization'] ?? '');
$product = trim($_POST['product'] ?? '');
$city = trim($_POST['city'] ?? '');
$message = trim($_POST['message'] ?? '');

if (empty($fullName) || empty($phone) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

$to = 'kohinoor_ibd@yahoo.co';
$subject = "Quotation Request: " . $product . " from " . $organization;

$body = "New Inquiry via kohinoorav.com\n\n";
$body .= "Name: " . $fullName . "\n";
$body .= "Organization: " . $organization . "\n";
$body .= "Phone: " . $phone . "\n";
$body .= "Email: " . $email . "\n";
$body .= "City: " . $city . "\n";
$body .= "Product Interested In: " . $product . "\n\n";
$body .= "Requirements / Message:\n" . $message . "\n\n";
$body .= "Submitted on: " . date('Y-m-d H:i:s') . "\n";

$headers = "From: noreply@kohinoorav.com\r\n" .
           "Reply-To: " . $email . "\r\n" .
           "X-Mailer: PHP/" . phpversion();

$mailSent = @mail($to, $subject, $body, $headers);

echo json_encode([
    'success' => true,
    'message' => 'Thank you. Your quotation request has been received by Kohinoor Audio Visual.'
]);
