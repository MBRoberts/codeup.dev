// Create a function alphabet_soup($str) that accepts a string and will return the string in alphabetical order. E.g. "hello world" becomes "ehllo dlorw". So make sure your function separates and alphabetizes each word separately.

"use strict";

(function(){
	var result;
	function userPrompt(){
		var string = prompt("Enter a Sentence:");
		return string;
	}

	function alphabet_soup(myString) {
		var myArray = myString.split(" ")
		console.log(myArray)
			for (var i = 0 ; i < myArray.length ; i++) {
			myArray[i] = myArray[i].split('');
		}
		console.log(myArray);
		myArray.forEach(function(element, index, array){
			element.sort();
			myArray[index].join('');
			console.log(element);
		})
		console.log(myArray);
		return myArray;
	}


	result = alphabet_soup(userPrompt()).join(' ');
	result = result.split(',').join('');
	console.log(result);
})();