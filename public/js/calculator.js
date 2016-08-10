'use strict';

(function(){ //  THIS IS MY IIFE

// Inputs the operands into the appropriate input
var input = function() {

	var value = this.innerText;  //  Pulls the value of the button from the event object
	
	if (document.getElementById('operator').value) {  // If there is an operator present in the middle input
		
		var rightOperandValue = document.getElementById('rightOperand').value; //  Gets the value already stored in the right input
		value = rightOperandValue + value;  // Concatenates the previous value with the button value
		document.getElementById('rightOperand').setAttribute('value', value);  //  Replaces right input value with new concatenized value
		

	} else {    //  If there is no operator present in the middle input
		
		var leftOperandValue = document.getElementById('leftOperand').value;  //  Gets the value already stored in the left input
		value = leftOperandValue + value;  //  Concatenates the previous value with the button value
		document.getElementById('leftOperand').setAttribute('value', value);  //  Replaces left input value with new concatenized value

	}
}

// Inputs the operator into the center input
var operatorInput = function() {

	var value = this.innerText;  //  Pulls the operator sign from the event object
	document.getElementById('operator').setAttribute('value', value);  //  Sets the value of the middle input to the operator

}

// Clears the page
var clearAll = function() {

	document.getElementById('leftOperand').setAttribute('value', '');  // Resets right operand after equals
	document.getElementById('rightOperand').setAttribute('value', '');  // Resets right operand after equals
	document.getElementById('operator').setAttribute('value', '');  // Resets operator after equals
	document.getElementById('display').innerHTML = '';
	document.getElementById('answer').innerHTML = 'JavaScript Calculator';

}

// Clears the center and right inputs
var clearRight = function() {

	document.getElementById('rightOperand').setAttribute('value', '');  // Resets right operand after equals
	document.getElementById('operator').setAttribute('value', '');  // Resets operator after equals

}

// Clears the top 3 displays
var clearTop = function() {

	document.getElementById('leftOperand').setAttribute('value', '');  // Resets right operand after equals
	document.getElementById('rightOperand').setAttribute('value', '');  // Resets right operand after equals
	document.getElementById('operator').setAttribute('value', '');  // Resets operator after equals
}

// Returns the result of the math in the inputs
var equals = function() {

	var total;
	var leftSide = parseFloat(document.getElementById('leftOperand').value);  //  Pulls the value of the left input and changes the data type to number
	var rightSide = parseFloat(document.getElementById('rightOperand').value);  //  Pulls the value of the right input and changes the data type to number
	
	switch (document.getElementById('operator').value) {  //  Checks the operator value to do appropriate math

		case '+' :
			total = leftSide + rightSide;
			document.getElementById('display').innerText = leftSide + " + " + rightSide + " = " + total;
			break;
		case '-' :
			total = leftSide - rightSide;
			document.getElementById('display').innerText = leftSide + " - " + rightSide + " = " + total;
			break;
		case '*' :
			total = leftSide * rightSide;
			document.getElementById('display').innerText = leftSide + " * " + rightSide + " = " + total;
			break;
		case '/' :
			total = leftSide / rightSide;
			document.getElementById('display').innerText = leftSide + " / " + rightSide + " = " + total;
			break;
		case 'xy' :
			total = exponents();
			break;
		
	}

	document.getElementById('answer').innerHTML = total;  //  Displays total in the Jumbotron
	document.getElementById('leftOperand').setAttribute('value', total);  //  Replaces left input value with previous total
	clearRight();

}

//  Changes the positive or negative sign
var switchSigns = function() {

	if (document.getElementById('operator').value) {  // If there is an operator present in the middle input

		var inputValue = document.getElementById('rightOperand').value;  //  Pulls the value of the left input
		inputValue *= -1;  // Changes sign
		document.getElementById('rightOperand').setAttribute('value', inputValue); //  Returns new value

	} else {
			
		var inputValue = document.getElementById('leftOperand').value;  //  Pulls the value of the left input
		inputValue *= -1;  // Changes sign
		document.getElementById('leftOperand').setAttribute('value', inputValue);  //  Returns new value

	}
}

//  Finds the square root of left input
var squareRoot = function(e) {

	var squareRoot = Math.sqrt(document.getElementById('leftOperand').value);
	document.getElementById('answer').innerHTML = squareRoot;  //  Displays total in the Jumbotron
	document.getElementById('leftOperand').setAttribute('value', squareRoot);  //  Replaces left input value with previous total

}

// Changes the number to a precent
var percentage = function(e) {

	if (document.getElementById('operator').value) {  // If there is an operator present in the middle input

		var result = (document.getElementById('rightOperand').value) / 100;
		document.getElementById('rightOperand').setAttribute('value', result);  //  Replaces left input value with previous total

	} else {

		var result = (document.getElementById('leftOperand').value) / 100;
		document.getElementById('leftOperand').setAttribute('value', result);  //  Replaces left input value with previous total
	
	}
}

//  Exponents
function exponents() {
	
	var base = parseInt(document.getElementById('leftOperand').value);
	var exponent = parseInt(document.getElementById('rightOperand').value);
	var total = base;

	for (var i = exponent - 1 ; i > 0 ; i--) {

		total *= base;

	}
	
	total = total.toString();  //  Changes the total data type to a string
	document.getElementById('answer').innerHTML = total;  //  Displays total in the Jumbotron
	document.getElementById('leftOperand').setAttribute('value', total);  //  Replaces left input value with previous total
	document.getElementById('display').innerHTML = base + "^" + exponent + " = " + total;
	clearRight();
	return total;
}

//  Displays the conversion buttons on the display
var hexinput = function() {

	var buttonValue = this.innerText;
	var displayValue = document.getElementById('display').innerHTML;  //  Gets the value already stored in the left input
	var value = displayValue + buttonValue;  //  Concatenates the previous value with the button value
	document.getElementById('display').innerText = value;  //  Replaces left input value with new concatenized value
}

// Converts a hexadecimal to a decimal
var hexDecConvert = function() {

	var hexString = document.getElementById('display').innerHTML;
	var decString = parseInt(hexString, 16);
	
	document.getElementById('answer').innerHTML = "Decimal"; 
	document.getElementById('display').innerHTML = decString;
	return decString;
}

//  Converts hexadecimals to a binary
var hexBinConvert = function() {

	var decString = hexDecConvert();
	var binString = decString.toString(2);
	
	document.getElementById('answer').innerHTML = "Binary";  //  Displays total in the Jumbotron
	document.getElementById('display').innerText = binString;  //  Replaces left input value with previous total
}

//  Converts binary to a decimal
var binDecConvert = function() {

	var binString = document.getElementById('display').innerHTML;
	var decString = parseInt(binString, 2);

	document.getElementById('answer').innerHTML = "Decimal"; 
	document.getElementById('display').innerText = decString;
	return decString;
}

// Converts binary to a hexadecimal
var binHexConvert = function() {
	
	var decString = binDecConvert();
	var hexString = decString.toString(16);

	document.getElementById('answer').innerHTML = "Hexadecimal";  //  Displays total in the Jumbotron
	document.getElementById('display').innerText = hexString;  //  Replaces left input value with previous total
}

//  Converts Decimal to Hexadecimals
var decHexConvert = function() {

	var decString = document.getElementById('display').innerHTML;
	var hexString = parseInt(decString, 10).toString(16);
	
	document.getElementById('answer').innerHTML = "Hexadecimal";  //  Displays total in the Jumbotron
	document.getElementById('display').innerText = hexString;  //  Replaces left input value with previous total

}

//  Converts Decimal to Binary
var decBinConvert = function() {

	var decString = document.getElementById('display').innerHTML;
	var binString = parseInt(decString, 10).toString(2);
	
	document.getElementById('answer').innerHTML = "Binary";  //  Displays total in the Jumbotron
	document.getElementById('display').innerText = binString;  //  Replaces left input value with previous total

}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\///
//\/\/\/\/ Event Listeners \/\/\/\/\/\/\/\/\/\/\//
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\///

var buttons = document.getElementsByClassName('keys');  //  Puts all the button elements on the first keyboard into an array

// Adds event listeners to buttons
buttons[0].addEventListener('click', input);

buttons[1].addEventListener('click', input);

buttons[2].addEventListener('click', input);

buttons[3].addEventListener('click', operatorInput);

buttons[4].addEventListener('click', input);

buttons[5].addEventListener('click', input);

buttons[6].addEventListener('click', input);

buttons[7].addEventListener('click', operatorInput);

buttons[8].addEventListener('click', input);

buttons[9].addEventListener('click', input);

buttons[10].addEventListener('click', input);

buttons[11].addEventListener('click', operatorInput);

buttons[12].addEventListener('click', clearAll);

buttons[13].addEventListener('click', input);

buttons[14].addEventListener('click', operatorInput);

buttons[15].addEventListener('click', operatorInput);

buttons[16].addEventListener('click', input);

buttons[17].addEventListener('click', percentage);

buttons[18].addEventListener('click', squareRoot);

buttons[19].addEventListener('click', switchSigns);

buttons[20].addEventListener('click', equals);

var hexButtons = document.getElementsByClassName('hexbuttons');  //  Puts all the button elements in the conversion keyboard into an array

//  assigns event listeners to each button and calls the apropriate function
hexButtons[0].addEventListener('click', hexinput);

hexButtons[1].addEventListener('click', hexinput);

hexButtons[2].addEventListener('click', hexinput);

hexButtons[3].addEventListener('click', hexinput);

hexButtons[4].addEventListener('click', hexinput);

hexButtons[5].addEventListener('click', hexinput);

hexButtons[6].addEventListener('click', hexinput);

hexButtons[7].addEventListener('click', hexinput);

hexButtons[8].addEventListener('click', hexinput);

hexButtons[9].addEventListener('click', hexinput);

hexButtons[10].addEventListener('click', hexinput);

hexButtons[11].addEventListener('click', hexinput);

hexButtons[12].addEventListener('click', hexinput);

hexButtons[13].addEventListener('click', hexinput);

hexButtons[14].addEventListener('click', hexinput);

hexButtons[15].addEventListener('click', hexinput);

hexButtons[16].addEventListener('click', hexDecConvert);

hexButtons[17].addEventListener('click', hexBinConvert);

hexButtons[18].addEventListener('click', binHexConvert);

hexButtons[19].addEventListener('click', binDecConvert);

hexButtons[20].addEventListener('click', decHexConvert);

hexButtons[21].addEventListener('click', decBinConvert);

hexButtons[22].addEventListener('click', clearAll);


}()); //  THIS IS THE END OF MY IIFE