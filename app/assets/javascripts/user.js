$(function(){
  
    var search_list = $(".chat-group-form__input");
    
  function appendProduct(user) {
    
    var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="ユーザー名">追加</div>
                </div>`    

  $('#user-search-result').append(html);
  
  }
  
  $(".chat-group-form__input").on("keyup", function() {
      var input = $(this).val();
      
      
      $.ajax({
        type: 'GET',
        url: '/users/search',
        data: { keyword: input },
        dataType: 'json'
      })

  
      .done(function(users){
        $(".chat-group-form__input").empty();
          if (users.length !== 0) {
            users.forEach(function(user){
              appendProduct(user);
          });
          }
          else {
            appendErrMsgToHTML("一致する名前はありません");
          }
          
      })
      .fail(function(){
          alert('エラー');
      })	
  })
})


