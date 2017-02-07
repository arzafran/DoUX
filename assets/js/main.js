$(function(){

  gest.start();

  $('.wrapper').slick({
    arrows: false,
    fade: true,
    speed: 1200
  });

  gest.options.subscribeWithCallback(function(gesture) {

    switch(gesture.direction) {
      case 'Up':
        $('svg').toggleClass('active');
      break;
      case 'Long up':
        $('svg').toggleClass('active');
      break;
      case 'Down':
        $('svg').toggleClass('active');
      break;
      case 'Long down':
        $('svg').toggleClass('active');
      break;
      case 'Left':
        $('.wrapper').slick('slickNext');
      break;
      case 'Right':
        $('.wrapper').slick('slickNext');
      break;
    }
  });
});

$('.wrapper').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('svg').removeClass('active');
});

$('.wrapper').on('afterChange', function(event, slick, currentSlide, nextSlide){
  $('svg').addClass('active');
});