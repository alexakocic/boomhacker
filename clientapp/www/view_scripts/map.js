var map;
var marker;

var initializeMap = function (width, height, location) {
    $('#map_id').css('height', height);
    $('#map_id').css('width', width);
    console.log("Map view");

    map = L.map('map_id').setView([43.324772, 21.895539], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        accessToken: 'pk.eyJ1Ijoic3VpY2lkZXNxdWFkcyIsImEiOiJjaXVyZGI4bTkwMDBrMnptc3NnMnh3cTYzIn0.bmO4d75NNaL0DHGX5xcZ6Q',
        id: 'mapbox.satellite',
        maxZoom: 18
    }).addTo(map);

    setMarker(location.latitude, location.longitude);
}

function setMarker(latitude, longitude) {
    markerIcon = L.icon({
        iconUrl: '../images/user.png',
        //shadowUrl: '../images/red-marker-black-border-hi_shadow.png',

        //iconSize: [62, 99], // size of the icon
        shadowSize: [372, 596], // size of the shadow
        iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
        shadowAnchor: [20, 90],  // the same for the shadow
        popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
    });
    marker = L.marker([latitude, longitude], { icon: markerIcon }).addTo(map);
}
function changeMarker(latitude, longitude) {
    if (marker !== undefined && marker !== null)
    {
        marker.setLatLng([latitude, longitude]).update();
    }
}