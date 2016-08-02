"use strict";

function userInput(){
	do {
		var number = Number(prompt("Enter your number:"));
	} while (isNumeric(number) == true);

	return number;
}

function sum(firstNum , secondNum) {
		return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
		return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
		return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
		if (firstNum === 0 || secondNum === 0) {
			console.log ("Dividing with Zero doesn't make sense!");
		} else {
			return firstNum / secondNum;
		}
}

function square(number) {
	return multiply(number, number);
}

function sumOfTwoSquares(firstNum, secondNum) {
	return sum(square(firstNum), square(secondNum));
}

function isNumeric(firstNum) {
	switch (isNaN(firstNum)){
		case (true) :
			alert("I can't do math without any numbers!");
			return true;
			break;
		case (false) :
			return false;
			break;
	}
}

function averageOfThree(firstNum, secondNum, thirdNumber) {
	return (firstNum + secondNum + thirdNumber)/3;
}

if (confirm("Hit 'OK' if you want to do math with 2 numbers. Hit 'Cancel' if you want an average of 3 numbers:")){
	
	var firstNum = userInput();
	var secondNum = userInput();
	
	console.log ("The Sum of your two numbers is " + sum(firstNum, secondNum));
	console.log ("The difference of your two numbers is " + subtract(firstNum, secondNum));
	console.log (firstNum + " times " + secondNum + " is " + multiply(firstNum, secondNum));
	console.log (firstNum + " divided by " + secondNum + " is " + divide(firstNum, secondNum));
	console.log ("Your first number squared is " + square(firstNum));
	console.log ("The sum of the square of your two numbers is " + sumOfTwoSquares(firstNum, secondNum));

} else {
	var firstNum = userInput();
	var secondNum = userInput();
	var	thirdNumber = userInput();
	
	console.log ("The average of your 3 numbers is: " + averageOfThree(firstNum, secondNum, thirdNumber));
}








