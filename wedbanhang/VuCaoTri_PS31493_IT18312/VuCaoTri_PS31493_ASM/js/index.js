var pic = [];
var i = 0;
changeImages = function(){
    var imgArray = [
        "img/banner1.jpg",
        "img/banner2.jpg",
        "img/banner3.jpg",
        "img/banner4.jpg"
    ];
    document.getElementById("img").src = imgArray[i];
    i++;
    if(i == pic.length){
        i = 0;
    }
};
setInterval(changeImages,3000);
for(let i = 0;i<4;i++){
    pic[i] = new Image();
    pic[i].src = "banner"+i+".jpg";
}
var index =0;
function prev(){
    index--;
    if(index < 0){
        index = pic.length -1;

    }
    var img = document.getElementById("img");
    img.src = pic[index].src;

}
function next(){
    index++;
    if(index >= pic.length){
        index = 0;
    }
    var img = document.getElementById("img");
    img.src = pic[index].src;
}