function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
}

document.addEventListener("DOMContentLoaded", function () {

    const colorDisplay = document.getElementById("color-display");
    const colorName = document.getElementById("color-name");
    const changeColorBtn = document.getElementById("change-color-btn");

    function applyColor(color) {
        colorDisplay.style.backgroundColor = color;
        colorName.textContent = color;
        document.body.style.backgroundColor = color;
    }

    function changeColor() {
        const newColor = getRandomColor();
        applyColor(newColor);
    }

    changeColorBtn.addEventListener("click", changeColor);

    // Initial color
    changeColor();
});