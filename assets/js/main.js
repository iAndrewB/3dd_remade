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
}
$(document).ready(function () {
    // Conversions table DataTables initialize
    $('#conversionsTable').DataTable({
        responsive: true,
        order: [[6, "desc"]],
        scrollY: "60vh",
        scrollCollapse: true,
        paging: false,
        select: 'single',
    });
    // Log table DataTables initialize
    $('#logTable').DataTable({
        responsive: true,
        order: [[7, "desc"]],
        scrollY: "60vh",
        scrollCollapse: true,
        paging: false,
        select: 'single',
    });
    // On container change
    $("a.tablinks").on("click", function (e) {
        //Resize table columns
        $.fn.dataTable.tables({
            visible: true,
            api: true
        }).columns.adjust();
        //Clear inputs
        $('input').val('');
    });
});
