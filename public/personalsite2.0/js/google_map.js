
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 9,

        // The latitude and longitude to center the map (always required)
        center: {
                lat:  29.426791,
                lng: -98.489602
            },

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [
                {
                    "featureType":"administrative.land_parcel",
                    "elementType":"all",
                    "stylers":[{
                        "visibility":"off"
                    }]
                },{
                    "featureType":"landscape.man_made",
                    "elementType":"all",
                    "stylers":[{
                        "visibility":"off"
                    }]
                },{
                    "featureType":"poi",
                    "elementType":"labels",
                    "stylers":[{
                        "visibility":"off"
                    }]
                },{
                    "featureType":"road",
                    "elementType":"labels",
                    "stylers":[{
                        "visibility":"simplified"
                    },{
                        "lightness":-20
                    }]
                },{
                    "featureType":"road.highway",
                    "elementType":"geometry",
                    "stylers":[{
                        "hue":"#00ffe6"
                    }]
                },{
                    "featureType":"road.highway",
                    "elementType":"labels",
                    "stylers":[{
                        "visibility":"simplified"
                    }]
                },{
                    "featureType":"road.arterial",
                    "elementType":"geometry",
                    "stylers":[{
                        "hue":"#00ffe6"
                    }]
                },{
                    "featureType":"road.arterial",
                    "elementType":"labels",
                    "stylers":[{
                        "visibility":"off"
                    }]
                },{
                    "featureType":"road.local",
                    "elementType":"geometry",
                    "stylers":[{
                        "visibility":"simplified"
                    }]
                },{
                    "featureType":"road.local",
                    "elementType":"labels",
                    "stylers":[{
                        "visibility":"simplified"
                    }]
                },{
                    "featureType":"transit",
                    "elementType":"all",
                    "stylers":[{
                        "visibility":"off"
                    }]
                },{
                    "featureType":"water",
                    "elementType":"all",
                    "stylers":[{
                        "hue":"#00ffe6"
                    },{
                        "saturation": -20
                    },{
                        "lightness": 100
                    }]
                }]
    };


    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['600 Navarro St San Antonio, TX'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map
            });

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);