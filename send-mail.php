<?php $name = $_POST['name']; $email = $_POST['email']; $phone =
$_POST['telephone']; $message = $_POST['comments']; $from = 'From:
zenda.com.ar'; $to = 'contacto@zenda.com.ar'; $subject = 'Nuevo Mensaje de la Web';
$body = "From: $name\n E-Mail: $email\n Teléfono: $phone\n Message:\n $message";

     $headers = 'From: '.$email."\r\n".

     'Reply-To: '.$email."\r\n" .

     'X-Mailer: PHP/' . phpversion();

     mail($to, $subject, $body, $headers);


$user_name = "zenda_zenda-user";
$password = "zenda1986";
$database = "zenda_dataDB";
$server = "10.0.10.19";

mysql_connect("$server","$user_name","$password");

mysql_select_db("$database");

$order = mysql_query("INSERT INTO Contactos (name, email, phone) VALUES ('$name', '$email','$phone')");

mysql_query($order);
?>
