var mymap = L.map('mapid').setView([40.52, -111.86], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibmxpbnRvbjI0IiwiYSI6ImNrNnUwcnRidTA1Mzkza3FwaDM1aTRocm8ifQ.mqo3juol2aCkmaremutQDQ'
}).addTo(mymap);

var ParentsHouse = L.marker([40.509540, -111.855886]).addTo(mymap);
var Church = L.marker([40.508266, -111.853966]).addTo(mymap);
var HouseGrew = L.marker([40.519171, -111.865332]).addTo(mymap);
var School = L.marker([40.520873, -111.860422]).addTo(mymap);
var Library = L.marker([40.524501, -111.858084]).addTo(mymap);

ParentsHouse.bindPopup('<h1 id="heading">My Parents House</h1>'+
        "<p>This is the house my parents live in currently. I lived here for two years before I left on my mission.</p>"
        );
Church.bindPopup('<h1 id="heading">Church Meeting House</h1>'+
        "<p>This is the chapel that I most currently attended in Draper.</p>"
        );
HouseGrew.bindPopup('<h1 id="heading">The House I Grew Up In</h1>'+
        "<p>This is the house I grew up in. The house is historical site. It was built in 1896.</p>"
        );
School.bindPopup('<h1 id="heading">Draper Elementary</h1>'+
        "<p>This is the elementary school I attended.</p>"
        );
Library.bindPopup('<h1 id="heading">Draper Public Library</h1>'+
        "<p>This is Draper Cities public library.</p>"
        );

var hbound = L.polygon([
    [40.518897, -111.865054],
    [40.518946, -111.866620],
    [40.519541, -111.867038],
    [40.519459, -111.864989]
]).addTo(mymap);

var hradius = L.circle([40.519171, -111.865332], {
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 900,
}).addTo(mymap);