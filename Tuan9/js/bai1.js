$(document).ready(function(){
    let i = 2;
    // $("#dangky").click(function(){
    //     $("#myModal").modal();
    // });
 
    var hocphi;
// d. Cập nhật học phí theo khóa học
$("#khoahoc").change(function(){
    var khoahoc = $("#khoahoc").val();

    if(khoahoc == "Khóa 2 tuần"){ // Sửa ở đây
        hocphi="5,000,000";
    }
    else if(khoahoc == "Khóa 4 tuần"){ // Sửa ở đây
        hocphi="8,000,000";
    }
    else{
        hocphi="9,000,000";
    }
    $('#hocphi').val(hocphi); // Sửa ở đây
    $('#hocphi').prop('readonly', true); // Sửa ở đây
})

$("#luu").click(function(){
    if(ktName()&&ktSDT()&&kttuoi()){
        var ten = $("#Name").val();
    var sdt = $("#sdt").val();
    var ngaysinh = $("#ngaysinh").val();
    var diachi = $("#diachi").val();
    var khoahoc = $("#khoahoc").val();
    

    var them = "<tr><td>" + (i++) + "</td><td>" + ten + "</td><td>" + "Nam" + "</td><td>" + sdt + "</td><td>" + ngaysinh + "</td><td>" + diachi + "</td><td>"+ khoahoc + "</td><td>" + hocphi + "</td></tr>";
    $("table tbody").append(them);
    }
    else{
        $("#myModal").modal();
    }
    
})
// e. Kiểm tra ảnh đại diện
$("input[type='file']").change(function(){
    var file = this.files[0];
    var errimg = $(".errimg");
    var validImageTypes = ["image/jpeg", "image/png", "image/gif"];

    if($.inArray(file.type, validImageTypes) < 0){
        errimg.text("* Ảnh đại diện phải là file .jpg, .png, hoặc .gif!");
    } else {
        errimg.text("");
    }
});

    
    
});
function ktName(){
    var ten = document.getElementById("Name").value;
    var errName = document.getElementById("errName");
    
    var Name = /^([A-Z][a-z]*\s){1,}[A-Z][a-z]*$/;
    var kqname = Name.test(ten);
    if(ten == "" || ten == null){
        errName.innerHTML = "Họ tên không được để trống";
        return false;
    }
    else if(kqname){
        errName.innerHTML = "";
        return true;
    }else{
        errName.innerHTML = "Nhập sai không viết hoa chữ cái đầu hoặt ít hơn 2 từ";
        return false;
        
    }
}
function ktSDT(){
    var SDTnhap = document.getElementById("sdt").value;
    var errSDT = document.getElementById("errSDT");
    
    var sdt = /^[0][2-9][2-9]-[0-9]{7}$/;
    var kq = sdt.test(SDTnhap);
    if(SDTnhap == "" || SDTnhap == null){ 
        errSDT.innerHTML = "SDT không được để trống";
        return false;

    }
    else if(kq){
        errSDT.innerHTML = "";
        return true;

    }else{
        errSDT.innerHTML = "Nhập sai định dạng XXX-YYYYYY";
        return false;

    }
}
function kttuoi(){
    var tuoiNhap = new Date(document.getElementById("ngaysinh").value);
    var ngayhientai = new Date();
    var tuoi =ngayhientai.getFullYear() - tuoiNhap.getFullYear();
    var errNgaySinh = document.getElementById("errNgaySinh");
    if(tuoi>15&&tuoi<18){
        errNgaySinh.innerHTML = "";
        return true;

    }else{
        errNgaySinh.innerHTML = " Ngày sinh hợp lệ khi tuổi trên 15 và dưới 18";
        return false;
        
    }
}
function moModal(){
    var modal = $("#myModal");
    modal.modal();
}


