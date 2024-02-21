// Get the button element
const button = document.getElementById('myButton');

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Change the button text when clicked
    if (button.textContent === 'Click me') {
        button.textContent = 'Clicked!';
    } else {
        button.textContent = 'Click me';
    }
});
