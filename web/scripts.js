document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    if (mode === 'encode') {
        // Redirected to encode mode
        // You can customize this to show specific content or perform actions for encoding
        console.log('Redirected to encode mode');
    } else if (mode === 'decode') {
        // Redirected to decode mode
        // You can customize this to show specific content or perform actions for decoding
        console.log('Redirected to decode mode');
    } else {
        // Default mode or invalid mode
        console.log('Invalid mode or no mode specified');
    }
});
