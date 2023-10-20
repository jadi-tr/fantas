const image = document.getElementById('lancer');
const audio = document.getElementById('audiolancer');

// Add a click event listener to the image
image.addEventListener('click', () => {
    // Play the audio
    audio.play();
});