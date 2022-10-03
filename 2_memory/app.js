// array of cards for game - 2 of each for matching
const cardArray = [
  {
    name: "fries",
    img: "assets/img/fries.png",
  },
  {
    name: "hamburger",
    img: "assets/img/hamburger.png",
  },
  {
    name: "hotdog",
    img: "assets/img/hot-dog.png",
  },
  {
    name: "ice-cream",
    img: "assets/img/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "assets/img/milkshake.png",
  },
  {
    name: "pizza",
    img: "assets/img/pizza.png",
  },
  {
    name: "fries",
    img: "assets/img/fries.png",
  },
  {
    name: "hamburger",
    img: "assets/img/hamburger.png",
  },
  {
    name: "hotdog",
    img: "assets/img/hot-dog.png",
  },
  {
    name: "ice-cream",
    img: "assets/img/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "assets/img/milkshake.png",
  },
  {
    name: "pizza",
    img: "assets/img/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const cardsChosen = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "assets/img/question-mark.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard); // no () as it is a callback - if () were included it would fire each time
    gridDisplay.appendChild(card);
  }
}

// initialise gameboard
createBoard();

// flipping card
function flipCard() {
  
    const cardId = this.getAttribute("data-id");

  
cardsChosen.push(cardArray[cardId])
console.log(cardsChosen)


}
