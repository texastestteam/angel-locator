let worldMapImg;
let timeElement;
let locationElement;
let randomButton;

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

    // Get reference to the random button
    randomButton = select('#randomButton');

    // Update time and location
    updateTimeAndLocation();

    // Update time every second
    setInterval(updateTimeAndLocation, 1000);

    // Add event listener to the random button
    randomButton.mousePressed(drawRandomTarget);
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

function drawRandomTarget() {
    // Clear the previous target
    clear();
    image(worldMapImg, 0, 0, width, height);

    // Generate random coordinates within the canvas
    let randomX = random(width);
    let randomY = random(height);

    // Draw a red transparent circle at the random coordinates
    fill(255, 0, 0, 127);
    noStroke();
    ellipse(randomX, randomY, 50, 50); // Adjust the size as needed
}
