(function() {
	'use strict';

	var  keyArray = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

	$(document).keyup(function(e) {

		if (e.keyCode == keyArray[0]) {

			keyArray.shift();

			if (keyArray.length == 0){

				$('.zoomInDown').attr('class','animated flip');

				setTimeout(function() {
					window.location = 'http://www.80r.com/fullscreen.php?id=26942'
				},1500);

			};

		} else {

			keyArray = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

		};
	});
})();