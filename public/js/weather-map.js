'use strict';

const myAPIKey = "07dcc7ddeb147cb5c38d0a3d2ad92642";

var pos = {
	lat : 38.0000,
	lng : -97.0000
};

var days= 2;

var mapOptions = {
	zoom: 4,
	scrollwheel: false,
	center: {
		lat: pos.lat,
		lng: pos.lng
	},
	mapTypeId: 'hybrid'
};

var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

var markers = [];

var marker = new google.maps.Marker({
	position: pos,
	map: map,
	title: "Exact Center of USA"
});

var infoContent = '<div class="today-date"></div><br><br><div class="city"></div><div class="today-icon"></div><div class="today-temps"></div><div class="today-conditions"></div><div class="today-humidity"></div><div class="today-wind"></div><div class="today-pressure"></div>';

var infowindow = new google.maps.InfoWindow ({

	content: infoContent

});

markers.push(marker);

weatherInit();

$("#search-btn").click(function(e){

	days = $("#days-input").val();
	$('#forcast-weather').html('');
	weatherInit();

});

google.maps.event.addListener(map, 'click', function(e) {

	addMarker(e.latLng, map);
	pos.lat = e.latLng.lat;
	pos.lng = e.latLng.lng;
	$('#forcast-weather').html('');
	weatherInit();

});


function addMarker(location, map) {
  
  	removeMarker();
	var marker = new google.maps.Marker({
		position: location,
		map: map
  	});
  	markers.push(marker);

	marker.addListener('mouseover', function() {
		infowindow.open(map, marker);
		console.log(infowindow);
			$('#forcast-weather').html('');

		weatherInit();
	});
}

function removeMarker(){
	setMapOnAll(null);
}

function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function weatherInit(){

	$.get('http://api.openweathermap.org/data/2.5/weather', {

		APPID: myAPIKey,
		lat: pos.lat,
		lon: pos.lng,
		units: 'imperial'

	}).done(function(data) {
		
		$('.today-date').html(date(data.dt));
			
		$('.city').html(data.name);
		
		$('.today-icon').html(icons(data.weather[0].icon));

		$('.today-temps').html(temperature(Math.round(data.main.temp_min), Math.round(data.main.temp_max)));

		$('.today-conditions').html(conditions(data.weather[0].main, data.weather[0].description));

		$('.today-humidity').html(humidities(data.main.humidity));

		$('.today-wind').html(windSpeeds(data.wind.speed, data.wind.deg));

		$('.today-pressure').html(pressures(data.main.pressure));

	}).fail(function(xhr, err, msg) {
		console.log(xhr);
		console.log(err);
		console.log(msg);
	});


	$.get('http://api.openweathermap.org/data/2.5/forecast/daily', {

		APPID: myAPIKey,
		lat: pos.lat,
		lon: pos.lng,
		cnt: days,
		units: 'imperial'

	}).done(function(data) {
		
		data.list.forEach(function(day, index) {

			var content = "<div class='weather box'>";

			content += "<div class='date'>" + date(day.dt) + "<br><div class='icon'>" + icons(day.weather[0].icon) + "</div></div>";

			content += "<div class='temps'>" + temperature(Math.round(day.temp.min), Math.round(day.temp.max)) + "</div>";

			content += "<div class='conditions'>" + conditions(day.weather[0].main, day.weather[0].description) + "</div>";

			content += "<div class='humidity'>" + humidities(day.humidity) + "</div>";

			content += "<div class='wind'>" + windSpeeds(day.speed, day.deg) + "</div>";

			content += "<div class='pressure'>" + pressures(day.pressure) + "</div></div>";
			$('.city').html(day.name);
			$('#forcast-weather').append(content);
		});
		

	}).fail(function(xhr, err, msg) {
		console.log(xhr);
		console.log(err);
		console.log(msg);
	});
}

var temperature = function(min, max) {
	return min + "&deg/" + max + "&deg";
}

var icons = function(iconNum) {
	return "<img src='http://openweathermap.org/img/w/" + iconNum + ".png'>"
}

var conditions = function(main, description) {
	return "<b>" + main + ":</b> " + description;
}

var humidities = function(humid) {
	return "<b>Humidity:</b> " + humid;
}

var windSpeeds = function(speed, degree) {
	return "<b>Wind: </b>" + speed + " mph " + windDirection(degree);
}

var pressures = function(pressure) {
	return "<b>Pressure: </b>" + pressure;
}

var date = function(date) {
	var dt = new Date(date * 1000);
	return (dt.getMonth() + 1) + '/' + dt.getDate();
}

var windDirection = function(degree) {
	switch (true) {
		case (degree < 11.25 || degree > 348.75) :
			return 'N';
		case (degree >= 11.25 && degree < 33.75) :
			return 'NNE';
		case (degree >= 33.75 && degree < 56.25) :
			return 'NE';
		case (degree >= 56.25 && degree < 78.75) :
			return 'ENE';
		case (degree >= 78.75 && degree < 101.25) :
			return 'E';
		case (degree >= 101.25 && degree < 123.75) :
			return 'ESE';
		case (degree >= 123.75 && degree < 146.25) :
			return 'SE';
		case (degree >= 146.25 && degree < 168.75) :
			return 'SSE';
		case (degree >= 168.75 && degree < 191.25) :
			return 'S';
		case (degree >= 191.25 && degree < 213.75) :
			return 'SSW';
		case (degree >= 213.75 && degree < 236.25) :
			return 'SW';
		case (degree >= 236.25 && degree < 258.75) :
			return 'WSW';
		case (degree >= 258.75 && degree < 281.25) :
			return 'W';
		case (degree >= 281.25 && degree < 303.75) :
			return 'WNW';
		case (degree >= 303.75 && degree < 326.25) :
			return 'NW';
		case (degree >= 326.25 && degree < 348.75) :
			return 'NNW';
	}
}
