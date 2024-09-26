$(function () {    
// ---------------------------------------------------- 
$('.nav-toggle').click(function(e) { 
    $('body').toggleClass('nav-open');
    $('.nav').fadeToggle(200);
   return false; 
});

  
//------slide----------------------------------------- 
$('.slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,  
  speed: 1000,
  autoplaySpeed: 5000, 
  fade: true, 
  arrows: false, 
  dots: false, 
  cssEase: 'linear'
});

$('.home-menu-list').slick({
  speed: 400,   
  slidesToShow:5,  
  slidesToScroll: 1,
  autoplay: true, 
  arrows: false, 
  
  responsive: [
    {
      breakpoint:960,
      settings: {
		   autoplay: true, 
        dots: true, 
        autoplaySpeed: 5000,  
        slidesToShow:4, 
        slidesToScroll:3
      }
    },
    {
      breakpoint:520,
      settings: {
		    autoplay: true,   
        dots: true, 
        autoplaySpeed: 5000,  
        slidesToShow:3, 
        slidesToScroll:2
      }
    }
  ]
});	

$('.home-comment-list').slick({
  speed: 400,   
  slidesToShow:3,  
  slidesToScroll: 3,
  autoplay: true, 
  arrows: false, 
  dots: true, 
  responsive: [
    {
      breakpoint:960,
      settings: {
		   autoplay: true,  
        autoplaySpeed: 5000,  
        slidesToShow:2, 
        slidesToScroll:2
      }
    },
    {
      breakpoint:520,
      settings: {
		    autoplay: true,   
        autoplaySpeed: 5000,  
        slidesToShow:1, 
        slidesToScroll:1
      }
    }
  ]
});	
//------gallery-------------------------------------- 
$('.gallery').slick({
  centerMode: true,
  centerPadding: '60px',
  autoplay: true,  
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    } 
  ]
});
 
 //-------------------------------- 
});

 