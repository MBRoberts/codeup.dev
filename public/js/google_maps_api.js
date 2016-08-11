'use strict';

(function() {

var mapOptions = {
	zoom : 16,
	center: {
                lat:  29.426791,
                lng: -98.489602
            },
	mapTypeId : google.maps.MapTypeId.SATTELITE,
	styles : [
            {
             	stylers: [
                	{ hue: '#00ffe6' },
                	{ saturation: -20 }
            	]
            },
            {
              	featureType: 'road',
             	elementType: 'geometry',
              	stylers: [
                	{ lightness: 100 },
                	{ visibility: 'simplified' }
              ]
            },
            
    ],

};
var address = '600 Navarro road san antonio, tx';
initMap(address, mapOptions);


document.getElementById('address-search').addEventListener('click', function(e){
	address = document.getElementById('address').value;
	initMap(address,mapOptions);
});


function initMap(address, mapOptions){

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var geocoder = new google.maps.Geocoder();
	var infowindow = new google.maps.InfoWindow({
		// content: '<div id="info-window"></div><h5><ul><li>Best Bar Food</li><li>Great Place To Watch A Game</li><li>UFC Fights</li></ul></h5>'
	});


	document.getElementById('traffic-button').addEventListener('click', function (e) {
		var trafficLayer = new google.maps.TrafficLayer();
	        trafficLayer.setMap(map);
	})


	geocoder.geocode({'address' : address}, function(results, status) {

		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			
			var marker = new google.maps.Marker( {
				position: results[0].geometry.location,
				map : map,
				animation: google.maps.Animation.BOUNCE,
				draggable: true,
				title: "Bouncing Marker!"
			});

			marker.addListener('click', function(e) {
					infowindow.open(map, marker);
		
			});

		} else {

			alert("Geocoding was not successful - STATUS: " + status);

		}
	});
};


})();