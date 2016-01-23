var currentItem = 0;
var numberOfItems = 0;

function show(item) {
  $('ul.items li').hide();
  $(item).show();
  nextItem(item);
}
function nextItem(item) {

  var item = $('ul.items li')[currentItem];
  var time = $(item).data('time');
  console.log(time, item);
  if (currentItem < numberOfItems) {
    currentItem++;
    //setTimeout(function(){ show($('ul.items li')[currentItem])}, time * 1000);

  } else {
    location.reload();
  }

}

$(document).ready( function() {
  numerOfItems = $('ul.items li').length;
  $('ul.items li').first().show();
});
