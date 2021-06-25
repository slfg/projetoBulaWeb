<?php 
require_once("bancodedados.php");

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $texto = addslashes($_POST['texto']);

        echo "Nome Completo: $nome <br>";
        echo "Email: $email<br>";
        echo "mensagem: $texto";

    $resultado_form = "INSERT INTO user (nome, email, mensagem) VALUES ('$nome', '$email', '$texto')";
    $resultado_teste = mysqli_query($conn, $resultado_form);