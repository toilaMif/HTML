function tam_giac (){
    if(a+b>c&&a+c>b&&b+c>a){
        document.write(a + " " + b + " " + c + " " +"Là 3 cạnh của tam giác <br>")
        loai_tam_giac();
    }
    else{
        document.write(a + " " + b + " " + c + " " +"Không phải là 3 cạnh của tam giác <br>")
    }
}
function loai_tam_giac(){
    if(a==b&&b==c){
        document.write(a + " " + b + " " + c + " " +"Là 3 cạnh của tam giác đều");
    }
    else if(a==b||b==c||a==c){
        document.write(a + " " + b + " " + c + " " +"Là 3 cạnh của tam giác cân");
    }
    else{
        document.write(a + " " + b + " " + c + " " +"Là 3 cạnh của tam giác thường");
    }
}
 var a = eval(prompt("Nhập cạnh a: "));
 var b = eval(prompt("Nhập cạnh b: "));
 var c = eval(prompt("Nhập cạnh c: "));

 tam_giac();