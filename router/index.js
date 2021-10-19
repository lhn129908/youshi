const express = require("express");
const router = express.Router();
//链接“动态”数据库
const User = require("../models/student");
// 来到首页
router.get("/", (req, res) => {
    res.render("index.html");
});

// 来到拍摄案例
router.get("/an_li", (req, res) => {
    res.render("an_li.html");
});

// 来到品牌传播
router.get("/pin_pai", (req, res) => {
    res.render("pin_pai.html");
});

// 来到动态
router.get("/dong_tai", async (req, res) => {
    var user_quanbu = await User.find()
    var user_xinwen = await User.find({ fenlei: "0" })
    var user_hangye = await User.find({ fenlei: "1" })
    res.render("dong_tai.html", { user_quanbu, user_xinwen, user_hangye });
});

//来到动态文本页面
router.get("/dong_tai/:id", async (req, res) => {
    var id = req.params["id"];
    var user = await User.findById(id);
    var a = await User.find();
    var b = [];
    var c = 0;
    var shang = {};
    var xia = {};
    for (var i = 0; i < a.length; i++) {
        b[i] = a[i]._id;
        if (id == a[i].id) {
            c = i
        }
    }
    if (c - 1 == -1) {
        shang.name = "";
        shang._id = "";
        xia = await User.findById(b[c + 1]);
    } else if (c + 1 == a.length) {
        shang = await User.findById(b[c - 1]);
        xia.name = "";
        xia._id = "";
    } else {
        shang = await User.findById(b[c - 1]);
        xia = await User.findById(b[c + 1]);
    }

    res.render("dongtai/dongtai_wenben.html", { article: user, shang: shang, xia: xia })
})

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
