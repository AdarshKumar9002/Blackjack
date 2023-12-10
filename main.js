let cards = []
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";


let messageEl = document.getElementById("start-msg");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el")
let player = {
    name: "Adarsh",
    chips: 150
}
playerEl.textContent = player.name + " : $" + player.chips;
function getRandomCard() {
    let randomDraw = Math.floor(Math.random() * 13) + 1
    if (randomDraw === 1) {
        return 11;
    }
    else if (randomDraw > 10) {
        return 1;
    }
    else {
        return randomDraw;
    }
}

function renderGame() {
    cardEl.textContent = "CardS: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw another card? ";
    }
    else if (sum === 21) {
        message = "Congrastulation! You have got Blackjacl";
        hasBlackjack = true;
    }
    else {
        message = "Better luck next time"
        isAlive = false;
    }
    messageEl.textContent = message;
}
function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [
        firstCard, secondCard
    ]
    sum = firstCard + secondCard;
    isAlive = true;
    hasBlackjack = false;
    renderGame();
}
function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        console.log("new card");
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}
