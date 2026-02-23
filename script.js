document.addEventListener('DOMContentLoaded', init);

function init() {
    const colorDisplay = document.getElementById('color-display');
    const colorName = document.getElementById('color-name');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Guard clause: ensure elements exist
    if (!colorDisplay || !colorName || !changeColorBtn) {
        console.error('Required DOM elements not found');
        return;
    }

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
