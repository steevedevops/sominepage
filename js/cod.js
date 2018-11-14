$(document).ready(function(){
    $( window ).scroll(function() {
        if ($(this).scrollTop()) {
            $(".menu").addClass("backgroun-scroll");
            $(".nav").addClass("nav2");
		}else{
            $(".menu").removeClass("backgroun-scroll"); 
            $(".nav").removeClass("nav2");                                          
		}          
    });
});


