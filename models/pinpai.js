const mongoose = require("mongoose");

var ppSchema = mongoose.Schema({
    name:String,
    picture:String,
    picture2:String,
    picturebg:String,
    wenzi:String,
    jieshao:String,
    data:String,
    title:String,
    num:String,
    tag1:String,
    tag2:String,
    tag3:String,
    tag4:String,
    tag5:String,
    tag6:String,
    tag7:String,
    tag8:String,
    tag9:String,
    tag10:String
});
var pinpai = mongoose.model("pinpai",ppSchema);
module.exports = pinpai;