<?php
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);
    echo "$_POST";
    echo "$data";
    echo "response2";
?>
