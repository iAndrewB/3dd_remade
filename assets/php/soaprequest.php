<?php
   require 'lib/nusoap.php';
    $client = new nusoap_client("http://localhost/dhl2018/soapintroduction/service.php?wsdl"); // Create a instance for nusoap client
    $pieceID = $_POST['pieceID'];
    $response = $client->call('get_info',array("pieceID"=>$pieceID));
    if(empty($response))
        echo "Not available";
    else
        echo $response;
?>