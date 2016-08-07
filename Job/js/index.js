function selector() {
	$('#show-box-menu li').click(function() {
		$("#li-selector").offset().left = '90px';
		var parentScroll = $("#show-box-menu").scrollLeft();
		console.log(parentScroll);
		var offsetMenu = $("#show-box-menu").offset().left;
		var offsetLi = $(this).offset().left;
		var offsetSelector = $('#li-selector').offset().left;
		var total = offsetLi - ( offsetSelector - offsetMenu);
		// console.log(offsetLi + ', ' + offsetSelector);
		console.log(offsetLi-offsetMenu);
		console.log(offsetSelector-offsetMenu);

		$('#li-selector').animate({left: offsetSelector + offsetLi - 2 * offsetMenu})
	})
};

selector();

(function() {
	$('.owl-carousel').owlCarousel({ //图片轮播
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
	})
})();

jQuery(document).ready(function($) {
	$('.slider').unslider();
});
