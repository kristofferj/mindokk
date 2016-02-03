var currentItem = 0;
var numberOfItems = 0;
var time = 0;

var hasMessages = false;
var loopPlaying = true;

var messages = [];
var currentMessage = 0;
var lastMessageId = 2;

var debug = false;

function animatMessages() {
  console.log('animating message', currentMessage)
  var width = window.screen.availWidth
  $('.message').hide();
  var x = ($(".message-container .message:eq("+currentMessage+")").width() * -1);
  var duration = $(".message-container .message:eq("+currentMessage+")").width() * 4;
  if (debug) {
    duration = 5000
  }

  $(".message-container .message:eq("+currentMessage+")")
    .show()
    .velocity({
      properties: {
        translateX: [x, width]
      },
      options: {
        duration: duration,
        easing: 'linear',
        complete: function() {
          console.log('complete');
          currentMessage++;
          if (messages.length > currentMessage) {
            console.log('continue messages');
            animatMessages();
          } else {
            console.log('completed messages');
            hasMessages = false
            currentMessage = 0
            $(".message-container .message").remove();
            show($('ul.items li')[currentItem])
          }
        }
      }
    });
}

var checkForNewMessages = function() {
  console.log('checkForNewMessages');
  $.get('/getLastMessageId', function(response) {
    if (response.lastId) {
      lastMessageId = response.lastId;
      console.log('Last ID', lastMessageId);
      $.get('http://www.mindokk.no/api/v1/posts?last=' + response.lastId, function(newMessages) {
        if (newMessages.length > 0) {
          console.log('found new messages!', newMessages.length);
          hasMessages = true;
        } else {
          console.log('No new messages!');
          hasMessages = false;
        }
        return hasMessages
      });
    }
  });

}


var playMessages = function() {

  console.log("Play messages");
  if (!lastMessageId) {
    console.log('no last message ID');
    return false;
  }
  $.get('http://www.mindokk.no/api/v1/posts?last=' + lastMessageId, function(newMessages) {
    if (newMessages.length > 0) {
      messages = newMessages.reverse();
      console.log('Saving last ID: ', messages[messages.length-1].id);
      $.post('/saveLastId', {'lastId': messages[messages.length-1].id});
      // showMessage(messages[0]);
      $(messages).each( function(i, item) {
        console.log('should show', item);
        $('.message-container').append(
          $('<div/>', {
            text: item.content,
            class: 'message'
          })
        );
      });
      $('.message').hide();
      animatMessages();
    } else {
      console.log('no new messages. lets loop');
      hasMessages = false;
      show($('ul.items li')[currentItem]);
    }
  });
}


function show(item) {
  console.log(currentItem)
  $('ul.items li').hide();
  $('ul.items li.video video').each( function(i, video) {
    // console.log('paused', video);
    video.pause();
    video.currentTime = 0;
  });

  if (hasMessages) {
    $('ul.items li').hide();
    playMessages();
    console.log('hasMessages in show')
  } else {
    console.log('has no Messages in show')
    checkForNewMessages();
    time = $($('ul.items li')[currentItem]).data('time')

    // debug
    if (debug) {
      time = 5;
    }

    console.log('time', time)


    if (currentItem < numberOfItems) {
      $(item).show();
      $(item).find('video').get(0).play();
      console.log(currentItem, 'of', numberOfItems - 1, 'time:', time);
      setTimeout( function(){
        show($('ul.items li')[currentItem])
      }, time * 1000);
    } else {
      console.log('Reload')
      location.reload();
    }
    currentItem++;
  }
}

$(document).ready( function() {
  numberOfItems = $('ul.items li').length;
  console.log('numberOfItems', numberOfItems);
  show($('ul.items li').first());

});
