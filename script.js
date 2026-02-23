const HEX_CHARACTERS = '0123456789ABCDEF';
const HEX_LENGTH = 6;

function getRandomColor() {
    let color = '#';
    for (let i = 0; i < HEX_LENGTH; i++) {
        const randomIndex = Math.floor(Math.random() * HEX_CHARACTERS.length);
        color += HEX_CHARACTERS[randomIndex];
    }
    return color;
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
