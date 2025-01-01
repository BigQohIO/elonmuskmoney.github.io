let money = 429000000000;

const items = [
    { name: "Cup of Coffee", cost: 5 },
    { name: "Movie Ticket", cost: 15 },
    { name: "Fancy Dinner", cost: 100 },
    { name: "Smartphone", cost: 800 },
    { name: "Luxury Watch", cost: 5_000 },
    { name: "Luxury Handbag", cost: 15_000 },
    { name: "Sports Car", cost: 250_000 },
    { name: "Mansion", cost: 3_000_000 },
    { name: "Private Jet", cost: 10_000_000 },
    { name: "Luxury Yacht", cost: 50_000_000 },
    { name: "Space Trip", cost: 200_000_000 },
    { name: "Theme Park", cost: 1_000_000_000 },
    { name: "Private Island", cost: 10_000_000_000 },
    { name: "Space Colony", cost: 50_000_000_000 },
    { name: "Global Internet Network", cost: 100_000_000_000 },
    { name: "Underground City", cost: 150_000_000_000 },
    { name: "Mars Colony", cost: 200_000_000_000 },
    { name: "Global Renewable Energy Grid", cost: 250_000_000_000 },
    { name: "Artificial Intelligence Superintelligence", cost: 300_000_000_000 },
    { name: "Time Machine", cost: 300_000_000_000 },
    { name: "Personal Spacecraft", cost: 150_000_000_000 },
    { name: "Genetic Modification Institute", cost: 75_000_000_000 },
    { name: "Virtual Reality World", cost: 50_000_000_000 },
    { name: "Self-Sustaining City", cost: 200_000_000_000 },
    { name: "Universal Translator Device", cost: 1_000_000_000 },
    { name: "Quantum Computer", cost: 30_000_000_000 },
    { name: "Flying Car", cost: 100_000_000 },
    { name: "Superintelligent Robot", cost: 25_000_000_000 },
    { name: "Interstellar Travel Ticket", cost: 500_000_000 },
    { name: "Teleportation Device", cost: 500_000_000 },
    { name: "Personal Health Clone", cost: 200_000_000 },
    { name: "Customizable Virtual Assistant", cost: 15_000_000 },
    { name: "Luxury Space Hotel Stay", cost: 1_000_000 },
    { name: "Time-Traveling Adventure", cost: 10_000_000_000 },
    { name: "Neural Link Upgrade", cost: 5_000_000 },
    { name: "Holographic Entertainment System", cost: 2_500_000 },
    { name: "Advanced Robot Butler", cost: 1_000_000 },
    { name: "Global Peace Initiative", cost: 300_000_000_000 },
];

function displayItems() {
    const itemsDiv = document.getElementById("items");
    items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.innerHTML = `${item.name} - $${item.cost.toLocaleString()}`;
        itemDiv.onclick = () => buyItem(item);
        itemsDiv.appendChild(itemDiv);
    });
}

// Update the initial money display with commas
document.getElementById("amount").innerText = money.toLocaleString();

function buyItem(item) {
    if (money >= item.cost) {
        money -= item.cost;
        document.getElementById("amount").innerText = money.toLocaleString(); // Update with commas
        alert(`You bought a ${item.name}!`);
    } else {
        alert("Not enough money!");
    }
}

// Parallax effect
document.addEventListener('mousemove', (e) => {
    const parallax = document.getElementById('parallax');
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
    parallax.style.backgroundPosition = `${x}% ${y}%`;
});

displayItems();




