/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  console.log("JM was Here!");
};

const generateDeck = () => {
  let deck = [];
  let suits = "♦♥♠♣";
  let number = "A123456789JQK";

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < number.length; j++) {
      let card = "";
      card += suits[i] + number[j];
      deck.push(card);
    }
  }
  return deck;
};

const getCard = () => {
  let cardList = generateDeck();
  let random = Math.round(Math.random() * 52);

  return cardList[random];
};

console.log(generateDeck());
console.log(getCard());

document.getElementById("draw-btn").addEventListener("click", addCard);

function addCard() {
  let cardvalue = usernumber.value;
  document.querySelector("#cardfrominput").remove();

  for (let i = 0; i < cardvalue; i++) {
    let newCard = document.createElement("div");
    console.log(newCard);
    newCard.classList.add("card");
    let newCardNumber = document.createTextNode(getCard());
    console.log(newCardNumber);
    newCard.appendChild(newCardNumber);
    document.querySelector("#cardfrominput").appendChild(newCard);
  }
}

/* function addCard() {
  let cardvalue = usernumber.value;
  console.log(cardvalue);
  for (let i = 0; i < cardvalue; i++) {
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    let newCardNumber = document.createTextNode(getCard());
    console.log(newCardNumber);
    newCard.appendChild(newCardNumber);
    console.log(newCard.appendChild(newCardNumber));
    document.querySelector("#cardfrominput").appendChild(newCard);
    console.log(cardvalue);
  }
} */

/* function addCard() {
  let cardvalue = usernumber.value;
  console.log(cardvalue);
  for (let i = 0; i < cardvalue; i++) {
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    let newCardNumber = document.createTextNode(getCard());
    newCard.appendChild(newCardNumber);
    document.querySelector("#cardfrominput").appendChild(newCard);
    console.log(cardvalue);
  }
} */

/* function addCard() {
  let cardvalue = usernumber.value;
  for (let i = 0; i < cardvalue; i++) {
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    let newCardNumber = document.createTextNode(getCard());
    newCard.appendChild(newCardNumber);
    document.querySelector("#cardfrominput").appendChild(newCard);
  }
} */

/* function addCard() {
  for (let i = 0; i < usernumber.value; i++) {
    if (usernumber !== "") {
      let cardvalue = usernumber.value;
      let newCard = document.createElement("div");
      newCard.classList.add("card");
      let newCardNumber = document.createTextNode(getCard());
      newCard.appendChild(newCardNumber);
      document.querySelector("#cardfrominput").appendChild(newCard);
    } else {
    }
  }
} */
