const mongoose = require("mongoose");

// 声明一个Schema用于处理首页数据
var homeSchema = mongoose.Schema({
    id:Number,
    title:String,
    address:String,
    video:String,
    lei:String
  });

  var Home = mongoose.model("Home", homeSchema);

  var dongSchema=mongoose.Schema({
    date:String,
    nian:String,
    content:String,
    lei:String
  })
  var Dong= mongoose.model("Dong", dongSchema);
module.exports = Home;