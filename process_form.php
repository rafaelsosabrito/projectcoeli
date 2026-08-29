<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    //file_put_contents('error_log.txt', print_r($_POST, true));

    // Recoger los datos del formulario
    //$haustyp = $_POST["Wohnungstyp"];
    //$wohnflache = $_POST["Wohnfläche"];
    //$anzahl_mitbewohner = $_POST["Anzahl der Mitbewohner"];
    $alles = print_r($_POST, true);

    // Construir el mensaje del correo electrónico
    //$message = "Wohnungstyp: $haustyp\n";
    //$message .= "Wohnfläche: $wohnflache m²\n";
    //$message .= "Anzahl der Mitbewohner: $anzahl_mitbewohner\n";
    $message = "Alles: $alles\n";

    // Dirección de correo electrónico a la que se enviará el formulario
    $to = "rafaelsosabrito@gmail.com";

    // Asunto del correo electrónico
    $subject = "Nueva solicitud de curso de buceo";

    // Cabeceras del correo electrónico
    $headers = "From: info@wasserabenteuer-muenchen.de";

    // Enviar el correo electrónico
    mail($to, $subject, $message, $headers);

    exit;
}
?>
