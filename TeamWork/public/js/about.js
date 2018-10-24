//鼠标滚轮事件
var d=0;
window.onscroll=function(){
  if(d==0){
    var t = document.documentElement.scrollTop||document.body.scrollTop;
    if(t>=300){
        $("#one").attr("class","fade in");
    }
    if(t>=300){
        $("#two").attr("class","fade in");
    }
    if(t>=400){
        $("#three").attr("class","little fade in");
    }
    if(t>=400){
        $("#four").attr("class","sublittle fade in");
    }
    if(t>=400){
        $("#five").attr("class","fade in");
    }
    if(t>=500){
        $("#six").attr("class","little fade in");
    }
    if(t>=500){
        $("#seven").attr("class","sublittle fade in");
    }
    if(t>=600){
        $("#eight").attr("class","fade in");
    }

    if(t<300){
        $("#one").attr("class","fade");
    }
    if(t<300){
        $("#two").attr("class","fade");
    }
    if(t<400){
        $("#three").attr("class","little fade");
    }
    if(t<400){
        $("#four").attr("class","sublittle fade");
    }
    if(t<400){
        $("#five").attr("class","fade");
    }
    if(t<500){
        $("#six").attr("class","little fade");
    }
    if(t<500){
        $("#seven").attr("class","sublittle fade");
    }
    if(t<600){
        $("#eight").attr("class","fade");
    }
  }
}

window.onload = function(){
    $("#banner").attr("class","bannerpart fade in");
    $("#container_header").attr("class","container_header fade in");
    $("#img").attr("class","img fade in");
    $("#table_text").attr("class","table_text fade in");
}