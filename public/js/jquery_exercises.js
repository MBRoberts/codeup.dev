'use strict';

$(document).ready(function() {
	
	$('h1').click(function() {
			$(this).css('background-color', 'yellow');
	});	

	$('p').dblclick(function() {
		$('p').css('font-size', '18px');
	});
	
	$('li').hover(
		function() {
			$(this).css('color', 'red');
		},
		function() {
			$(this).css('text-decoration', 'underline');
		}
	);
});
		