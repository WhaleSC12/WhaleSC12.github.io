function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

function toggleMenu() {
    document.getElementById("mobileNav").style.width = "250px";
}

function closeMenu() {
    document.getElementById("mobileNav").style.width = "0";
}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    // Optional: Auto-slide every 5 seconds
    setInterval(() => changeSlide(1), 5000);
});
