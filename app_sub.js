// Elements | Sub Page
const cardClicked = document.querySelector("#cardClicked");
const evolutionOutput = document.querySelector("#evolutionOutput");

// Grab the information
const pokemon = localStorage.getItem("pokemon");
const evolutions = localStorage.getItem("evolutions");

console.log("Pokemon ", pokemon);
console.log("evolutions ", evolutions);

// Show the data on the page
cardClicked.textContent = pokemon;
evolutionOutput.textContent = evolutions;
