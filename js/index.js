$(document).ready(function(){

  /* main_img___________________ */
  let $img = $(".mimg");
  let $btn = $(".btn ul li");
  let $rbtn = $(".rbtn");  // 누락된 변수 추가
  let oldidx = 0;
  let idx = 0;
  let img_n = $img.length;
  let timer;  // 타이머 변수 추가

  function changeImg(idx){
    if(oldidx != idx){
      $btn.eq(oldidx).removeClass("active");
      $btn.eq(idx).addClass("active");
      $img.eq(oldidx).stop().fadeOut("300");
      $img.eq(idx).stop().fadeIn("300");
    }
    oldidx = idx;
  };

  function changeAuto(){
    idx++;
    if(idx > img_n-1){
      idx=0;
    }
    changeImg(idx);
  };

  timer = setInterval(changeAuto, 5000);

  $btn.click(function(){
    clearInterval(timer);
    idx = $(this).index();
    changeImg(idx);
    timer = setInterval(changeAuto, 5000);
  });

  $rbtn.click(function(){
    clearInterval(timer);
    idx++;
    if(idx > img_n-1){
      idx=0;
    }
    changeImg(idx);
    timer = setInterval(changeAuto, 5000);
  });

  /* Header_gnb___________________ */
  $(".sub").hide();

  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown();
  },function(){
    $(this).find(".sub").stop().slideUp();
  });

  /* section1_tab___________________ */
  $(".tab li").click(function(){
    let num = $(this).index();
    let move = 70*num; //세로폭 160px씩 증가됨

    $(".tab-header .tab-highlight").animate({top:move});
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    let result = $(this).attr("data-alt");
    $(".tab-contents div").removeClass("active");
    $("#" + result).addClass("active");

  });


});





















