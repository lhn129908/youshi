const express = require("express");
const router = express.Router();
//引入品牌models
const pinpai = require("../models/pinpai")
// 来到首页
router.get("/", (req, res) => {
    res.render("index.html");
});

// 来到拍摄案例
router.get("/an_li", (req, res) => {
    res.render("an_li.html");
});

// 来到品牌传播
router.get("/pin_pai", async(req, res) => {
    let Pinpai = await pinpai.find();
    res.render("pin_pai.html",{Pinpai});
});
// 来到品牌传播详情
router.get("/topic/:id", async(req, res) => {
   var id =req.params['id'];
   var result = await pinpai.findById(id);
   var hub= await pinpai.find({num:"1"})

    res.render("../views/topic/ppcb.html",{pinpai:result,hub});
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
