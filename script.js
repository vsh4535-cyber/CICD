document.addEventListener('DOMContentLoaded', function() {
    const colorDisplay = document.getElementById('color-display');
    const colorName = document.getElementById('color-name');
    const changeColorBtn = document.getElementById('change-color-btn');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function changeColor() {
        const newColor = getRandomColor();
        colorDisplay.style.backgroundColor = newColor;
        colorName.textContent = newColor;
        document.body.style.backgroundColor = newColor;
    }

    changeColorBtn.addEventListener('click', changeColor);

    // Initial color change
    changeColor();
});