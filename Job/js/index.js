function selector() {
	var pre = 0;
	$('#show-box-menu li').click(function() {
		var offsetMenu = $("#show-box-menu").offset().left;
		var offsetLi = $(this).offset().left;
		var offsetSelector = $('#li-selector').offset().left;
		var total = offsetLi - ( offsetSelector - offsetMenu);
		console.log('pre ' + pre);
		var total = offsetSelector + offsetLi - 2 * offsetMenu;
		console.log('total '+total);
		console.log(total-pre)
		$('#li-selector').animate({left: total - pre});
		pre = total;
	})
};

selector();

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
	$('.slider').unslider();
});
