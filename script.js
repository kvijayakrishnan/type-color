


function changeColor(color) {
    // Get the circle element and change its background color
    const circle = document.getElementById('circle');
    circle.style.backgroundColor = color;
}

function resetColor() {
    // Reset the circle's background color to transparent
    const circle = document.getElementById('circle');
    circle.style.backgroundColor = 'transparent';
}

function applyColorFromInput() {
    // Get the input value and apply it as the circle's color
    const colorInput = document.getElementById('colorInput');
    const circle = document.getElementById('circle');
    const color = colorInput.value.trim(); // Trim spaces
    circle.style.backgroundColor = color;
}

