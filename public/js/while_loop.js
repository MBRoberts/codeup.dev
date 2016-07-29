'use strict';

// Ice Cream Sales variables
var allCones = Math.floor(Math.random() * 50) + 50; 
var totalConesSold = 0;
var conePrice = 2;
var cones;
var moneyMade;

// While loop variable
var increment = 2;  

// <------------------------------------- Ice Cream Seller --------------------------------------->
console.log ("I have " + allCones + " cones to sell for $" + conePrice.toFixed(2) + " each!\n ");   // Prints random total number of cones

do {
	cones = Math.floor(Math.random() * 5) + 1;										// Creates new random number for next customer

	if (allCones >= cones) {														// Checks to see if there are enough cones left to sell
		totalConesSold += cones;													// Adds the amount sold to the total amount sold
		moneyMade = totalConesSold * conePrice;										// Calculates the Total money made
		console.log ("A customer bought " + cones + " cones...");					// Prints random number that customer bought
		console.log ("\tI sold " + totalConesSold + " cones so far...");			// Prints total number sold
		console.log ("\t\tI've made $" + moneyMade.toFixed(2) + " so far...");		// Prints total money made
		allCones -= cones;															// Subtracts the amount sold from total cones
		console.log ("\t\t\tI only have " + allCones + " left!\n ");				// Prints how many cones are left
	} else {																		// If there's not enough left to sell
		console.log ("A customer wants " + cones + " cones.");						// Prints random number customer wants
		console.log ("\tSorry, I only have " + allCones + " left.\n ");				// Prints how many cones are left
	}
} while (allCones > 0);															// Keeps running till we have 0 cones

console.log ("Yay! I sold them all!")												// Prints that when loop is done


// <--------------------------------------- While loop ------------------------------------------->
while (increment <= 65536) {
	console.log (increment);
	increment *= 2;			// Multiplies itself by 2
}
