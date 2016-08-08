var menu = (function() {
	function getMenu() {
		$('.main-menu-item').click(function() {
			$('.current-menu-item').find('.sub-menu').hide();
			$('.current-menu-item').removeClass('current-menu-item');
			$(this).addClass('current-menu-item');
			$(this).find('.sub-menu').show();
		});
	}
	function getItem() {
		$('.sub-menu-item').click(function() {
			$('.active-item').removeClass('active-item');
			$(this).addClass('active-item');
		})
	}
	return {
		getMenu: getMenu,
		getItem: getItem
	} 
})();

menu.getMenu();
menu.getItem();

