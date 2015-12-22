<?php
    if (array_key_exists('name', $_POST)) {

       $to = 'englishmimmscom@gmail.com';

       $subject = 'Заполнена контактная форма с '.$_SERVER['HTTP_REFERER'];

       $subject = "=?utf-8?b?". base64_encode($subject) ."?=";

       $message = "Имя: ".$_POST['name']."\nТелефон: ".$_POST['phone']."\nE-mail: ".$_POST['email']."\nСообщение: ".$_POST['question'];
       // if (array_key_exists('question', $_POST)) {
       //      $message = $message."\nВопрос: ".$_POST['question'];
       //  }
       $headers = 'Content-type: text/plain; charset="utf-8"';
       $headers .= "MIME-Version: 1.0\r\n";
       $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
       mail($to, $subject, $message, $headers);
    }
?>