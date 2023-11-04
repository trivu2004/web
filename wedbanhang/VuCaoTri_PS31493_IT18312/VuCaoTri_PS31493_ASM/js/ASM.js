    var i = 0;
    var imgArr = Array();
    for(let i = 0;i<5;i++){
        imgArr[i] = "img/Mercedes"+i+".jpg";
    }
    function changeImg(){
        document.getElementById("imgBanner").src=imgArr[i];
        if(i < imgArr.length -1){
            i++;
        }else{
            i = 0;
        }
        setTimeout("changeImg()",3000);
    }
    // setInterval(changeImg,1000);
    window.onload = changeImg;
 
    function rightNext(){
        i++;
        if(i>imgArr.length-1){
            i = 0;  
        }
        document.getElementById("imgBanner").src = imgArr[i];
    }
    function leftPrev(){
        i--;
        if(i<0){
            i = imgArr.length - 1;
        }
        document.getElementById("imgBanner").src = imgArr[i];
    }
    function first(){
        document.getElementById("imgBanner").src = imgArr[0];
      }
      function last(){
        document.getElementById("imgBanner").src = imgArr[4];
      }
       
