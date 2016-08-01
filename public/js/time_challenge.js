
// var d = new Date();
// var hours = d.getHours();
// var mins = d.getMinutes();
var time = prompt("Enter Time:");

function twentyFourToTwelve (time) {
	var hours = Number(time.substring(0,time.indexOf(":")));
	var mins = Number(time.substring((time.indexOf(":") + 1), 5));
	var amOrPm = amPm(hours);
	hours = twelveHour (hours);
	var message = hours.toString() + ":" + mins.toString() + amOrPm;
	return message;
}
function twelveHour (hours) {
	return (hours > 12) ? hours - 12 : hours;
}

function amPm (hours) {
	return (hours >= 12) ? " PM" : " AM"; 
}
	
console.log(twentyFourToTwelve (time));
// console.log ("Current time in 24h time is: "+ hours + ":" + mins + amPm(hours));
// console.log ("Current time in 12h time is: " + twelveHour(hours) + ":" + mins + amPm(hours));