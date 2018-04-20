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
    // Resize table columns - Repeated function since DataTables api requires it.
    $.fn.dataTable.tables({
        visible: true,
        api: true
    }).columns.adjust();
    $.fn.dataTable.tables({
        visible: true,
        api: true
    }).columns.adjust();
    // Clear inputs
    $('input').val('');
}
$(document).ready(function () {
    // Conversions table DataTables initialize
    $('#conversionsTable').DataTable({
        order: [[7, "desc"]],
        scrollY: "60vh",
        scrollCollapse: true,
        paging: false,
        select: 'single',
        responsive: {
            details: {
                type: 'column'
            }
        },
        columnDefs: [{
            width: '5px',
            className: 'control',
            orderable: false,
            targets: 0
        }],
    });
    // Log table DataTables initialize
    $('#logTable').DataTable({
        order: [[8, "desc"]],
        scrollY: "60vh",
        scrollCollapse: true,
        paging: false,
        select: 'single',
        responsive: {
            details: {
                type: 'column'
            }
        },
        columnDefs: [{
            width: '5px',
            className: 'control',
            orderable: false,
            targets: 0
        }],
    });
    $('#shipment_PieceIDs').DataTable({
        responsive: true,
        order: [[1, "asc"]],
        scrollY: "110px",
        scrollCollapse: true,
        paging: false,
        select: 'multi',
        searching: false,
        info: false,
        columnDefs: [{
            width: '5px',
            orderable: false,
            className: 'select-checkbox',
            targets: 0
        }],
    });
    $('#shipment_Type').on('change', function () {
        if ($('#shipment_Type').val() == 'Monopeça') {
            $('#convert_Monopiece').show();
            $('#convert_Multipiece').hide();
        } else {
            $('#convert_Monopiece').hide();
            $('#convert_Multipiece').show();
        }
    });
    $('.search_PieceID').on("click", function () {
        console.log("hello???");
        $.ajax({
            url: "assets/php/soaprequest.php",
            type: "POST",
            data: {
                pieceID: $("#shipment_pieceID").val()
            },
            success: function (response) {
                console.log(response);
                $('#shipment_dataAddress').val(response)
            },
            error: function (xhr, status, error) {

            }
        });
    });
});
