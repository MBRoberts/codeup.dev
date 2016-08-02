"use strict";

(function(){

// Global Variables------------------------>

	var firstNum;
	var secondNum;
	var	thirdNumber;
	var numberCheck;

// Function Definitions---------------------------------->

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

// Procedural Code---------------------------------------------------------->
	do {
		numberCheck = prompt('Type in the number of the math you would like to do: \n\t1. Addition \n\t2. Subtraction \n\t3. Multiplication \n\t4. Division \n\t5. Square \n\t6. Sum of two Squares \n\t7. Average of Three Numbers');
		switch (numberCheck) {
			case '1' :
				firstNum = userInput();
				secondNum = userInput();
				alert("The Sum of " + firstNum + " + " + secondNum + " is " + sum(firstNum, secondNum));
				numberCheck = 'ok';
				break;
			case '2' :
				firstNum = userInput();
				secondNum = userInput();
				alert("The difference of " + firstNum + " - " + secondNum + " is " + subtract(firstNum, secondNum));
				numberCheck = 'ok';
				break;
			case '3' :
				firstNum = userInput();
				secondNum = userInput();
				alert(firstNum + " times " + secondNum + " is " + multiply(firstNum, secondNum));
				numberCheck = 'ok';
				break;
			case '4' :
				firstNum = userInput();
				secondNum = userInput();
				alert(firstNum + " divided by " + secondNum + " is " + divide(firstNum, secondNum));
				numberCheck = 'ok';
				break;
			case '5' :
				firstNum = userInput();
				alert(firstNum + " squared is " + square(firstNum));
				numberCheck = 'ok';
				break;
			case '6' :
				firstNum = userInput();
				secondNum = userInput();
				alert("The sum of " + firstNum + " squared and " + secondNum + " squared is " + sumOfTwoSquares(firstNum, secondNum));
				numberCheck = 'ok';
				break;
			case '7' :
				firstNum = userInput();
				secondNum = userInput();
				thirdNumber = userInput();
				alert("The average of " + firstNum + ", " + secondNum + ", and " + thirdNumber + " is: " + averageOfThree(firstNum, secondNum, thirdNumber));
				numberCheck = 'ok';
				break;
			default :
				alert("TYPE THE NUMBER!!!");
				break;
		}
	}while (numberCheck !== 'ok');
})();





