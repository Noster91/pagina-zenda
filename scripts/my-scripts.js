// Menu Desplegable -->

$(document).ready(function($) {
	$(".hamburger").click(function() {

		$(".menu-desplegable").css("visibility", "visible");
		$(".menu-desplegable").slideToggle(500);
	});

});


// Menu transparente Scroll -->
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 500){
            $("#menu").css({"background-color":"white"})
						$(".titnav").css({"color":"rgb(0, 0, 0)"});
        }
        else{
            $("#menu").css({"background-color":"transparent"})
						$(".titnav").css({"color":"#f0f0f0"});
        }

    })
})

// Carrousel Main-->


$(document).ready(function() {

	$("#owl-demo").owlCarousel({

		singleItem : true,
		navigation : false, // Show next and prev buttons
		slideSpeed : 1,
		paginationSpeed : 400,
		autoPlay: 5000,


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
		$(window).resize(function(){
			w = $(window).width();
		});

		if ( w < 975) {
			$(".close").click(function() {
				$(".menu-desplegable").slideToggle(500);
			});
		}
	});


// Ajax para que el send-mail.php se ejecute en la web

$(function () {

  $('form').on('submit', function (e) {

    e.preventDefault();

    $.ajax({
	 type: 'post',
	 url: 'send-mail.php',
	 data: $('form').serialize(),
	 success: function () {
	   alert('El formulario fue enviado');
	 }
    });

  });

});

// Time Setter for Click to call

/*function showPhone(){
	var startTime = "08:00"
	var endTime = "20:00"
	var d = new Date();
	console.log(d);
	var time = d.getHours() + ":" + d.getMinutes();
	console.log(time);
	if (time > startTime && time < endTime) {
		console.log("Mostrar Phone");
	}
	else {
		console.log("No mostrar Phone");
	}

}
showPhone();*/

$(document).ready(function(){
	var startTime = "08:00";
	var endTime = "20:32";
	var d = new Date();
	var time = d.getHours() + ":" + d.getMinutes();
	console.log(time);
	if (time < startTime || time > endTime) {
		$('.call-only').css("visibility", "hidden");
	};

});
