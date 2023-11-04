var anh = document.getElementById("anh");
    var out = new Image();
    out.src =
      "z4276414449981_20ca4b958452b56b1d6d613096ef6e13.jpg";
    var over = new Image();
    over.src =
      "z4276414458503_1b9569f98519cc0308450039bf5e5902.jpg";
    function fover() {
      anh.src = over.src;
    }
    function fout() {
      anh.src = out.src;
    }
    function hide(){
        anh.style.display = "none";
    }
    function show(){
        anh.style.display = "block";
    }