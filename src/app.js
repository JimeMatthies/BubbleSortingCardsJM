/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  console.log("JM was Here!");
};

let newDeck = [];
const suits = ["♣", "♦", "♥", "♠"];
const ranks = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let cardSection = document.querySelector("#cardsfrominput");

document.getElementById("draw-btn").addEventListener("click", getCards);
//document.getElementById("sort-btn").addEventListener("click", bubbleSortCards);

function getCards() {
  newDeck = [];
  cardSection.innerHTML = "";

  for (let i = 0; i < inputnumber.value; i++) {
    let randomsuit = suits[Math.floor(Math.random() * suits.length)];
    let randomrank = ranks[Math.floor(Math.random() * ranks.length)];

    let objCard = {};
    objCard.suit = randomsuit;
    objCard.rank = randomrank;
    console.log(objCard);
    newDeck.push(objCard);

    let divCard = document.createElement("div");
    let divRank = document.createElement("div");
    let divSuitTop = document.createElement("div");
    let divSuitBot = document.createElement("div");

    divCard.classList.add("card");
    divRank.classList.add("rank");
    divSuitTop.classList.add("suit-top");
    divSuitBot.classList.add("suit-bot");

    divRank.style.color =
      randomsuit === "♦" || randomsuit === "♥" ? "red" : "black";
    divSuitTop.style.color =
      randomsuit === "♦" || randomsuit === "♥" ? "red" : "black";
    divSuitBot.style.color =
      randomsuit === "♦" || randomsuit === "♥" ? "red" : "black";

    divRank.innerHTML = objCard.rank;
    divSuitTop.innerHTML = objCard.suit;
    divSuitBot.innerHTML = objCard.suit;

    cardSection.append(divCard);
    divCard.append(divSuitTop, divRank, divSuitBot);
  }
  console.log(newDeck);
}
