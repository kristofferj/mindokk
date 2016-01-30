var currentItem = 0;
var numberOfItems = 0;
var time = 0;


function show(item) {
  console.log(currentItem)
  $('ul.items li').hide();
  time = $($('ul.items li')[currentItem]).data('time')
  console.log('time', time)
  $(item).show();
  if (currentItem < numberOfItems) {
    currentItem++;
    setTimeout(function(){ show($('ul.items li')[currentItem])}, time * 1000);
  } else {
    location.reload();
  }
}

$(document).ready( function() {
  numberOfItems = $('ul.items li').length;
  console.log('numberOfItems', numberOfItems);
  show($('ul.items li').first());
});
