console.log('Init!');
$(document).ready( function() {
  console.log('Ready!');
  $('.files').sortable({
    change: function(event, ui) {
      console.log('Changed!');
    },
    start: function(event, ui) {
      ui.item.startPos = ui.item.index();
    },
    stop: function(event, ui) {
      var newPosition = ui.item.index()
      $('.files li').each( function(i, item) {
        $('input[name="position"]', item).val(i);
      })
    }
  });
})
