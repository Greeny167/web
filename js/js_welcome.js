
$(function(){
	$('#btnSubmit').on('click', function(e)
	{
		var username = $('#username').val(),
			pass = $('#password').val(),
			correct_user= 'admin',
			correct_pass= 'admin';
	 if (username === correct_user && pass === correct_pass)
		  {
	  		window.open('./test.html');
		  }
	  else
		  {
		  	e.preventDefault();
	 	 	swal("Something went wrong!");
		  }
	});
})



