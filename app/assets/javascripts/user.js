
$(function () {

  var search_list = $(".chat-group-form__input");

  function appendProduct(user) {

    var html = `<div class="chat-group-user clearfix">
              <p class="chat-group-user__name">${user.name}</p>
              <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
              </div>`

    $('#user-search-result').append(html);

  }

  function appendpost(name,id) {

    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value='${id}'>
                  <p class='chat-group-user__name'>${name}</p>
                  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                </div>`
      return html;

  }

  $(".chat-group-form__input").on("keyup", function (event) {
    // バックスペースの時はajaxを走らせない
    if (event.key == "Backspace") {
      $("#user-search-result").empty(); 
      return false;
    }
    
    var input = $(this).val();


    $.ajax({
      type: 'GET',
      url: '/users/search',
      data: { keyword: input },
      dataType: 'json'
    })


    .done(function (users) {
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function (user) {
          appendProduct(user);
        });
      }
      else {
        appendErrMsgToHTML("一致する名前はありません");
      }

    })
    .fail(function () {
      alert('エラー');
    })
  })
  
  $(document).on("click",".user-search-add" ,function () {
    //追加ボタンをクリックされたら、チャットメンバーのviewに追加したいuserが追加される。
    // 追加ボタンを押された所の名前が必要。
    var name = $(this).data('user-name');
    var id = $(this).data('user-id');
    var html = appendpost(name,id);
    $('#chat-group-users').append(html);
    //検索したてんらさんを削除したい。 
    
    $('#user-search-result').empty();
  })
  $(document).on("click",".user-search-remove" ,function () {
    // 削除ボタンを押されたら、グループに追加されたuserを削除する。
    // 名前は一致する条件のuserを削除する。
    $(this).parent().remove();
    console.log(this);
    
  })
})
