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
    card.className = "magicCard";

    card.setAttribute("id", i);
    board.appendChild(card);
  }
}

// createBoard();
let cardClicks = [];
let cardClickedID = [];
let cardsMatched = [];
let scoreResults = [];

console.log(cardArray);
function checkForMatch() {
  const cards = document.querySelectorAll("#board img");
  if (cardClicks[0] == cardClicks[1]) {
    console.log("cardClicks match");

    cards[cardClickedID[0]].setAttribute("src", "images/white.png");
    cards[cardClickedID[1]].setAttribute("src", "images/white.png");

    cards[cardClickedID[0]].removeEventListener("click", flipCard);
    cards[cardClickedID[1]].removeEventListener("click", flipCard);
    cardsMatched.push(cardClicks);
  } else {
    console.log("cardClicks not match");
    cards[cardClickedID[0]].setAttribute("src", "images/blank.png");
    cards[cardClickedID[1]].setAttribute("src", "images/blank.png");
  }
  cardClicks = [];
  cardClickedID = [];

  if (cardsMatched.length === cardArray.length / 2) {
    result.textContent =
      "Congratulations you win the game." + " Your score = " + scoreValue();

    function scoreValue() {
      if (scoreResults.length <= 20) {
        return 100;
      } else if (20 < scoreResults.length <= 30) {
        return 100 - (scoreResults.length - 20) * 10;
      } else {
        return 0;
      }
    }
  }
}

function flipCard() {
  console.log("flip card");

  let cardID = this.getAttribute("id");

  cardClicks.push(cardArray[cardID].name);
  //   console.log(cardClicks);

  cardClickedID.push(cardID);
  //   console.log(cardClickedID);

  this.setAttribute("src", cardArray[cardID].img);
  scoreResults.push(cardClicks); // Calculate the score
  console.log(scoreResults.length);

  if (cardClicks.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

const reset_button = document.getElementById("resetButton");
reset_button.addEventListener("click", resetFunction());

function resetFunction() {
  document.getElementById("board").innerHTML = "";
  document.getElementById("result").innerHTML = "";

  cardClicks = [];
  cardClickedID = [];
  cardsMatched = [];
  scoreResults = [];

  shufflearray(cardArray);

  createBoard();
}
