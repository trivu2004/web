var a = prompt("Toán hạng a: ");
var b = prompt("Toán hạng b: ");
var o = prompt("Toán tử: ");
switch(o){
    case'+':
        var kq = parseInt(a) + parseInt(b);
        alert("Tổng là: "+kq);
        break;
    case'-':
            var kq = parseInt(a) - parseInt(b);
            alert("Hiệu là: "+kq);
            break;
    case'*':
        var kq = parseInt(a) * parseInt(b);
        alert("Tích là: "+kq);
        break;
    case'/':
        var kq = parseInt(a) / parseInt(b);
        alert("Thương là: "+kq);
        break;
    default:
        alert("không phải toán tử"+o);
        break;
}