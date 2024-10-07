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
});

    // Bat breeds modal functionality
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

    const batModal = document.getElementById('batModal');
    const batTitle = document.getElementById('batTitle');
    const batDetails = document.getElementById('batDetails');
    const galleryItems = document.querySelectorAll('.gallery-item img');

    // Attach click event to each bat image
    if (galleryItems.length > 0) {
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
                } else {
                    console.error(`No bat data found for index: ${index}`);
                }
            });
        });
    }

    // Close the bat modal when clicking outside of the content or the close button
    window.addEventListener('click', (event) => {
        if (event.target === batModal) {
            batModal.style.display = 'none';
        }
    });

    // Shop cart modal functionality
    const shopItems = document.querySelectorAll('.shop-item');
    const cartModal = document.getElementById('cartModal');
    const itemTitle = document.getElementById('itemTitle');
    const itemPrice = document.getElementById('itemPrice');
    const itemImage = document.getElementById('itemImage');

    // Attach click event to each shop item image
    if (shopItems.length > 0) {
        shopItems.forEach((item) => {
            item.addEventListener('click', () => {
                const itemName = item.querySelector('p').innerText.split('\n')[0];
                const itemCost = item.querySelector('p').innerText.split('$')[1];
                const imgSrc = item.querySelector('img').src;

                if (itemName && itemCost && imgSrc) {
                    itemTitle.innerText = itemName;
                    itemPrice.innerText = `Price: $${itemCost}`;
                    itemImage.src = imgSrc;
                    cartModal.style.display = 'block';
                } else {
                    console.error('Failed to extract shop item data.');
                }
            });
        });
    }

    // Close the cart modal when clicking outside of the content or the close button
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
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

