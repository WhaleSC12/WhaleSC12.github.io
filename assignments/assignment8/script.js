document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("imageContainer");
    const imageDescription = document.getElementById("imageDescription");

    // Associative array for images and their descriptions
    const images = [
        {
            src: "birthday.jpg",
            title: "Birthday",
            description: "The character is celebrating with a party hat."
        },
        {
            src: "clown.jpg",
            title: "Clown",
            description: "The character is dressed as a clown."
        },
        {
            src: "rain.jpg",
            title: "Rain",
            description: "I think it's time to bring your umbrella."
        },
        {
            src: "read.jpg",
            title: "Read",
            description: "The character is holding a clipboard."
        },
        {
            src: "shovel.jpg",
            title: "Shovel",
            description: "The character is ready for some gardening."
        },
        {
            src: "work.jpg",
            title: "Work",
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
