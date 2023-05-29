
// if ($_SERVER["REQUEST_METHOD"] == "GET") {
//     $name = $_GET["name"];
//     $phone = $_GET["phone"];
//     $email = $_GET["email"];

//     // Адрес, на который вы хотите отправить заявку
//     $to = "ira97brig@gmail.com";

//     // Тема письма
//     $subject = "Новая заявка";

//     // Сообщение
//     $message = "Имя: " . $name . "\n" .
//                "Телефон: " . $phone . "\n" .
//                "Email: " . $email;

//     // Отправка письма
//     $headers = "From: " . $email . "\r\n" .
//                "Reply-To: " . $email . "\r\n" .
//                "X-Mailer: PHP/" . phpversion();

//     if (mail($to, $subject, $message, $headers)) {
//         echo "Ваша заявка успешно отправлена.";
//     } else {
//         echo "Возникла проблема при отправке заявки.";
//     }
// }
?> 
