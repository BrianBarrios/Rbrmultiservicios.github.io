
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
	$(".navbar-brand, .navbar-brand-logo").on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 700);
      });
});