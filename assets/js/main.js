function openTab(evt, tabName) {
    // Declare all variables
    var i;
    var tabcontent;
    var tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i += 1) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i += 1) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
$(document).ready(function () {
    // Conversions table DataTables initialize
    $("#conversionsTable").DataTable({
        order: [[7, "desc"]],
        scrollY: "60vh",
        scrollCollapse: true,
        paging: false,
        select: "single",
        responsive: {
            details: {
                type: "column"
            }
        },
        columnDefs: [{
            width: "5px",
            className: "control",
            orderable: false,
            targets: 0
        }],
    });
    // Log table DataTables initialize
    $("#logTable").DataTable({
        order: [[8, "desc"]],
        scrollY: "60vh",
        scrollCollapse: true,
        paging: false,
        select: "single",
        responsive: {
            details: {
                type: "column"
            }
        },
        columnDefs: [{
            width: "5px",
            className: "control",
            orderable: false,
            targets: 0
        }],
    });
    $("#shipment_PieceIDs").DataTable({
        responsive: true,
        order: [[1, "asc"]],
        scrollY: "110px",
        scrollCollapse: true,
        paging: false,
        select: "multi",
        searching: false,
        info: false,
        columnDefs: [{
            width: "5px",
            orderable: false,
            className: "select-checkbox",
            targets: 0
        }],
    });

    // On container change
    $("a.tablinks").on("click", function (e) {
        //Resize table columns
        $.fn.dataTable.tables({
            visible: true,
            api: true
        }).columns.adjust();
        //Clear inputs
        $("input").val("");
    });
    $("#shipment_Type").on("change", function () {
        if ($("#shipment_Type").val() == "Monopeça") {
            $("#convert_Monopiece").show();
            $("#convert_Multipiece").hide();
        } else {
            $("#convert_Monopiece").hide();
            $("#convert_Multipiece").show();
        }
    })
});
