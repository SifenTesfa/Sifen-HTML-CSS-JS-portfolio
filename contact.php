<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST["name"]) ? $_POST["name"] : '';
    $email = isset($_POST["email"]) ? $_POST["email"] : '';
    $subject = isset($_POST["subject"]) ? $_POST["subject"] : '';
    $message = isset($_POST["message"]) ? $_POST["message"] : '';
    $to = "sifentt@gmail.com";
    $headers = "From: $name <$email>" . PHP_EOL .
               "Reply-To: $email" . PHP_EOL .
               "X-Mailer: PHP/" . phpversion();

    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
        $result = mail($to, $subject, $message, $headers);
        if ($result) {
            echo "Email sent successfully!";
        } else {
            echo "Email sending failed.";
        }
    } else {
        echo "Please fill in all the fields.";
    }
}
?>
