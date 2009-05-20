
$().ready(function(){
  $(".rounded_bottom").each(function  () {
    $(this).corners("bottom");
  });
  $(".rounded_top").each(function  () {
    $(this).corners("top");
  });
  $(".rounded").each(function  () {
    $(this).corners();
  });
  $('.app_list li').hover(function  () {
    $(this).css({"background-color": "#FAFAFA"});
  },  function  () {
    $(this).css({"background-color": "#F7F7F7"});
  });
});