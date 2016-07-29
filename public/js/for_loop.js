// Variables
var printedNum;
var randNum = Math.floor(Math.random() * 10) + 1;
var answer;
var rng;

// First Exercise
for (var i = 1; i <= 10; i++) {
		if (i != 10){
			printedNum = i.toString();
		} else {
			printedNum = '0';
		}
		console.log (printedNum.repeat(i));
}

// Second Exercise	
for (i = 1; i <= 10; i++) {
	answer = randNum * i;
	console.log (randNum + ' x ' + i + ' = ' + answer);
}

// Third Exercise
for (i = 1; i <= 10; i++) {
	rng = Math.floor(Math.random() * 180) + 20;
	switch (rng % 2) {
		case 1 :
			console.log (rng + " is an odd number");
			break;
		default :
			console.log (rng + " is an even number");
			break;
	}
}
	