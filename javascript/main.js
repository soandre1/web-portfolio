$(document).ready(function() {

	$('.hamburger-menu').click(function() {
		$(this).toggleClass("change");
		$('.hamburger-menu-content').toggleClass('show');
	});

	$('#home-icon').hover(
		// When mouse is hovering over
		function() {
			$('#home-nav-text').removeClass('hidden-text');
		},
		// When mouse leaves
		function() {
			$('#home-nav-text').addClass('hidden-text');
	});

	$('#portfolio-icon').hover(
		// When mouse is hovering over
		function() {
			$('#portfolio-nav-text').removeClass('hidden-text');
		},
		// When mouse leaves
		function() {
			$('#portfolio-nav-text').addClass('hidden-text');
	});
	
	$('#resume-icon').hover(
		// When mouse is hovering over
		function() {
			$('#resume-nav-text').removeClass('hidden-text');
		},
		// When mouse leaves
		function() {
			$('#resume-nav-text').addClass('hidden-text');
	});
});

