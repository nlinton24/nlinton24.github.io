var mymap = L.map('mapid').setView([40.52, -111.86], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibmxpbnRvbjI0IiwiYSI6ImNrNnUwcnRidTA1Mzkza3FwaDM1aTRocm8ifQ.mqo3juol2aCkmaremutQDQ'
}).addTo(mymap);

var County = L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-bd70a1dc8595428db3ae8eacd0ed4f76/wms?', {
    layers: 'Utah_County_Boundaries',
    format: 'image/png',
    transparent: true,
}).addTo(mymap);
