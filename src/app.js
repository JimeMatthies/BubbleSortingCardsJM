/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  console.log("JM was Here!");
};

document.getElementById("draw-btn").addEventListener("click", getCards);

function getCards() {
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

  let newDeck = [];
  let cardSection = document.querySelector("#cardsfrominput");

  for (let i = 0; i < inputnumber.value; i++) {
    let randomsuit = suits[Math.floor(Math.random() * 4)];
    let randomrank = ranks[Math.floor(Math.random() * 13)];

    //let color = randomsuit === "♥" || randomsuit === "♦" ? "red" : "black";

    let objCard = {};
    objCard.suit = randomsuit;
    objCard.rank = randomrank;
    console.log(objCard);
    newDeck.push(objCard);

    let suitsObtained = newDeck.map(item => item.suit);
    console.log(suitsObtained);
    let ranksObtained = newDeck.map(item => item.rank);
    console.log(ranksObtained);

    let divCard = document.createElement("div");
    let divRank = document.createElement("div");
    let divSuitTop = document.createElement("div");
    let divSuitBot = document.createElement("div");

    divCard.classList.add("card");

    divRank.innerHTML = ranksObtained;
    divSuitTop.innerHTML = suitsObtained;
    divSuitBot.innerHTML = suitsObtained;

    cardSection.append(divCard);
    divCard.append(divSuitTop, divRank, divSuitBot);
    newDeck = [];
    console.log(newDeck);
  }
}
