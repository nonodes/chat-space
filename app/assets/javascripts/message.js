$(function(){
	
	
	function buildPost(message){
		var html = `<div class="message">
									<div class="upper-message">
										<div class="upper-message__user-name">
										${message.name}
										</div>
										<div class="upper-message__date">
										${message.created_at}
										</div>
									</div>
									<div class="lower-message">
										<p class="lower-message__content">
										${message.text}
										</p>
									</div>
								</div>`


		return html;
	}

	$('#new_message').on('submit',function(e){
		e.preventDefault();
		var formData = new FormData(this);
		// console.log("hellow");
		var url = $(this).attr('action');
		$(`#new_message`)[0].reset();


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
			$(`.messages`).append(html);
			// $(`#new`).val('');
			// console.log("555")

		})
		.fail(function(message){
			alert('エラー');

		})
	})
});


