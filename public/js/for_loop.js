'use strict';

// Variables
var printedNum;
var randNum = Math.floor(Math.random() * 10) + 1;
var rng;

console.log ("First Exercise\n ");

for (var i = 1; i <= 10; i++) {

	printedNum = i.toString();

	if (printedNum.length === 2) {
		printedNum = printedNum.substring(1,2);
	}

	console.log (printedNum.repeat(i));
}


//-------------------------------------------------------

console.log (" \nSecond Exercise\n ");

for (i = 1; i <= 10; i++) {
	console.log (randNum + ' x ' + i + ' = ' + (randNum * i));
}


//-------------------------------------------------------


console.log (" \nThird Exercise\n ");

for (i = 1; i <= 10; i++) {

	rng = Math.floor(Math.random() * 180) + 20;

	switch (rng % 2) {
		case 1 :
			console.log (rng + " is an odd number");
			break;
		default :
			console.log (rng + " is an even number");
			break;
	}
}
	