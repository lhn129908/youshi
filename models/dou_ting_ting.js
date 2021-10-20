const mongoose = require("mongoose");

//声明用户有哪些字段 
var dou_ting_tingSchema = new mongoose.Schema({
    id:Number,
    kind:String,
    title:String,
    address:String,
    tags:String,
    photo:String,
    video:String,
})

// 新建个model
var Dou_ting_ting = mongoose.model('Dou_ting_ting',dou_ting_tingSchema);

module.exports = Dou_ting_ting;