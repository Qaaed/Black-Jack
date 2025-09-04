let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

let player = {
  name: "Player",
  chips: 0,
};

playerEl.textContent = `${player.name}: $ ${player.chips}`;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  hasBlackJack = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards.join(" ");
  sumEl.textContent = "Sum: " + sum;

  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
    //each time a player gets blackjack chips increase by 10
    player.chips += 10;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
    //each time a player doesn't get blackjack chips decrease by 10
    player.chips -= 10;
  }

  messageEl.textContent = message;
  playerEl.textContent = `${player.name}: $${player.chips}`;
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function resetDeck() {
  cards = [];
  sum = 0;
  isAlive = false;
  hasBlackJack = false;
  message = "";

  cardsEl.textContent = "Cards: ";
  sumEl.textContent = "Sum: ";
  messageEl.textContent = "Game resetted";
}
