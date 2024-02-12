// JavaScript for toggling menu
function toggleMenu() {
    var menuItems = document.getElementById('menuItems');
    menuItems.style.display = (menuItems.style.display === 'block') ? 'none' : 'block';
    var arrow = document.getElementById('toggleMenu');
    arrow.innerHTML = (menuItems.style.display === 'block') ? '&#9650;' : '&#9660;';
  }
  
  // JavaScript for toggling exercises
  function toggleExercise(exercise) {
    var enterCommand = document.getElementById('enterCommand');
    var yogaSlide = document.getElementById('yogaSlide');
    if (exercise === 1) {
      enterCommand.style.display = 'block';
      yogaSlide.style.display = 'none';
    } else if (exercise === 2) {
      enterCommand.style.display = 'none';
      yogaSlide.style.display = 'block';
    }
  }
  
  // JavaScript for Exercise 1
  function changePicture() {
    var input = document.getElementById('commandInput').value.toLowerCase();
    var image = document.getElementById('yogaImage');
    switch(input) {
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
  }
  
  
  // JavaScript for Exercise 2
  function changeYogaImage() {
    var slider = document.getElementById('yogaSlider');
    var image = document.getElementById('yogaImage');
    var imageNumber = parseInt(slider.value);
    image.src = 'yoga' + imageNumber + '.jpg';
  }
  