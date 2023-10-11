// h5导航栏切换展示，隐藏
$(".header .head_content .h5_menu").click(function () {
  $(this).toggleClass("active");
  $(".header .nav_box").toggleClass("active");
  $(".search_content").removeClass("search_content_active");
});

// 搜索弹窗切换展示，隐藏
$(".header .nav_menu .search_box").click(function () {
  $(".search_content").toggleClass("search_content_active");
});

// 搜索弹窗关闭
$(".search_content .search_close").click(function () {
  $(".search_content").removeClass("search_content_active");
});

// 混动导航栏背景
window.addEventListener("scroll", function (e) {
  var scrollTop =
    document.documentElement.scrollTop ||
    window.pageYOffset ||
    document.body.scrollTop;
  if (scrollTop >= 88) {
    $(".header").addClass("scroll_header");
  } else {
    $(".header").removeClass("scroll_header");
  }
});

layui.use(["form", "laydate", "util"], function () {
  var form = layui.form;
  var layer = layui.layer;
  var laypage = layui.laypage;
  var laydate = layui.laydate;
  var util = layui.util;

  form.on("input-affix(search)", function (data) {
    var elem = data.elem; // 输入框
    var value = elem.value; // 输入框的值
    if (!value) {
      layer.msg("请输入搜索内容");
      return elem.focus();
    }
  });

  // 不显示上一页、下一页
  laypage.render({
    elem: "demo-laypage-normal-1",
    count: 100,
  });
  // 监听提交
  form.on("submit(contact_us_submit)", function (data) {
    layer.msg(JSON.stringify(data.field));
    return false;
  });
});

// 初始化动画
$(function () {
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 10,
    mobile: true,
    live: true,
  });
  wow.init();
  // 图片移入
  $(".adipoli_img1").adipoli({
    imageOpacity: "0.3",
    startEffect: "overlay",
    hoverEffect: "boxRainGrowReverse",
  });
  $(".adipoli_img2").adipoli({
    imageOpacity: "0.7",
    startEffect: "transparent",
    hoverEffect: "boxRainGrowReverse",
  });
  $(".adipoli_img3").adipoli({
    startEffect: "transparent",
    hoverEffect: "boxRandom",
  });
});
