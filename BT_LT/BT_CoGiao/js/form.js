function thongbao (){
    document.getElementById("nav1").style.display="inline"
}
function tatthongbao (){
    document.getElementById("nav1").style.display="none"
}
function thongbao1 (){
    document.getElementById("nav2").style.display="inline"
}
function tatthongbao1 (){
    document.getElementById("nav2").style.display="none"
}
function thongbao2 (){
    document.getElementById("nav3").style.display="inline"
}
function tatthongbao2 (){
    document.getElementById("nav3").style.display="none"
}
function thongbao3 (){
    document.getElementById("nav4").style.display="inline"
}
function tatthongbao3 (){
    document.getElementById("nav4").style.display="none"
}
function kiemtra (){
    var regex = /^[A-Z]{1}[a-z]{0,6}(\s[A-Z]{1}[a-z]{0,6}){1,5}|[A-Z]{1,7}(\s[A-Z]{1,7}){1,5}$/;
    let name = document.getElementById('name').value;
    let kqname = regex.test(name);
    if(kqname==true){
        document.getElementById('imgx1').style.display = 'none';
        document.getElementById('imgv1').style.display = 'inline';
    }
    else{
        document.getElementById('imgv1').style.display = 'none';
        document.getElementById('imgx1').style.display = 'inline';
    }

    var regex1 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    let password = document.getElementById('ps').value;
    let kqpassword = regex1.test(password);
    if(kqpassword==true){
        document.getElementById('imgx2').style.display = 'none';
        document.getElementById('imgv2').style.display = 'inline';
    }
    else{
        document.getElementById('imgv2').style.display = 'none';
        document.getElementById('imgx2').style.display = 'inline';
    }

    var regex2 = /^[0][2-9][0-9]{8}$/;
    let phonenumber = document.getElementById('pn').value;
    let kqphonenumber = regex2.test(phonenumber);
    if(kqphonenumber==true){
        document.getElementById('imgx3').style.display = 'none';
        document.getElementById('imgv3').style.display = 'inline';
    }
    else{
        document.getElementById('imgv3').style.display = 'none';
        document.getElementById('imgx3').style.display = 'inline';
    }

    var regex3 = /^[\w\S]{5,30}[@gmail.com]{1}$/;
    let email = document.getElementById('email').value;
    let kqemail = regex3.test(email);
    if(kqemail==true){
        document.getElementById('imgx4').style.display = 'none';
        document.getElementById('imgv4').style.display = 'inline';
    }
    else{
        document.getElementById('imgv4').style.display = 'none';
        document.getElementById('imgx4').style.display = 'inline';
    }
}