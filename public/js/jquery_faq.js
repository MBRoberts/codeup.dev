'use strict';

(function(){

	$('dt').click(function() {
		$(this).next().slideToggle(500);
	});

	$('ul').each(function(){
		$(this).children().first().css("font-weight", "bold");
	});

	$('h3').click(function(e){
		$(this).next().slideToggle(500);
	});


})()