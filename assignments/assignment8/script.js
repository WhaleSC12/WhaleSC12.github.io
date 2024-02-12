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
  function changePicture(event) {
    var input = event.target.value.toLowerCase();
    var image = document.getElementById('yogaImage');
    if (input === 'a') {
      image.src = 'yoga1.jpg';
    } else if (input === 'b') {
      image.src = 'yoga2.jpg';
    } else if (input === 'c') {
      image.src = 'yoga3.jpg';
    } else if (input === 'd') {
      image.src = 'yoga4.jpg';  
    } else if (input === 'e') {
      image.src = 'yoga5.jpg';  
    } else if (input === 'f') {
      image.src = 'yoga6.jpg'  
    } else if (input === 'g') {
      image.src = 'yoga7.jpg';  
    } else if (input === 'h') {
      image.src = 'yoga8.jpg';
    }
  }
  
  // JavaScript for Exercise 2
  function changeYogaImage() {
    var slider = document.getElementById('yogaSlider');
    var image = document.getElementById('yogaImage');
    var imageNumber = parseInt(slider.value);
    image.src = 'yoga' + imageNumber + '.jpg';
  }
  