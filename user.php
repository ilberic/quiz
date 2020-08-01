<?php

error_reporting(-1);
header('Content-Type: text/html; charset=utf-8');
include('config.php');
$db = mysqli_connect(DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

    $user = 'Login'; // Логин пользователя
    $password_user = 'Password'; // Пароль пользователя
    $password = md5($password_user);
    $mail = 'name@johndoe.com'; // Email пользователя

    $query_content = "INSERT INTO `" . DB_PREFIX . "user` (`user_group_id`, `username`, `password`, `salt`, `firstname`, `lastname`, `email`, `image`, `code`, `ip`, `status`, `date_added`) VALUES
    (1, '$user', '$password', '', '$user', '', '$mail', '', '', '127.0.0.1', 1, '2000-01-01 00:00:00');";

    $result_content = mysqli_query($db, $query_content);

    if (!$result_content) {
        echo "<p>Пользователь <strong style=\"color:red;\">$user</strong> не создан!</p>";
    } else {
        echo "<p>Пользователь <strong style=\"color:green;\">$user</strong> c паролем <strong style=\"color:green;\">$password_user</strong> успешно создан!</p>";
    }
    
?>