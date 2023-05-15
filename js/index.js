$(document).ready(function(){

  $(".icon1").click(function(){
    $(".menu").stop(true,true).fadeIn()
  });

  $(".menu>span").click(function(){
    $(".menu").fadeOut();
    return false;
  });

  // __________________________________________________

  $(".tabContents li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt")
    $(".tabContents .all").removeClass("active");
    $(`#${result}`).addClass("active");

    $('.tabContents .all').slick('setPosition'); // 탭메뉴 충돌할때

  });

   // __________________________________________________


  let bnum=0;
  //다음보기
  $(".btn .right").click(function(){
    if(bnum<3){
      $(".tabContents ul").stop(true,true).animate({marginLeft:"-=290px"},500);
      bnum++;
    }
  });
  //이전보기
  $(".btn .left").click(function(){
    if(bnum>0){
      $(".tabContents ul").stop(true,true).animate({marginLeft:"+=290px"},500);
      bnum--;
    }
  });

  // __________________________________________________

  $(".skintype .tab li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt")
    $(".skintype .tabContent div").removeClass("active");
    $(`#${result}`).addClass("active");

  });

  // __________________________________________________


  $('.product ul li h4 span').on('click', function() {
    $(this).toggleClass('changed');
  });

 // __________________________________________________


  $(".product ul li img").click(function(){
    $(this).toggleClass("active",300);
  });


  // __________________________________________________


  $(".best .content ul li:nth-child(1) img").click(function(){
    $(".img1").fadeIn();
  });
  $(".best .content ul li:nth-child(2) img").click(function(){
    $(".img2").fadeIn();
  });
  $(".best .content ul li:nth-child(3) img").click(function(){
    $(".img3").fadeIn();
  });

  $(".modal").click(function(){
    $(".modal").fadeOut();
  });

  // __________________________________________________


  $(".bigimgs ul li img").click(function(){
    $(".bigimgs ul li p").fadeIn();
  });
  
  $(".bigimgs ul li p").click(function(){
    $(".bigimgs ul li p").fadeOut();
  });





});