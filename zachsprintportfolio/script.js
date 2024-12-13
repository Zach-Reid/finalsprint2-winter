function updateColor() {
    const colorPicker = document.getElementById('colorPicker'); 
    const secondaryPicker = document.getElementById('secondaryPicker');

    const colorDisplay = document.getElementById('colorDisplay');


    

    const savedColor = localStorage.getItem('chosenColor');
    if (savedColor) {
        colorPicker.value = savedColor;
        colorDisplay.style.backgroundColor = savedColor;
    }

    const frameColor = localStorage.getItem('chosenColor2');
    if (frameColor) {
        secondaryPicker.value = frameColor;
        colorDisplay.style.borderColor = frameColor;
    }

    // Event listener for the button
    document.getElementById('submitColor').addEventListener('click', () => {
        const chosenColor = colorPicker.value;
        const chosenColor2 = secondaryPicker.value;
        localStorage.setItem('chosenColor', chosenColor,);
        localStorage.setItem('chosenColor2', chosenColor2,);
        colorDisplay.style.backgroundColor = chosenColor;
        colorDisplay.style.borderColor = chosenColor2;
    });
}


// Run the function when the page loads
document.addEventListener('DOMContentLoaded', updateColor);


