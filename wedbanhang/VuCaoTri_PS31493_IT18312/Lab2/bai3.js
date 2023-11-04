var trongluong = prompt("Nhap trong luong: ");
var chieucao = prompt("Nhap chieu cao: ");
var BMI = trongluong/(chieucao*chieucao);
document.write("trong luong: "+trongluong);
document.write("<br>");
document.write("chieu cao: "+chieucao);
document.write("<br>");
document.write("BMI: "+BMI);
if(BMI < 18.5){
    alert("thiếu cân");
}else if(BMI >= 18.5 && BMI<25){
    alert("bình thường");
}else if(BMI >= 25 && BMI <30){
    alert("Thừa cân");
}else{
    alert("Béo Phì");
}