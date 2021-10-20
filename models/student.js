//动态数据库

const mongoose = require("mongoose")

var dong_tai = mongoose.Schema({
    name: String,
    year: String,
    month: String,
    day: String,
    img: String,
    fenlei: String,
    img_wenben: String,
    p0: String,
    h1: String,
    p1: String,
    h2: String,
    p2: String,
    h3: String,
    p3: String,
    h4: String,
    p4: String,
    h5: String,
    p5: String,
    t1: String,
    g1: String,
    t2: String,
    g2: String,
    t3: String,
    g3: String,
});

var Student = mongoose.model("dongtai", dong_tai);





module.exports = Student;

