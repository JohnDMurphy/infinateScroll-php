<?php
include('conn.php');

for($x = 0; $x < 20; $x++){
    $file = file_get_contents('http://loripsum.net/api/2/short', true);
    $uTime = time();
    $query = "INSERT INTO `bposts`(`content`, `date`) VALUES ('$file',$uTime)";
    $result = mysqli_query($link,$query);
    
}