$(function(){
  function buildHTML(message){
    if (message.image){
      let html = `<div class="Main-chat__message__contents">
                    <div class="Main-chat__message__contents__list">
                      <div class="Main-chat__message__contents__list__name">
                        ${message.user_name}
                      </div>
                      <div class="Main-chat__message__contents__list__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="Main-chat__message__contents__text">
                      <p class="Main-chat__message__contents__text">
                        ${message.content}
                      </p>
                      <img class="Message__image" src="${message.image}">
                    </div>
                  </div>`
      return html;
    }
      else {
      let html = `<div class="Main-chat__message__contents">
                    <div class="Main-chat__message__contents__list">
                      <div class="Main-chat__message__contents__list__name">
                        ${message.user_name}
                      </div>
                      <div class="Main-chat__message__contents__list__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="Main-chat__message__contents__text">
                      <p class="Main-chat__message__contents__text">
                        ${message.content}
                      </p>
                    </div>
                  </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    
    .done(function(data){
      let html = buildHTML(data)
        $('.Main-chat__message').append(html);
        $('form')[0].reset();
        $('.Main-chat__message').animate({ scrollTop: $('.Main-chat__message')[0].scrollHeight});
        $('.Send-button').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })
})