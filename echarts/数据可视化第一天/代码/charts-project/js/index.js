// 监控区域模块制作
(function() {
  $(".monitor .tabs").on("click", "a", function() {
    $(this)
      .addClass("active")
      .siblings("a")
      .removeClass("active");

    // console.log($(this).index());
    //   选取对应索引号的content
    $(".monitor .content")
      .eq($(this).index())
      .show()
      .siblings(".content")
      .hide();
  });
  // 1. 先克隆marquee里面所有的行（row）
  $(".marquee-view .marquee").each(function() {
    // console.log($(this));
    var rows = $(this)
      .children()
      .clone();
    $(this).append(rows);
  });
})();
