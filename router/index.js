// 引入
const express = require("express");
const Home=require("../models/shou")
const Dong=require("../models/shou1")
const router = express.Router();
// 引用数据库模型
const user = require("../models/dou_ting_ting")

//链接“动态”数据库
const User = require("../models/student");

//引入品牌models
const pinpai = require("../models/pinpai")

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

    var news=await Dong.find({lei:"news"});

    var hang=await Dong.find({lei:"hang"});

    res.render("index.html",{quan,wei,xing,TVC,xuan,dian,news,hang});
    console.log("欢迎来到首页！！！")
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
