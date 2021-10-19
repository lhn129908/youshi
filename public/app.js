const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");
const mongoose = require("mongoose");
const expressSession = require("express-session");
const app = express();



mongoose.connect("mongodb://localhost:27017");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("连接成功");
});

app.use(
    expressSession({
        name: "sessionID",
        secret: "secret",
        resave: false,
        rolling: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 3,
        },
    })
);


// 为使用bootstrap设置静态资源目录
app.use("/node_modules",express.static("./node_modules"))
// 设置静态资源目录
app.use("/public",express.static("./public"))

// 配置art-template
// 引用art-template包用来渲染HTML文件
app.engine("html",require("express-art-template"));
// 
app.set("views",__dirname + "/views");

// 挂载中间件
//解析请求头为"application/x-www-form-urlencoded"的post请求参数
app.use(bodyParser.urlencoded({ extended: false }));
//解析请求头为 "application/json"的post请求参数
app.use(bodyParser.json());


//挂载路由
app.use("/", router);

// app.get('/lian_xi',(req,res)=>{
// 	res.render('lian_xi.html')
// })
// app.get('/wo_men',(req,res)=>{
// 	res.render('wo_men.html')
// })
// app.get('/zhaop_in',(req,res)=>{
// 	res.render('zhao_pin.html')
// })

app.listen(8000, () => {
    console.log("8000端口已启用");
  });
  