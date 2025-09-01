//Creating  first card and second card variables
let firstCard = 4;
let secondCard = 17;
let sum = firstCard + secondCard;
let isAlive = true;
let hasBlackJack = false;
let message = "";

if (sum <= 20) {
  message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack! 🥳";
  hasBlackJack = true;
} else {
  message = "You're out of the game! 😭";
  isAlive = false;
}

//cash out
console.log(hasBlackJack);
