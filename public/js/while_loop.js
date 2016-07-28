'use strict';

//Variables
var allCones = Math.floor(Math.random() * 50) + 50;
var cones = Math.floor(Math.random() * 5) + 1;
var increment = 2;

// Ice Cream Seller
console.log ("I have " + allCones + " to sell!");
do {
	if (allCones >= cones) {
		console.log (cones + " cones sold...");
		allCones -= cones;
		console.log ("\tI have " + allCones + " left");
	} else {
		console.log ("Cannot sell you " + cones + " cones I only have " + allCones)
	}
	cones = Math.floor(Math.random() * 5) + 1;
} while (allCones >= 1);

console.log ("Yay! I sold them all!")


// while loop
while (increment <= 65536) {
	console.log (increment);
	increment *= 2;
}