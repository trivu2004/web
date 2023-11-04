do{
    var x = prompt("Nhập bảng cửu chương từ (1-10)");
}while(x<0 || x>10);
for(var i = 1;i<11;i++){
    document.write(x+"x"+i+"="+(x*i))
    document.write("<br>")
}