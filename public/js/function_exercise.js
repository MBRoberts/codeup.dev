"use strict";

var name = prompt("Customer's name"); 
var amount = Number(prompt("How much did they spend?"));

function message(amount , name) {
	if (amount >= 200){
		var percent = Number(prompt("How much of a discount?",35));
		var payment = discount(amount , percent);
		var message = name + " bought $" + amount.toFixed(2) + ", discount was applied. Final payment: $" + payment.toFixed(2) + "\nwith a discount of $" + (amount - discount(amount , percent).toFixed(2));
	} else {
		message = name + " bought $" + amount.toFixed(2) + ". Final payment: $" + amount.toFixed(2) + ", no discount was applied";
	}
	return message;
}

function discount (amount , percent) {
	percent /= 100;
	return amount - (amount * percent.toFixed(2));
}

console.log (message(amount, name));


alert("Next Exercise");



var testOne = Number(prompt("Enter Test 1 Score:"));
var testTwo = Number(prompt("Enter Test 2 Score:"));
var testThree = Number(prompt("Enter Test 3 Score:"));

function testMessage (average) {
	if (average >= 80) {
		return "You're awesome!";

	} else {
		return "You need to practice more!";
	}
}

function average (testOne, testTwo, testThree){
	return (testOne + testTwo + testThree) / 3;
}

var average = average(testOne , testTwo , testThree);
console.log ("Average grade: " + average + "\n " + testMessage(average));

