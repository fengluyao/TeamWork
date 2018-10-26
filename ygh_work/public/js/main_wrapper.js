var lb=document.getElementById("icon-prev");
var rb=document.getElementById("icon-next");
var ul=document.querySelectorAll(".wrapper_container ul");
var ul1=document.querySelectorAll(".wrapper_container ul")[0];
var ul2=document.querySelectorAll(".wrapper_container ul")[1];
var ul3=document.querySelectorAll(".wrapper_container ul")[2];
var probar=document.getElementById("probar");
var animated=false;
var timer;

function animate(offset){
    var newLeft=parseInt(ul2.style.left)+offset;
    var time=500;
    var interval=10;
    var speed=offset/(time/interval);
    function go(){
        if(speed<0 && parseInt(ul2.style.left)>newLeft-speed || speed>0 && parseInt(ul2.style.left)<newLeft-speed){
			for(var i=0;i<ul.length;i++){
				ul[i].style.left=parseInt(ul[i].style.left)+speed+"px";
			}
			/*ul1.style.left=parseInt(ul1.style.left)+speed+"px";
            ul2.style.left=parseInt(ul2.style.left)+speed+"px";
			ul3.style.left=parseInt(ul3.style.left)+speed+"px";*/
            setTimeout(go, interval);
        }else{
			for(var i=0;i<ul.length;i++){
				ul[i].style.left=newLeft+"px";
			}
			if(newLeft<-1200*4){
				for(var i=0;i<ul.length;i++){
					ul[i].style.left="-1200px";
				}
			}
			if(newLeft>-1200){
				for(var i=0;i<ul.length;i++){
					ul[i].style.left="-4800px";
				}
			}
            /*ul2.style.left=newLeft+"px";
			if(newLeft<-1200*4){
				ul2.style.left="-1200px";
			}
			if(newLeft>-1200){
				ul2.style.left="-4800px";
			}*/
			animated=false;
		}
	}
	animated=true;
	go();
}

rb.onclick=function(){
	if(!animated){
		animate(-1200);
	}
}
lb.onclick=function(){
	if(!animated){
		animate(1200);
	}
}

function autoplay(){
	rb.onclick();
}
timer=setInterval(autoplay,3000);