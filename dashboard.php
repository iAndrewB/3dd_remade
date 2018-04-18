<!DOCTYPE html>
<html lang="en">

<head>
    <title>3DD - Dashboard</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="assets/css/main.css" rel="stylesheet" />
</head>

<body>
    <div class="topbar">
        <img class="logo" src="assets/img/dhl_logo.png" alt="DHL Logo" />
        <div class="sessioninfo">
            <p class="sessioninfotitle">Logged in as:&nbsp;<?php echo "<span class='sessioninfodata'>LX2</span>"?></p>
            <p class="sessioninfotitle">Facility Name:&nbsp;<?php echo "<span class='sessioninfodata'>LIS</span>"?></p>
            <p class="sessioninfotitle">Workspace Name:&nbsp;<?php echo "<span class='sessioninfodata'>MGCOST</span>"?>&nbsp;&nbsp;<span class="sessioninfodata"><a href="#">Logout</a></span></p>
            

        </div>
        
    </div>
    <div class="sidenav">
        <a href="#" class="tablinks active" onclick="openTab(event, 'convertShipping')">»&nbsp;Converter Envio</a>
        <a href="#" class="tablinks" onclick="openTab(event, 'deleteConversion')">»&nbsp;Apagar Conversão</a>
        <a href="#" class="tablinks" onclick="openTab(event, 'updateConversion')">»&nbsp;Atualizar Conversão</a>
        <a href="#" class="tablinks" onclick="openTab(event, 'getConversions')">»&nbsp;Lista de Conversões</a>
        <a href="#" class="tablinks" onclick="openTab(event, 'logConversions')">»&nbsp;Log de atividade</a>
    </div>

    <div class="content">
        <div id="convertShipping" class="tabcontent" style="display: block;">
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
<script src="assets/js/main.js"></script>
</html>
