class Ape {
    constructor(name, description, habitat, diet, lifespan, endangered, image) {
        this.name = name;
        this.description = description;
        this.habitat = habitat;
        this.diet = diet;
        this.lifespan = lifespan;
        this.endangered = endangered;
        this.image = image;
    }
}

const apes = [
    new Ape("Gorilla", "The gorilla is the largest living primate.", "Rainforests of Africa", "Mainly vegetarian", "35-40 years", "Endangered", "https://via.placeholder.com/300"),
    new Ape("Chimpanzee", "Chimpanzees are our closest living relatives.", "Rainforests of Africa", "Mainly vegetarian", "40-50 years", "Endangered", "https://via.placeholder.com/300"),
    new Ape("Orangutan", "Orangutans are known for their distinctive red fur.", "Rainforests of Borneo and Sumatra", "Mainly vegetarian", "35-45 years", "Critically endangered", "https://via.placeholder.com/300"),
    new Ape("Bonobo", "Bonobos are also known as pygmy chimpanzees.", "Rainforests of Congo", "Mainly vegetarian", "40-50 years", "Endangered", "https://via.placeholder.com/300")
];

function openModal(ape) {
    const modal = document.getElementById('myModal');
    const modalContent = document.getElementById('modalContent');

    modalContent.innerHTML = `
        <div>
            <p><strong>Name:</strong> ${ape.name}</p>
            <p><strong>Description:</strong> ${ape.description}</p>
            <p><strong>Habitat:</strong> ${ape.habitat}</p>
            <p><strong>Diet:</strong> ${ape.diet}</p>
            <p><strong>Lifespan:</strong> ${ape.lifespan}</p>
            <p><strong>Endangered:</strong> ${ape.endangered}</p>
        </div>
        <div>
            <img src="${ape.image}" alt="${ape.name}">
        </div>
    `;

    modal.style.display = "block";
}

window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

