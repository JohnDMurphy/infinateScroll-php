<?php 
defined('DB_HOST') OR define('DB_HOST','localhost');
defined('DB_USER') OR define('DB_USER','root');
defined('DB_PASS') OR define('DB_PASS','');
defined('DB_NAME') OR define('DB_NAME','sp');

$link = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
if(!$link){die('error'.mysqli_connect_error());};