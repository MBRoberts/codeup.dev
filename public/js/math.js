"use strict";


do{
	var firstNum = Number(prompt("Enter your first Number:"));
	var secondNum = Number(prompt("Enter your second number:"));
	var numeric = isNumeric(firstNum, secondNum);
} while (numeric === true);

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

function isNumeric(firstNum, secondNum) {
	switch (isNaN(firstNum)|| isNaN(secondNum)){
		case (true) :
			alert("I can't do math without any numbers!");
			return true;
			break;
		case (false) :
			return false;
			break;
	}
}


console.log ("The Sum of your two numbers is " + sum(firstNum, secondNum));
console.log ("The difference of your two numbers is " + subtract(firstNum, secondNum));
console.log (firstNum + " times " + secondNum + " is " + multiply(firstNum, secondNum));
console.log (firstNum + " divided by " + secondNum + " is " + divide(firstNum, secondNum));
console.log ("Your first number squared is " + square(firstNum));
console.log ("The sum of the square of your two numbers is " + sumOfTwoSquares(firstNum, secondNum));






