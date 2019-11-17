
$('.sidebar-header select').on('change', e => {
    console.log(1111111, e.target.value)
    let key = e.target.value;
    switch (key) {
        case "cho_kham":
            $('#tb-cho-kham').show();
            $('#tb-hen-kham').hide();
            $('#tb-cho-doc-kq').hide();
            $('#tb-ket-thuc-kham').hide();

            break;
        case "hen_kham":
            $('#tb-hen-kham').show();
            $('#tb-cho-kham').hide();
            $('#tb-cho-doc-kq').hide();
            $('#tb-ket-thuc-kham').hide();

            break;
        case "cho_doc_kq":
            $('#tb-cho-doc-kq').show();
            $('#tb-hen-kham').hide();
            $('#tb-cho-kham').hide();
            $('#tb-ket-thuc-kham').hide();

            break;
        case "ket_thuc_kham":
            $('#tb-ket-thuc-kham').show();
            $('#tb-cho-doc-kq').hide();
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
$('body').on('change', '#ket_luan', function () {
    $('#benh_chinh_text').val( $('#benh_chinh_icd10').val() =='J20' ? 'Viêm phế quản cấp' : '')
    $('#benh_kem_theo_text').val( $('#benh_kem_theo_icd10').val() =='M45' ? 'Đau cột sống' : '')
});

luuKetLuan = () =>{
    if($('#benh_chinh_text').val() == ''){return;}
    $('.indexKetLuan').val(
        "(" + $('#benh_chinh_icd10').val() + ") " + $('#benh_chinh_text').val() + "; "
        + "(" + $('#benh_kem_theo_icd10').val() + ") " + $('#benh_kem_theo_text').val() + "; "
        + $(".mySelect option:selected").html()
    )
    // console.log(23423423, $(".mySelect option:selected").html())
}
chonXN=()=>{
    console.log(32423424,$(".tableXetNghiem")[0].rows[4].cells)
    let td = $(".tableXetNghiem")[0].rows[4].cells;
    if ($('.inputXN').is(":checked")){
        console.log(4235345,td[0].innerHTML)
        $('.kqCLS').val(
            td[0].innerHTML.replace('<input type="checkbox" class="inputXN">','').trim()
            + ' ' + td[2].innerHTML + ' ' +  td[4].innerHTML
        )
    }
}

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

$('.tree-basic').treegrid();

