
$('.sidebar-header select').on('change', e => {
    console.log(1111111, e.target.value)
    let key = e.target.value;
    switch (key) {
        case "cho_kham":
            $('#tb-cho-kham').show();
            $('#tb-hen-kham').hide();
            $('#tb-cho-doc-kq').hide();

            break;
        case "hen_kham":
            $('#tb-hen-kham').show();
            $('#tb-cho-kham').hide();
            $('#tb-cho-doc-kq').hide();

            break;
        case "cho_doc_kq":
            $('#tb-cho-doc-kq').show();
            $('#tb-hen-kham').hide();
            $('#tb-cho-kham').hide();

            break;

        default:
            break;
    }
});
test = (e) => {
    console.log(222222, e);
}
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$('body').on('change', '.ke-thuoc', function () {
    $('#ke_thuocCachDung').val(
        'Uống ' + $('#ke_thuocLuongDung').val() + " " + $('#ke_thuocDonVi').val()
        + ", ngày " + $('#ke_thuocSoLan').val() + " lần, " + $('#ke_thuocSuDung').val()
    )
});

$("#checkAll").click(function () {
    $('.checkItem').not(this).prop('checked', this.checked);
});

$(document).ready(function () {
    $("#searchChiDinhNhanh").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".ulChiDinhNhanh li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
