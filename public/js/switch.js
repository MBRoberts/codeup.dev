'use strict';

// Variables
var luckyNumber = Math.floor(Math.random()* 6);
var monthNum = Math.floor(Math.random()* 12) + 1;
var receipt = 60;
var discount;
var finalPay;
var message;

// Raffle Discount
switch (luckyNumber) {
	case 0:
		discount = 0;
		break;
	case 1:
		discount = .1;
		break;
	case 2:
		discount = .25;
		break;
	case 3:
		discount = .35;
		break;
	case 4:
		discount = .5;
		break;
	default:
		discount = 1;
}

discount *= receipt;
finalPay = receipt - discount;

console.log ("Your Lucky Number is: " + luckyNumber);
console.log ("You owe: $" + finalPay.toFixed(2) + "\n\n");


// Calender Exercise
switch (monthNum) {
	case 1:
		message = monthNum + " - January";
		break;
	case 2:
		message = monthNum + " - February";
		break;
	case 3:
		message = monthNum + " - March";
		break;
	case 4:
		message = monthNum + " - April";
		break;
	case 5:
		message = monthNum + " - May";
		break;
	case 6:
		message = monthNum + " - June";
		break;
	case 7:
		message = monthNum + " - July";
		break;
	case 8:
		message = monthNum + " - August";
		break;
	case 9:
		message = monthNum + " - September";
		break;
	case 10:
		message = monthNum + " - October";
		break;
	case 11:
		message = monthNum + " - November";
		break;
	default:
		message = monthNum + " - December";
		break;
}

console.log(message);

