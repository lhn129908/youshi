const mongoose = require("mongoose");

var dongSchema=mongoose.Schema({
    date:String,
    nian:String,
    content:String,
    lei:String
  })
  var Dong= mongoose.model("Dong", dongSchema);

  module.exports = Dong;