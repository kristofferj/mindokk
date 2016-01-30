$(document).ready( function() {
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

  $("form.files").on("submit", function( event ) {
    var data = $("form.files").serializeArray();
    $('form.files button.submit').addClass('loading')

    var request = $.ajax({
      type: "POST",
      url: "/save",
      data: data,
      dataType: "JSON"
    });

    request.done(function( msg ) {
      $('form.files button.submit').removeClass('loading')
      $('form.files button.submit').addClass('success').delay(3000).queue(function(next){
        $(this).removeClass('success');
        next();
      });
    });
    request.fail(function( jqXHR, textStatus ) {
      alert( "Request failed: " + textStatus );
    });

    event.preventDefault();
    return false;
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
