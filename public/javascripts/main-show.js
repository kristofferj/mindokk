$(document).ready( function() {

  $('ul.items li').each( function(i, item) {
    console.log('time', $(item).data('time'));
    if (i == 0) {
      console.log('Showing first');
      $(item).show();
    }
  })

});
