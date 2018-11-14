$(document).ready(function(){
    $(window).load(function() {
        fadeIn()
    });
    $( window ).scroll(function() {
        if ($(this).scrollTop()) {
            $(".menu").addClass("backgroun-scroll");
            $(".nav").addClass("nav2");  
            //$('#container').css('opacity', 1);          
		}else{
            $(".menu").removeClass("backgroun-scroll"); 
            $(".nav").removeClass("nav2");    
            //$('#container').css('opacity', 0);                                                 
		}          
    });
    
    if ($('#container').css('opacity') == 0) {
        $('#container').css('opacity', 1);
    }
    /*else {
        $('#container').css('opacity', 0);
    } */
});
