// Elements | Main Page
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const cards = document.querySelectorAll("card");

// Add data to each card.
card1.dataset.evolutions = "Bulbasaur, Ivysaur, Venusaur";
card2.dataset.evolutions = "Charmander, Charmeleon, Charizard";
card3.dataset.evolutions = "Squirtle, Wartortle, Blastoise";

card1.dataset.pokemon = "Bulbasaur";
card2.dataset.pokemon = "Charmander";
card3.dataset.pokemon = "Charmeleon";

cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Set the pokemon
    localStorage.setItem("pokemon", this.dataset.pokemon);
    localStorage.setItem("evolutions", this.dataset.evolutions);
  });
});
