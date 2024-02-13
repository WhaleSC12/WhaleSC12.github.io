function changePicture() {
    var input = document.getElementById('commandInput').value.trim().toLowerCase();
    var image = document.getElementById('yogaImage');

    if (input !== '') {
        switch(input[input.length - 1]) {
            case 'b':
                image.src = 'read.jpg';
                break;
            case 'c':
                image.src = 'clown.jpg';
                break;
            case 'p':
                image.src = 'birthday.jpg';
                break;
            case 'r':
                image.src = 'rain.jpg';
                break;
            case 's':
                image.src = 'shovel.jpg';
                break;
            case 'w':
                image.src = 'work.jpg';
                break;
            default:
                // Handle default case, e.g., show a default image
                break;
        }
        image.style.display = 'block';
    }
}

function changeYogaImage() {
    var slider = document.getElementById('yogaSlider');
    var image = document.getElementById('yogaImage');
    var imageNumber = parseInt(slider.value);
    image.src = 'yoga' + imageNumber + '.jpg';
}

function showExercise1() {
    document.getElementById('exercise1').style.display = 'flex';
    document.getElementById('exercise2').style.display = 'none';
}

function showExercise2() {
    document.getElementById('exercise1').style.display = 'none';
    document.getElementById('exercise2').style.display = 'flex';
}
