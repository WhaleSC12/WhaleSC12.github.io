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
    const totalSlides = slides.length;

    // Loop around when index exceeds bounds
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Calculate offset for translation
    const offset = -currentSlide * 100;
    document.getElementById('carouselContainer').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);

    // Optional: Auto-slide every 5 seconds
    setInterval(() => changeSlide(1), 5000);
});
