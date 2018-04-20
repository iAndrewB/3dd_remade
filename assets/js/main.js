
function resizeTablesColumns() {
    // Resize table columns - Repeated function since DataTables api requires it.
    $.fn.dataTable.tables({
        visible: true,
        api: true
    }).columns.adjust();
    $.fn.dataTable.tables({
        visible: true,
        api: true
    }).columns.adjust();
}

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    resizeTablesColumns();
    // Clear inputs
    $('input').val('');
}

function changeShipmentType() {
    if ($('#shipment_Type').val() == 'Multipeça') {
        $('#convert_Monopiece').hide();
        $('#convert_Multipiece').show();
        resizeTablesColumns();
    } else {
        $('#convert_Monopiece').show();
        $('#convert_Multipiece').hide();
    }
}

function getShipmentInfo() {
    $.ajax({
        url: "assets/php/soaprequest.php",
        type: "POST",
        data: {
            searchPieceID: $("#convert_pieceID").val()
        },
        success: function (response) {
            $('#convert_dataAddress').val(response)
        },
        error: function (xhr, status, error) {

        }
    });
}

$(document).ready(function () {
    $("#shipment_Type").click(changeShipmentType);
    $(".search_PieceID").click(getShipmentInfo);

});