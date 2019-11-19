
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

$('#huongDieuTri').on('change',e=>{
    console.log(1111111, e.target.value)
    let key = e.target.value;
    switch (key) {
        case 'ke_toa_cho_ve':
            $('#keToaChoVe').show();
            $('#nhapVien').hide();
            $('#chuyenPhongKham').hide();
            $('#chuyenKhamChinh').hide();
            $('#tuVong').hide();
            $('#chuyenVien').hide();


            break;
        case 'nhap_vien':
            $('#nhapVien').show();
            $('#keToaChoVe').hide();
            $('#chuyenPhongKham').hide();
            $('#chuyenKhamChinh').hide();
            $('#tuVong').hide();

            $('#chuyenVien').hide();

            break;
        case 'cho_ve_khong_toa':
            $('#nhapVien').hide();
            $('#keToaChoVe').hide();
            $('#chuyenPhongKham').hide();
            $('#chuyenKhamChinh').hide();
            $('#tuVong').hide();

            $('#chuyenVien').hide();

            break;
        case 'chuyen_vien':
            $('#chuyenVien').show();
            $('#nhapVien').hide();
            $('#keToaChoVe').hide();
            $('#chuyenPhongKham').hide();
            $('#chuyenKhamChinh').hide();
            $('#tuVong').hide();


            break;
        case 'chuyen_phong_kham':
            $('#chuyenPhongKham').show();
            $('#nhapVien').hide();
            $('#keToaChoVe').hide();
            $('#chuyenKhamChinh').hide();
            $('#tuVong').hide();
            $('#chuyenVien').hide();

            break;
        case 'chuyen_kham_chinh':
            $('#chuyenKhamChinh').show();
            $('#nhapVien').hide();
            $('#keToaChoVe').hide();
            $('#chuyenPhongKham').hide();
            $('#tuVong').hide();
            $('#chuyenVien').hide();

            break;
        case 'dieu_tri_ngoai_tru':
            $('#nhapVien').hide();
            $('#keToaChoVe').hide();
            $('#chuyenPhongKham').hide();
            $('#chuyenKhamChinh').hide();
            $('#tuVong').hide();
            $('#chuyenVien').hide();


            break;
        case 'bo_ve':
            $('#nhapVien').hide();
            $('#keToaChoVe').hide();
            $('#chuyenPhongKham').hide();
            $('#chuyenKhamChinh').hide();
            $('#tuVong').hide();
            $('#chuyenVien').hide();


            break;
        case 'tu_vong':
            $('#tuVong').show();
            $('#nhapVien').hide();
            $('#keToaChoVe').hide();
            $('#chuyenPhongKham').hide();
            $('#chuyenKhamChinh').hide();
            $('#chuyenVien').hide();


            break;
    
        default:
            break;
    }
})
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
    $('#benh_chinh_text').val( ($('#benh_chinh_icd10').val() =='J20' || $('#benh_chinh_icd10').val() == 'j20') ? 'Viêm phế quản cấp' : '')
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
    let td = $(".tableXetNghiem")[0].rows[4].cells;
    if ($('.inputXN').is(":checked")){
        $('.kqCLS').val(
            td[0].innerText.trim() + ' ' + td[2].innerText + ' ' +  td[4].innerText
        )
    }
}

$(document).ready(function () {
    $("#checkAll").click(function () {
        $('.checkAll .checkItem').not(this).prop('checked', this.checked);
    });
    $("#checkAll1").click(function () {
        $('.checkAll1 .checkItem').not(this).prop('checked', this.checked);
    });
    
    $("#searchChiDinhNhanh").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".ulChiDinhNhanh li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    var timepicker = new TimePicker('time', {
        lang: 'en',
        theme: 'dark'
      });
      timepicker.on('change', function(evt) {
        
        var value = (evt.hour || '00') + ':' + (evt.minute || '00');
        evt.element.value = value;
      
      });
});

$('.tree-basic').treegrid();

deleteChinhDinh=()=>{
    let td = $("#chi_dinh_dv .tree-basic")[0].rows[3];
    console.log(342423,td)

}
