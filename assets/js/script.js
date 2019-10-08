$(document).ready(function(){

   $('.news-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    speed: 1000,
    focusOnSelect: true,
    rtl: true,
    dots: true,
    arrows: false,
    infinite: true,
  }); 
   $('.images-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    speed: 1000,
    focusOnSelect: false,
    rtl: true,
    dots: true,
    arrows: true,
    infinite: false,
    fade: true,
    draggable: false,
  }); 
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.images-slider',
    dots: false,
    arrows: false,
    rtl: true,
    focusOnSelect: true
  });
   $('.sponsers-slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    adaptiveHeight: true,
    speed: 1000,
    focusOnSelect: true,
    rtl: true,
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: true,
    centerPadding: '10px',
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
  }); 
});