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
    $('#convert_PieceIDs').DataTable({
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
});
