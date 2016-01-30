var currentItem = 0;
var numberOfItems = 0;
var time = 0;


function show(item) {
  console.log(currentItem)
  $('ul.items li').hide();
  $('ul.items li.video video').each( function(i, video) {
    console.log('paused', video);
    video.pause();
    video.currentTime = 0;
  });
  time = $($('ul.items li')[currentItem]).data('time')
  console.log('time', time)
  $(item).show();
  $(item).find('video').get(0).play();


  currentItem++;
  if (currentItem < numberOfItems) {
    console.log(currentItem, 'of', numberOfItems, 'time:', time);

    setTimeout( function(){
      show($('ul.items li')[currentItem])
    }, time * 1000);
  } else {
    location.reload();
  }
}

$(document).ready( function() {
  numberOfItems = $('ul.items li').length;
  console.log('numberOfItems', numberOfItems);
  show($('ul.items li').first());
});
