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


//   评论列表
$.ajax({
    url:"http://127.0.0.1:3030/users/show",
    type:"get",
    success:function(data){
        var arr = data.msg;    
        for(var i = 0;i<arr.length;i++){
            var html = "";
            html = `<li class="item mytable">
                <p class="named">${arr[i].a}</p>
                <p class="contented">${arr[i].c}</p>
            </li>`
            var ul = $(".canvas ul");
            ul.html(html+ul.html());
        }
    }
})


var d=0;
window.onscroll=function(){
  if(d==0){
    var t = document.documentElement.scrollTop||document.body.scrollTop;
    //服务部分
    if(t>=10){
        $("#container_header").attr("class","container_header fade_header in_header")
    }
    if(t<10){
        $("#container_header").attr("class","container_header fade_header")
    }
    // if(t>=200){
    //     $("#contactlist").attr("class","contactlist fade in");
    // }
    // if(t<200){
    //     $("#contactlist").attr("class","contactlist fade");
    // }
    if(t>=400){
        $("#contactinfo").attr("class","contactinfo fade in");
    }
    if(t<400){
        $("#contactinfo").attr("class","contactinfo fade");
    }
    if(t>=600){
        $("#canvas").attr("class","canvas mytable fade in");
    }
    if(t<600){
        $("#canvas").attr("class","canvas mytable fade");
    }
    if(t>=900){
        $("#contactform").attr("class","contactform fade in");
    }
    if(t<900){
        $("#contactform").attr("class","contactform fade");
    }
  }
}

window.onload = function(){
    $("#banner").attr("class","banner fade in");
  }