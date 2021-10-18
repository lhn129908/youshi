// 定义函数--导航栏随页面卷起背景色发生变化
function topStyle() {
    // 获取导航栏离顶部的距离
    window.onscroll = function () {
        var top1 = document.documentElement.scrollTop;
        // console.log(top1);
        if (top1 <= 0) {
            //如果页面卷起小于等于导航栏离顶部的距离，则使用原样式
            document.querySelector(".dao_hang").style.backgroundColor = "transparent";
            document.querySelector(".dao_hang").style.position = "absolute";
            document.querySelector(".dao_hang").style.top = "0px";
        } else {
            //如果页面卷起大于导航栏离顶部的距离，则使用背景色变为白色
            document.querySelector(".dao_hang").style.backgroundColor = "black ";
            document.querySelector(".dao_hang").style.position = "fixed";
            document.querySelector(".dao_hang").style.top = "0px";
        };
    };
    //获取当前页面卷起的大小
}
topStyle();

// 遮罩效果
(function zhe() {
    var videos = document.querySelectorAll(".video");
    console.log(videos)
    var zhes = document.querySelectorAll(".zhe");
    console.log(zhes)
    for (let i = 0; i < videos.length; i++) {
        videos[i].onmouseenter = function () {
            videos[i].play();
            zhes[i].style.display = "none";
            console.log(i);

        }
        videos[i].onmouseleave = function () {
            videos[i].pause();
            zhes[i].style.display = "block";
        }
    }

})();

// 新闻放大效果
(function fang() {
    var fang = document.querySelectorAll(".fang_da li");
    // console.log(fang);
    for (var i = 0; i < fang.length; i++) {
        fang[i].onmouseenter = function () {
            this.style.backgroundSize ="110%";
        }
        fang[i].onmouseleave = function () {
            this.style.backgroundSize = "100%";
        }
    }
})();


(function () {
    var zhan = document.querySelector("#zhan");
    var shou = document.querySelector("#shou");
    var dao = document.querySelector("#dao_hang1")
    zhan.onclick = function () {
        zhan.style.display = "none";
        shou.style.display = "block";
        dao.style.display = "block";
    };
    shou.onclick = function () {
        shou.style.display = "none";
        zhan.style.display = "block";
        dao.style.display = "none";
    }
})();