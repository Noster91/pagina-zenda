// Menu Desplegable -->

$(document).ready(function($) {
	$(".hamburger").click(function() {

		$(".menu-desplegable").css("visibility", "visible");
		$(".menu-desplegable").slideToggle(500);
	});

});

// Carrousel Main-->


$(document).ready(function() {

	$("#owl-demo").owlCarousel({

		singleItem : true,
		navigation : false, // Show next and prev buttons
		slideSpeed : 1,
		paginationSpeed : 400,
		autoPlay: 3000,


		 // "singleItem:true" is a shortcut for:
		 // items : 1,
		 // itemsDesktop : false,
		 // itemsDesktopSmall : false,
		 // itemsTablet: false,
		 // itemsMobile : false

	});

});


// Carrousel Clientes -->

$(document).ready(function() {

	$("#owl-demo2").owlCarousel({

		 autoPlay: 3000, //Set AutoPlay to 3 seconds

		 items : 4,
		 itemsDesktop : [1199,3],
		 itemsDesktopSmall : [979,3]

	});

});

// Smooth Transition -->

$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				  $('html, body').animate({
				    scrollTop: target.offset().top
				  }, 1000);
				  return false;
			}
		}
	});
});


// On CLick close Menu (Only in Small size)


	$(document).ready(function() {
		var w = $(window).width();
		console.log(w);
		$(window).resize(function(){
			w = $(window).width();
			console.log(w);
		});

		if ( w < 700) {
			$(".close").click(function() {
				$(".menu-desplegable").slideToggle(500);
				console.log(w);
			});
		}
	});
