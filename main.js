(function(){
    "use strict";
    document.addEventListener('DOMContentLoaded',function(){

        var map = L.map('mapa').setView([19.603185, -99.28113], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([19.603185, -99.28113]).addTo(map)
    .bindPopup('Consultorio Blanceate ')
    .openPopup();

    });
})();

