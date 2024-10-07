document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link (for mobile view)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Carousel functionality
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-slide');
        const totalSlides = slides.length;

        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        const offset = -currentSlide * 100;
        document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
    }

    function changeSlide(direction) {
        showSlide(currentSlide + direction);
    }

    document.querySelector('.prev')?.addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next')?.addEventListener('click', () => changeSlide(1));

    showSlide(currentSlide);

    // Optional: Auto-slide every 5 seconds
    setInterval(() => changeSlide(1), 5000);

    // Bat breeds modal functionality
    const bats = [
        {
            name: "Big Brown Bat",
            img: "images/bigbrownbat.jpg",
            conservationStatus: "Least Concern",
            notable: "Can live over 20 years.",
            countries: "Canada, USA, Mexico"
        },
        // Add other bat entries here
    ];

    const galleryItems = document.querySelectorAll('.gallery-item img');
    const batModal = document.getElementById('batModal');
    const batTitle = document.getElementById('batTitle');
    const batDetails = document.getElementById('batDetails');

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const bat = bats[index];
            if (bat) {
                batTitle.innerText = bat.name;
                batDetails.innerHTML = `
                    <img src="${bat.img}" alt="${bat.name}" style="width:100%">
                    <p><strong>Conservation Status:</strong> ${bat.conservationStatus}</p>
                    <p><strong>Notable Features:</strong> ${bat.notable}</p>
                    <p><strong>Countries Found In:</strong> ${bat.countries}</p>
                `;
                batModal.style.display = 'block';
            }
        });
    });

    document.querySelector('.close-modal')?.addEventListener('click', () => {
        if (batModal) batModal.style.display = 'none';
    });

    // Close modal when clicking outside of content
    window.addEventListener('click', (event) => {
        if (event.target == batModal) {
            batModal.style.display = 'none';
        }
    });

    // Shop cart modal functionality
    const shopItems = document.querySelectorAll('.shop-item');
    const cartModal = document.getElementById('cartModal');
    const itemTitle = document.getElementById('itemTitle');
    const itemPrice = document.getElementById('itemPrice');
    const itemImage = document.getElementById('itemImage');

    shopItems.forEach((item) => {
        item.addEventListener('click', () => {
            const itemName = item.querySelector('p').innerText.split('\n')[0];
            const itemCost = item.querySelector('p').innerText.split('$')[1];
            const imgSrc = item.querySelector('img').src;

            itemTitle.innerText = itemName;
            itemPrice.innerText = `Price: $${itemCost}`;
            itemImage.src = imgSrc;
            cartModal.style.display = 'block';
        });
    });

    document.querySelector('.close-cart-modal')?.addEventListener('click', () => {
        if (cartModal) cartModal.style.display = 'none';
    });

    // Close cart modal when clicking outside of content
    window.addEventListener('click', (event) => {
        if (event.target == cartModal) {
            cartModal.style.display = 'none';
        }
    });
});

// Function to handle adding items to the cart
function addToCart() {
    const quantity = document.getElementById('quantity').value;
    alert(`Added ${quantity} item(s) to your cart!`);
    document.getElementById('cartModal').style.display = 'none';
}
