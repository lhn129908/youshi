// 秒转换为分钟00:00格式
function timeToMinute(times) {
  let t;
  if (times > -1) {
    let min = Math.floor(times / 60) % 60;
    let sec = times % 60;
    if (min < 10) {
      t = "0" + min + ":";
    } else {
      t = min + ":";
    }

    if (sec < 10) {
      t += "0";
    }
    // toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。
    t += sec.toFixed(2);
  }
  // substring() 方法用于提取字符串中介于两个指定下标之间的字符。
  t = t.substring(0, t.length - 3);
  return t;
}
