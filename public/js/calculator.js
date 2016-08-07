'use strict';

var input = function(e) {

	if (document.getElementById('operator').getAttribute('value')) {  // If there is an operator present in the middle input
		
		var value = e.path[1].attributes.value.nodeValue;  // Pulls the value of the button from the event object
		var rightOperandValue = document.getElementById('rightOperand').getAttribute('value'); //  Gets the value already stored in the right input
		value = rightOperandValue + value;  // Concatenates the previous value with the button value
		document.getElementById('rightOperand').setAttribute('value', value);  //  Replaces right input value with new concatenized value

	} else {    //  If there is no operator present in the middle input

		var value = e.path[1].attributes.value.nodeValue;  //  Pulls the value of the button from the event object
		var leftOperandValue = document.getElementById('leftOperand').getAttribute('value');  //  Gets the value already stored in the left input
		value = leftOperandValue + value;  //  Concatenates the previous value with the button value
		document.getElementById('leftOperand').setAttribute('value', value);  //  Replaces left input value with new concatenized value

	}
}

var operatorInput = function(e) {

	var value = e.path[1].attributes.value.nodeValue;  //  Pulls the operator sign from the event object
	document.getElementById('operator').setAttribute('value', value);  //  Sets the value of the middle input to the operator

}

var clearAll = function(e) {

	location.reload();   //  Reloads the page and resets all the inputs

}

var equals = function(e) {

	var total;
	var leftSide = Number(document.getElementById('leftOperand').getAttribute('value'));  //  Pulls the value of the left input and changes the data type to number
	var rightSide = Number(document.getElementById('rightOperand').getAttribute('value'));  //  Pulls the value of the right input and changes the data type to number

	switch (document.getElementById('operator').getAttribute('value')) {  //  Checks the operator value to do appropriate math

		case '+' :
			total = leftSide + rightSide;
			break;
		case '-' :
			total = leftSide - rightSide;
			break;
		case '*' :
			total = leftSide * rightSide;
			break;
		case '/' :
			total = leftSide / rightSide;
			break;

	}

	total = total.toString();  //  Changes the total data type to a string
	document.getElementById('answer').innerHTML = total;  //  Displays total in the Jumbotron

}


var buttons = document.getElementsByTagName('button');  //  Puts all the buttons in a single array

// Adds event listeners  to buttons
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

buttons[14].addEventListener('click', equals);

buttons[15].addEventListener('click', operatorInput);


