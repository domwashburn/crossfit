var navTrigger = function(){
	$(".nav-main__trigger, .nav-main").on('click', function(){
		if ($(".nav-main").hasClass("is-hidden")){
			$(".nav-main").removeClass("is-hidden").addClass("is-visible");
			$(".nav-main__trigger-icon").removeClass("icon-menu").addClass("icon-cancel-1");
			$(".main.wrapper").addClass("is-locked");
		} else if ($(".nav-main").hasClass("is-visible")) {
			$(".nav-main").removeClass("is-visible").addClass("is-hidden");
			$(".nav-main__trigger-icon").removeClass("icon-cancel-1").addClass("icon-menu");
			$(".main.wrapper").removeClass("is-locked");
		}
	})
	navTriggerVisibility();
};
var navTriggerVisibility = function() {
	if ($(window).width() > 600) {
		$(".nav-main__trigger").removeClass("is-visible").addClass("is-hidden");
		if ( $(".nav-main").hasClass("is-hidden")) {
			$(".nav-main").removeClass("is-hidden");
		} else if ($(".nav-main").hasClass("is-visible")) {
			$(".nav-main").removeClass("is-visible");
		}
	} else if ($(window).width() < 600) {
		$(".nav-main__trigger").removeClass("is-hidden").addClass("is-visible");
		if ( $(".nav-main").hasClass("is-visible")) {
			$(".nav-main").removeClass("is-visible").addClass("is-hidden");
		} else {
			$(".nav-main").addClass("is-hidden");
		}
	};
};
$(document).ready(function(){
	navTrigger();
});
$(window).resize(function(){
	navTrigger();
});