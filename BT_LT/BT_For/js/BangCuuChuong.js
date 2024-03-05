function bangcuuchuong ()
{
    for(i=1; i<=10;i++){
        document.write(n + "&#10540;" + i + "=" + n*i + "<br>");
    }
}

var n = eval(prompt("Nhập Bảng cữu chương: "));
bangcuuchuong();