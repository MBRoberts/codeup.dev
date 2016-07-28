'use strict';

// <------------------Variables
var allCones = Math.floor(Math.random() * 50) + 50;
var totalConesSold = 0;
var conePrice = 2;
var increment = 2;
var cones;
var moneyMade;

// <------------------Ice Cream Seller
console.log ("I have " + allCones + " cones to sell for $" + conePrice.toFixed(2) + " each!\n ");

do {
	cones = Math.floor(Math.random() * 5) + 1;										// Creates new random number for next customer
	if (allCones >= cones) {														// Checks to see if there are enough cones left to sell
		totalConesSold += cones;													// Adds the amount sold to the total amount sold
		moneyMade = totalConesSold * conePrice;										// Calculates the Total money made
		console.log ("A customer bought " + cones + " cones...");			
		console.log ("\tI sold " + totalConesSold + " cones so far...");
		console.log ("\t\tI've made $" + moneyMade.toFixed(2) + " so far...");
		allCones -= cones;															// Subtracts the amount sold from total cones
		console.log ("\t\t\tI only have " + allCones + " left!\n ");			
	} else {																		// If there's not enough left to sell
		console.log ("A customer wants " + cones + " cones.")
		console.log ("\tSorry, I only have " + allCones + " left.\n ")
	}
} while (allCones >= 1);			

console.log ("Yay! I sold them all!")


// <----------------------While loop
while (increment <= 65536) {
	console.log (increment);
	increment *= 2;			// Multiplies itself by 2
}