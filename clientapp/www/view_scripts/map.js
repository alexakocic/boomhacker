var initializeMap = function (width, height) {
    $('#map_id').css('height', height);
    $('#map_id').css('width', width);
   console.log("Map view");
   var map = L.map('map_id').setView([43.324772, 21.895539], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        accessToken: 'pk.eyJ1Ijoic3VpY2lkZXNxdWFkcyIsImEiOiJjaXVyZGI4bTkwMDBrMnptc3NnMnh3cTYzIn0.bmO4d75NNaL0DHGX5xcZ6Q',
        id: 'mapbox.satellite',
        maxZoom: 18
    }).addTo(map);
}