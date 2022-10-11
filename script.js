/* Please ❤ this if you like it! */

(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});  
	
})(jQuery);
  
function myFunction() {
	var btn = document.getElementById("myButton");
	if (btn.value == "Open Curtain") {
		btn.value = "Close Curtain"; btn.innerHTML = "⚡​ Guardar​​";
		btn.addEventListener('click', () => myButton.style.backgroundColor="#FF8700")
	} else {
		btn.value = "Open Curtain"; btn.innerHTML = "Guardado 🧡​​";
		btn.addEventListener('click', () => myButton.style.backgroundColor="#001B69")
	}
}

function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}
$(document).ready(function() {
  $("#navMenu").click(function() {
   //$(".nav").toggleClass("small");
    if ($(".navn").hasClass("small")) {
      $(".navn").removeClass("small");
    } else {
      $(".navn").addClass("small");
    }
  });
});
