(function($){
	'use strict';

// Main Menu
$('.food-menu-icon i.fa-bars').on('click', function(){
	$('.food-main-menu').slideDown();
	$('.food-menu-icon i.fa-times').show();
	$(this).hide();
});

$('.food-menu-icon i.fa-times').on('click', function(){
	$('.food-main-menu').slideUp();
	$('.food-menu-icon i.fa-bars').show();
	$(this).hide();
})

$(window).resize(function(){
	var screenSize = $(window).width();

	if (screenSize > 991) {
		$('.food-main-menu').removeAttr('style');
	}

});

//owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 2500,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
         575:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// wow js
	
	var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animate__animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

// venobox

    new VenoBox();

    











}) (jQuery);