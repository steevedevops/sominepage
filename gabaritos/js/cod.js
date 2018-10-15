$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			$('header').addClass('header2');
			$('header').css("-transition:all 500ms ease");
		}else{
			$('header').removeClass('header2');
			$('header2').css("-transition:all 500ms ease");
		}
	});
});
