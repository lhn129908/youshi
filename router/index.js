const express = require("express");
const Home=require("../models/shou")
const router = express.Router();

// 来到首页
router.get("/", async(req, res) => {
    
    var quan=await Home.find();
    // console.log(quan);

    var wei=await Home.find({lei:"wei"});
    // console.log(wei);

    var xing=await Home.find({lei:"xing"});
    // console.log(xing);

    var TVC=await Home.find({lei:"TVC"});
    // console.log(TVC);

    var xuan=await Home.find({lei:"xuan"});
    // console.log(xuan);

    var dian=await Home.find({lei:"dian"});
    // console.log(dian);

    res.render("index.html",{quan,wei,xing,TVC,xuan,dian});
    console.log("欢迎来到首页！！！")
});









// 来到拍摄案例
router.get("/an_li", (req, res) => {
    res.render("an_li.html");
    console.log("欢迎来到拍摄案例！！！")
});

// 来到品牌传播
router.get("/pin_pai", (req, res) => {
    res.render("pin_pai.html");
    console.log("欢迎来到品牌传播！！！")
});

// 来到动态
router.get("/dong_tai", (req, res) => {
    res.render("dong_tai.html");
    console.log("欢迎来到动态！！！")
});

// 来到我们
router.get("/wo_men", (req, res) => {
    res.render("wo_men.html");
    console.log("欢迎来到我们！！！")
});

// 来到招聘
router.get("/zhao_pin", (req, res) => {
    res.render("zhao_pin.html");
    console.log("欢迎来到招聘！！！")
});

// 来到联系
router.get("/lian_xi", (req, res) => {
    res.render("lian_xi.html");
    console.log("欢迎来到联系！！！")
});




module.exports = router;
