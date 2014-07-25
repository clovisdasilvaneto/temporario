
window.addEventListener("scroll",function(){
  if(window.scrollY >= 144){
    document.querySelector("body > header").style.height = "0px";
    document.querySelector("header > div").style.marginTop = "-32px";
    document.querySelector("header > div img").style.width = "62px";
    document.querySelector("header > div img").style.marginTop = "5px";
    document.querySelector("header").style.boxShadow = "rgb(255, 255, 255) 0px 2px 15px";
  }else {

    document.querySelector("body > header").style.height = "90px";
    document.querySelector("header > div").style.marginTop = "0";
    document.querySelector("header > div img").style.width = "100%";
    document.querySelector("header").style.boxShadow = "none";
    document.querySelector("header > div img").style.marginTop = "0";
  }
});

$(".menu a").click(function(){
  switch($(this).data("href")){
    case "clientes":
      $("body,html").stop().animate({
        scrollTop: 688
      });
      break

    default:
      $("body,html").stop().animate({
        scrollTop: 1655
      });
      break
  }
  return false;
})


  $('.bxslider').bxSlider({
          slideWidth: 1200,
          minSlides: 4,
          moveSlides: 1,
          slideMargin: 20,
          autoDelay: 5000,
          speed:2000,
          auto: true,
          easing: "easeOutQuad",
          pager:false
        });