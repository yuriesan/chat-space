$(function(){
  function buildHTML(message){

　message.image == null ? message.image = "" : true ;

    var html = `<div class="message">
                  <div class="message__upper-info">
                    <p class="message__upper-info__talker">
                      ${message.user_name}
                    </p>
                    <p class="message__upper-info__date">
                      ${message.date}
                    </p>
                  </div>
                  <div class="message__text">
                    <p class="lower-message__content">
                      ${message.content}
                    <p class="lower-message__image">
                      <img src =" ${message.image}"> 

                    </p>
                  </div>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var message = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: message,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#new_message')[0].reset();
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight });
      $('.submit-btn').attr('disabled', false);
    })
    .fail(function(){
      alert('メッセージを送信できませんでした');
      $('.submit-btn').attr('disabled', false);
    })
  })
})

