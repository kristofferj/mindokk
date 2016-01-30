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

  $('a.delete').on('click', function() {
    console.log($(this).prev());
    $(this).parent().remove();
  });

  $('a.restore').on('click', function() {
    $(this).prev().prop('checked', true);
  });

  $("form.files").on( "submit", function( event ) {
    event.preventDefault();
    console.log( $( this ) );
    $.ajax({
      type: 'post',
      url: '/save',
      data: $(this).serializeArray(),
      success: function() {
        console.log('success')
      },
      error: function() {
        console.error('Something went wrong');
      },
      dataType: 'JSON'
    });
  });

  $('a.powerButton').on('click', function(event) {


    $.ajax({
      url: $(this).attr('href'),
      data: '',
      success: function() {
        console.log('success')
      },
      dataType: 'JSON'
    });

    event.preventDefault();
    return false;
  })

});
