var express = require('express');
var router = express.Router();

var foursquare = (require('foursquarevenues'))('I1LBBPBDFUH3TNLAZEMQ0TG5RU3J3TRENGESX1052JJSUQ0S', 'JEK24NUPFF1IIWHXLN3BPWHRGFU0AHOUOPUGRP332ZGH5SKV');

function measure(lat1, lon1, lat2, lon2) {  // generally used geo measurement function
    var R = 6378.137; // Radius of earth in KM
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d * 1000; // meters
}
function getClosestLocation(location, other_locations) {
    var min = measure(location.lat, location.lng, other_locations[0].lat, other_locations[0].lng);
    //console.log(location);
    var imin = 0;
    for (var i = 1; i < other_locations.length; i++) {
        var dist = measure(location.lat, location.lng, other_locations[i].lat, other_locations[i].lng);
        if (dist < min) {
            min = dist;
            imin = i;
        }
    }
    return imin;
}
//foursquare test
/*foursquare.getCategories({}, function (error, venues) {
    venues.response.categories.forEach(function (object) {
        console.log(object.id + "   " + object.name);
    });
});*/
//
//getFoursquareVenues(43.324772, 21.895539, 1000);

function getFoursquareVenues(lat, lng, radius, socket) {
    if (radius > 100000)
        radius = 99999;
    var params = {
        "ll": lat + "," + lng,
        "radius": radius
    };
    console.log("Dule");
    var my_location = { lat: lat, lng: lng };
    foursquare.getVenues(params, function (error, venues) {
        if (!error) {
            var venue_list = new Array(); // array of Venues
            var tempLocArr = new Array();
            var sortedArr = new Array(); // array of soreted venues
            venues.response.venues.forEach(function (object) {
                var Venue = {};
                Venue.id = object.id;
                Venue.name = object.name;
                Venue.contact = object.contact;
                Venue.location = object.location;
                Venue.categories = object.categories;
                Venue.url = object.url;
                try {
                    Venue.hours = object.hours;
                } catch (e) {
                    Venue.hours = {};
                }
                try {
                    Venue.rating = object.rating;
                } catch (e) {
                    Venue.rating = {};
                }
                try {
                    Venue.description = object.description;
                } catch (e) {
                    Venue.description = {};
                }
                try {
                    Venue.tags = object.tags;
                } catch (e) {
                    Venue.tags = {};
                }
                try {
                    Venue.photos = object.photos;
                } catch (e) {
                    Venue.photos = {};
                }
                venue_list.push(Venue);
                var location = { lat: Venue.location.lat, lng: Venue.location.lng };
                tempLocArr.push(location);
            });
            console.log("<--------Presorted venues------->");
            /*venue_list.forEach(function (obj) {
                console.log(obj.name);
            });*/
            var numOfVenues = tempLocArr.length;
            //sorting venues
            for (var i = 0; i < numOfVenues; i++) {
                var indexOfCloesest = getClosestLocation(my_location, tempLocArr);
                //console.log("Iteracija " + i + ", index najblizi: " + indexOfCloesest);
                sortedArr.push(venue_list[indexOfCloesest]);
                //my_location changing
                my_location = tempLocArr[indexOfCloesest];
                //remove item from tempLocArr
                tempLocArr.splice(indexOfCloesest, 1);
                venue_list.splice(indexOfCloesest, 1);
            }
            //console.log("<--------Sorted venues------->");
            /*sortedArr.forEach(function (obj) {
                console.log(obj.name);
            });*/
            socket.emit('venues', sortedArr);

        }
        else {
            console.log(error);
        }
    });
}

module.exports.getFoursquareVenues = getFoursquareVenues;