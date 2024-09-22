// Toggle between sections
document.getElementById('exercise1').addEventListener('click', function () {
    document.getElementById('colorSliderSection').classList.add('active');
    document.getElementById('pictureChooserSection').classList.remove('active');
});

document.getElementById('exercise2').addEventListener('click', function () {
    document.getElementById('pictureChooserSection').classList.add('active');
    document.getElementById('colorSliderSection').classList.remove('active');
});

// Color Slider functionality
document.getElementById('color-slider').addEventListener('input', function () {
    let redValue = this.value;
    document.body.style.backgroundColor = `rgb(${redValue}, 0, 0)`;

    let message;
    if (redValue < 85) {
        message = "Chill";
    } else if (redValue < 170) {
        message = "Warm";
    } else {
        message = "Hot!";
    }
    document.getElementById('colorMessage').textContent = message;
});

// Picture Chooser functionality
function showPicture(size) {
    let imgSrc = `https://picsum.photos/200/300?random=${Math.random()}`;

    if (size === 'small') {
        imgSrc = `https://picsum.photos/100/100?random=${Math.random()}`;
    } else if (size === 'medium') {
        imgSrc = `https://picsum.photos/200/200?random=${Math.random()}`;
    } else if (size === 'large') {
        imgSrc = `https://picsum.photos/300/300?random=${Math.random()}`;
    }

    document.getElementById('picture').src = imgSrc;
}
