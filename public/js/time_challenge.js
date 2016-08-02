'use strict';

function twentyFourToTwelve (time) {
	var hours = Number(time.substring(0 , time.indexOf(":")));
	var mins = Number(time.substring((time.indexOf(":") + 1), 5));
	var amOrPm = amPm(hours);
	hours = twelveHour(hours);
	hours = (hours === 0 || hours === 24) ? "12" : hours.toString();
	mins = (mins === 0) ? zeros(mins) : mins.toString();
	var message = hours + ":" + mins + amOrPm;
	return message;
}
function twelveHour (hours) {
	return (hours > 12) ? hours - 12 : hours;
}

function amPm (hours) {
	return (hours >= 12 && hours != 24) ? " PM" : " AM"; 
}

function zeros(zeros) {
	zeros = zeros.toString();
	return zeros += zeros;
}

switch (confirm("Would you like the current time converted?")) {
	case true :
		var d = new Date();
		var hours = d.getHours().toString();
		var mins = d.getMinutes().toString();
		var time = hours + ':' + mins;
		break;
	default :
	var time = prompt("Enter Time:");
	break;
}

console.log(twentyFourToTwelve (time));
// console.log ("Current time in 24h time is: "+ hours + ":" + mins + amPm(hours));
// console.log ("Current time in 12h time is: " + twelveHour(hours) + ":" + mins + amPm(hours));