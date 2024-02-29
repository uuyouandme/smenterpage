$(document).ready(function(){

  let goldidx=0;
  let gidx=0;
  
  function galleryImg(gidx){
    if(goldidx!=gidx){
      $(".largeImg li").eq(goldidx).stop().fadeOut(300); //기존 이미지 사라짐
      $(".largeImg li").eq(gidx).stop().fadeIn(300); //선택된 이미지 나타남
      $(".imgText li").eq(goldidx).stop().fadeOut(300); //기존 텍스트 사라짐
      $(".imgText li").eq(gidx).stop().fadeIn(300); //선택된 텍스트 나타남
    };
    goldidx=gidx;
  };
  

    //이전버튼
    $(".left_btn").click(function(){
      gidx--;
      if(gidx<0){
        gidx=3;
      }
      galleryImg(gidx);
    });
  
    //다음버튼
    $(".right_btn").click(function(){
      gidx++;
      if(gidx>3){
        gidx=0;
      }
      galleryImg(gidx);
    });
  
  });

  // musican
  $(document).ready(function(){
	
    //각 목록을 클릭했을 때........
    $(".menu").click(function(){
      $(this).next().show();
      $("html").css({"overflow-y":"hidden"});
      //return false; a기능을 차단으로 넣지만 지금은 연결된 상태가 아니므로 넣지 않아도 됨
    });
  
    //close버튼과 검정배경영역을 클릭할 때........
    $(".close, .pop").click(function(){
      $(".pop").hide();
      $("html").css({"overflow-y":"scroll"});
    });
  
  });

  // actor
  $(document).ready(function(){

    let $img = $(".changeimg ul li");
    let $btn = $(".btn ul li");
    let $lbtn = $(".side_btn .lbtn");
    let $rbtn = $(".side_btn .rbtn");
    let oldidx = 0;
    let idx = 0; 
    let img_n = $img.length; 
  
    function changeImg(idx){ 
      if(oldidx != idx){ 
        $btn.eq(oldidx).removeClass("active");
        $btn.eq(idx).addClass("active");
        $img.eq(oldidx).stop().fadeOut("300");
        $img.eq(idx).stop().fadeIn("300"); 
      }
      oldidx = idx;  
    };
  
    //자동함수 생성
    function changeAuto(){
      idx++;
      if(idx > img_n-1){ 
        idx=0;
      }
      changeImg(idx);
    };
  
    timer = setInterval(changeAuto,4000);
  
    //하단버튼
    $btn.click(function(){
      clearInterval(timer);
      idx=$(this).index();
      changeImg(idx);
      timer = setInterval(changeAuto,4000);
    });
  
    //좌우버튼
    $lbtn.click(function(){
      clearInterval(timer);
      idx--;
      if(idx < 0){ 
        idx=img_n-1;
      }
      changeImg(idx);
      timer = setInterval(changeAuto,4000);
    });
  
    $rbtn.click(function(){
      clearInterval(timer);
      idx++;
      if(idx > img_n-1){ 
        idx=0;
      }
      changeImg(idx);
      timer = setInterval(changeAuto,4000);
    });
  
    document.querySelector('.lbtn').addEventListener('click', function(e) {
      e.preventDefault();
    });
  
    document.querySelector('.rbtn').addEventListener('click', function(e) {
      e.preventDefault();
    });
  });






















