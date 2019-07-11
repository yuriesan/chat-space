$(function() {
  function appendUser(html){
    $('#user-search-result').append(html);
  }
  
  function buildHTML(user){

    var html =`<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`
    return html;
  }

  function appendErrHTML(message){
    var html =`<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${message}</p>
               </div>`

      return html;
  }

  function appendMembers(html){
    $('#member_search_result').append(html);
  }

  function buildMemberHTML(name,id){

    var html =`<div class="chat-group-user clearfix js-chat-member" id="chat-group-user-22">
                <input name="group[user_ids][]" type="hidden" value="${id}">
                <p class="chat-group-user__name">${name}</p>
                <a class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn">削除</a>
              </div>`
      return html;
  }

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    $('#user-search-result').empty();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json',
    })

    .done(function(names) {
      if (names.length !== 0) {
        names.forEach(function(name){

        var html = buildHTML(name);
        appendUser(html);
        });
      }
      else {
        var html = appendErrHTML("一致する名前はありません");
        appendUser(html);
      }
    })
    .fail(function(){
      alert('検索できませんでした');
    });
  });

    $(function () {
      $(document).on('click', '.user-search-add', function (){
        var id = $(this).attr("data-user-id");
        var name = $(this).attr("data-user-name");
        $(this).parent().remove();
        var html = buildMemberHTML(name,id);
        appendMembers(html);
      });
      $(document).on('click', '.user-search-remove', function (){
        $(this).parent().remove();
        });
      });
});
