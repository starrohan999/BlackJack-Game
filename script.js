let num1 = Math.floor(Math.random()*10)+2;
let num2 = Math.floor(Math.random()*10)+2;
let cards = [num1, num2];
let sum = num1 + num2;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");



function startGame() {
    let snd=new Audio("flipcard.mp3");
    snd.play();
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        let snd=new Audio("win.mp3");
        snd.play();
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        let snd=new Audio("loose.mp3");
        snd.play();
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function drawNewCard() {
    let snd=new Audio("newcard.mp3");
    snd.play();
    let card =  Math.floor(Math.random()*10)+2;
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}

