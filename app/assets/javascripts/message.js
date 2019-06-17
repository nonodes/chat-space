$(function(){


  function buildPost(message){
  
    var image = message.image ? `<img src="${message.image}">` : "";
 
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                    ${message.name}
                    </div>
                    <div class="upper-message__date">
                    ${message.date}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                    ${message.content}
                    <p class="lower-message__image">
　　　　　　　　　　　　${image}
                    </p>
                  </div>
                </div>`
    return html;
  };

  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $('#new_message')[0].reset();
  
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildPost(message);
      $('.messages').append(html);
      $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight}, 'fast');   
    })
    .always(function(){
			$(".form__submit").removeAttr("disabled");
    })
    .fail(function(){
      alert('エラー');
    })
  });

  function update(){ 
    var str = window.location.href
    if (str.match(/groups\/\d+\/messages/)){
      
    
      var message_id = $('.message:last').data('message-id');
      
      $.ajax({ 
        url: "api/messages",
        type: 'GET', 
        data:  { id: message_id },
        dataType: 'json',
      })
      .done(function(messages) {
          
          messages.forEach(function(message){
          
          var html = buildPost(message);
          $('.messages').append(html);
        
        })
        if (messages.lenght>0){
          $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight}, 'fast');
        }
      
      
      })
      .fail(function(){
        alert('エラー');
      })
      .always(function(){
        $(".form__submit").removeAttr("disabled");
      });
    }
  }

  setInterval(update, 3000);

})

