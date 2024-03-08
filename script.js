const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

function shufflearray(any_array) {
  return any_array.sort(() => 0.5 - Math.random());
}

shufflearray(cardArray);

const result = document.querySelector("#result");
const board = document.querySelector("#board");

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.addEventListener("click", flipCard);

    card.setAttribute("id", i);
    board.appendChild(card);
  }
}

createBoard();
let cardClicks = [];
function flipCard() {
  console.log("flip card");

  let cardID = this.getAttribute("id");
  cardClicks.push(cardArray[cardID].name);
  console.log(cardClicks);
  this.setAttribute("src", cardArray[cardID].img);
}
