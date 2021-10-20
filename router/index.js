const express = require("express");
const Home=require("../models/shou")
const router = express.Router();
//链接“动态”数据库
const User = require("../models/student");
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
