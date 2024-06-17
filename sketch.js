let worldMapImg;
let timeElement;
let locationElement;

function preload() {
    // Load a world map image
    worldMapImg = loadImage('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg');
}

function setup() {
    createCanvas(800, 400);
    image(worldMapImg, 0, 0, width, height);

    // Get references to the time and location elements
    timeElement = select('#time');
    locationElement = select('#location');

    // Update time and location
    updateTimeAndLocation();

    // Update time every second
    setInterval(updateTimeAndLocation, 1000);
}

function updateTimeAndLocation() {
    // Get current time
    let now = new Date();
    timeElement.html(now.toLocaleTimeString());

    // Get current location (using a placeholder for now)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        locationElement.html("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    locationElement.html(`Latitude: ${lat.toFixed(2)}, Longitude: ${lon.toFixed(2)}`);
}
