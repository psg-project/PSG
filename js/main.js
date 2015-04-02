/* ==========================================================================
  	Web Developers:
   		Wendy Membreño Carranza
   		Franco Salas Medina
========================================================================== */

$(function() {
	/* Scroll Top */
	$('.home').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	/* Smooth scroll */
	$('a.smooth').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	        $('html,body').animate({
	        	scrollTop: target.offset().top - parseInt(50)
	        }, 1000);
	        	return false;
	    	}
	    }
	});
});