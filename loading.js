const loadingText = `Accessing system...\nVerifying credentials...\nAccess granted.\nLoading target application...`;
const loadingElement = document.getElementById('loading-text');
let index = 0;

function typeEffect() {
    if (index < loadingText.length) {
        loadingElement.innerHTML += loadingText.charAt(index);
        index++;
        setTimeout(typeEffect, 50); // Adjust typing speed here
    } else {
        setTimeout(() => {
            window.location.href = 'index.html'; // Redirect to main page after typing effect
        }, 1000); // Adjust delay before redirecting
    }
}

window.onload = typeEffect;
