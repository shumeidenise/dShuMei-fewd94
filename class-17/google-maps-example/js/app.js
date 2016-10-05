var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 40.7398476, lng: -73.9902068},
	  zoom: 18
	});

var bikeLayer = new google.maps.BicyclingLayer();
        bikeLayer.setMap(map);
}


