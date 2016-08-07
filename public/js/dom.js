'use strict';

var navbarLinkElements = document.getElementsByTagName('a');

var delay = 2000;

var timeoutId = setTimeout(function(){
		for (var i = 0 ; i < navbarLinkElements.length ; i++){
			navbarLinkElements[i].style.fontFamily='fantasy';
		};
}, delay);