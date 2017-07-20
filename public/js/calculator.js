(function(){ 

	'use strict';

	var operatorDisplay = document.getElementById('operator');
	var rightDisplay = document.getElementById('rightOperand');
	var leftDisplay = document.getElementById('leftOperand');
	var bigDisplay = document.getElementById('display');
	var answerDisplay = document.getElementById('answer');

	// Inputs the operands into the appropriate input
	var input = function() {

		var btnValue = this.innerText;  //  Pulls the value of the button from the event object
		
		if (operatorDisplay.value) {  // If there is an operator present in the middle input
			
			rightDisplay.value += btnValue; //  Gets the value already stored in the right input
			
		} else {    //  If there is no operator present in the middle input
			
			leftDisplay.value += btnValue;  //  Replaces left input value with new concatenized value
		}
	}

	// Inputs the operator into the center input
	var operatorInput = function() {

		var btnValue = this.innerText;  //  Pulls the operator sign from the event object
		operatorDisplay.value = btnValue;  //  Sets the value of the middle input to the operator

	}

	// Clears the page
	var clearAll = function() {

		leftDisplay.value = '';  // Resets right operand after equals
		rightDisplay.value = '';  // Resets right operand after equals
		operatorDisplay.value = '';  // Resets operator after equals
		bigDisplay.value = '';
		answerDisplay.innerHTML = 'JavaScript Calculator';

	}

	// Clears the center and right inputs
	var clearRight = function() {

		rightDisplay.value = '';  // Resets right operand after equals
		operatorDisplay.value = '';  // Resets operator after equals

	}

	// Clears the top 3 displays
	var clearTop = function() {

		leftDisplay.value = '';  // Resets right operand after equals
		rightDisplay.value = '';  // Resets right operand after equals
		operatorDisplay.value = '';  // Resets operator after equals
	}

	// Returns the result of the math in the inputs
	var equals = function() {

		var total = 0;
		var leftSide = parseFloat(leftDisplay.value);  //  Pulls the value of the left input and changes the data type to number
		var rightSide = parseFloat(rightDisplay.value);  //  Pulls the value of the right input and changes the data type to number
		
		switch (operatorDisplay.value) {  //  Checks the operator value to do appropriate math

			case '+' :
				total = leftSide + rightSide;
				bigDisplay.innerText = leftSide + " + " + rightSide + " = " + total;
				break;
			case '-' :
				total = leftSide - rightSide;
				bigDisplay.innerText = leftSide + " - " + rightSide + " = " + total;
				break;
			case '*' :
				total = leftSide * rightSide;
				bigDisplay.innerText = leftSide + " * " + rightSide + " = " + total;
				break;
			case '/' :
				total = leftSide / rightSide;
				bigDisplay.innerText = leftSide + " / " + rightSide + " = " + total;
				break;
			case 'xy' :
				total = exponents();
				break;
			
		}

		answerDisplay.innerHTML = total;  //  Displays total in the Jumbotron
		leftDisplay.value = total;  //  Replaces left input value with previous total
		clearRight();

	}

	//  Changes the positive or negative sign
	var switchSigns = function() {

		if (operatorDisplay.value) {  // If there is an operator present in the middle input

			var inputValue = rightDisplay.value;  //  Pulls the value of the left input
			inputValue *= -1;  // Changes sign
			rightDisplay.value = inputValue; //  Returns new value

		} else {
				
			var inputValue = leftDisplay.value;  //  Pulls the value of the left input
			inputValue *= -1;  // Changes sign
			leftDisplay.value =inputValue;  //  Returns new value

		}
	}

	//  Finds the square root of left input
	var squareRoot = function(e) {

		var squareRoot = Math.sqrt(leftDisplay.value);
		answerDisplay.innerHTML = squareRoot;  //  Displays total in the Jumbotron
		leftDisplay.value = squareRoot;  //  Replaces left input value with previous total

	}

	// Changes the number to a precent
	var percentage = function(e) {

		if (operatorDisplay.value) {  // If there is an operator present in the middle input

			var result = (rightDisplay.value) / 100;
			rightDisplay.value = result;  //  Replaces left input value with previous total

		} else {

			var result = (leftDisplay.value) / 100;
			leftDisplay.value = result;  //  Replaces left input value with previous total
		
		}
	}

	//  Exponents
	function exponents() {
		
		var base = parseInt(leftDisplay.value);
		var exponent = parseInt(rightDisplay.value);
		var total = base;

		for (var i = exponent - 1 ; i > 0 ; i--) {

			total *= base;

		}
		
		answerDisplay.innerHTML = total;  //  Displays total in the Jumbotron
		leftDisplay.value = total;  //  Replaces left input value with previous total
		bigDisplay.value = base + "^" + exponent + " = " + total;
		clearRight();
		return total;
	}

	//  Displays the conversion buttons on the display
	var hexinput = function() {
		bigDisplay.value += this.innerText;
	}

	// Converts a hexadecimal to a decimal
	var hexDecConvert = function() {

		var decString = parseInt(bigDisplay.value, 16);
		
		answerDisplay.innerHTML = "Decimal"; 
		bigDisplay.value = decString;

		return decString;
	}

	//  Converts hexadecimals to a binary
	var hexBinConvert = function() {

		var decString = hexDecConvert();
		var binString = decString.toString(2);
		
		answerDisplay.innerHTML = "Binary";  //  Displays total in the Jumbotron
		bigDisplay.value = binString;  //  Replaces left input value with previous total
	}

	//  Converts binary to a decimal
	var binDecConvert = function() {

		var binString = bigDisplay.value;
		var decString = parseInt(binString, 2);

		answerDisplay.innerHTML = "Decimal"; 
		bigDisplay.value = decString;
		return decString;
	}

	// Converts binary to a hexadecimal
	var binHexConvert = function() {
		
		var decString = binDecConvert();
		var hexString = decString.toString(16);

		answerDisplay.innerHTML = "Hexadecimal";  //  Displays total in the Jumbotron
		bigDisplay.value = hexString;  //  Replaces left input value with previous total
	}

	//  Converts Decimal to Hexadecimals
	var decHexConvert = function() {

		var decString = bigDisplay.value;
		var hexString = parseInt(decString, 10).toString(16);
		
		answerDisplay.innerHTML = "Hexadecimal";  //  Displays total in the Jumbotron
		bigDisplay.value = hexString;  //  Replaces left input value with previous total

	}

	//  Converts Decimal to Binary
	var decBinConvert = function() {

		var decString = bigDisplay.value;
		var binString = parseInt(decString, 10).toString(2);
		
		answerDisplay.innerHTML = "Binary";  //  Displays total in the Jumbotron
		bigDisplay.value = binString;  //  Replaces left input value with previous total

	}

	function draw() {
	    try {
			functionPlot({
				target: '#plot',
				data: [{
			  		fn: document.getElementById('eq').value,
			  		sampler: 'builtIn',  // this will make function-plot use the evaluator of math.js
			  		graphType: 'polyline'
				}]
			});
	    }
	    catch (err) {
			console.log(err);
			alert(err);
	    }
	}

	document.getElementById('form').onsubmit = function (event) {
		event.preventDefault();
		draw();
	};

	draw();

	//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//
	//\/\/\/\/ Event Listeners \/\/\/\/\/\/\/\/\///
	//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//

	var buttons = document.getElementsByClassName('keys');
	var operators = document.getElementsByClassName('operator');
	var hexButtons = document.getElementsByClassName('hexbuttons');
	var clearButtons = document.getElementsByClassName("clear");

	[].forEach.call(buttons, function(btn){
		btn.addEventListener('click', input);
	});

	[].forEach.call(operators, function(operator){
		operator.addEventListener('click', operatorInput);
	});
	
	[].forEach.call(hexButtons, function(btn){
		btn.addEventListener('click', hexinput);
	});

	[].forEach.call(clearButtons, function(btn){
		btn.addEventListener('click', clearAll);
	});

	document.getElementsByClassName("percent")[0].addEventListener('click', percentage);
	document.getElementsByClassName("squareRoot")[0].addEventListener('click', squareRoot);
	document.getElementsByClassName("signs")[0].addEventListener('click', switchSigns);
	document.getElementsByClassName("equals")[0].addEventListener('click', equals);
	document.getElementById('hexToDec').addEventListener('click', hexDecConvert);
	document.getElementById('hexToBin').addEventListener('click', hexBinConvert);
	document.getElementById('binToHex').addEventListener('click', binHexConvert);
	document.getElementById('binToDec').addEventListener('click', binDecConvert);
	document.getElementById('decToHex').addEventListener('click', decHexConvert);
	document.getElementById('decToBin').addEventListener('click', decBinConvert);
	



	



}());