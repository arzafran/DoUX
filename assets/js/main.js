$(function(){

  gest.start();

  gest.options.subscribeWithCallback(function(gesture) {

    switch(gesture.direction) {
      case 'Up':
        console.log('up');
      break;
      case 'Long up':
        console.log('up');
      break;
      case 'Down':
        console.log('down');
      break;
      case 'Long down':
        console.log('down');
      break;
      case 'Left':
        console.log('left');
      break;
      case 'Right':
        console.log('right');
      break;
    }
  });
});