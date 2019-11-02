$(document).ready(function() {
	$('ul.menu li').click(function(event) {
		
		var _type = $(this).data('type');
		
		console.log(_type);

		$('.content img').each(function() {
			if($(this).hasClass(_type)){
				$(this).removeClass('hidden');
				$(this).addClass('zoomIn animated');
			}else {
				$(this).addClass('hidden');
				$(this).removeClass('zoomIn animated');
			}
		});
	});
});