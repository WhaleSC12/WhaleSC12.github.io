async function fetchIceCreams() {
    const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
    const data = await response.json();
    const iceCreamContainer = document.getElementById('iceCreamContainer');

    data.forEach(iceCream => {
        // Filter out '-2' images
        if (!iceCream.image.includes('-2')) {
            const iceCreamCard = document.createElement('div');
            iceCreamCard.classList.add('ice-cream-card');

            const img = document.createElement('img');
            img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;

            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            overlay.innerText = iceCream.description; // Assuming 'description' exists in JSON data

            iceCreamCard.appendChild(img);
            iceCreamCard.appendChild(overlay);
            iceCreamContainer.appendChild(iceCreamCard);
        }
    });
}

fetchIceCreams();
