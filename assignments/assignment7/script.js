document.addEventListener("DOMContentLoaded", function() {
    const drawButton = document.getElementById("drawButton");
    const starsInput = document.getElementById("stars");
    const canvas = document.getElementById("canvas");
    const error = document.getElementById("error");
    const starMessage = document.getElementById("starMessage");

    drawButton.addEventListener("click", function() {
        const starCount = parseInt(starsInput.value);
        error.textContent = "";
        starMessage.textContent = "";

        // Validate input
        if (isNaN(starCount) || starCount <= 0) {
            error.textContent = "* Invalid Input";
            return;
        }

        // Clear previous stars
        canvas.innerHTML = "";

        // Draw stars
        for (let i = 1; i <= starCount; i++) {
            const star = document.createElement("span");
            star.textContent = "★";
            star.classList.add("star");

            // Random position within the canvas
            const x = Math.random() * (canvas.clientWidth - 20);
            const y = Math.random() * (canvas.clientHeight - 20);
            star.style.left = `${x}px`;
            star.style.top = `${y}px`;

            star.dataset.starNumber = i;
            star.addEventListener("click", function() {
                starMessage.textContent = `You clicked on star number ${this.dataset.starNumber}`;
            });

            canvas.appendChild(star);
        }
    });
});
