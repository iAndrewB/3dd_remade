<?php
   require 'lib/nusoap.php';
    $client = new nusoap_client("http://localhost/dhl2018/soapintroduction/service.php?wsdl"); // Create a instance for nusoap client
    $searchPieceID = $_POST['searchPieceID'];
    $response = $client->call('get_info',array("pieceID"=>$searchPieceID));
    if(empty($response))
        echo "Not available";
    else
        echo $response;
?>