var t = 1;
var box1 = $(".box1");
var box2 = $(".box2");
var box3 = $(".box3");
$(".icon-prev").click(function(){
  clearInterval(timer);
    switch(t){
        case 4: box1.css("left","-2400px");
                box2.css("left","-2400px");
                box3.css("left","-2400px");
                t--;
                break;
        case 3: box1.css("left","-1200px");
                box2.css("left","-1200px");
                box3.css("left","-1200px");
                t--;
                break;
        case 2: box1.css("left","0px");
                box2.css("left","0px");
                box3.css("left","0px");
                t--;
                break;
        case 1: box1.css("left","-3600px");
                box2.css("left","-3600px");
                box3.css("left","-3600px");
                t=4;
                break;
    }
})
$(".icon-next").click(function(){
  clearInterval(timer);
    switch(t){
        case 1: box1.css("left","-1200px");
                box2.css("left","-1200px");
                box3.css("left","-1200px");
                t++;
                break;
        case 2: box1.css("left","-2400px");
                box2.css("left","-2400px");
                box3.css("left","-2400px");
                t++;
                break;
        case 3: box1.css("left","-3600px");
                box2.css("left","-3600px");
                box3.css("left","-3600px");
                t++;
                break;
        case 4: box1.css("left","0px");
                box2.css("left","0px");
                box3.css("left","0px");
                t=1;
                break;
    }
})
var timer = setInterval(function(){
  switch(t){
    case 1: box1.css("left","-1200px");
            box2.css("left","-1200px");
            box3.css("left","-1200px");
            t++;
            break;
    case 2: box1.css("left","-2400px");
            box2.css("left","-2400px");
            box3.css("left","-2400px");
            t++;
            break;
    case 3: box1.css("left","-3600px");
            box2.css("left","-3600px");
            box3.css("left","-3600px");
            t++;
            break;
    case 4: box1.css("left","0px");
            box2.css("left","0px");
            box3.css("left","0px");
            t=1;
            break;
  }
},2000);
var prev = $(".owl-prev");
var next = $(".owl-next");
var i = 1;
prev.on("click",function(){
    switch(i){
        case 1: $(".tab-box").css("left","-6160px");
                $(".number-box").css("top","-456px")
                i=8;
                break;
        case 2: $(".tab-box").css("left","0px");
                $(".number-box").css("top","7px")
                i--;
                break;
        case 3: $(".tab-box").css("left","-880px");
                $(".number-box").css("top","-59px");
                i--;
                break;
        case 4: $(".tab-box").css("left","-1760px");
                $(".number-box").css("top","-126px")
                i--;
                break;
        case 5: $(".tab-box").css("left","-2640px");
                $(".number-box").css("top","-192px")
                i--;
                break;
        case 6: $(".tab-box").css("left","-3520px");
                $(".number-box").css("top","-258px")
                i--;
                break;
        case 7: $(".tab-box").css("left","-4400px");
                $(".number-box").css("top","-324px")
                i--;
                break;
        case 8: $(".tab-box").css("left","-5280px");
                $(".number-box").css("top","-389px")
                i--;
                break;
    }
})
next.on("click",function(){
    switch(i){
        case 1: $(".tab-box").css("left","-880px");
                $(".number-box").css("top","-59px");
                i++;
                break;
        case 2: $(".tab-box").css("left","-1760px");
                $(".number-box").css("top","-126px")
                i++;
                break;
        case 3: $(".tab-box").css("left","-2640px");
                $(".number-box").css("top","-192px")
                i++;
                break;
        case 4: $(".tab-box").css("left","-3520px");
                $(".number-box").css("top","-258px")
                i++;
                break;
        case 5: $(".tab-box").css("left","-4400px");
                $(".number-box").css("top","-324px")
                i++;
                break;
        case 6: $(".tab-box").css("left","-5280px");
                $(".number-box").css("top","-389px")
                i++;
                break;
        case 7: $(".tab-box").css("left","-6160px");
                $(".number-box").css("top","-456px")
                i++;
                break;
        case 8: $(".tab-box").css("left","0px");
                $(".number-box").css("top","7px")
                i=1;
                break;
    }
})
$(".close").click(function(){
  $(".tab-content").css("height","0");
  $(".tab-content").css("padding-bottom","0");
  $(".tab-content").css("padding-top","0");
  $(".tab-button").css("margin-top","-20px");
})

$(".tab-button>div>a").click(function(){
  var a = $(this);
  $(".tab-content").css("height","254px");
  $(".tab-content").css("padding-bottom","50px");
  $(".tab-content").css("padding-top","50px");
  $(".tab-button").css("margin-top","70px");
})

/*canvas*/
particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



/* 下面是ajax请求 */

$("#btn").click(function(){
  var uname = $("#uname").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var content = $("#content").val();
  /* 发送数据 */
  $.ajax({
      url:"http://127.0.0.1:3030/users/add",
      type:"post",
      data:`uname=${uname}&email=${email}&phone=${phone}&content=${content}`,
      success:function(res){
        layer.msg('提交成功！！', {
          icon: 1,
          time: 2000 //2秒关闭（如果不配置，默认是3秒）
        }, function(){
          window.location.reload();
        });
      }
  })
})


//鼠标滚轮事件
var d=0;
window.onscroll=function(){
  if(d==0){
    var t = document.documentElement.scrollTop||document.body.scrollTop;
    //服务部分
    var elem = $("#service");
    if(t>=0){
      elem.attr("class","service fade in");
    }
    if(t>=200){
      $("#service_header").attr("class","service_header fade_header in_header");
    }
    if(t>=600){
      $("#service_container").attr("class","service_container fade in");
    }
    if(t>=900){
      $("#project_header").attr("class","container_header fade_header in_header");
    }
    if(t>=1050){
      $("#pro_container_list").attr("class","pro_container_list fade in");
    }
    if(t>=1200){
      $("#project_content").attr("class","container_content fade in");
    }
    if(t>=1700){
      $("#about").attr("class","about fade in");
    }
    if(t>=1800){
      $("#text-wrapper").attr("class","text-wrapper fade_right in_right");
    }
    if(t>=1800){
      $("#mediabody").attr("class","mediabody fade_left in_left");
    }
    if(t>=2000){
      $("#module").attr("class","module fade in");
    }
    if(t>=2200){
      $("#team").attr("class","team fade in");
    }
    if(t>=2600){
      $("#team_header").attr("class","team_header fade_header in_header");
    }
    if(t>=2800){
      $("#swiper-container").attr("class","swiper-container fade in")
    }
    if(t>=3200){
      $("#news_header").attr("class","container_header fade_header in_header");
    }
    if(t>=3400){
      $("#container_list").attr("class","container_list fade in");
    }
    if(t>=3600){
      $("#first").attr("class","first fade in");
    }
    if(t>=3800){
      $("#two").attr("class","two fade in");
    }
    if(t>=4100){
      $("#partner_header").attr("class","container_header fade_header in_header");
    }
    if(t>=4300){
      $("#partner_content").attr("class","partner_content fade in");
    }
    if(t>=4600){
      $("#contact_header").attr("class","container_header fade_header in_header")
    }
    if(t>=4900){
      $("#contactinfo").attr("class","contactinfo fade_left in_left")
    }
    if(t>=4900){
      $("#contactform").attr("class","contactform fade_right in_right")
    }
  }
}