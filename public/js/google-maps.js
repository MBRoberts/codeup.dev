'usestrict';
(function() {

    var processGeocodeResults = function(results, status) {
        // Check for a successful result
        if (status != google.maps.GeocoderStatus.OK) {
            alert("Geocoding was not successful - STATUS: " + status);
            return;
        }

        map.setZoom(4);
        results.forEach(addMarkerAndInfoWindow);
    }

    function addMarkerAndInfoWindow(place){ 
        var marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map
        });
    
        var infowindow = new google.maps.InfoWindow({
            content: place.formatted_address
        });

        infowindow.open(map, marker);
    };

    var changeZoomLevel = function(e){
        var zoomLevel = document.getElementById('change-zoom').value;
        map.setZoom(parseInt(zoomLevel));
    };

    var mapOptions = {
        zoom: 14,
        // position of codeup
        center: {
            lat:  29.426791,
            lng: -98.489602
        }
    };

    var map = new google.maps.Map(document.getElementById('my-map'), mapOptions);
    var zoomButton = document.getElementById('zoom-btn');
    var geocoder = new google.maps.Geocoder();
    var searchTerm = "austin";

    geocoder.geocode({ address: searchTerm }, processGeocodeResults);

    zoomButton.addEventListener('click', changeZoomLevel);

})()