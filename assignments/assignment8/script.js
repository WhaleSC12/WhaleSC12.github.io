document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer");
    const imageDescription = document.getElementById("imageDescription");

    // Associative array for images and their descriptions
    const images = [
        {
            src: "image1.jpg",
            title: "Party Hat",
            description: "The character is celebrating with a party hat."
        },
        {
            src: "image2.jpg",
            title: "Koala Costume",
            description: "The character is dressed in a koala costume."
        },
        {
            src: "image3.jpg",
            title: "Umbrella",
            description: "I think it's time to bring your umbrella."
        },
        {
            src: "image4.jpg",
            title: "Clipboard",
            description: "The character is holding a clipboard."
        },
        {
            src: "image5.jpg",
            title: "Gardening",
            description: "The character is ready for some gardening."
        },
        {
            src: "image6.jpg",
            title: "Laptop",
            description: "The character is working on a laptop."
        }
    ];

    // Load all images when the page loads
    images.forEach((image, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.alt = image.title;
        imgElement.dataset.index = index;

        // Add event listener to display the title and description
        imgElement.addEventListener("click", function () {
            const { title, description } = images[this.dataset.index];
            imageDescription.innerHTML = `<strong>${title}</strong><br>${description}`;
        });

        imageContainer.appendChild(imgElement);
    });
});
