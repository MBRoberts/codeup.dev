'use strict';

function sample (arr) {
	var rng = Math.floor(Math.random()* arr.length);
	return arr[rng];
}

console.log(sample([1,2,3,4]));