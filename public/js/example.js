$(function () {
  var d = 0;
  var a = 0;
  var b = $(".container").children();
  for (var i = 0; i < b.length; i++) {
    $(b[i]).click(function () {
      //  index = 0;
      var c = $(this)[0];
      a = c.getAttribute("value");
      // index = index+a;
    });
  }

  // 小视频静音
  $(".media video").prop("muted", true);

  // 鼠标移入小视频/移出小视频事件
  $("#post_list .box1").on({
    // 鼠标移入小视频事件
    mouseenter: function () {
      let index = $(this).index();
      index = index + Number(a);
      console.log(index);
      // 底部文字显示
      $(".popup").eq(index).removeClass("el-not-show");
      // 小视频的遮罩层隐藏
      $(".masking").eq(index).addClass("el-not-show");
      // 小视频显示
      $(".media").eq(index).removeClass("el-not-show");
      // console.log($(".media").eq(index));
      // 小视频自动播放
      $(".media video").eq(index).get(0).play();
    },
    // 鼠标移出小视频事件
    mouseleave: function () {
      let index = $(this).index();
      index = index + Number(a);
      $(".popup").eq(index).addClass("el-not-show");
      // 小视频遮罩层显示
      $(".masking").eq(index).removeClass("el-not-show");
      // 小视频隐藏
      $(".media").eq(index).addClass("el-not-show");
      // 小视频停止
      $(".media video").eq(index)[0].pause();
    },
  });

  // 鼠标点击小视频
  $("#post_list .box1").click(function (e) {
    // 遮罩层显示
    $("#an_li .video-mask").removeClass("el-not-show");
    // 导航栏隐藏
    $(".dao_hang").addClass("el-not-show");
    var videoUrl = e.target.attributes[0].nodeValue;
    // ./mp4/辣条.mp4
    //  <video src="./mp4/辣条.mp4"></video>
    // 添加大视频
    $("#big-video").attr("src", videoUrl);
    // 自定义大视频的控件显示
    $(".video-control").removeClass("el-not-show");
    // 大视频的控件显示
    // $(".video-container video").attr("controls", true);
    // 滚动条隐藏
    $("html").css("overflow", "hidden");
    // 禁止滚动条滚动
    unScroll();
  });

  // 鼠标点击遮罩层
  $("#an_li .video-mask").click(function () {
    // 大视频停止
    $("#big-video")[0].pause();

  });

  // 鼠标点击播放控件播放
  $(".glyphicon-play").click(function () {
    $(".video-control").addClass("el-not-show");
    $("#big-video")[0].play();
    return false;
  });
  // 鼠标点击大视频停止
  $("#big-video").click(function () {
    $(".video-control").removeClass("el-not-show");
    $("#big-video")[0].pause();
    return false;
  });

  //视频当前播放时间
  // timeupdate实时更新时间
  $("#big-video").on("timeupdate", function () {
    var current = $("#big-video")[0].currentTime;
    // ceil()函数向上舍入为最接近的整数
    var time1 = Math.ceil(current);
    $(".current").text(timeToMinute(time1));
    // 播放进度条
    var currentPos = $("#big-video")[0].currentTime;
    var maxduration = $("#big-video")[0].duration;
    var percentage = (100 * currentPos) / maxduration;
    $(".timeBar").css("width", percentage + "%");
  });

  //视频播放总时间
  $("#big-video").on("loadedmetadata", function () {
    var duration = $("#big-video")[0].duration;
    // ceil()函数向上舍入为最接近的整数
    var time2 = Math.ceil(duration);
    $(".duration").text(timeToMinute(time2));
  });

  // 拖拽进度条播放视频
  var timeDrag = false;
  // 鼠标落到进度条时
  $(".progressBar").mousedown(function (e) {
    timeDrag = true;
    updatebar(e.pageX);
  });
  // 鼠标在起来时
  $(document).mouseup(function (e) {
    if (timeDrag) {
      timeDrag = false;
      updatebar(e.pageX);
    }
  });
  // 鼠标在进度条上移动
  $(document).mousemove(function (e) {
    if (timeDrag) {
      updatebar(e.pageX);
    }
  });

  //更新进度条控件
  var updatebar = function (x) {
    var progress = $(".progressBar");
    // 获取当前视频的长度
    var maxduration = $("#big-video")[0].duration;
    // 偏移量
    var position = x - progress.offset().left;
    var percentage = (100 * position) / progress.width();

    //检查进度条的范围
    if (percentage > 100) {
      percentage = 100;
    }
    if (percentage < 0) {
      percentage = 0;
    }

    //更新进度条和视频当前时间
    $(".timeBar").css("width", percentage + "%");
    $("#big-video")[0].currentTime = (maxduration * percentage) / 100;

    // 视频播放
    setTimeout(() => {
      $("#big-video")[0].play();
    }, 10);
  };

  // 点击全屏
  $(".glyphicon-fullscreen").on("click", function () {
    // Webkit内核
    $("#big-video")[0].webkitEnterFullscreen();

    // Firefox内核
    $("#big-video")[0].mozRequestFullScreen();

    return false;
  });

  // 鼠标点击关闭弹窗
  $(".glyphicon-remove-circle").click(function () {
    // 导航栏显示
    $(".dao_hang").removeClass("el-not-show");
    // 滚动条显示
    $("html").css("overflow", "visible");
    // 移除滚动条滚动
    removeUnScroll();
    // 大视频隐藏
    $(".video-mask").addClass("el-not-show");
    // 大视频停止播放
    $("#big-video")[0].pause();
    return false;
  });
});

function clickExampleVideoItem(data) {
  // console.log(data)
  // // 显示视频弹窗
  // $(".video-mask").removeClass("el-not-show");
  // const videoUrl = data.getAttribute('data-video')
  // // 添加大视频
  // $("#big-video").attr("src", videoUrl);
}

// 禁止滚动条滚动
function unScroll() {
  var top = $(document).scrollTop();
  $(document).on("scroll.unable", function (e) {
    $(document).scrollTop(top);
  });
}

// 移除滚动条滚动
function removeUnScroll() {
  $(document).unbind("scroll.unable");
}

// 以下是懒加载
// 判断元素是否出现在可视范围内
// function isVisible($node){
//   var winH = $(window).height(),
//       scrollTop = $(window).scrollTop(),
//       offSetTop = $(window).offSet().top;
//   if (offSetTop < winH + scrollTop) {
//       return true;
//   } else {
//       return false;
//   }
// }

// 添加上浏览器的事件监听函数,让浏览器每次滚动就检查元素是否出现在窗口可视范围内
// $(window).on("scroll", function(){
//   if (isVisible($node)){
//       console.log(true);
//   }
// })

// 让元素只在第一次被检查到时打印true,之后就不再打印了
// var hasShowed = false;
// $(window).on("sroll",function(){
//     if (hasShowed) {
//         return;
//     } else {
//         if (isVisible($node)) {
//             hasShowed = !hasShowed;
//             console.log(true);
//         }
//     }
// })
