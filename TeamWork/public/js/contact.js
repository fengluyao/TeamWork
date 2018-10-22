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