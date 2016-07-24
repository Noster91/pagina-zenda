<?php
     $name = $_POST['name'];
     $email = $_POST['email'];
     $phone = $_POST['telephone'];
     $message = $_POST['comments'];
     $from = 'From: zenda.com.ar';
     $to = 'noster91@gmail.com';
     $subject = 'Nuevo Mensaje de la Web';
     $body = "From: $name\n E-Mail: $email\n Teléfono: $phone\n Message:\n $message";

     $headers = 'From: '.$email."\r\n".

     'Reply-To: '.$email."\r\n" .

     'X-Mailer: PHP/' . phpversion();

     mail($to, $subject, $body, $headers);
?>
