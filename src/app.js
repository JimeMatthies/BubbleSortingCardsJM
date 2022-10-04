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
let sortSection = document.querySelector("#firstsort");
let drawbtn = document.querySelector("#draw-btn");
let sortbtn = document.querySelector("#sort-btn");

drawbtn.addEventListener("click", getCards);
sortbtn.addEventListener("click", () => {
  //sortCards(newDeck);
  console.log(bubbleSort(newDeck, "value"));
});

function createCard(objCard, section, randomsuit, randomrank) {
  let divCard = document.createElement("div");
  let divRank = document.createElement("div");
  let divSuitTop = document.createElement("div");
  let divSuitBot = document.createElement("div");

  divRank.innerHTML = objCard.rank;
  divSuitTop.innerHTML = objCard.suit;
  divSuitBot.innerHTML = objCard.suit;
  divRank.innerHTML = objCard.value;

  divRank.style.color =
    randomsuit === "♦" || randomsuit === "♥" ? "red" : "black";
  divSuitTop.style.color =
    randomsuit === "♦" || randomsuit === "♥" ? "red" : "black";
  divSuitBot.style.color =
    randomsuit === "♦" || randomsuit === "♥" ? "red" : "black";

  divCard.classList.add("card");
  divRank.classList.add("rank");
  divSuitTop.classList.add("suit-top");
  divSuitBot.classList.add("suit-bot");

  section.append(divCard);
  divCard.append(divSuitTop, divRank, divSuitBot);
}

function getCards() {
  newDeck = [];
  cardSection.innerHTML = "";

  for (let i = 0; i < inputnumber.value; i++) {
    let randomsuit = suits[Math.floor(Math.random() * suits.length)];
    let randomrank = ranks[Math.floor(Math.random() * ranks.length)];

    let objCard = {};
    objCard.suit = randomsuit;
    objCard.rank = randomrank;
    objCard.value = objCard.rank;

    console.log(objCard);
    newDeck.push(objCard);

    createCard(objCard, cardSection, randomsuit, randomrank);
  }
  console.log(newDeck);
}

function bubbleSort(a, par) {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < a.length - 1; i++) {
      if (a[i][par] > a[i + 1][par]) {
        var temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

//console.log(bubbleSort(newDeck, "value"));

/* const bubbleSort = (arr = []) => {
  let wall = arr.length; // 10
  for (let i = 0; i < wall; i++) {
    for (let j = 0; j < wall - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}; */

/* function sortCards(array) {
  let sortDeck = [];
  sortSection.innerHTML = " ";
  array.map(({ value }) => {
    return sortDeck.push([value]);
  });

  bubbleSort(sortDeck);
  console.log(array);

  for (let i = 0; i < sortDeck.length; i++) {
    createCard(sortDeck[i], sortSection, array[i].suit, array[i].rank);
  }
  console.log(sortDeck);
} */
