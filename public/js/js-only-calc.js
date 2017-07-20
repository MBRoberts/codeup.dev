"use strict";
	
	var map;
	var markers = [];
	var addressInput = document.getElementById('address');
	var updateBtn = document.getElementById('update');
	var zoomInBtn = document.getElementById('zoomIn');
	var zoomOutBtn = document.getElementById('zoomOut');

	function initMap(){
		var mapOpitons = {
			zoom: 10,
			center:{
				lat: 26,
				lng: -98
			},
			styles: [
	            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
	            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
	            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
	            {
					featureType: 'administrative.locality',
					elementType: 'labels.text.fill',
					stylers: [{color: '#d59563'}]
	            },
	            {
					featureType: 'poi',
					elementType: 'labels.text.fill',
					stylers: [{color: '#d59563'}]
	            },
	            {
					featureType: 'poi.park',
					elementType: 'geometry',
					stylers: [{color: '#263c3f'}]
	            },
	            {
					featureType: 'poi.park',
					elementType: 'labels.text.fill',
					stylers: [{color: '#6b9a76'}]
	            },
	            {
					featureType: 'road',
					elementType: 'geometry',
					stylers: [{color: '#38414e'}]
	            },
	            {
					featureType: 'road',
					elementType: 'geometry.stroke',
					stylers: [{color: '#212a37'}]
	            },
	            {
					featureType: 'road',
					elementType: 'labels.text.fill',
					stylers: [{color: '#9ca5b3'}]
	            },
	            {
					featureType: 'road.highway',
					elementType: 'geometry',
					stylers: [{color: '#746855'}]
	            },
	            {
					featureType: 'road.highway',
					elementType: 'geometry.stroke',
					stylers: [{color: '#1f2835'}]
	            },
	            {
					featureType: 'road.highway',
					elementType: 'labels.text.fill',
					stylers: [{color: '#f3d19c'}]
	            },
	            {
					featureType: 'transit',
					elementType: 'geometry',
					stylers: [{color: '#2f3948'}]
	            },
	            {
					featureType: 'transit.station',
					elementType: 'labels.text.fill',
					stylers: [{color: '#d59563'}]
	            },
	            {
					featureType: 'water',
					elementType: 'geometry',
					stylers: [{color: '#17263c'}]
	            },
	            {
					featureType: 'water',
					elementType: 'labels.text.fill',
					stylers: [{color: '#515c6d'}]
	            },
	            {
					featureType: 'water',
					elementType: 'labels.text.stroke',
					stylers: [{color: '#17263c'}]
	            }
	          ]
		}

		map = new google.maps.Map(document.getElementById('map-canvas'), mapOpitons);

	}

	function centerMap(position, lat, lng){
		if(!position){
			position= {
				lat: lat,
				lng: lng
			
			}
		}

		map.setCenter(position);
	}

	function createMarker(lat, lng){
		console.log(lat);
		var marker = new google.maps.Marker({
			position:{
				lat:lat, 
				lng:lng
			}, 
			map: map
		});

		markers.push(marker);

		createInfoWindow(marker);
	}

	function createInfoWindow(target){
		var content = document.getElementById('infoWindowContent').innerHTML;
		var infoWindow = new google.maps.InfoWindow({
			content: content
		});

		// var submitBtns = document.getElementsByClassName("submit");
		// for(let i = 0; i < submitBtns.length; i++){
		// 	submitBtns[i].addEventListener('click', function() {
		//     	infoWindow= new google.maps.InfoWindow({
		// 			content: document.getElementById('windowContent').value
		// 		});
		// 		infoWindow.open(map, target);
		// 	});
		// }

		infoWindow.open(map, target);

	}

	function setOnAddress(address){

		var geocoder = new google.maps.Geocoder();

		geocoder.geocode({ "address": address }, function(results, status) {

		   if (status == google.maps.GeocoderStatus.OK) {

		       map.setCenter(results[0].geometry.location);

		       createMarker(results[0].geometry.location.lat(), results[0].geometry.location.lng());

		   } else {

		       alert("Geocoding was not successful - STATUS: " + status);
		   }
		});
	}
	
	initMap();

	updateBtn.addEventListener('click', function(){
		setOnAddress(addressInput.value);
	})
