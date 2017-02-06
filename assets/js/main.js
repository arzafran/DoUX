$(function(){

  gest.start();

  $('.wrapper').slick({
    fade: true,
    arrows: false
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
        $('svg').toggleClass('active');
        $('.wrapper').slick('slickNext');
      break;
      case 'Right':
        $('.wrapper').slick('slickPrev');
        $('svg').toggleClass('active');
      break;
    }
  });
});