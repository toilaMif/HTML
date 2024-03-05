 do{
        var thang = eval(prompt("Nhập Tháng: "))
    }while(thang<1||thang>12);
switch (thang)
{
    case 1: document.write("Tháng " + thang + ": tháng " + thang + " có 31 ngày"); break;
    case 2: document.write("Tháng " + thang + ": tháng " + thang + " có 28 ngày"); break;
    case 3: document.write("Tháng " + thang + ": tháng " + thang + " có 31 ngày"); break;
    case 4: document.write("Tháng " + thang + ": tháng " + thang + " có 30 ngày"); break;
    case 5: document.write("Tháng " + thang + ": tháng " + thang + " có 31 ngày"); break;
    case 6: document.write("Tháng " + thang + ": tháng " + thang + " có 30 ngày"); break;
    case 7: document.write("Tháng " + thang + ": tháng " + thang + " có 31 ngày"); break;
    case 8: document.write("Tháng " + thang + ": tháng " + thang + " có 31 ngày"); break;
    case 9: document.write("Tháng " + thang + ": tháng " + thang + " có 30 ngày"); break;
    case 10: document.write("Tháng " + thang + ": tháng " + thang + " có 31 ngày"); break;
    case 11: document.write("Tháng " + thang + ": tháng " + thang + " có 30 ngày"); break;
    case 12: document.write("Tháng " + thang + ": tháng " + thang + " có 31 ngày"); break;
    default : document.write("Giá trí nhập vào không hợp lệ");
}