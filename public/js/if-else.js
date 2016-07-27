"use strict";

var testone = Math.floor(Math.random()* 100);
var testtwo = Math.floor(Math.random()* 100);
var testthree = Math.floor(Math.random()* 100);
var cameron = Math.floor(Math.random()* 500);
var ryan = Math.floor(Math.random()* 500);
var george = Math.floor(Math.random()* 500);
var flipACoin = Math.floor(Math.random()* 2);
var message;
var payment;
var discount;



//<-------------- Student's Grades ---------------->
if (((testone + testtwo + testthree) / 3) >= 80) {
	message = "You're awesome!";
} else {
	message = "You need to practice more!";
};

console.log(message);



//<----------- HEB Discount ------------------>

//Cameron
if (cameron >= 200) {
	discount = cameron * .35;
	payment = cameron - discount;
} else {
	payment = cameron;
}

if (payment === cameron) {
	message = "Cameron bought $" + cameron.toFixed(2) + ", no discount was applied. Final payment: $" + cameron.toFixed(2);
}else {
	message = "Cameron bought $" + cameron.toFixed(2) + ", discount was applied. Final payment: $" + payment.toFixed(2) + "\nwith a discount of $" + discount.toFixed(2);
};

console.log(message); 

// Ryan
if (ryan >= 200) {
	discount = ryan * .35;
	payment = ryan - discount;
} else {
	payment = ryan;
}

if (payment === ryan) {
	message = "Ryan bought $" + ryan.toFixed(2) + ", no discount was applied. Final payment: $" + ryan.toFixed(2);
}else {
	message = "Ryan bought $" + ryan.toFixed(2) + ", discount was applied. Final payment: $" + payment.toFixed(2) + "\nwith a discount of $" + discount.toFixed(2);
};

console.log(message);

// George
if (george >= 200) {
	discount = george * .35;
	payment = george - discount;
} else {
	payment = george;
}

if (payment === george) {
	message = "George bought $" + george.toFixed(2) + ", no discount was applied. Final payment: $" + george.toFixed(2);
}else {
	message = "George bought $" + george.toFixed(2) + ", discount was applied. Final payment: $" + payment.toFixed(2) + "\nwith a discount of $" + discount.toFixed(2);
};

console.log(message);



//<------------------ Isaac's Dilemma------------------>
var message = (flipACoin) ? "Buy a House!" : "Buy a Car!";

console.log(message);


