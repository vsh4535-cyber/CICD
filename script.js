function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getRandomColor };
}

document.addEventListener('DOMContentLoaded', init);

    function applyColor(color) {
        colorDisplay.style.backgroundColor = color;
        colorName.textContent = color;
        document.body.style.backgroundColor = color;
    }

    function changeColor() {
        const newColor = getRandomColor();
        applyColor(newColor);
    }

    // Event listener
    changeColorBtn.addEventListener('click', changeColor);

    // Set initial color
    changeColor();
}
