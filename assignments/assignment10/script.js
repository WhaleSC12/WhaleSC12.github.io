async function fetchIceCreamData() {
    const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
    const data = await response.json();
    displayIceCreams(data);
}

function displayIceCreams(iceCreams) {
    const container = document.querySelector('.ice-cream-container');
    iceCreams.forEach(iceCream => {
        const imgElement = document.createElement('img');
        imgElement.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;
        imgElement.alt = iceCream.name;
        imgElement.classList.add('ice-cream');
        container.appendChild(imgElement);
    });
}

fetchIceCreamData();
