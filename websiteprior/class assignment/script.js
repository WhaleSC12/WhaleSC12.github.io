nyButton.onclick = () => {
    document.getElementyById("message").innerHTML = "Hello Everyone!";
    document.getElementyBId("stuff").classList.add("special");

};

// Get the DOM elements
const content = document.getElementById('content');
const column = document.getElementById('column');
const sayGoodbyeBtn = document.getElementById('sayGoodbyeBtn');
const hideColumnBtn = document.getElementById('hideColumnBtn');
const startAnimationBtn = document.getElementById('startAnimationBtn');
const stopAnimationBtn = document.getElementById('stopAnimationBtn');

sayGoodbyeBtn.addEventListener('click', function() {
  content.textContent = "Goodbye everyone";
  content.classList.remove('special'); 
});

hideColumnBtn.addEventListener('click', function() {
  column.style.display = 'none'; 
});

startAnimationBtn.addEventListener('click', function() {
  content.classList.add('animate');
});

stopAnimationBtn.addEventListener('click', function() {
  content.classList.remove('animate');
});
