'use strict'
var btn = document.getElementsByClassName("button-92")
console.log(btn);
function Car(carName, image, price) {
    this.carName = carName;
    this.image = image;
    this.price = price;
}

var cart = new Array()
var shCart = document.getElementById("items")
for (let index = 0; index < btn.length; index++) {
    const element = btn[index];
    element.addEventListener("click", (event) => {
        var btncl = event.target.parentElement
        let im = btncl.children[0].src
        let name = btncl.children[1].children[0].innerText
        let price = btncl.children[1].children[1].innerText
        cart.push(new Car(name, im, price))
        console.log(cart);
        shCart.innerText = cart.length
        addCart(cart)
    })
}
var overlay = document.getElementById("overlay")
function showCarts() {
    if (cart.length == 0) {

        Swal.fire('Giỏ Hàng Của Bạn Đang Trống')
    } else {
        if (overlay.style.display == "none")
            overlay.style.display = "block";
        else
            overlay.style.display = "none"
    }
};

var tbCart = document.getElementById("tbCart")
function addCart(ca) {
    var tr = document.createElement("tr")
    for (let index = 0; index < ca.length; index++) {
        const element = ca[index];
        tr.innerHTML = "<td>" + element.carName + "</td><td><img src='" + element.image + "'></td><td>" + element.price + "</td>"
        tbCart.appendChild(tr)
    }
}
