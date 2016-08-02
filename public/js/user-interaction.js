"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
do {
	var input = prompt("Enter Your Name");
} while (input === "");

// TODO: Show an alert message that welcomes the user based on their input.
alert('Hello ' + input + ", Welcome to my page");
// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

if (confirm(input + ", Do you like pizza?")){
	alert ('So do I');
} else {
	alert ("That's unamerican!");
}