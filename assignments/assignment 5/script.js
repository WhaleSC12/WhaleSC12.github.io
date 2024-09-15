let count = 0;

function incrementCount() {
    count += 1;
    document.getElementById("count").textContent = count;
}

function refreshPage() {
    location.reload();
}

function moveSquare() {
    const sliderValue = document.getElementById("slider").value;
    const square = document.getElementById("square");
    square.style.left = sliderValue + "%";
}
