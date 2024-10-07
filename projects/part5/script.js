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


//bat breeds
document.addEventListener('DOMContentLoaded', () => {
    const bats = [
        {
            name: "Big Brown Bat",
            img: "images/bigbrownbat.jpg",
            conservationStatus: "Least Concern",
            notable: "Can live over 20 years.",
            countries: "Canada, USA, Mexico"
        },
        {
            name: "Canary Long-eared Bat",
            img: "images/canarylongearedbat.png",
            conservationStatus: "Endangered",
            notable: "Has long ears adapted for echolocation.",
            countries: "Canada, USA"
        },
        {
            name: "Eastern Red Bat",
            img: "images/easternredbat.jpg",
            conservationStatus: "Least Concern",
            notable: "Known for its reddish fur.",
            countries: "Eastern USA, parts of Canada"
        },
        {
            name: "Florida Bonneted Bat",
            img: "images/floridabonnetedbat.jpg",
            conservationStatus: "Critically Endangered",
            notable: "One of the rarest bats in North America.",
            countries: "Florida, USA"
        },
        {
            name: "Flying Fox Bat",
            img: "images/flyingfoxbat.jpg",
            conservationStatus: "Vulnerable",
            notable: "Largest species of bat.",
            countries: "Not native to North America"
        },
        {
            name: "Greater Bulldog Bat",
            img: "images/greaterbulldogbat.png",
            conservationStatus: "Least Concern",
            notable: "Feeds on fish using echolocation.",
            countries: "Southern USA"
        },
        {
            name: "Hoary Bat",
            img: "images/hoarybat.jpg",
            conservationStatus: "Least Concern",
            notable: "Migratory species, one of the most widespread in North America.",
            countries: "USA, Canada, Mexico"
        },
        {
            name: "Mexican Free-tailed Bat",
            img: "images/mexicanfreetailedbat.jpg",
            conservationStatus: "Least Concern",
            notable: "Known for its speed and agility in flight.",
            countries: "USA, Mexico"
        },
        {
            name: "Vampire Bat",
            img: "images/vampirebat.jpg",
            conservationStatus: "Least Concern",
            notable: "Feeds on blood, primarily livestock.",
            countries: "Southern USA, Mexico"
        },
        {
            name: "Yellow Bat",
            img: "images/yellowbat.jpg",
            conservationStatus: "Least Concern",
            notable: "Yellowish fur provides good camouflage.",
            countries: "Southern USA"
        }
    ];

    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const bat = bats[index];
            document.getElementById('batTitle').innerText = bat.name;
            document.getElementById('batDetails').innerHTML = `
                <img src="${bat.img}" alt="${bat.name}" style="width:100%">
                <p><strong>Conservation Status:</strong> ${bat.conservationStatus}</p>
                <p><strong>Notable Features:</strong> ${bat.notable}</p>
                <p><strong>Countries Found In:</strong> ${bat.countries}</p>
            `;
            document.getElementById('batModal').style.display = 'block';
        });
    });
});
