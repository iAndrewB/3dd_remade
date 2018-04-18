<!DOCTYPE html>
<html lang="en">

<head>
    <title>3DD - Dashboard</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="assets/css/main.min.css" rel="stylesheet" />
</head>

<body>
    <div class="topnav">
        <img class="logo" src="assets/img/dhl_logo.png" alt="DHL Logo" />
        <div class="sessioninfo">
            <p class="sessioninfotitle">Logged in as:</p>
            <p class="sessioninfotitle">Facility Name:</p>
            <p class="sessioninfotitle">Workspace Name:</p>
        </div>
    </div>
    <div class="sidenav">
        <a href="#" class="tablinks" onclick="openTab(event, 'convertShipping')">»&nbsp;Converter Envio</a>
        <a href="#" class="tablinks" onclick="openTab(event, 'deleteConversion')">»&nbsp;Apagar Conversão</a>
        <a href="#" class="tablinks" onclick="openTab(event, 'updateConversion')">»&nbsp;Atualizar Conversão</a>
        <a href="#" class="tablinks" onclick="openTab(event, 'getConversions')">»&nbsp;Lista de Conversões</a>
        <a href="#" class="tablinks" onclick="openTab(event, 'logConversions')">»&nbsp;Log de atividade</a>
    </div>

    <div class="content">
        <div id="convertShipping" class="tabcontent active">
            <?php include_once( "templates/containers/convertShipping.php"); ?>
        </div>
        <div id="deleteConversion" class="tabcontent">
            <?php include_once( "templates/containers/deleteConversion.php"); ?>
        </div>
        <div id="updateConversion" class="tabcontent">
            <?php include_once( "templates/containers/updateConversion.php"); ?>
        </div>
        <div id="getConversions" class="tabcontent">
            <?php include_once( "templates/containers/getConversions.php"); ?>
        </div>
        <div id="logConversions" class="tabcontent">
            <?php include_once( "templates/containers/logConversions.php"); ?>
        </div>
    </div>

</body>
<script src="assets/js/main.min.js"></script>

</html>
