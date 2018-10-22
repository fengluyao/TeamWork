#设置客户端的编码utf8
SET NAMES UTF8;
#如果存在dangdang数据库，删除数据库dangdang
#DROP DATABASE IF EXISTS construction;
#创建dangdang数据库，指定服务器端编码类型为utf8
CREATE DATABASE construction CHARSET=UTF8;
#进入数据库
USE construction;
#创建一个数据表
CREATE TABLE users(
    uid INT primary key auto_increment,
    uname VARCHAR(64),
    email VARCHAR(32),
    phone VARCHAR(32),
    content VARCHAR(255)
);
#添加数据
INSERT INTO users VALUES(null,"dangdang","1632174062@qq.com","17716906271","这是一个很好的网站，很吸引人");
INSERT INTO users VALUES(null,"dingding","1632171162@163.com","17716906272","这是一个很好的网站，很吸引人...");
INSERT INTO users VALUES(null,"当当","1632174sgh2@sina.com","17716906273","这是一个很好的网站，很吸引人......");
INSERT INTO users VALUES(null,"叮叮","163217lulilu@mail.com","17716906274","这是一个很好的网站，很吸引人........");