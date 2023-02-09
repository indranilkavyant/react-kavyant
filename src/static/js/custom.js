// eslint-disable-next-line no-undef
jQuery(document).ready(function($){

  // Navbar
$( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
 $('.navbar-nav li .clickD').click(function(e) {
    e.preventDefault();
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.removeClass('toggled');
    } else {
        $this.parent().parent().find('.sub-menu').removeClass('show');
        $this.parent().parent().find('.toggled').removeClass('toggled');
        $this.next().toggleClass('show');
        $this.toggleClass('toggled');
    }
});

$(window).on('resize', function(){
    var win = $(this); //this = window
    if (win.width() < 1025) {
        $('html').click(function(){
            $('.navbar-nav li .clickD').removeClass('toggled');
            $('.toggled').removeClass('toggled');
            $('.sub-menu').removeClass('show');
        });
        $(document).click(function(){
            $('.navbar-nav li .clickD').removeClass('toggled');
            $('.toggled').removeClass('toggled');
            $('.sub-menu').removeClass('show');
        });
        $('.navbar-nav').click(function(e){
        e.stopPropagation();
        });
     }
});

/* ===== For menu animation === */
$(".navbar-toggler").click(function(){
    $(".navbar-toggler .stick").toggleClass("open");
});

// Navbar end

// sticky header
$(window).scroll(function() {
  if ($(this).scrollTop() > 100){  
      $('header').addClass("sticky");
    }
    else{
      $('header').removeClass("sticky");
    }
  });

// equal height 
function equal_height() {
    $('.tech_row .item_inner').matchHeight({ property: 'min-height' });
    $('.clients_row .item_inner').matchHeight({ property: 'min-height' });
    $('.business_solution_sec .item_inner').matchHeight({ property: 'min-height' });
    $('.contact_info_sec  .item_inner').matchHeight({ property: 'min-height' });
    $('.our_service_main_sec .nav-item .nav-link').matchHeight({ property: 'min-height' });
    $('.service_help .item').matchHeight({ property: 'min-height' });
  }
  equal_height();
  $(window).on('load', function(event) {
   equal_height();
  });
  $(window).resize(function(event) {
   equal_height();
  });




$('.quote_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: ".prev_arrow",
  nextArrow: ".next_arrow"
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  // ]
});

$('.tech_slider').slick({
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      },
    ]
  });

  $('.clients_slider').slick({
    arrows: false,
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
    ]
  });

  $('.nav-pills-slider').slick({
    arrows: true,
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });


    var item =  $(".nav-pills-slider li .nav-link");
    $(".nav-pills-slider li .nav-link").click(function(){
      item.removeClass('active');
      $(this).addClass('active');
    });



  //Switch dark/light
	
	$(".switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$(".switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$(".switch").addClass("switched");
		}
	});
		

	
		//Scroll back to top
		


	$(document).ready(function(){"use strict";
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		// eslint-disable-next-line no-undef
		jQuery(window).on('scroll', function() {
			// eslint-disable-next-line no-undef
			if (jQuery(this).scrollTop() > offset) {
				// eslint-disable-next-line no-undef
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				// eslint-disable-next-line no-undef
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		// eslint-disable-next-line no-undef
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			// eslint-disable-next-line no-undef
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	

		
		



})


