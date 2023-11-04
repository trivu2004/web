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
var boxclose = document.getElementById("boxclose")
var light = document.getElementById("light")
var fade = document.getElementById("fade")
boxclose.addEventListener("click",close)

function close(){
    light.style.display = 'none'
    fade.style.display = 'none'
}
var boxclose = document.getElementById("boxclose")
var light = document.getElementById("light")
var fade = document.getElementById("fade")
var vCard = document.getElementById("vCard")
var imgClose = document.querySelectorAll(".cart img")
for (let index = 1; index < (imgClose.length+1); index++) {
    const element = imgClose[index];
    element.addEventListener("click",()=>{
        vCard.src = element.src.replace("png","mp4")
        openvideo()
    })
}
fade.addEventListener("click",close)
boxclose.addEventListener("click",close)

function openvideo(){
    light.style.display = "block"
    fade.style.display = "block"
    vCard.load()
    vCard.play()
}
function close(){
    light.style.display = "none"
    fade.style.display = "none"
    vCard.pause()
}

window.addEventListener("keydown",closeEsc);
function closeEsc(event){
    if(event.keyCode == 27){
        close()
    }
}