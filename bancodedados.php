<?php
DEFINE("SERVIDOR","localhost:8080");
DEFINE("DB_NAME","db_usuario");
DEFINE("DB_USER","root");
DEFINE("DB_PASS","");
try{
    $pdo = new PDO('mysql:host='.SERVIDOR.';dbname='.DB_NAME.'',DB_USER,DB_PASS, [PDO::MYSQL_ATTR_INIT_COMMAND =>  "SET NAMES 'UTF8'"]);
}catch (Exception $e) {
    echo 'ERRO: CONNECT BD';
    echo $e;
}