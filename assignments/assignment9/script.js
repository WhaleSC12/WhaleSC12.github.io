class Bird {
    constructor(name, scientificName, imageFile, habitat, diet, description) {
        this.name = name;
        this.scientificName = scientificName;
        this.imageFile = imageFile;
        this.habitat = habitat;
        this.diet = diet;
        this.description = description;
    }

    getSection() {
        return `
            <div class="bird-card" onclick="showBirdDetails('${this.name}')">
                <h3>${this.name}</h3>
                <img src="images/${this.imageFile}" alt="${this.name}" class="bird-image">
            </div>
        `;
    }

    getExpandedSection() {
        return `
            <img src="images/${this.imageFile}" alt="${this.name}" class="bird-image">
            <p><strong>Scientific Name:</strong> ${this.scientificName}</p>
            <p><strong>Habitat:</strong> ${this.habitat}</p>
            <p><strong>Diet:</strong> ${this.diet}</p>
            <p><strong>Description:</strong> ${this.description}</p>
        `;
    }
}

const birds = [
    new Bird("Hummingbird", "Trochilidae", "hummingbird.jpg", "Forests and Gardens", "Nectar", "Hummingbirds are small birds known for their ability to hover in mid-air."),
    new Bird("Blue Jay", "Cyanocitta cristata", "bluejay.jpg", "Forests and Urban Areas", "Nuts and Seeds", "Blue Jays are known for their vibrant blue color and loud calls."),
    new Bird("Cardinal", "Cardinalis cardinalis", "cardinal.jpg", "Woodlands", "Seeds and Fruits", "Cardinals are easily recognizable by their bright red feathers."),
    new Bird("Robin", "Erithacus rubecula", "robin.jpg", "Woodlands and Gardens", "Insects and Fruits", "Robins are often associated with spring and are known for their orange-red chest.")
];

function displayBirds() {
    const birdContainer = document.getElementById("bird-container");
    birds.forEach(bird => {
        birdContainer.innerHTML += bird.getSection();
    });
}

function showBirdDetails(name) {
    const bird = birds.find(b => b.name === name);
    if (bird) {
        document.getElementById("birdTitle").innerText = bird.name;
        document.getElementById("birdDetails").innerHTML = bird.getExpandedSection();
        document.getElementById("birdModal").style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", displayBirds);
