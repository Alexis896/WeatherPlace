console.log("index.js is loaded");

// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);
console.log("Map initialized");

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
console.log("Tile layer added");

// Add a marker
var marker = L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
console.log("Marker added");