(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({ //图片轮播
		items: 1,
	    loop:true,
	    autoWidth:true,
	    margin: 60,
	    responsive:{	
	    480:{
	      items:2
	    },

	    678:{
	      items:3
	    },

	    960:{
	      items:5
	    }
	  }
	});
	$('#header').on('mouseover',function(){
		  owl.trigger('play.owl',1000)
	});
	// play();
})();

jQuery(document).ready(function($) {
	$('.slider').unslider({
		speed: 1000,
		delay: 3000,
		autoplay: true
	});
	var slides = $('.slider'),
	    i = 0;
	slides
	.on('swipeleft', function(e) {
	  slides.eq(i + 1).addClass('active');
	})
	.on('swiperight', function(e) {
	  slides.eq(i - 1).addClass('active');
	});
});

function showBox () {
	$('#show-box-left').click(function () {
			$('.show-news').hide();
			$('.show-employment').show();
			$('.left-bg').css('border-right-color','#C43436');
			$('.right-bg').css('border-left-color','#D98F90')
		});
	$('#show-box-right').click(function () {
			$('.show-employment').hide();
			$('.show-news').show();
			$('.right-bg').css('border-left-color','#C43436');
			$('.left-bg').css('border-right-color','#D98F90')
		});
}

showBox();