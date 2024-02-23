function kt_diem (){
    if(DTB<0||DTB>10){
        alert("Điểm " + DTB + " Là điểm không hợp lệ")
    }
    else{
        xet_diem();
    }
}
function xet_diem(){
    if(DTB>=8){
        confirm("Với " + DTB + " Học sinh đạt loại giỏi");
    }
    else if(DTB >=6.5){
        confirm("Với " + DTB + " Học sinh đạt loại Khá");
    }
    else if(DTB >=5){
        confirm("Với " + DTB + " Học sinh đạt loại trung bình");
    }
    else{
        confirm("Với " + DTB + " Học sinh đạt loại yếu");
    }
}
var DTB = eval(prompt("Nhập DTB: "));
kt_diem();