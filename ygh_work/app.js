const express = require("express");
const bodyParse = require("body-parser");
const project = require("./routes/project");

var app = express();

app.use(bodyParse.urlencoded({extended:false}));
app.use(express.static(__dirname+"/public"));

var server = app.listen(3030,function(){
    console.log("服务器创建成功......");
})

app.use("/project",project);