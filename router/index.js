// 引入
const express = require("express");
const router = express.Router();
// 引用数据库模型
const user = require("../models/dou_ting_ting")

// 来到首页
router.get("/", (req, res) => {
    res.render("index.html");
});

// 来到拍摄案例
router.get("/an_li", async(req, res) => {
    var  quan1 = await user.find();
    var  wei1 = await user.find({kind:"微电影"});
    var  xing1 = await user.find({kind:"形象片"});
    var  TVC1 = await user.find({kind:"TVC"});
    var  xuan1 = await user.find({kind:"宣传片"});
    var  dian1 = await user.find({kind:"电视购物"});
    var a = quan1.length;
    var b = wei1.length+a;
    var c = xing1.length+b;
    var d = TVC1.length+c;
    var e = xuan1.length+d;
    var f = 0;
    var g = {
        a:a,b:b,c:c,d:d,e:e,f:f
    }
res.render("an_li.html",{quan1,wei1,xing1,TVC1,xuan1,dian1,g}) 
});

// 来到品牌传播
router.get("/pin_pai", (req, res) => {
    res.render("pin_pai.html");
});

// 来到动态
router.get("/dong_tai", (req, res) => {
    res.render("dong_tai.html");
});

// 来到我们
router.get("/wo_men", (req, res) => {
    res.render("wo_men.html");
});

// 来到招聘
router.get("/zhao_pin", (req, res) => {
    res.render("zhao_pin.html");
});

// 来到联系
router.get("/lian_xi", (req, res) => {
    res.render("lian_xi.html");
});




module.exports = router;
