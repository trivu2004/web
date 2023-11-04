var x = prompt("Nhap x: ");
x = Number(x);
switch(true){
    case x > 10 :
        alert("x lớn hơn 10");
        break;
    case x < 10:
        alert("x nhỏ hơn 10");
        break;
    case x == 10:
        alert("x bằng 10");
        break;
    default:    
        alert("Nhập sai ! Nhập lại");
    break;
}

let names = ["1","2","3","4","5"];
for(let item of names){
    if(item == "3"){
        break;
    }else{
        console.log(item);
    }
}